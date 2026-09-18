import { siteConfig } from "@/lib/config";
import { deleteAccountGuide } from "@/lib/legal/delete-account";
import { privacyPolicy } from "@/lib/legal/privacy-policy";
import { termsAndConditions } from "@/lib/legal/terms";
import type { MetadataRoute } from "next";

const legalPages = [
  { path: "/privacy", updatedAt: privacyPolicy.updatedAt },
  { path: "/terms", updatedAt: termsAndConditions.updatedAt },
  { path: "/delete-account", updatedAt: deleteAccountGuide.updatedAt },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legalPages.map(({ path, updatedAt }) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(updatedAt),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
