import { DecorGlyph } from "@/components/decor-glyph";
import { Screenshot } from "@/components/screenshot";
import { siteConfig } from "@/lib/config";
import { CheckIcon } from "lucide-react";

const { hero } = siteConfig;

export function Hero() {
  return (
    <section
      id="hero"
      // -mt pulls the band up under the transparent sticky header, so the mint
      // runs to the top of the window instead of starting below a white bar.
      className="relative -mt-16 overflow-hidden bg-mint pt-16"
    >
      {/*
        Faded letters, only where there is no text: the corners and the
        gutters. The design had them behind the headline and the form.
      */}
      <DecorGlyph
        glyph="መ"
        className="right-[2%] top-[8%] hidden text-[7rem] min-[1400px]:block"
        rotate={-8}
      />
      <DecorGlyph
        glyph="ቀ"
        className="left-[58%] top-[7%] hidden text-[5rem] lg:block"
        rotate={10}
      />
      <DecorGlyph
        glyph="ሀ"
        className="left-[calc(50%-var(--max-container-width)/2-8rem)] top-[22%] hidden text-[8rem] min-[1500px]:block"
        rotate={-12}
      />
      <DecorGlyph
        glyph="ሰ"
        className="bottom-[-2.5rem] left-[44%] hidden text-[6rem] lg:block"
        rotate={6}
      />

      <div className="relative mx-auto grid w-full max-w-[var(--max-container-width)] items-center gap-12 px-4 pt-12 pb-16 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24">
        <div className="hero-rise">
          <p className="inline-flex flex-wrap justify-center gap-x-1.5 rounded-2xl bg-sun px-4 py-1.5 text-sm font-bold text-forest">
            <span className="whitespace-nowrap">{hero.badge[0]}</span>
            <span aria-hidden>·</span>
            <span className="whitespace-nowrap">{hero.badge[1]}</span>
          </p>
          {/* No delay on the headline: it is the page's largest paint, and an
              element at opacity 0 does not count as painted. */}
          <h1 className="mt-6 font-display text-4xl leading-[0.98] font-extrabold tracking-tight text-balance text-foreground min-[400px]:text-5xl sm:text-6xl xl:text-7xl">
            {hero.titleStart}{" "}
            <span lang="ti" className="font-ethiopic text-primary">
              {hero.titleFidel}
            </span>{" "}
            {hero.titleEnd}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
            {hero.lead}
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {hero.ticks.map((tick) => (
              <li
                key={tick}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <CheckIcon className="size-4 shrink-0 text-primary" strokeWidth={3} aria-hidden />
                {tick}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-rise-late relative mx-auto aspect-square w-full max-w-[34rem]">
          {/* Inside the box, so it is never cut off by the band's edge. */}
          <div className="absolute inset-[6%] rounded-full bg-leaf/15" aria-hidden />
          <Screenshot
            name="lessons"
            alt="The learning path: lesson stops along a trail through the forest"
            sizes="(min-width: 1024px) 230px, 42vw"
            eager
            className="absolute left-[7%] top-[3%] w-[42%] -rotate-6"
          />
          <Screenshot
            name="dashboard"
            alt="The home dashboard: today's stats, and cards for lessons, flashcards, letters and tracing"
            sizes="(min-width: 1024px) 230px, 42vw"
            eager
            className="absolute right-[7%] top-[11%] w-[42%] rotate-6"
          />
        </div>
      </div>
    </section>
  );
}
