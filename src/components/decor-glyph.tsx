import { cn } from "@/lib/utils";

/**
 * A large faded Tigrinya letter, scattered as decoration in the hero and the
 * waitlist card. Position and size come from `className`; the colour is a pale
 * tint of the surface it sits on.
 *
 * Hidden from assistive technology and from selection, and never placed behind
 * text — that is the caller's job, and the reason they are corner-pinned.
 */
export function DecorGlyph({
  glyph,
  rotate = 0,
  surface = "mint",
  className,
}: {
  glyph: string;
  rotate?: number;
  surface?: "mint" | "leaf";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute font-ethiopic leading-none font-extrabold select-none",
        surface === "mint" ? "text-leaf/20" : "text-leaf-ink",
        className
      )}
      style={{ rotate: `${rotate}deg` }}
    >
      {glyph}
    </span>
  );
}
