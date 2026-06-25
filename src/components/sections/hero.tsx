"use client";

import { Icons } from "@/components/icons";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

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
          <motion.div
            initial={{ scale: 4.5, height: "80vh" }}
            animate={{ scale: 1, height: "10vh" }}
            transition={{
              scale: { delay: 0, duration: 1.8, ease: easeInOutCubic },
              height: { delay: 0, duration: 1.8, ease: easeInOutCubic },
            }}
            className="mb-16 relative z-20"
            style={{ transformOrigin: "top" }}
          >
            <div className="bg-white text-white text-xl font-bold p-3 h-20 w-20 flex items-center justify-center rounded-3xl mx-auto shadow-md border border-border">
              <Icons.logo className="w-auto h-[52px]" />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute inset-0 top-20 z-10"
          >
            {siteConfig.name}
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeInOutCubic }}
            className="text-5xl font-bold mb-4 tracking-tighter"
          >
            {siteConfig.heroTagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeInOutCubic }}
            className="max-w-2xl mx-auto text-xl mb-8 font-medium text-balance"
          >
            {siteConfig.heroDescription}
          </motion.p>
          <div
            id="download"
            className="flex justify-center gap-4 mb-16 flex-wrap scroll-mt-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Link
                href={siteConfig.links.download}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "text-white rounded-full group px-8"
                )}
              >
                {siteConfig.cta}
                <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-nowrap items-center justify-start sm:justify-center gap-4 sm:gap-8 h-auto sm:h-[500px] select-none overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 sm:px-0">
          {siteConfig.heroImages.map((src, index) => (
            <motion.img
              key={src}
              src={src}
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
