import { CTA } from "@/components/sections/cta";
import { DailyChallenge } from "@/components/sections/daily-challenge";
import { FAQ } from "@/components/sections/faq";
import { FidelBand } from "@/components/sections/fidel-band";
import { Footer } from "@/components/sections/footer";
import { Games } from "@/components/sections/games";
import { Habits } from "@/components/sections/habits";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Story } from "@/components/sections/story";
import {
  getHomepageMetadata,
  getStructuredDataScript,
} from "@/lib/structured-data";
import { constructMetadata } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = constructMetadata(getHomepageMetadata());

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript() }}
      />
      <Header />
      <main>
        <Hero />
        <FidelBand />
        <HowItWorks />
        <DailyChallenge />
        <Games />
        <Habits />
        <Story />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
