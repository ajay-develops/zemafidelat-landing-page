import { Screenshot } from "@/components/screenshot";
import { Section, SectionHeading } from "@/components/section";
import { siteConfig } from "@/lib/config";

const { dailyChallenge } = siteConfig;

export function DailyChallenge() {
  return (
    <Section
      id="daily-challenge"
      className="bg-cream"
      // It shares the cream band with "Play it" above; half the usual space
      // between them, or the band reads as two.
      containerClassName="pt-8 md:pt-12"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow={dailyChallenge.eyebrow}
            title={dailyChallenge.title}
            description={dailyChallenge.text}
            tone="cream"
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {dailyChallenge.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-[16.25rem]">
          <Screenshot
            name="daily-fidel"
            alt="The Daily Fidel Challenge: a picture of a river for the clue Flood, and scrambled fidelat to arrange"
            sizes="(min-width: 1024px) 260px, 70vw"
            className="rotate-3"
          />
        </div>
      </div>
    </Section>
  );
}
