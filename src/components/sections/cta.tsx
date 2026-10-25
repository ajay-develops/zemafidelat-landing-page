import { DecorGlyph } from "@/components/decor-glyph";
import { siteConfig } from "@/lib/config";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const { launch } = siteConfig;

export function CTA() {
  return (
    <section id="get-the-app" className="scroll-mt-16 px-4 pb-16 sm:px-6 md:pb-24">
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
          <a
            href={siteConfig.links.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-8 h-12 gap-2 rounded-full px-6 text-base font-bold"
            )}
          >
            <FaGooglePlay className="size-5" aria-hidden />
            {launch.playLabel}
          </a>
          {/* Words, not a badge: an App Store badge that goes nowhere reads
              as a broken button. */}
          <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-forest">
            <FaApple className="size-4 shrink-0" aria-hidden />
            <span className="text-balance">{launch.appStore}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
