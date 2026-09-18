import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { getLegalPageMetadata } from "@/lib/legal/metadata";
import { privacyPolicy } from "@/lib/legal/privacy-policy";
import type { Metadata } from "next";

export const metadata: Metadata = getLegalPageMetadata({
  title: "Privacy Policy",
  description:
    "What information Zema Fidelat collects, why we collect it, who helps us handle it, how long we keep it, and how you can see, change or delete it.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalDocumentPage content={privacyPolicy} showContents />;
}
