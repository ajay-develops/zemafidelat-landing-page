/* eslint-disable @next/next/no-img-element */
import { WaitlistForm } from "@/components/waitlist-form";
import { siteConfig } from "@/lib/config";

export function CTA() {
  return (
    <section id="cta">
      <div className="py-14">
        <div className="container flex w-full flex-col items-center justify-center p-4 mx-auto max-w-[var(--max-container-width)]">
          <div className="relative flex w-full max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border p-10 py-14">
            <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32 flex items-center justify-center">
              <img
                src={siteConfig.logoUi}
                alt={siteConfig.name}
                width={256}
                height={205}
                loading="lazy"
                decoding="async"
                className="size-16 lg:size-24 object-contain"
              />
            </div>
            <div className="z-10 mt-4 flex w-full max-w-md flex-col items-center text-center text-black dark:text-white">
              <h2 className="text-3xl font-bold lg:text-4xl">
                Be first when the APK drops.
              </h2>
              <p className="mt-2 mb-4">
                {siteConfig.waitlistHint}
              </p>
              <WaitlistForm
                showHint={false}
                variant="compact"
                className="w-full"
                inputClassName="bg-background/90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
