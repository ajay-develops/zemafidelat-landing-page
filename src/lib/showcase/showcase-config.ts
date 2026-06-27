export const SHOWCASE_QUERY_PARAM = "showcase";
export const HERO_INTRO_DELAY_MS = 200;
export const COUNTDOWN_SECONDS = 1;
export const HEADER_OFFSET_PX = 0;

/** Fast scroll between sections to skip gaps and empty space */
export const fastTransitionDurationMs = 1500;

/** Slow cinematic scroll speed while showcasing a section */
export const sectionScrollPixelsPerSecond = 150;
export const minSectionScrollDurationMs = 2500;
export const maxSectionScrollDurationMs = 14000;

/** Brief hold at section start before slow scroll-through (hero gets extra time) */
export const sectionStartPauseMs = 600;
export const heroSectionStartPauseMs = 100;

export type ShowcaseStop = {
  selector: string;
  label: string;
  /** Override pause at section start before slow scroll-through */
  startPauseMs?: number;
  /** Pause after slow scroll-through before moving to next section */
  endPauseMs?: number;
};

export const showcaseStops: ShowcaseStop[] = [
  {
    selector: "#hero",
    label: "Hero",
    endPauseMs: 2000,
  },
  {
    selector: "#feature-scroll",
    label: "Experience",
  },
  {
    selector: "#feature-highlight",
    label: "How it works",
  },
  {
    selector: "#bento",
    label: "Features grid",
  },
  {
    selector: "#benefits",
    label: "Benefits",
    startPauseMs: 3000,
  },
  {
    selector: "#features",
    label: "Features",
  },
  {
    selector: "#testimonials",
    label: "Testimonials",
  },
  {
    selector: "#free-download",
    label: "Download",
  },
  {
    selector: "#faq",
    label: "FAQ",
  },
  {
    selector: "#cta",
    label: "Call to action",
  },
  {
    selector: "footer",
    label: "Footer",
  },
];
