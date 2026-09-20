import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";

/**
 * The site's two typefaces, and which of them is allowed to be urgent.
 *
 * Both used to come from the `geist` package, which preloads whatever the root
 * layout applies. That put a `<link rel="preload">` on each, so both started
 * downloading in the same instant and split a throttled phone's connection
 * between them: measured on a mobile Lighthouse run, the pair started at 610ms
 * and did not finish until 3.26s, and the hero paragraph — the page's largest
 * paint — landed at 3.31s, right behind them.
 *
 * Only the sans is needed for that text. The mono is for the small uppercase
 * labels above each section, none of which are on screen when the page opens,
 * so it is defined here instead with `preload: false`: same typeface, same
 * look, just no longer racing the font the headline is waiting for.
 *
 * The file is vendored into src/fonts rather than read out of node_modules,
 * because next/font/local resolves `src` relative to this file and a path into
 * a package directory is at the mercy of how the installer lays it out.
 */
/*
 * Straight from the package, preloaded and `font-display: swap`.
 *
 * Vendoring this one and switching it to `optional` was measured and made no
 * difference to the largest paint, so it is not worth the cost: the package
 * ships a metric-matched Arial fallback (size-adjust 106.28%) that keeps the
 * layout identical while the real font is in flight, and hand-rolling it would
 * mean maintaining those numbers here.
 */
export const fontSans = GeistSans;

export const fontMono = localFont({
  src: "../fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  preload: false,
  display: "swap",
  weight: "100 900",
  // Matches the geist package, so nothing about the rendering changes.
  adjustFontFallback: false,
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Roboto Mono",
    "Menlo",
    "Monaco",
    "Liberation Mono",
    "DejaVu Sans Mono",
    "Courier New",
    "monospace",
  ],
});
