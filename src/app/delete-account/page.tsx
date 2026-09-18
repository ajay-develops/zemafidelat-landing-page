import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { deleteAccountGuide } from "@/lib/legal/delete-account";
import { getLegalPageMetadata } from "@/lib/legal/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getLegalPageMetadata({
  title: "Delete your account",
  description:
    "How to delete a Zema Fidelat account and the information linked to it, in the app or by email if you no longer have the app.",
  path: "/delete-account",
});

export default function DeleteAccountPage() {
  return <LegalDocumentPage content={deleteAccountGuide} />;
}
