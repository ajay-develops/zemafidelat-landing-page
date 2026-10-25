import { siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";

export function getStructuredData() {
  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
  };

  const mobileApplication: Record<string, unknown> = {
    "@type": "MobileApplication",
    "@id": `${siteConfig.url}/#app`,
    name: siteConfig.name,
    operatingSystem: "Android",
    applicationCategory: "EducationalApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: siteConfig.heroDescription,
    // Add the App Store link once the iPhone version is live.
    downloadUrl: siteConfig.links.playStore,
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [website, mobileApplication, faqPage],
  };
}

export function getStructuredDataScript() {
  return JSON.stringify(getStructuredData()).replace(/</g, "\\u003c");
}

export function getHomepageMetadata() {
  return {
    title: `${siteConfig.name} | ${siteConfig.description}`,
    description: siteConfig.heroDescription,
    canonicalPath: "/",
    openGraph: {
      title: `${siteConfig.name} | ${siteConfig.description}`,
      description: siteConfig.heroDescription,
      url: absoluteUrl("/"),
    },
  };
}
