import { siteConfig } from "@/lib/config";
import { constructMetadata } from "@/lib/utils";
import type { Metadata } from "next";

export function getLegalPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    ...constructMetadata({
      title: `${title} | ${siteConfig.name}`,
      description,
      canonicalPath: path,
    }),
    // A plain string so the root layout's "%s | Zema Fidelat" template applies.
    title,
  };
}
