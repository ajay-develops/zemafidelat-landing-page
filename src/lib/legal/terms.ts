import type { LegalDocument } from "@/lib/legal/types";

/*
 * Keep in step with the in-app copy in
 * zema-frontend/src/constants/terms-content.ts. Change both together.
 *
 * Text may contain **bold** markup. Full URLs and email addresses in the text
 * become links when rendered (src/components/legal/legal-rich-text.tsx).
 */
export const termsAndConditions = {
  title: "Zema Fidelat Terms & Conditions",
  effectiveDate: "18 September 2026",
  lastUpdated: "18 September 2026",
  updatedAt: "2026-09-18",
  sections: [
    {
      id: "about-these-terms",
      title: "1. About these terms",
      blocks: [
        {
          type: "paragraph",
          text: "These terms are the rules for using two things:",
        },
        {
          type: "bullets",
          items: [
            "Zema Fidelat, an app for learning the Tigrinya (Ge'ez) alphabet;",
            "our account web pages at app.zemafidelat.com.",
          ],
        },
        {
          type: "paragraph",
          text:
            "In the app, these terms may also be called the Terms of Service. 'We' and 'us' mean the Zema Fidelat team.",
        },
        {
          type: "paragraph",
          text:
            "These terms apply whenever you use Zema Fidelat, with or without an account. If you do not agree with them, please do not use Zema Fidelat. If you set Zema Fidelat up for a child, these terms also cover the child's use.",
        },
        {
          type: "paragraph",
          text:
            "Our Privacy Policy, at https://zemafidelat.com/privacy, explains what information we collect and how we use it.",
        },
      ],
    },
    {
      id: "what-zema-fidelat-is",
      title: "2. What Zema Fidelat is",
      blocks: [
        {
          type: "paragraph",
          text: "Zema Fidelat teaches the Tigrinya (Ge'ez) alphabet, called fidel. It includes:",
        },
        {
          type: "bullets",
          items: [
            "lessons and letter tracing;",
            "flashcards, word games, word matching and daily challenges;",
            "XP, streaks and achievements to track progress.",
          ],
        },
        {
          type: "paragraph",
          text: "Zema Fidelat is currently free to use. It has no in-app purchases and no ads.",
        },
      ],
    },
    {
      id: "who-can-use-zema-fidelat",
      title: "3. Who can use Zema Fidelat",
      blocks: [
        {
          type: "bullets",
          items: [
            "Learners of any age are welcome.",
            "An account must be created by a parent, guardian or other adult. That person is the account holder and manages the account and its learner profiles.",
            "Children should use Zema Fidelat with the permission and supervision of a parent or guardian.",
            "The account holder is responsible for how learners use the profiles on their account.",
          ],
        },
      ],
    },
    {
      id: "your-account",
      title: "4. Your account",
      blocks: [
        {
          type: "bullets",
          items: [
            "Give accurate details. Keep your email address up to date so that password-reset emails reach you.",
            "Keep your password private. Learners do not need it to use their profiles.",
            "You are responsible for what happens on your account. If you think someone else has used it, change your password in **Settings > Change Password** and email us.",
            "**Guest mode:** if you use Zema Fidelat without an account, profiles and progress are kept only on that device. If the app is removed or the device is lost, they cannot be recovered.",
          ],
        },
      ],
    },
    {
      id: "acceptable-use",
      title: "5. Acceptable use",
      blocks: [
        {
          type: "paragraph",
          text: "When using Zema Fidelat, please do not:",
        },
        {
          type: "bullets",
          items: [
            "break any law;",
            "try to get into someone else's account, our servers, or any data you are not allowed to access, or try to get around our security;",
            "disrupt or overload the service, for example with automated requests or scraping;",
            "copy, sell or share the lessons, audio, images or software outside the app, or reverse-engineer the app, except where the law allows it;",
            "upload a photo you do not have the right to use;",
            "add a photo or profile name that is offensive or unsuitable for children;",
            "use Zema Fidelat for commercial purposes without our written permission.",
          ],
        },
        {
          type: "paragraph",
          text:
            "If a profile name, photo or account breaks these rules, we may change the name or picture, or delete the account.",
        },
      ],
    },
    {
      id: "who-owns-what",
      title: "6. Who owns what",
      blocks: [
        {
          type: "bullets",
          items: [
            "**Our content.** The lessons, letter and word recordings, pictures, characters, design and software in Zema Fidelat belong to us or to those who license them to us. Some parts, such as fonts, are used under their own licences.",
            {
              text:
                "**Your permission to use it.** We give you personal permission to use Zema Fidelat for your own learning or your family's learning, under these terms. This permission:",
              items: [
                "is not exclusive;",
                "cannot be transferred to anyone else;",
                "can be withdrawn by us.",
              ],
            },
            "**Your content.** Names and photos you add stay yours. You allow us to store and display them as needed to run Zema Fidelat for you, for example to show a learner's picture and to restore it on another device.",
            "**Uploaded photos are not private.** Anyone can find and view them, as the Privacy Policy explains. If you don't want that, use a built-in picture.",
            "**Feedback.** If you send us ideas or suggestions, we may use them without owing you anything.",
          ],
        },
      ],
    },
    {
      id: "learning-content-and-results",
      title: "7. Learning content and results",
      blocks: [
        {
          type: "bullets",
          items: [
            "We work to keep lessons and pronunciations accurate, but they may contain mistakes.",
            "If a recording is missing, the app uses your device's text-to-speech voice, which may not pronounce Tigrinya words correctly.",
            "Letter-tracing checks are automatic, so they can sometimes mark a letter wrongly.",
            "XP, streaks and 'minutes learned' are there to motivate learners. Minutes learned is an estimate.",
            "We cannot promise any particular learning result.",
          ],
        },
      ],
    },
    {
      id: "availability",
      title: "8. Availability",
      blocks: [
        {
          type: "bullets",
          items: [
            "Zema Fidelat is provided 'as is' and 'as available'. We do not promise that it will always be available, uninterrupted, or free of errors.",
            "Saving progress to your account needs an internet connection.",
            "We may change, add or remove features, or stop offering Zema Fidelat.",
          ],
        },
      ],
    },
    {
      id: "app-store-terms",
      title: "9. App store terms",
      blocks: [
        {
          type: "bullets",
          items: [
            "**Apple App Store or Google Play:** if you downloaded Zema Fidelat from one of these stores, that store's terms also apply. For the App Store, this includes Apple's standard Licensed Application End User License Agreement.",
            "Apple and Google are not responsible for Zema Fidelat or its content.",
            "**Other sources:** if you got the app another way, for example directly from zemafidelat.com, these terms apply.",
          ],
        },
      ],
    },
    {
      id: "ending-your-use",
      title: "10. Ending your use",
      blocks: [
        {
          type: "bullets",
          items: [
            "You can stop using Zema Fidelat at any time.",
            "To delete your account, go to **Settings > Danger Zone > Delete Account** in the app, or follow the steps at https://zemafidelat.com/delete-account. You cannot delete an account on the app.zemafidelat.com web pages.",
            {
              text: "Deleting your account permanently removes these from our servers:",
              items: [
                "the account;",
                "its learner profiles;",
                "their saved progress.",
              ],
            },
            "Some information may remain, as the Privacy Policy explains.",
            "We may delete an account that breaks these terms, or when the law requires it.",
          ],
        },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "11. Limitation of liability",
      blocks: [
        {
          type: "bullets",
          items: [
            "To the extent permitted by law, Zema Fidelat is provided without any warranties, whether express or implied.",
            {
              text: "To the extent permitted by law, we are not liable for:",
              items: [
                "indirect or consequential loss;",
                "lost progress or data, including guest data lost when the app is removed;",
                "losses caused by using Zema Fidelat, or by being unable to use it.",
              ],
            },
            {
              text: "Nothing in these terms limits:",
              items: [
                "rights you have under consumer protection law that cannot be excluded;",
                "any liability that the law does not allow us to limit.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "changes-to-these-terms",
      title: "12. Changes to these terms",
      blocks: [
        {
          type: "bullets",
          items: [
            "We may update these terms. When we do, we will change the 'Last updated' date at the top.",
            "If we make significant changes, we will let account holders know before the changes take effect, for example by email or in the app.",
            "If you keep using Zema Fidelat after changes take effect, the updated terms apply to you.",
          ],
        },
      ],
    },
    {
      id: "contact",
      title: "13. Contact",
      blocks: [
        {
          type: "paragraph",
          text: "Questions about these terms: **hello@zemafidelat.com**",
        },
      ],
    },
  ],
} as const satisfies LegalDocument;
