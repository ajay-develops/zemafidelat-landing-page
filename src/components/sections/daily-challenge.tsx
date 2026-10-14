import { DailyChallengePhone } from "@/components/mockups";
import { Section, SectionHeading } from "@/components/section";
import { siteConfig } from "@/lib/config";

const { dailyChallenge } = siteConfig;

export function DailyChallenge() {
  return (
    <Section
      id="daily-challenge"
      className="bg-cream"
      // It shares the cream band with the games below; half the usual space
      // between them, or the band reads as two.
      containerClassName="md:pb-12"
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
        <div
          role="img"
          aria-label="The Daily Fidel Challenge: a picture of a heart with the clue “Heart”, and scrambled fidelat to spell ልቢ"
          className="mx-auto w-full max-w-[17rem] py-4"
        >
          <DailyChallengePhone className="rotate-3" />
        </div>
      </div>
    </Section>
  );
}
