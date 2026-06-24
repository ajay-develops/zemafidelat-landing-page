"use client";

import { Section } from "@/components/section";
import { easeOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FeatureScroll() {
  const phone1Ref = useRef(null);
  const phone2Ref = useRef(null);
  const phone3Ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: phone1Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: phone2Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: phone3Ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress1, [0, 0.3], [150, 0], {
    ease: easeOutCubic,
  });
  const y2 = useTransform(scrollYProgress2, [0.1, 0.4], [200, 0], {
    ease: easeOutCubic,
  });
  const y3 = useTransform(scrollYProgress3, [0.2, 0.5], [250, 0], {
    ease: easeOutCubic,
  });

  const refs = [phone1Ref, phone2Ref, phone3Ref];
  const yTransforms = [y1, y2, y3];
  const { title, subtitle, images } = siteConfig.featureScroll;

  return (
    <Section
      id="feature-scroll"
      title={title}
      subtitle={subtitle}
      className="container px-4 sm:px-10 mx-auto max-w-[var(--max-container-width)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto select-none">
        {images.map((src, index) => (
          <motion.img
            key={src}
            ref={refs[index]}
            src={src}
            alt={`${siteConfig.name} feature ${index + 1}`}
            className="w-full h-auto -z-10 max-w-[250px] sm:max-w-[300px] mx-auto object-contain"
            style={{ y: yTransforms[index] }}
          />
        ))}
      </div>
    </Section>
  );
}
