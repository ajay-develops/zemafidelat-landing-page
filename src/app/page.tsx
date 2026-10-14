import { CTA } from "@/components/sections/cta";
import { DailyChallenge } from "@/components/sections/daily-challenge";
import { FAQ } from "@/components/sections/faq";
import { FeatureList } from "@/components/sections/feature-list";
import { FeatureRow } from "@/components/sections/feature-row";
import { FidelBand } from "@/components/sections/fidel-band";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/sections/gallery";
import { Habits } from "@/components/sections/habits";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Story } from "@/components/sections/story";
import { siteConfig } from "@/lib/config";
import {
  getHomepageMetadata,
  getStructuredDataScript,
} from "@/lib/structured-data";
import { constructMetadata } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = constructMetadata(getHomepageMetadata());

const [lessons, hearIt, writeIt, playIt] = siteConfig.featureRows;

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
        <Gallery />
        <FeatureRow row={lessons} flip />
        <FeatureRow row={hearIt} />
        <FeatureRow row={writeIt} flip />
        {/* Shares the cream band with the Daily Fidel Challenge below. */}
        <FeatureRow row={playIt} containerClassName="pb-8 md:pb-12" />
        <DailyChallenge />
        <Habits />
        <FeatureRow row={siteConfig.families} flip />
        <FeatureList />
        <Story />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
