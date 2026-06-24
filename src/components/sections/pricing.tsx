"use client";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function Pricing() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.3], [100, 100, 0]);

  const plan = siteConfig.pricing[0];

  return (
    <Section
      title="Free Download"
      subtitle="100% free, no subscriptions"
      className="container px-10 mx-auto max-w-[var(--max-container-width)]"
      ref={ref}
    >
      <div className="flex justify-center max-w-xl mx-auto py-10">
        <motion.div
          style={{ opacity, y }}
          className="bg-muted/60 p-6 sm:p-8 rounded-3xl grid grid-rows-[auto_auto_1fr_auto] w-full"
        >
          <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
          <div className="text-4xl font-bold text-primary mb-2">
            {plan.price}
            <span className="text-sm font-normal text-muted-foreground">
              /{plan.period}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {plan.description}
          </p>

          <div className="space-y-3 mb-6">
            {plan.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <Button
            variant="default"
            size="sm"
            className="rounded-full text-white"
            asChild
          >
            <Link href={siteConfig.links.download} target="_blank" rel="noopener noreferrer">
              {plan.buttonText}
              <ChevronRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
