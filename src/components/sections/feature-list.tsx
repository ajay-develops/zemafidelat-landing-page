import { Section } from "@/components/section";
import { siteConfig } from "@/lib/config";
import {
  AudioLinesIcon,
  AwardIcon,
  BellIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  FlameIcon,
  Gamepad2Icon,
  LayersIcon,
  LockIcon,
  type LucideIcon,
  PencilLineIcon,
  PuzzleIcon,
  RocketIcon,
  Share2Icon,
  StarIcon,
  TypeIcon,
  UsersIcon,
} from "lucide-react";

const { featureList } = siteConfig;

const icons: Record<string, LucideIcon> = {
  lessons: BookOpenIcon,
  letters: TypeIcon,
  voice: AudioLinesIcon,
  flashcards: LayersIcon,
  tracing: PencilLineIcon,
  games: Gamepad2Icon,
  matching: PuzzleIcon,
  daily: CalendarDaysIcon,
  xp: StarIcon,
  badges: AwardIcon,
  streaks: FlameIcon,
  reminders: BellIcon,
  profiles: UsersIcon,
  lock: LockIcon,
  guest: RocketIcon,
  share: Share2Icon,
};

export function FeatureList() {
  return (
    <Section
      id="features"
      eyebrow={featureList.eyebrow}
      title={featureList.title}
      description={featureList.text}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {featureList.items.map((item) => {
          const Icon = icons[item.icon] ?? StarIcon;
          return (
            <li key={item.title} className="rounded-3xl border-2 border-border bg-white p-6">
              <span
                aria-hidden
                className="flex size-12 items-center justify-center rounded-xl bg-mint text-primary"
              >
                <Icon className="size-6" />
              </span>
              <h3 className="mt-4 font-bold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
