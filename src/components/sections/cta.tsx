import { DecorGlyph } from "@/components/decor-glyph";
import { siteConfig } from "@/lib/config";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const { launch } = siteConfig;

export function CTA() {
  return (
    <section id="coming-soon" className="scroll-mt-16 px-4 pb-16 sm:px-6 md:pb-24">
      <div className="relative mx-auto max-w-[var(--max-container-width)] overflow-hidden rounded-[2rem] bg-leaf px-6 py-16 text-center md:py-20">
        <DecorGlyph
          glyph="ፊ"
          surface="leaf"
          rotate={-10}
          className="left-[5%] top-[12%] hidden text-[7rem] lg:block"
        />
        <DecorGlyph
          glyph="ደ"
          surface="leaf"
          rotate={8}
          className="bottom-[10%] right-[5%] hidden text-[7rem] lg:block"
        />
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance text-forest md:text-5xl">
            {launch.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-pretty text-forest">
            {launch.text}
          </p>
          {/* Words, not a badge: a store badge that goes nowhere reads as a
              broken button. */}
          <p className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-forest">
            <span className="flex shrink-0 gap-1">
              <FaGooglePlay className="size-4" aria-hidden />
              <FaApple className="size-4" aria-hidden />
            </span>
            <span className="text-balance">{launch.stores}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
