"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useRef } from "react";
import { flushSync } from "react-dom";

/**
 * Light/dark switch for visitors.
 *
 * The page follows the visitor's system setting until they press this; from
 * then on next-themes remembers their choice (localStorage) across visits.
 *
 * Which icon shows is decided by CSS from the `dark` class on <html>, not by
 * component state, so the button renders the same on the server and the client
 * and never flashes the wrong icon before hydration.
 *
 * The switch itself is animated by the View Transitions API: the new theme
 * wipes in as a circle growing out of this button (see `.theme-wipe` in
 * globals.css). That costs nothing until it is pressed — no library, no extra
 * markup, and nothing that runs during page load — so it cannot move the
 * PageSpeed numbers. Browsers without the API, and anyone who asked for less
 * motion, just get the old instant switch.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const activeTransition = useRef<ViewTransition | null>(null);

  const toggle = useCallback(() => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const button = buttonRef.current;
    const startViewTransition =
      document.startViewTransition?.bind(document) ?? null;
    const wantsLessMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!startViewTransition || !button || wantsLessMotion) {
      setTheme(next);
      return;
    }

    // Grow the circle from the middle of the button out to whichever screen
    // corner is furthest away, so it always finishes by covering the page.
    const box = button.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.style.setProperty("--wipe-x", `${x}px`);
    root.style.setProperty("--wipe-y", `${y}px`);
    root.style.setProperty("--wipe-r", `${radius}px`);
    root.classList.add("theme-wipe");

    // flushSync so next-themes has actually put the class on <html> before the
    // browser takes its "after" picture; its own update runs in an effect,
    // which would otherwise land a frame too late and animate nothing.
    const transition = startViewTransition(() => {
      flushSync(() => setTheme(next));
    });

    // The browser skips a transition it cannot run — a tab that is not being
    // painted, or a second switch on top of the first — and rejects `ready`
    // when it does. Swallow that: the theme still changes, only the animation
    // is dropped, and an unhandled rejection would show up as an error in the
    // console and in any error reporting. `finished` always resolves, so the
    // cleanup below runs either way.
    transition.ready.catch(() => {});

    activeTransition.current = transition;

    transition.finished.finally(() => {
      // A second press starts a second transition and the browser drops the
      // first, which resolves here while the new wipe is still running. Leave
      // the class and the coordinates alone in that case — they belong to the
      // press that is still on screen.
      if (activeTransition.current !== transition) return;
      activeTransition.current = null;
      root.classList.remove("theme-wipe");
      root.style.removeProperty("--wipe-x");
      root.style.removeProperty("--wipe-y");
      root.style.removeProperty("--wipe-r");
    });
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      size="icon"
      aria-label="Switch between light and dark theme"
      title="Switch between light and dark theme"
      className={cn(
        "size-9 rounded-full text-muted-foreground hover:text-foreground",
        // scale, not transform: Tailwind v4 writes scale-* and rotate-* as the
        // standalone CSS properties, so transitioning `transform` would animate
        // nothing. The colours are listed too because the button's hover state
        // is a transition as well, and tailwind-merge keeps only the last
        // transition-* class on an element.
        "transition-[color,background-color,scale] active:scale-90",
        className
      )}
      onClick={toggle}
    >
      {/*
        Both icons are always mounted and stacked, so the swap is one CSS
        transition on rotate/scale/opacity — compositor work, no re-render, and
        no reflow that could shift the header. The sun turns out as the moon
        turns in.
      */}
      <span className="relative block size-5">
        <Sun className="absolute inset-0 size-5 rotate-0 scale-100 opacity-100 transition-[rotate,scale,opacity] duration-500 ease-out motion-reduce:transition-none dark:-rotate-90 dark:scale-50 dark:opacity-0" />
        <Moon className="absolute inset-0 size-5 rotate-90 scale-50 opacity-0 transition-[rotate,scale,opacity] duration-500 ease-out motion-reduce:transition-none dark:rotate-0 dark:scale-100 dark:opacity-100" />
      </span>
    </Button>
  );
}
