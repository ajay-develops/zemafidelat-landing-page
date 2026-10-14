import { Section } from "@/components/section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const { howItWorks } = siteConfig;

/* Each step's card tint and its number badge, by the tone config names. */
const toneClasses = {
  leaf: { card: "bg-mint", badge: "bg-leaf" },
  sun: { card: "bg-cream", badge: "bg-sun" },
  sky: { card: "bg-sky", badge: "bg-sky-strong" },
} as const;

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow={howItWorks.eyebrow}
      title={howItWorks.title}
    >
      <ol className="grid gap-5 md:grid-cols-3">
        {howItWorks.steps.map((step, index) => {
          const tone = toneClasses[step.tone as keyof typeof toneClasses];
          return (
            <li key={step.title} className={cn("rounded-3xl p-8", tone.card)}>
              <span
                aria-hidden
                className={cn(
                  "flex size-12 items-center justify-center rounded-xl font-display text-xl font-extrabold text-forest",
                  tone.badge
                )}
              >
                {index + 1}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
