"use client";

import { Icons } from "@/components/icons";
import { MobileDrawer } from "@/components/mobile-drawer";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn, withAnchorBase } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderProps = {
  /** "/" on pages other than the homepage, so section links lead back to it. */
  anchorBase?: string;
};

/**
 * Sticky, and clear while it sits over the hero so the mint runs to the top
 * of the window; once the page scrolls it turns white with a hairline, so the
 * links stay readable over every band below.
 */
export function Header({ anchorBase = "" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-16 border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-white/90 backdrop-blur"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-[var(--max-container-width)] items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Icons.logo className="h-8 w-auto" decorative priority />
          <span className="font-display text-xl font-bold text-foreground">
            {siteConfig.name}
          </span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={withAnchorBase(link.href, anchorBase)}
              className="rounded-sm text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.text}
            </a>
          ))}
          <a
            href={withAnchorBase(siteConfig.links.waitlist, anchorBase)}
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-10 rounded-full px-5 font-bold"
            )}
          >
            {siteConfig.cta}
          </a>
        </nav>
        <div className="lg:hidden">
          <MobileDrawer anchorBase={anchorBase} />
        </div>
      </div>
    </header>
  );
}
