/**
 * Shared facts about the framed phone screenshots in public/screenshots.
 *
 * They are all generated at one size by scripts/process-screenshots.mjs, which
 * also emits a 300px and a 600px copy of each. Keeping the numbers here means
 * every `<img>` on the site can declare the same intrinsic size and offer the
 * same set of widths, instead of each section guessing.
 */

/** Intrinsic size every screenshot is generated at. */
export const SCREENSHOT_WIDTH = 836;
export const SCREENSHOT_HEIGHT = 1686;

/**
 * The widths the browser may choose between.
 *
 * Nothing draws these wider than ~300 CSS px, so a phone that took the full
 * file was downloading three to five times the pixels it could show. Paired
 * with a `sizes` hint the browser downloads exactly one of these.
 */
export function screenshotSrcSet(src: string): string {
  const base = src.replace(/\.webp$/, "");
  return `${base}-300.webp 300w, ${base}-600.webp 600w, ${src} ${SCREENSHOT_WIDTH}w`;
}

/**
 * Everything an `<img>` needs to be responsive, shift-free and lazy.
 *
 * `width`/`height` are what stop the layout jumping: without them the browser
 * has no aspect ratio until the file lands, which is where most of this page's
 * measured layout shift came from.
 *
 * Pass `eager` for anything visible without scrolling — a lazy image in the
 * first screen is slower, not faster.
 */
export function screenshotProps(src: string, sizes: string, eager = false) {
  return {
    src,
    srcSet: screenshotSrcSet(src),
    sizes,
    width: SCREENSHOT_WIDTH,
    height: SCREENSHOT_HEIGHT,
    loading: eager ? ("eager" as const) : ("lazy" as const),
    decoding: "async" as const,
    // Lazy alone does not keep these out of the way: the browser still starts
    // fetching anything within a generous distance of the viewport, so a dozen
    // screenshots end up sharing the connection with the font and logo the
    // visible part of the page is waiting on. This says which matters less.
    // It did not move the Lighthouse number on its own — it is here because it
    // is the truth about these images, not because it was worth a point.
    fetchPriority: eager ? undefined : ("low" as const),
  };
}
