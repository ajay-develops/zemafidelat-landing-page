import { Section } from "@/components/section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const { habits } = siteConfig;

function HabitCard({
  visual,
  title,
  text,
}: {
  visual: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <li className="rounded-3xl border-2 border-border bg-white p-6">
      {/* Same fixed slot as the game cards: the titles line up across the row. */}
      <div aria-hidden className="flex h-12 items-center">
        {visual}
      </div>
      <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
    </li>
  );
}

function Stat({ value, unit, className }: { value: string; unit: string; className: string }) {
  return (
    <span className="flex items-baseline gap-1.5">
      <span className={cn("font-display text-4xl leading-none font-extrabold", className)}>
        {value}
      </span>
      <span className="font-bold text-foreground">{unit}</span>
    </span>
  );
}

/* Three discs in a row; the profiles overlap like avatars. */
function Discs({ colours, overlap }: { colours: string[]; overlap?: boolean }) {
  return (
    <span className={cn("flex", overlap ? "-space-x-3" : "gap-2")}>
      {colours.map((colour) => (
        <span
          key={colour}
          className={cn("size-10 rounded-full", overlap && "ring-[3px] ring-white", colour)}
        />
      ))}
    </span>
  );
}

export function Habits() {
  const { cards } = habits;

  return (
    <Section id="habits" eyebrow={habits.eyebrow} title={habits.title}>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <HabitCard
          title={cards.streaks.title}
          text={cards.streaks.text}
          visual={<Stat value="6" unit="day streak" className="text-coral" />}
        />
        <HabitCard
          title={cards.goals.title}
          text={cards.goals.text}
          visual={<Stat value="15" unit="min goal" className="text-primary" />}
        />
        <HabitCard
          title={cards.badges.title}
          text={cards.badges.text}
          visual={<Discs colours={["bg-sun", "bg-leaf", "bg-sky-strong"]} />}
        />
        <HabitCard
          title={cards.profiles.title}
          text={cards.profiles.text}
          visual={
            <Discs
              overlap
              colours={["bg-peach", "bg-leaf-pale", "bg-sky-strong"]}
            />
          }
        />
      </ul>
    </Section>
  );
}
