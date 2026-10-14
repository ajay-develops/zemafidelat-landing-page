import Marquee from "@/components/ui/marquee";
import { siteConfig } from "@/lib/config";
import { Fragment } from "react";

/**
 * The scrolling strip of fidel families under the hero. Pure decoration — the
 * letters mean nothing read out one by one, so it is hidden from assistive
 * technology, and it stands still for anyone who asked for reduced motion.
 */
export function FidelBand() {
  return (
    <div aria-hidden className="bg-forest py-4 select-none">
      <Marquee
        repeat={4}
        className="p-0 [--duration:50s] [--gap:2.5rem] motion-reduce:[&>*]:animate-none"
      >
        {siteConfig.fidelBand.map((family, index) => (
          <Fragment key={family[0]}>
            {index > 0 ? (
              <span className="self-center text-2xl text-leaf/60">·</span>
            ) : null}
            {family.map((glyph) => (
              <span
                key={glyph}
                className="font-ethiopic text-3xl font-bold text-leaf"
              >
                {glyph}
              </span>
            ))}
          </Fragment>
        ))}
        {/* Closes the loop, so the last family and the next copy's first are
            separated like the rest. */}
        <span className="self-center text-2xl text-leaf/60">·</span>
      </Marquee>
    </div>
  );
}
