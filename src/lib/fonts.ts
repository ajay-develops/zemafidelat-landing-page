import { Bricolage_Grotesque, DM_Sans, Noto_Sans_Ethiopic } from "next/font/google";

/**
 * The redesign's three typefaces.
 *
 * - Bricolage Grotesque for headings, DM Sans for everything else — the pair
 *   the client's design is set in.
 * - Noto Sans Ethiopic for Ge'ez. Neither Latin face has Ethiopic glyphs, so
 *   it sits second in both stacks (globals.css) and the browser reaches for it
 *   per character. Its subset is unicode-ranged, so a page without Ge'ez never
 *   downloads it.
 *
 * All three are preloaded: the hero headline is the page's largest paint, and
 * it is set in the display face with the word ፊደል in the Ethiopic one.
 */
export const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["700", "800"],
});

export const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const fontEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-noto-ethiopic",
  display: "swap",
  weight: ["500", "700", "800"],
});
