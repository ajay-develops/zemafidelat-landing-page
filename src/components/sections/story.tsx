import { Section, SectionHeading } from "@/components/section";
import { siteConfig } from "@/lib/config";

const { story } = siteConfig;

export function Story() {
  return (
    <Section id="story" className="bg-forest">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <SectionHeading
          eyebrow={story.eyebrow}
          title={story.title}
          description={story.text}
          tone="forest"
        />
        {/* A plain 2 × 2 grid of equal cards — the design's fourth card had a
            stray shape bleeding out of it. */}
        <dl className="grid auto-rows-fr grid-cols-2 gap-4">
          {story.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col rounded-3xl bg-forest-soft p-6">
              <dt className="order-2 mt-1 text-sm text-white/85">{stat.label}</dt>
              <dd className="order-1 font-display text-4xl font-extrabold text-sun">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
