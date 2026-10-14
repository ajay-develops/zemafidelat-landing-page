"use client";

import { easeInOutCubic } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

/*
 * The eyebrow's colour depends on the surface it sits on — the design uses
 * green on white, amber on cream and pale leaf on forest — so it is named by
 * surface, and every pairing here is measured in globals.css.
 */
const eyebrowTone = {
  white: "text-primary",
  cream: "text-amber",
  forest: "text-leaf-pale",
} as const;

const titleTone = {
  white: "text-foreground",
  cream: "text-foreground",
  forest: "text-white",
} as const;

export type SectionTone = keyof typeof eyebrowTone;

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: SectionTone;
  className?: string;
};

/**
 * Eyebrow, heading and lead paragraph, the way every section of the page
 * writes them. `Section` uses it for its centred header; the split sections
 * (copy beside a picture) put it in their own column.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "white",
  className,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.15], [0, 0, 1], {
    ease: easeInOutCubic,
  });
  const y = useTransform(scrollYProgress, [0, 0.05, 0.15], [24, 24, 0], {
    ease: easeInOutCubic,
  });

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-[0.18em]",
            eyebrowTone[tone]
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-5xl",
          align === "center" ? "mx-auto max-w-3xl" : "max-w-xl",
          titleTone[tone]
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-lg leading-relaxed text-pretty",
            tone === "forest" ? "text-white/85" : "text-muted-foreground",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  tone?: SectionTone;
  /** Classes for the full-bleed band — its background. */
  className?: string;
  /** Classes for the centred column inside it. */
  containerClassName?: string;
  children?: React.ReactNode;
};

/**
 * One band of the landing page: a full-width background, the page's centred
 * column inside it, and an optional centred heading. The vertical rhythm is
 * the same in every band, so sections only choose their surface.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  tone = "white",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-16", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-[var(--max-container-width)] px-4 py-16 sm:px-6 md:py-24",
          containerClassName
        )}
      >
        {title ? (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            tone={tone}
            align="center"
            className="mb-12 md:mb-14"
          />
        ) : null}
        {children}
      </div>
    </section>
  );
}
