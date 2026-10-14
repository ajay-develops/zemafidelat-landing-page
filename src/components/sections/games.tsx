import { Section, SectionHeading } from "@/components/section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const { games } = siteConfig;

/* The mini crossword: which of the 4 × 2 cells are filled in. */
const crosswordCells = [true, true, true, false, false, true, false, false];

function GameCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <li className="rounded-3xl bg-white p-6">
      {/* A fixed-height slot, so every title starts on the same line whatever
          the picture above it — the design's row of cards did not. */}
      <div aria-hidden className="flex h-12 items-end">
        {icon}
      </div>
      <h3 className="mt-4 font-bold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{text}</p>
    </li>
  );
}

export function Games() {
  const { cards } = games;

  return (
    <Section id="games" className="bg-cream" containerClassName="md:pt-12">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading
          eyebrow={games.eyebrow}
          title={games.title}
          description={games.text}
          tone="cream"
          className="lg:order-2"
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          <GameCard
            title={cards.flashcards.title}
            text={cards.flashcards.text}
            icon={
              <span className="font-ethiopic text-4xl leading-none font-bold text-primary">
                ቤት
              </span>
            }
          />
          <GameCard
            title={cards.tracing.title}
            text={cards.tracing.text}
            icon={
              <span className="font-ethiopic text-4xl leading-none font-bold text-sky-strong">
                ሀ
              </span>
            }
          />
          <GameCard
            title={cards.wordMatch.title}
            text={cards.wordMatch.text}
            icon={
              <span className="flex items-center gap-2">
                <span className="font-ethiopic text-2xl leading-none font-bold text-foreground">
                  ላም
                </span>
                <span className="rounded-lg bg-mint px-2.5 py-1 text-sm font-bold text-foreground">
                  Cow
                </span>
                <span className="rounded-lg bg-muted px-2.5 py-1 text-sm text-muted-foreground">
                  Lemon
                </span>
              </span>
            }
          />
          <GameCard
            title={cards.crossword.title}
            text={cards.crossword.text}
            icon={
              <span className="grid grid-cols-4 gap-1">
                {crosswordCells.map((filled, index) => (
                  <span
                    key={index}
                    className={cn(
                      "size-5 rounded-[5px]",
                      filled ? "bg-sun" : "bg-muted"
                    )}
                  />
                ))}
              </span>
            }
          />
        </ul>
      </div>
    </Section>
  );
}
