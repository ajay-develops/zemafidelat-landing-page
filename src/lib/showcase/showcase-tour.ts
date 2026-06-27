import {
  fastTransitionDurationMs,
  HEADER_OFFSET_PX,
  heroSectionStartPauseMs,
  maxSectionScrollDurationMs,
  minSectionScrollDurationMs,
  sectionScrollPixelsPerSecond,
  sectionStartPauseMs,
  showcaseStops,
} from "@/lib/showcase/showcase-config";
import {
  animateScrollY,
  disableSmoothScroll,
  getSectionScrollBounds,
  restoreSmoothScroll,
  scrollThroughSection,
  sleep,
} from "@/lib/showcase/showcase-scroll";

export type ShowcaseStatusHandler = (message: string) => void;

export function runShowcaseTour(onStatus?: ShowcaseStatusHandler) {
  const controller = new AbortController();
  const { signal } = controller;

  const run = async () => {
    disableSmoothScroll();

    try {
      for (let index = 0; index < showcaseStops.length; index += 1) {
        const stop = showcaseStops[index];
        const element = document.querySelector(stop.selector);

        if (!element) {
          continue;
        }

        onStatus?.(`Tour: ${stop.label}`);
        const { startY } = getSectionScrollBounds(element, HEADER_OFFSET_PX);

        if (index === 0) {
          await animateScrollY(startY, fastTransitionDurationMs, signal);
          await sleep(heroSectionStartPauseMs, signal);
        } else {
          await animateScrollY(startY, fastTransitionDurationMs, signal);
          await sleep(
            stop.startPauseMs ?? sectionStartPauseMs,
            signal
          );
        }

        onStatus?.(`Showcasing: ${stop.label}`);
        await scrollThroughSection(element, {
          headerOffset: HEADER_OFFSET_PX,
          pixelsPerSecond: sectionScrollPixelsPerSecond,
          minDurationMs: minSectionScrollDurationMs,
          maxDurationMs: maxSectionScrollDurationMs,
          signal,
        });

        if (stop.endPauseMs) {
          await sleep(stop.endPauseMs, signal);
        }
      }

      onStatus?.("Tour complete");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        onStatus?.("Tour stopped");
        return;
      }

      throw error;
    } finally {
      restoreSmoothScroll();
    }
  };

  void run();

  return {
    abort: () => controller.abort(),
  };
}
