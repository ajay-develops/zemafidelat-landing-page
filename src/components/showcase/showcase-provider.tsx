"use client";

import {
  COUNTDOWN_SECONDS,
  HERO_INTRO_DELAY_MS,
  SHOWCASE_QUERY_PARAM,
} from "@/lib/showcase/showcase-config";
import { runShowcaseTour } from "@/lib/showcase/showcase-tour";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function isShowcaseEnabled() {
  if (process.env.NODE_ENV !== "development") {
    return false;
  }

  return new URLSearchParams(window.location.search).get(SHOWCASE_QUERY_PARAM) === "1";
}

export function ShowcaseProvider() {
  const [enabled, setEnabled] = useState(false);
  const [status, setStatus] = useState("Preparing showcase...");
  const tourRef = useRef<ReturnType<typeof runShowcaseTour> | null>(null);

  useEffect(() => {
    if (!isShowcaseEnabled()) {
      return;
    }

    setEnabled(true);
    document.body.classList.add("showcase-mode");

    let cancelled = false;

    const startTour = async () => {
      setStatus(`Showcase starting in ${COUNTDOWN_SECONDS}...`);
      await sleep(HERO_INTRO_DELAY_MS);
      if (cancelled) {
        return;
      }

      for (let seconds = COUNTDOWN_SECONDS; seconds > 0; seconds -= 1) {
        setStatus(`Showcase starting in ${seconds}...`);
        await sleep(1000);
        if (cancelled) {
          return;
        }
      }

      setStatus("Recording tour... Esc to stop");
      tourRef.current = runShowcaseTour(setStatus);
    };

    void startTour();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      tourRef.current?.abort();
      setStatus("Tour stopped");
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelled = true;
      tourRef.current?.abort();
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("showcase-mode");
    };
  }, []);

  if (!enabled || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div className="showcase-overlay" aria-live="polite">
      {status}
    </div>,
    document.body
  );
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
