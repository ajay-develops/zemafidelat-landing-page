import { Screenshot } from "@/components/screenshot";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const { habits } = siteConfig;

/* Each card's number colour. Coral only on the 36px numeral (large text). */
const statColour = {
  streaks: "text-coral",
  goals: "text-primary",
  badges: "text-amber",
  levels: "text-primary",
} as const;

export function Habits() {
  return (
    <Section id="habits" eyebrow={habits.eyebrow} title={habits.title}>
      <div className="mx-auto mb-14 flex max-w-3xl justify-center gap-3 sm:gap-6">
        {habits.shots.map((shot, index) => (
          <Screenshot
            key={shot.name}
            name={shot.name}
            alt={shot.alt}
            sizes="(min-width: 768px) 230px, 30vw"
            className={cn(
              "min-w-0 max-w-[14.5rem] flex-1",
              index === 0 && "-rotate-3",
              index === 1 && "mt-10",
              index === 2 && "rotate-3"
            )}
          />
        ))}
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {(Object.keys(habits.cards) as (keyof typeof habits.cards)[]).map((key) => {
          const card = habits.cards[key];
          return (
            <li key={key} className="rounded-3xl border-2 border-border bg-white p-6">
              {/* A fixed slot, so the titles line up across the row. Not
                  hidden: "18 badges" is information, not decoration. */}
              <div className="flex h-12 items-baseline gap-1.5 pt-1">
                <span className={cn("font-display text-4xl leading-none font-extrabold", statColour[key])}>
                  {card.value}
                </span>
                <span className="font-bold text-foreground">{card.unit}</span>
              </div>
              <h3 className="mt-4 font-bold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
