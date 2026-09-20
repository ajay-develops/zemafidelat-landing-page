"use client";

import { Icons } from "@/components/icons";
import { Section } from "@/components/section";
import { WaitlistForm } from "@/components/waitlist-form";
import { siteConfig } from "@/lib/config";
import { screenshotProps } from "@/lib/screenshots";
import { motion, useScroll, useTransform } from "motion/react";

const heroAnimations = [
  { x: -200, y: 100 },
  { x: -100, y: 50 },
  { x: 0, y: 0 },
  { x: 100, y: 50 },
  { x: 200, y: 100 },
];

export function Hero() {
  const { scrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  const yTransforms = [
    useTransform(scrollY, [0, 300], [100, 0]),
    useTransform(scrollY, [0, 300], [50, 0]),
    useTransform(scrollY, [0, 300], [0, 0]),
    useTransform(scrollY, [0, 300], [50, 0]),
    useTransform(scrollY, [0, 300], [100, 0]),
  ];

  return (
    <Section id="hero" className="min-h-[100vh] w-full overflow-hidden">
      <div className="mx-auto pt-16 sm:pt-24 md:pt-32 text-center relative px-4">
        <div className="relative">
          {/* The box keeps its final height the whole time and the plate
              inside scales, so the zoom plays over the page instead of
              resizing a container that shoves everything below it down. */}
          <div className="mb-16 relative z-20 h-[10vh]">
            {/* bg-card, not bg-white: this plate stayed white in dark mode, a bright
                square on a #09090b page. The logo is a transparent PNG with a green
                mark, so it reads on either surface and the border supplies the edge.
                text-white was inherited from a template and styled nothing here. */}
            <div className="hero-zoom bg-card text-xl font-bold p-3 h-20 w-20 flex items-center justify-center rounded-3xl mx-auto shadow-md border border-border">
              <Icons.logo className="w-auto h-[52px]" priority />
            </div>
          </div>
          <div className="hero-rise-late absolute inset-0 top-20 z-10">
            {siteConfig.name}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* No delay on these two: the paragraph is what the browser measures
              as this page's largest paint, and an element still at opacity 0
              does not count as painted. */}
          <h1 className="hero-rise text-5xl font-bold mb-4 tracking-tighter">
            {siteConfig.heroTagline}
          </h1>
          <p className="hero-rise max-w-2xl mx-auto text-xl mb-8 font-medium text-balance">
            {siteConfig.heroDescription}
          </p>
          <div
            id="download"
            className="hero-rise-late flex justify-center mb-16 scroll-mt-20"
          >
            <WaitlistForm />
          </div>
        </div>
        <div className="flex flex-nowrap items-center justify-start sm:justify-center gap-4 sm:gap-8 h-auto sm:h-[500px] select-none overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 sm:px-0">
          {siteConfig.heroImages.map((src, index) => (
            <motion.img
              key={src}
              // 160px on a phone, 256px from sm up — a fraction of the 836px
              // file these used to pull down five times over. Lazy, not eager:
              // this row sits below the fold on a phone, and marking the first
              // few eager made the browser preload them, competing with the
              // font and logo that the visible part of the hero waits on.
              {...screenshotProps(src, "(min-width: 640px) 256px, 160px")}
              alt={`${siteConfig.name} screenshot ${index + 1}`}
              initial={{
                opacity: 0,
                x: heroAnimations[index]?.x ?? 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              style={{ y: yTransforms[index] }}
              transition={{ duration: 1, delay: 1 }}
              className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0 object-contain snap-center"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
