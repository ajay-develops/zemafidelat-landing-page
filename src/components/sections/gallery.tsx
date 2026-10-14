"use client";

import { Screenshot } from "@/components/screenshot";
import { SectionHeading } from "@/components/section";
import { siteConfig } from "@/lib/config";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const { gallery } = siteConfig;

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "previous" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = direction === "previous" ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "previous" ? "Previous screens" : "Next screens"}
      className="flex size-11 items-center justify-center rounded-full bg-white text-foreground shadow-sm transition-colors hover:bg-forest hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-40"
    >
      <Icon className="size-5" aria-hidden />
    </button>
  );
}

/**
 * A sideways tour of the real app. Swipe on a phone; on a wide screen the
 * arrows step it along. It is a plain scrolling list, so keyboard, trackpad
 * and screen readers get it without any extra wiring.
 *
 * Its own <section> rather than `Section`: the strip has to run the full width
 * of the window, outside the centred column `Section` puts its children in.
 */
export function Gallery() {
  const listRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEnds = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    setAtStart(list.scrollLeft <= 1);
    setAtEnd(list.scrollLeft + list.clientWidth >= list.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    // Read once the layout exists; the scroll and resize events keep it current.
    const frame = requestAnimationFrame(updateEnds);
    list.addEventListener("scroll", updateEnds, { passive: true });
    window.addEventListener("resize", updateEnds);
    return () => {
      cancelAnimationFrame(frame);
      list.removeEventListener("scroll", updateEnds);
      window.removeEventListener("resize", updateEnds);
    };
  }, [updateEnds]);

  function step(direction: 1 | -1) {
    const list = listRef.current;
    if (!list) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // About three screens at a time, so a click never skips past the middle.
    const item = list.querySelector("li");
    const distance = item ? item.getBoundingClientRect().width * 3 : list.clientWidth / 2;
    list.scrollBy({ left: direction * distance, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <section id="gallery" className="scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-[var(--max-container-width)] px-4 pt-16 sm:px-6 md:pt-24">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          description={gallery.text}
          tone="cream"
          align="center"
        />
      </div>
      <ul
        ref={listRef}
        aria-label="App screens"
        // The first screen lines up with the page's column (its 1.5rem gutter
        // included), and the rest run off the edge so it reads as "there is
        // more this way". The column's gutter is 1rem on phones and 1.5rem
        // from sm up; max() covers wide screens without a third breakpoint,
        // which Tailwind would sort before sm: and lose to it.
        className="mt-10 flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:scroll-px-[max(1.5rem,calc((100%-var(--max-container-width))/2+1.5rem))] sm:px-[max(1.5rem,calc((100%-var(--max-container-width))/2+1.5rem))] [&::-webkit-scrollbar]:hidden"
      >
        {gallery.screens.map((screen) => (
          <li key={screen.name} className="w-44 shrink-0 snap-start sm:w-52">
            <figure>
              <Screenshot
                name={screen.name}
                alt={screen.alt}
                sizes="(min-width: 640px) 208px, 176px"
              />
              <figcaption className="mt-4 text-center font-bold text-foreground">
                {screen.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-3 pt-6 pb-16 md:pb-24">
        <div className="hidden gap-3 md:flex">
          <ArrowButton direction="previous" disabled={atStart} onClick={() => step(-1)} />
          <ArrowButton direction="next" disabled={atEnd} onClick={() => step(1)} />
        </div>
      </div>
    </section>
  );
}
