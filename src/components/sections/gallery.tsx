"use client";

import { Screenshot } from "@/components/screenshot";
import { SectionHeading } from "@/components/section";
import { siteConfig } from "@/lib/config";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRef } from "react";

const { gallery } = siteConfig;

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "previous" | "next";
  onClick: () => void;
}) {
  const Icon = direction === "previous" ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "previous" ? "Previous screens" : "Next screens"}
      className="flex size-11 items-center justify-center rounded-full bg-white text-foreground shadow-sm transition-colors hover:bg-forest hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      <Icon className="size-5" aria-hidden />
    </button>
  );
}

/**
 * A sideways tour of the real app. Swipe on a phone; on a wide screen the
 * arrows step it along by most of its width. It is a plain scrolling list, so
 * keyboard, trackpad and screen readers get it without any extra wiring.
 */
export function Gallery() {
  const listRef = useRef<HTMLUListElement>(null);

  function step(direction: 1 | -1) {
    const list = listRef.current;
    if (!list) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollBy({
      left: direction * list.clientWidth * 0.8,
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <section id="gallery" className="scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-[var(--max-container-width)] px-4 pt-16 sm:px-6 md:pt-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={gallery.eyebrow}
            title={gallery.title}
            description={gallery.text}
            tone="cream"
          />
          <div className="hidden shrink-0 gap-3 md:flex">
            <ArrowButton direction="previous" onClick={() => step(-1)} />
            <ArrowButton direction="next" onClick={() => step(1)} />
          </div>
        </div>
      </div>
      <ul
        ref={listRef}
        aria-label="App screens"
        // Lines the first screen up with the page's column, and lets the rest
        // run off the edge so it reads as "there is more this way".
        className="mt-10 flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 pb-16 [scrollbar-width:none] sm:scroll-px-6 sm:px-6 md:pb-24 min-[1248px]:scroll-px-[calc((100vw-var(--max-container-width))/2+1.5rem)] min-[1248px]:px-[calc((100vw-var(--max-container-width))/2+1.5rem)] [&::-webkit-scrollbar]:hidden"
      >
        {gallery.screens.map((screen) => (
          <li key={screen.name} className="w-44 shrink-0 snap-start sm:w-52">
            <figure>
              <Screenshot
                name={screen.name}
                alt={`${screen.caption} screen`}
                sizes="(min-width: 640px) 208px, 176px"
              />
              <figcaption className="mt-4 text-center font-bold text-foreground">
                {screen.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
