import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { getLegalPageMetadata } from "@/lib/legal/metadata";
import { termsAndConditions } from "@/lib/legal/terms";
import type { Metadata } from "next";

export const metadata: Metadata = getLegalPageMetadata({
  title: "Terms & Conditions",
  description:
    "The rules for using Zema Fidelat, an app for learning the Tigrinya (Ge'ez) alphabet, and its account web pages.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalDocumentPage content={termsAndConditions} showContents />;
}
