"use client";

import { Icons } from "@/components/icons";
import { MobileDrawer } from "@/components/mobile-drawer";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { cn, withAnchorBase } from "@/lib/utils";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const headerNavLinks = siteConfig.navLinks.filter(
  (link) => link.text !== "Waitlist"
);

type HeaderProps = {
  /** "/" on pages other than the homepage, so section links lead back to it. */
  anchorBase?: string;
};

export function Header({ anchorBase = "" }: HeaderProps) {
  const [addBorder, setAddBorder] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setAddBorder(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const timeoutId = window.setTimeout(() => setIsInitialLoad(false), 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const headerVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      <motion.header
        initial="hidden"
        animate={controls}
        exit="hidden"
        variants={headerVariants}
        transition={{
          duration: isInitialLoad ? 1 : 0.3,
          delay: isInitialLoad ? 0.5 : 0,
          ease: easeInOutCubic,
        }}
        className={cn("sticky top-0 z-50 p-0 bg-background/60 backdrop-blur")}
      >
        <div className="flex justify-between items-center container mx-auto p-2 gap-4">
          <Link
            href="/"
            title="brand-logo"
            className="relative flex items-center space-x-2 shrink-0"
          >
            <Icons.logo className="w-auto" />
            <span className="font-bold text-xl">{siteConfig.name}</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {headerNavLinks.map((link) => (
              <a
                key={link.text}
                href={withAnchorBase(link.href, anchorBase)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.text}
              </a>
            ))}
            <a
              href={withAnchorBase(siteConfig.links.waitlist, anchorBase)}
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-8 text-white rounded-full group"
              )}
            >
              {siteConfig.ctaSecondary}
            </a>
            <ThemeToggle />
          </nav>
          {/* On phones the switch sits next to the menu, so it takes no taps to reach. */}
          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <div className="cursor-pointer">
              <MobileDrawer anchorBase={anchorBase} />
            </div>
          </div>
        </div>
        <motion.hr
          initial={{ opacity: 0 }}
          animate={{ opacity: addBorder ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute w-full bottom-0"
        />
      </motion.header>
    </AnimatePresence>
  );
}
