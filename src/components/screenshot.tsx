/* eslint-disable @next/next/no-img-element */
import { screenshotProps } from "@/lib/screenshots";
import { cn } from "@/lib/utils";

/**
 * One framed phone screenshot from public/screenshots (made from real device
 * captures by `pnpm process-screenshots`). The frame and rounded corners are in
 * the image, so this only adds the drop shadow the drawn phones had.
 *
 * `sizes` is how wide it is drawn, so the browser picks the right file.
 */
export function Screenshot({
  name,
  alt,
  sizes = "(min-width: 1024px) 260px, 220px",
  eager = false,
  className,
}: {
  /** File name in public/screenshots, without extension. */
  name: string;
  alt: string;
  sizes?: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <img
      {...screenshotProps(`/screenshots/${name}.webp`, sizes, eager)}
      alt={alt}
      className={cn(
        "h-auto w-full drop-shadow-[0_24px_40px_color-mix(in_oklab,var(--forest)_30%,transparent)]",
        className
      )}
    />
  );
}
