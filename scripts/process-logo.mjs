import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

/**
 * logo.png -> the sizes the site actually displays.
 *
 * The source is 2356x1888 and every place that shows it draws it small: 32px
 * in the header, 52px on the hero plate, 96px in the call to action. The
 * browser was downloading 108 KB — the single heaviest file on the page, ahead
 * of every screenshot and both fonts — to paint a turtle the size of a
 * fingernail. Lighthouse counted all 108 KB as waste.
 *
 * The full-size PNG stays where it is. It is the source for these, and the OG
 * card (src/app/og/route.tsx) renders it through Satori, which cannot decode
 * WebP — the card would 500 and every shared link would lose its preview.
 *
 * Re-run after changing logo.png:
 *
 *   pnpm process-logo
 */

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE = path.join(ROOT, "public", "logo.png");
const PUBLIC_DIR = path.join(ROOT, "public");

/**
 * 256 is twice the largest on-page size, so it stays sharp on a 2x screen at
 * the 96px call-to-action and is heavily oversampled everywhere else.
 */
const UI_WIDTH = 256;

/**
 * The icon browsers and phones fetch. 180 is what iOS asks for in an
 * apple-touch-icon, and PNG because that is what the platforms accept.
 */
const ICON_WIDTH = 180;

const outputs = [
  { file: "logo-256.webp", width: UI_WIDTH, format: "webp" },
  { file: "logo-icon.png", width: ICON_WIDTH, format: "png" },
];

for (const { file, width, format } of outputs) {
  const target = path.join(PUBLIC_DIR, file);
  const pipeline = sharp(SOURCE).resize({ width, withoutEnlargement: true });

  await (format === "webp"
    ? pipeline.webp({ quality: 90, effort: 6 })
    : pipeline.png({ compressionLevel: 9 })
  ).toFile(target);

  const meta = await sharp(target).metadata();
  const kb = (fs.statSync(target).size / 1024).toFixed(1);
  console.log(`${file.padEnd(16)} ${meta.width}x${meta.height}  ${kb.padStart(6)} KB`);
}

const sourceKb = (fs.statSync(SOURCE).size / 1024).toFixed(1);
console.log(`\nfrom logo.png (${sourceKb} KB), which stays for the OG card`);
