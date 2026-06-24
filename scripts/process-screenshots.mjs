import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUTPUT_DIR = path.join(ROOT, "public", "screenshots");

const SOURCES = [
  {
    input: "public/other features/dashboard screen.png",
    output: "dashboard.png",
  },
  {
    input: "public/other features/lessons screen.png",
    output: "lessons.png",
  },
  {
    input: "public/other features/daily learning goal screen.png",
    output: "daily-goals.png",
  },
  {
    input: "public/other features/manage profiles screen.png",
    output: "profiles.png",
  },
  {
    input: "public/other features/notifications screen.png",
    output: "notifications.png",
  },
  { input: "public/games/flashcards.png", output: "flashcards.png" },
  {
    input: "public/games/trace the letters.png",
    output: "trace-letters.png",
  },
  { input: "public/games/word games.png", output: "word-games.png" },
  {
    input: "public/games/crosswords screen.png",
    output: "crosswords.png",
  },
  {
    input: "public/games/fidel make screen.png",
    output: "fidel-make.png",
  },
];

const BLACK_THRESHOLD = 22;

function removeEdgeBlackBackground(data, width, height, channels) {
  const visited = new Uint8Array(width * height);
  const queue = [];

  const isBlack = (x, y) => {
    const i = (y * width + x) * channels;
    return (
      data[i] <= BLACK_THRESHOLD &&
      data[i + 1] <= BLACK_THRESHOLD &&
      data[i + 2] <= BLACK_THRESHOLD
    );
  };

  for (let x = 0; x < width; x++) {
    for (const y of [0, height - 1]) {
      if (isBlack(x, y)) queue.push(x, y);
    }
  }

  for (let y = 1; y < height - 1; y++) {
    for (const x of [0, width - 1]) {
      if (isBlack(x, y)) queue.push(x, y);
    }
  }

  let removed = 0;

  while (queue.length > 0) {
    const y = queue.pop();
    const x = queue.pop();
    const idx = y * width + x;

    if (visited[idx] || !isBlack(x, y)) continue;

    visited[idx] = 1;
    data[idx * channels + 3] = 0;
    removed++;

    if (x > 0) queue.push(x - 1, y);
    if (x < width - 1) queue.push(x + 1, y);
    if (y > 0) queue.push(x, y - 1);
    if (y < height - 1) queue.push(x, y + 1);
  }

  return removed;
}

async function processScreenshot({ input, output }) {
  const inputPath = path.join(ROOT, input);
  const outputPath = path.join(OUTPUT_DIR, output);

  const trimmed = await sharp(inputPath)
    .trim({ threshold: 15 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(trimmed.data);
  const removed = removeEdgeBlackBackground(
    pixels,
    trimmed.info.width,
    trimmed.info.height,
    trimmed.info.channels
  );

  await sharp(pixels, { raw: trimmed.info }).png().toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  console.log(
    `${output}: ${meta.width}x${meta.height}, removed ${removed} background pixels`
  );
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

for (const source of SOURCES) {
  await processScreenshot(source);
}

console.log(`\nProcessed ${SOURCES.length} screenshots into ${OUTPUT_DIR}`);
