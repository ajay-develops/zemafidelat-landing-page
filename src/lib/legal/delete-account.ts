import type { LegalDocument } from "@/lib/legal/types";

/*
 * The account deletion page. The in-app Privacy Policy and Terms
 * (zema-frontend/src/constants/privacy-content.ts and terms-content.ts) link
 * here, so keep the /delete-account route stable.
 *
 * Text may contain **bold** markup. Full URLs and email addresses in the text
 * become links when rendered (src/components/legal/legal-rich-text.tsx).
 */
export const deleteAccountGuide = {
  title: "Delete your Zema Fidelat account",
  lastUpdated: "18 September 2026",
  updatedAt: "2026-09-18",
  intro: [
    {
      type: "paragraph",
      text:
        "This page is for Zema Fidelat: Learn Tigrinya, an app for learning the Tigrinya (Ge'ez) alphabet. It explains how to delete a Zema Fidelat account and the information linked to it. You can do it in the app, or by email if you no longer have the app.",
    },
  ],
  sections: [
    {
      id: "option-1-delete-your-account-in-the-app",
      title: "Option 1: Delete your account in the app",
      blocks: [
        {
          type: "paragraph",
          text: "**You need:**",
        },
        {
          type: "bullets",
          items: [
            "the app installed;",
            "to be logged in to the account;",
            "your password.",
          ],
        },
        {
          type: "paragraph",
          text: "**Steps:**",
        },
        {
          type: "steps",
          items: [
            "On the Home screen, tap the profile picture at the top right and choose **Settings**.",
            "Answer the parent question ('Ask a parent to solve this simple question to continue').",
            "Under **Danger Zone**, tap **Delete Account**.",
            "Enter your password under **Confirm your password**.",
            "Tap **DELETE MY ACCOUNT**.",
          ],
        },
        {
          type: "paragraph",
          text: "The account is deleted straight away, and this cannot be undone.",
        },
        {
          type: "paragraph",
          text:
            "**If the app shows an error,** check your password and try again. If it still fails, use Option 2, because the account may have been only partly deleted.",
        },
        {
          type: "paragraph",
          text: "**Forgotten your password?**",
        },
        {
          type: "steps",
          items: [
            "Tap **Forgot Password?** on the log-in screen to get a reset link by email. The link works for 1 hour.",
            "Set a new password.",
            "Follow the steps above.",
          ],
        },
        {
          type: "paragraph",
          text: "Or use Option 2 instead.",
        },
        {
          type: "paragraph",
          text:
            "**Before you delete:** deleting the account does not cancel daily reminders. Turn them off first in **Settings > Notifications**.",
        },
        {
          type: "paragraph",
          text: "The web pages at app.zemafidelat.com do not have an option to delete an account.",
        },
      ],
    },
    {
      id: "option-2-ask-us-by-email-no-app-needed",
      title: "Option 2: Ask us by email (no app needed)",
      blocks: [
        {
          type: "paragraph",
          text: "Send an email to **hello@zemafidelat.com** with:",
        },
        {
          type: "bullets",
          items: [
            "the subject line **Delete my account**;",
            "the **email address of the Zema Fidelat account** you want deleted;",
            "if you also joined the waitlist on zemafidelat.com and want that sign-up removed, a note saying so;",
            "if you want photos removed that a profile no longer uses, which profile used them and roughly when they were uploaded.",
          ],
        },
        {
          type: "paragraph",
          text: "**Confirming it's you**",
        },
        {
          type: "bullets",
          items: [
            "If you can, send the email from the account's email address. This helps us confirm the account is yours.",
            "If you can't, we may ask you some questions before we delete anything.",
            "Never send us your password.",
          ],
        },
        {
          type: "paragraph",
          text:
            "A person handles email requests, so they are not immediate. Option 1, in the app, is the fastest way. We will reply to the account's email address when the account has been deleted.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      title: "What is deleted",
      blocks: [
        {
          type: "paragraph",
          text: "When an account is deleted, we permanently remove the following from our servers:",
        },
        {
          type: "bullets",
          items: [
            "**The account:** full name, email address, phone number (if one was added), password hash and login session records.",
            "**Every learner profile on the account:** name, age, picture choice and daily goal.",
            "**Learning progress:** all progress saved to our servers for those profiles.",
            "**Current photos:** the photo each profile is using at the time, from our database and from our photo storage provider.",
          ],
        },
      ],
    },
    {
      id: "what-may-remain",
      title: "What may remain",
      blocks: [
        {
          type: "bullets",
          items: [
            {
              text:
                "**On your device.** Deleting the account logs you out, but these stay in the app on that device until you uninstall it:",
              items: [
                "learning progress;",
                "app settings;",
                "temporary copies of pictures;",
                "any daily reminder.",
              ],
            },
            {
              text:
                "**Photos no longer used by a profile.** Deleting the account does not remove photos that were:",
              items: [
                "replaced by another photo;",
                "swapped for a built-in picture;",
                "uploaded but never saved to a profile.",
              ],
              trailingParagraph:
                "These photos are not linked to your account in our records, so we may not be able to find them. Tell us what you can about them in your email.",
            },
            "**Photo files that failed to delete.** If our photo storage provider fails to delete a file, the file can stay in storage.",
            {
              text:
                "**Our providers' records.** Our providers keep some copies under their own rules:",
              items: [
                "password-reset emails already sent stay in your inbox and in our email provider's records;",
                "hosting request logs for our server are currently kept for no more than one day;",
                "any backups our database and storage providers keep.",
              ],
            },
            "**Emails you sent us.** They stay in our mailbox unless you ask us to delete them.",
            "**Anything shared with the Share buttons.** We cannot reach copies you sent to other apps or people.",
            "**Your waitlist sign-up** on zemafidelat.com. It is kept separately from your account, so ask us to remove it.",
          ],
        },
      ],
    },
    {
      id: "guest-mode-no-account",
      title: "Guest mode (no account)",
      blocks: [
        {
          type: "paragraph",
          text:
            "If you used Zema Fidelat as a guest, nothing is stored on our servers. Guest data is only on your device.",
        },
        {
          type: "bullets",
          items: [
            "**Delete a single guest profile:** go to **View Profile > EDIT PROFILE > Delete profile**. This works for any guest profile except the last one. A copy of the profile's photo may stay in the app's temporary files.",
            "**Remove all guest data:** uninstall the app.",
            "**iPhone and iPad:** guest profile details kept in the device's secure storage may stay on the device after the app is removed. They may reappear if the app is installed again.",
          ],
        },
      ],
    },
    {
      id: "deleting-just-one-learner-profile",
      title: "Deleting just one learner profile",
      blocks: [
        {
          type: "paragraph",
          text: "To delete any profile in the app:",
        },
        {
          type: "steps",
          items: [
            "On the Home screen, tap the profile picture at the top right and choose **Switch Profile**.",
            "Answer the parent question.",
            "Tap **Manage Profiles**, then tap the profile.",
            "Tap **Delete profile** and answer the parent question again.",
          ],
        },
        {
          type: "paragraph",
          text:
            "For the profile you are using now, you can also go to **View Profile > EDIT PROFILE > Delete profile**.",
        },
        {
          type: "paragraph",
          text:
            "**What this deletes:** that profile, its progress and its current uploaded photo, from our servers. Progress saved in the app on that device stays until you uninstall the app.",
        },
        {
          type: "bullets",
          items: [
            "**In the app,** an account must keep at least one profile.",
            "**On the web pages at app.zemafidelat.com,** you can delete any profile, including the last one.",
          ],
        },
      ],
    },
    {
      id: "more-information",
      title: "More information",
      blocks: [
        {
          type: "paragraph",
          text:
            "Our Privacy Policy, at https://zemafidelat.com/privacy, explains what we collect and how long we keep it. If you have questions, email **hello@zemafidelat.com**.",
        },
      ],
    },
  ],
} as const satisfies LegalDocument;
