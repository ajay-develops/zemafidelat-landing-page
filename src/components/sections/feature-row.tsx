import { Screenshot } from "@/components/screenshot";
import { Section, SectionHeading } from "@/components/section";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

export type FeatureRowContent = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  bullets: readonly string[];
  shots: readonly { name: string; alt: string }[];
  surface: string;
};

const surfaces = {
  white: { band: "bg-background", tone: "white", tick: "bg-mint" },
  mint: { band: "bg-mint", tone: "white", tick: "bg-white" },
  cream: { band: "bg-cream", tone: "cream", tick: "bg-white" },
} as const;

/**
 * A feature told in one row: heading, lead and ticks on one side, one or two
 * real screenshots on the other. `flip` puts the pictures first on wide
 * screens, so consecutive rows alternate; on phones the copy always leads.
 */
export function FeatureRow({
  row,
  flip = false,
  containerClassName,
}: {
  row: FeatureRowContent;
  flip?: boolean;
  containerClassName?: string;
}) {
  const surface = surfaces[row.surface as keyof typeof surfaces] ?? surfaces.white;
  const pair = row.shots.length > 1;

  return (
    <Section id={row.id} className={surface.band} containerClassName={containerClassName}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={cn(flip && "lg:order-2")}>
          <SectionHeading
            eyebrow={row.eyebrow}
            title={row.title}
            description={row.text}
            tone={surface.tone}
          />
          <ul className="mt-8 space-y-3">
            {row.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 font-medium leading-relaxed text-foreground">
                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-primary",
                    surface.tick
                  )}
                >
                  <CheckIcon className="size-3.5" strokeWidth={3} />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={cn(
            "mx-auto flex w-full justify-center gap-4 sm:gap-6",
            pair ? "max-w-[34rem]" : "max-w-[17rem]",
            flip && "lg:order-1"
          )}
        >
          {row.shots.map((shot, index) => (
            <Screenshot
              key={shot.name}
              name={shot.name}
              alt={shot.alt}
              sizes={pair ? "(min-width: 1024px) 260px, 45vw" : "(min-width: 1024px) 272px, 70vw"}
              className={cn(
                // min-w-0: a flex item will not shrink below its intrinsic
                // width otherwise, and two 260px phones spilled out at 1024.
                "min-w-0 max-w-[16.25rem] flex-1",
                // A pair steps down and leans apart, like two phones on a table.
                pair && (index === 0 ? "-rotate-3" : "mt-12 rotate-3"),
                !pair && "rotate-2"
              )}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
