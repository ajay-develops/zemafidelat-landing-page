"use client";

import { easeOutCubic } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { type ReactNode } from "react";

function getSymmetricOffset(index: number, columns: number) {
  if (columns <= 1) {
    return index % 2 === 0 ? { x: -28, y: 48 } : { x: 28, y: 48 };
  }

  const column = index % columns;
  const center = (columns - 1) / 2;
  const distanceFromCenter = column - center;
  const normalized = center === 0 ? 0 : distanceFromCenter / center;

  return {
    x: normalized * 48,
    y: Math.abs(normalized) < 0.01 ? 64 : 48,
  };
}

interface SymmetricScrollCardProps {
  index: number;
  columns?: number;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}

export function SymmetricScrollCard({
  index,
  columns = 3,
  className,
  contentClassName,
  children,
}: SymmetricScrollCardProps) {
  const column = index % columns;
  const row = Math.floor(index / columns);
  const { x, y } = getSymmetricOffset(index, columns);

  return (
    <motion.div
      className={cn("overflow-visible", className)}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.65,
        ease: easeOutCubic,
        delay: row * 0.08 + column * 0.05,
      }}
    >
      <div className={cn("h-full", contentClassName)}>{children}</div>
    </motion.div>
  );
}
