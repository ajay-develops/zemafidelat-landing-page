import { cn } from "@/lib/utils";

/*
 * Drawn phone screens for the landing page, after the client's design.
 *
 * Each phone is a size container and everything inside is sized in `cqw`
 * (percent of the phone's width), so a phone scales as one picture: the hero
 * can shrink it on a small screen without the text inside reflowing or
 * spilling out of its frame.
 *
 * They are illustrations. Every mockup is one image to assistive technology
 * (role="img" plus a label); the words inside are decoration.
 */

function PhoneFrame({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  // Two boxes: `cqw` resolves against the nearest container *ancestor*, so the
  // frame's own border and corners need the outer box to be that container.
  return (
    <div className={cn("@container", className)}>
      <div className="size-full overflow-hidden rounded-[13cqw] border-[2.6cqw] border-forest bg-white shadow-[0_24px_60px_-20px_color-mix(in_oklab,var(--forest)_45%,transparent)]">
        {children}
      </div>
    </div>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-[2.4cqw] w-full rounded-full bg-muted">
      <div
        className="h-full rounded-full bg-leaf"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function ScreenTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-[5.6cqw] font-bold text-foreground">
      {children}
    </p>
  );
}

/* A chunky 3D button, as the app draws its main actions. */
function AppButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[4cqw] bg-leaf py-[3.6cqw] text-center text-[5cqw] font-bold text-forest shadow-[0_1.6cqw_0_0_var(--primary)]">
      {children}
    </div>
  );
}

function PathNode({
  glyph,
  state,
  className,
}: {
  glyph: string;
  state: "done" | "current";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute flex items-center justify-center rounded-full border-[1.6cqw] border-white font-ethiopic font-bold",
        state === "done"
          ? "size-[20cqw] bg-primary text-[8cqw] text-white"
          : "size-[24cqw] bg-sun text-[9cqw] text-forest shadow-[0_0_0_3cqw_color-mix(in_oklab,var(--sun)_35%,transparent)]",
        className
      )}
    >
      {glyph}
    </div>
  );
}

export function LearningPathPhone({ className }: { className?: string }) {
  return (
    <PhoneFrame className={cn("aspect-[9/17]", className)}>
      <div className="flex h-full flex-col">
        <div className="space-y-[3cqw] px-[7cqw] pt-[9cqw] pb-[4cqw]">
          <ScreenTitle>Your Learning Path</ScreenTitle>
          <ProgressBar value={62} />
          <div className="flex items-center justify-between">
            <span className="text-[4cqw] font-medium text-muted-foreground">
              Level 2
            </span>
            <span className="rounded-full bg-coral px-[3cqw] py-[1cqw] text-[3.8cqw] font-bold text-white">
              6-day streak
            </span>
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden bg-sky">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 size-full"
            aria-hidden
          >
            <path d="M-10 62 Q 40 30 110 50 L110 110 L-10 110 Z" fill="var(--leaf-pale)" />
            <path d="M-10 78 Q 50 58 110 72 L110 110 L-10 110 Z" fill="var(--leaf)" />
          </svg>
          <PathNode glyph="ሀ" state="done" className="left-[22%] top-[12%]" />
          <PathNode glyph="ለ" state="done" className="right-[16%] top-[38%]" />
          <PathNode glyph="ሐ" state="current" className="left-[30%] top-[64%]" />
        </div>
      </div>
    </PhoneFrame>
  );
}

export function TracePhone({ className }: { className?: string }) {
  return (
    <PhoneFrame className={cn("aspect-[9/17]", className)}>
      <div className="flex h-full flex-col gap-[4cqw] px-[7cqw] pt-[9cqw] pb-[8cqw]">
        <ScreenTitle>Trace the letter</ScreenTitle>
        <ProgressBar value={24} />
        <div className="flex items-center gap-[3cqw]">
          <div className="flex size-[15cqw] items-center justify-center rounded-[3.5cqw] border-[0.8cqw] border-border font-ethiopic text-[8cqw] font-bold text-forest">
            ሀ
          </div>
          <p className="text-[4.4cqw] text-muted-foreground">
            “hä” · as in{" "}
            <span className="font-ethiopic font-bold text-forest">ሀገር</span>
          </p>
        </div>
        <div className="relative flex flex-1 items-center justify-center rounded-[5cqw] border-[0.8cqw] border-dashed border-leaf-pale bg-mint/60">
          <span className="font-ethiopic text-[52cqw] leading-none font-medium text-leaf-pale">
            ሀ
          </span>
          {/* Where the first stroke starts. */}
          <span className="absolute left-[30%] top-[27%] size-[8cqw] rounded-full bg-sky-strong shadow-[0_0_0_2.5cqw_color-mix(in_oklab,var(--sky-strong)_35%,transparent)] ring-[1cqw] ring-white" />
        </div>
        <AppButton>Check</AppButton>
      </div>
    </PhoneFrame>
  );
}

function LetterTile({
  glyph,
  state = "idle",
}: {
  glyph?: string;
  state?: "idle" | "placed" | "empty";
}) {
  return (
    <div
      className={cn(
        "flex size-[17cqw] items-center justify-center rounded-[3.5cqw] font-ethiopic text-[8cqw] font-bold",
        state === "placed" && "bg-leaf text-forest shadow-[0_1.2cqw_0_0_var(--primary)]",
        state === "empty" && "border-[0.8cqw] border-dashed border-muted-foreground/40 bg-muted",
        state === "idle" && "border-[0.8cqw] border-border bg-white text-forest shadow-[0_1.2cqw_0_0_var(--border)]"
      )}
    >
      {glyph}
    </div>
  );
}

/*
 * The design's example was ሩባ for "River", which is not a word in the app.
 * ልቢ (heart) is — and a heart is a picture nobody misreads.
 */
export function DailyChallengePhone({ className }: { className?: string }) {
  return (
    <PhoneFrame className={cn("aspect-[9/16]", className)}>
      <div className="flex h-full flex-col gap-[5cqw] px-[7cqw] pt-[9cqw] pb-[8cqw]">
        <ScreenTitle>Daily Fidel Challenge</ScreenTitle>
        <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-[5cqw] bg-sky">
          <span className="absolute left-[4cqw] top-[4cqw] rounded-full bg-white px-[3cqw] py-[1.2cqw] text-[4cqw] font-bold text-forest">
            Clue: Heart
          </span>
          <svg viewBox="0 0 24 24" className="mt-[6cqw] w-[36%]" aria-hidden>
            <path
              d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.1 4.3 2.5h2c.7-1.4 2.2-2.5 4.3-2.5 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21Z"
              fill="var(--coral)"
            />
          </svg>
        </div>
        <div className="flex justify-center gap-[3cqw]">
          <LetterTile glyph="ል" state="placed" />
          <LetterTile state="empty" />
        </div>
        <div className="flex justify-center gap-[3cqw]">
          <LetterTile glyph="ባ" />
          <LetterTile glyph="ቢ" />
          <LetterTile glyph="ሳ" />
        </div>
        <AppButton>Check answer</AppButton>
      </div>
    </PhoneFrame>
  );
}
