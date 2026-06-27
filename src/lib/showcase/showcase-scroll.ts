import { easeInOutCubic } from "@/lib/animation";

let hadSmoothScrollClass = false;

export function disableSmoothScroll() {
  const html = document.documentElement;
  hadSmoothScrollClass = html.classList.contains("scroll-smooth");
  html.classList.remove("scroll-smooth");
  html.style.scrollBehavior = "auto";
}

export function restoreSmoothScroll() {
  const html = document.documentElement;
  if (hadSmoothScrollClass) {
    html.classList.add("scroll-smooth");
  }
  html.style.scrollBehavior = "";
}

export function getSectionScrollTarget(element: Element, headerOffset = 80) {
  const rect = element.getBoundingClientRect();
  return Math.max(0, window.scrollY + rect.top - headerOffset);
}

export function getSectionScrollBounds(element: Element, headerOffset = 80) {
  const rect = element.getBoundingClientRect();
  const elementTop = window.scrollY + rect.top;
  const elementBottom = elementTop + rect.height;
  const startY = Math.max(0, elementTop - headerOffset);
  const endY = Math.max(
    startY,
    elementBottom - window.innerHeight + headerOffset
  );

  return { startY, endY };
}

export function getSectionScrollDuration(
  startY: number,
  endY: number,
  pixelsPerSecond: number,
  minDurationMs: number,
  maxDurationMs: number
) {
  const distance = endY - startY;

  if (distance <= 1) {
    return minDurationMs;
  }

  const duration = (distance / pixelsPerSecond) * 1000;
  return Math.min(maxDurationMs, Math.max(minDurationMs, duration));
}

export async function scrollThroughSection(
  element: Element,
  options: {
    headerOffset?: number;
    pixelsPerSecond: number;
    minDurationMs: number;
    maxDurationMs: number;
    signal?: AbortSignal;
  }
) {
  const { startY, endY } = getSectionScrollBounds(
    element,
    options.headerOffset ?? 80
  );
  const duration = getSectionScrollDuration(
    startY,
    endY,
    options.pixelsPerSecond,
    options.minDurationMs,
    options.maxDurationMs
  );

  await animateScrollY(endY, duration, options.signal);
}

export function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(createAbortError());
      return;
    }

    const timeoutId = window.setTimeout(() => resolve(), ms);

    signal?.addEventListener(
      "abort",
      () => {
        window.clearTimeout(timeoutId);
        reject(createAbortError());
      },
      { once: true }
    );
  });
}

function createAbortError() {
  return new DOMException("Aborted", "AbortError");
}

function animateValue(
  from: number,
  to: number,
  durationMs: number,
  apply: (value: number) => void,
  signal?: AbortSignal
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(createAbortError());
      return;
    }

    const distance = to - from;
    const startTime = performance.now();
    let frameId = 0;

    const cleanup = () => {
      cancelAnimationFrame(frameId);
      signal?.removeEventListener("abort", onAbort);
    };

    const onAbort = () => {
      cleanup();
      reject(createAbortError());
    };

    signal?.addEventListener("abort", onAbort, { once: true });

    const step = (currentTime: number) => {
      if (signal?.aborted) {
        onAbort();
        return;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      apply(from + distance * easeInOutCubic(progress));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        cleanup();
        resolve();
      }
    };

    frameId = requestAnimationFrame(step);
  });
}

export function animateScrollY(
  targetY: number,
  durationMs: number,
  signal?: AbortSignal
): Promise<void> {
  return animateValue(
    window.scrollY,
    targetY,
    durationMs,
    (value) => window.scrollTo(0, value),
    signal
  );
}
