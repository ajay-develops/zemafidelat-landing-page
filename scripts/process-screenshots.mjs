import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

/**
 * Device captures -> framed marketing screenshots.
 *
 * Sources live in screenshots-src/ and are raw `adb exec-out screencap`
 * captures from a phone running the app. They replaced a set of template
 * mockups that showed Spanish, Japanese and Latin-alphabet placeholder
 * content — the client spotted "different languages" on the site.
 *
 * To refresh after a UI change, re-capture at the same resolution and re-run:
 *
 *   adb shell am start -a android.intent.action.VIEW -d "zema:///home"
 *   adb exec-out screencap -p > screenshots-src/dashboard.png
 *   pnpm process-screenshots
 *
 * The deep link for each screen is in DEEP_LINKS below.
 */

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE_DIR = path.join(ROOT, "screenshots-src");
const OUTPUT_DIR = path.join(ROOT, "public", "screenshots");

/**
 * WebP, not PNG. These are photographic-ish phone captures inside a frame, and
 * PNG handles them badly — lessons.png alone was 1.79 MB against 92-278 KB for
 * the rest, more than half the page's ~3.3 MB of screenshots, on a page a
 * parent may open on mobile data. Quality 85 keeps UI text crisp; alpha is
 * preserved, which the transparent frame corners need.
 */
const WEBP_QUALITY = 85;

/**
 * The one screenshot that also has to exist as a PNG.
 *
 * The OG card (src/app/og/route.tsx) is rendered by Satori, which cannot
 * decode WebP — pointing it at the .webp did not degrade, it returned HTTP
 * 500 ("Unsupported image type: unknown") and every social share of the site
 * would have had no preview image at all. The page itself never loads this
 * file, so its size costs a visitor nothing.
 */
const OG_PNG_SOURCE = "dashboard.png";

/** Kept next to the file it produces so a re-shoot does not need archaeology. */
const DEEP_LINKS = {
  "dashboard.png": "zema:///home",
  "lessons.png": "zema:///lessons",
  "flashcards.png": "zema:///lessons/flashcards?level=1",
  "trace-letters.png": "zema:///lessons/trace?level=1",
  "word-games.png": "zema:///lessons/word-games?level=1",
  "crosswords.png": "zema:///lessons/crossword?level=1",
  "daily-fidel.png": "zema:///fidel-match",
  "daily-goals.png": "zema:///settings/daily-goal",
  "profiles.png": "zema:///profiles",
  "notifications.png": "zema:///notifications",
};

/**
 * Rows to drop off a capture.
 *
 * The status bar carries the tester's own clock, battery and notification
 * icons — nothing to do with the app, and it dates the image. Android's demo
 * mode neutralises the clock but not third-party notification icons, so it is
 * cropped instead. The gesture pill goes for the same reason.
 *
 * Measured on the 1080x2400 captures: status glyphs end at y=80.
 */
const CROP_TOP = 100;
const CROP_BOTTOM = 70;

/** Bezel as a fraction of screen width, and corner radius as a fraction of outer width. */
const BEZEL_RATIO = 0.024;
const RADIUS_RATIO = 0.085;
const BEZEL_COLOR = "#24262c";
/** Output height, matching what the previous mockups rendered at. */
const TARGET_HEIGHT = 1686;

function roundedRectMask(width, height, radius) {
  return Buffer.from(
    `<svg width="${width}" height="${height}">
       <rect x="0" y="0" width="${width}" height="${height}"
             rx="${radius}" ry="${radius}" fill="#fff"/>
     </svg>`
  );
}

async function processScreenshot(file) {
  const inputPath = path.join(SOURCE_DIR, file);
  const outputPath = path.join(OUTPUT_DIR, file.replace(/\.png$/, ".webp"));

  const { width, height } = await sharp(inputPath).metadata();
  const screenW = width;
  const screenH = height - CROP_TOP - CROP_BOTTOM;

  if (screenH <= 0) {
    throw new Error(`${file}: capture is too short to crop (${width}x${height})`);
  }

  const bezel = Math.round(screenW * BEZEL_RATIO);
  const outerW = screenW + bezel * 2;
  const outerH = screenH + bezel * 2;
  const outerR = Math.round(outerW * RADIUS_RATIO);
  // Concentric, so the bezel reads as an even band rather than pooling in the corners.
  const screenR = Math.max(0, outerR - bezel);

  const screen = await sharp(inputPath)
    .extract({ left: 0, top: CROP_TOP, width: screenW, height: screenH })
    .composite([
      { input: roundedRectMask(screenW, screenH, screenR), blend: "dest-in" },
    ])
    .png()
    .toBuffer();

  const framed = await sharp({
    create: {
      width: outerW,
      height: outerH,
      channels: 4,
      background: BEZEL_COLOR,
    },
  })
    .composite([
      { input: roundedRectMask(outerW, outerH, outerR), blend: "dest-in" },
      { input: screen, left: bezel, top: bezel },
    ])
    .png()
    .toBuffer();

  await sharp(framed)
    .resize({ height: TARGET_HEIGHT, fit: "contain", background: "#00000000" })
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toFile(outputPath);

  if (file === OG_PNG_SOURCE) {
    await sharp(framed)
      .resize({ height: TARGET_HEIGHT, fit: "contain", background: "#00000000" })
      .png({ compressionLevel: 9 })
      .toFile(path.join(OUTPUT_DIR, "dashboard-og.png"));
  }

  const meta = await sharp(outputPath).metadata();
  const kb = (fs.statSync(outputPath).size / 1024).toFixed(0);
  console.log(
    `${path.basename(outputPath).padEnd(22)} ${meta.width}x${meta.height}  ${kb.padStart(5)} KB   ${DEEP_LINKS[file] ?? ""}`,
  );
}

const files = fs
  .readdirSync(SOURCE_DIR)
  .filter((f) => f.endsWith(".png"))
  .sort();

if (files.length === 0) {
  throw new Error(`No captures found in ${SOURCE_DIR}`);
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

for (const file of files) {
  await processScreenshot(file);
}

console.log(`\nFramed ${files.length} screenshots into ${OUTPUT_DIR}`);
