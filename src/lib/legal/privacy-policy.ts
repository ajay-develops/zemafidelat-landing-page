import type { LegalDocument } from "@/lib/legal/types";

/*
 * Keep in step with the in-app copy in
 * zema-frontend/src/constants/privacy-content.ts. Change both together.
 * When what we collect about children changes, also bump
 * CONSENT_POLICY_VERSION in zema-backend/src/lib/parental-consent.ts.
 *
 * Text may contain **bold** markup. Full URLs and email addresses in the text
 * become links when rendered (src/components/legal/legal-rich-text.tsx).
 */
export const privacyPolicy = {
  title: "Zema Fidelat Privacy Policy",
  effectiveDate: "18 September 2026",
  lastUpdated: "20 October 2026",
  updatedAt: "2026-10-20",
  intro: [
    {
      type: "paragraph",
      text:
        "This policy explains what we collect, why, who handles it, how long we keep it, and how to see, change or delete it.",
    },
  ],
  sections: [
    {
      id: "the-short-version",
      title: "The short version",
      blocks: [
        {
          type: "bullets",
          items: [
            "Zema Fidelat is an app for learning the Tigrinya alphabet.",
            "An account is for a parent or guardian and needs their full name, email address and password. Each learner profile has a name, a built-in avatar and an optional age.",
            "We ask a parent for consent before saving any information about a child, and confirm it by email (section 13).",
            "Account progress is copied to our servers. Guest data stays on the device.",
            "No ads, purchases, chat or contact between users, analytics or tracking. We never sell or share children's information. The app doesn't use the camera or microphone, and pictures are built-in avatars only.",
            "Accounts nobody has used for 24 months are deleted (section 12). You can delete a profile or your account in the app or on the web, or ask us by email.",
          ],
        },
      ],
    },
    {
      id: "for-young-learners",
      title: "For young learners",
      blocks: [
        {
          type: "bullets",
          items: [
            "Your grown-up made your account and said it's OK for us to keep your learning.",
            "We keep your name, your age if you told us, the animal you picked, and how much you've learned.",
            "We use it only so you can keep learning, even on another phone.",
            "No one else can see it. We never show you ads or sell it.",
            "Your grown-up can change it or delete it any time.",
            "Some buttons ask a grown-up's question first, to keep you safe.",
          ],
        },
      ],
    },
    {
      id: "who-we-are",
      title: "1. Who we are",
      blocks: [
        {
          type: "paragraph",
          text:
            "Zema Fidelat (Zema Fidelat: Learn Tigrinya) is operated by Zien Tech Solutions LLC (\"we\", \"us\"), 2555 Windbreak Dr, Alexandria, VA 22306-2608, USA, phone +1 (202) 937-9321, email **hello@zemafidelat.com**. This policy covers the app, our account web pages at app.zemafidelat.com, and our website, zemafidelat.com.",
        },
      ],
    },
    {
      id: "information-from-the-account-holder",
      title: "2. Information from the account holder",
      blocks: [
        {
          type: "bullets",
          items: [
            "**Full name and email address** (required): to run the account, log in and send account emails such as password resets and consent confirmation.",
            "**Password** (required): stored only as a salted hash.",
            "**Parental consent:** that you confirmed you are 18 or older and the parent or legal guardian, when you consented, which version of this policy you agreed to, and when you confirmed by email.",
          ],
        },
        {
          type: "paragraph",
          text:
            "Our server also records account dates, when the account was last used, login sessions, recent failed logins and password-reset codes.",
        },
      ],
    },
    {
      id: "information-about-each-learner",
      title: "3. Information about each learner",
      blocks: [
        {
          type: "paragraph",
          text: "For each learner profile we collect:",
        },
        {
          type: "bullets",
          items: [
            "**name** (a nickname works);",
            "**age** (optional; you can clear it at any time in **Edit Profile**);",
            "**avatar:** which built-in picture you chose (section 6);",
            "**daily learning goal** (optional);",
            "**learning progress**, such as XP, streaks, scores and achievements.",
          ],
        },
        {
          type: "paragraph",
          text:
            "For accounts, progress is copied to our servers soon after each change so it can be restored on other devices. This can't be turned off.",
        },
      ],
    },
    {
      id: "using-the-app-as-a-guest",
      title: "4. Using the app as a guest",
      blocks: [
        {
          type: "paragraph",
          text:
            "With **Explore as Guest**, profiles and progress stay on the device and are not sent to us. Creating an account on that device uploads them; logging in to an existing account asks whether to import or discard them. We can't recover guest data if the app is removed or the device is lost.",
        },
      ],
    },
    {
      id: "information-that-stays-on-your-device",
      title: "5. Information that stays on your device",
      blocks: [
        {
          type: "bullets",
          items: [
            "**Never sent to us:** your place in a lesson, sound and notification settings, guest data, and letter-tracing drawings (checked in the app; only the result is saved). If a recording is missing, your device's built-in text-to-speech voice may read the word. This happens on your device and sends nothing to us.",
            "Login details and guest profiles are kept in the device's secure storage. After logging out, progress and settings stay on the device until the app is uninstalled. Deleting your account also removes every learner's progress and the app's saved pictures from the device.",
            "**iPhone and iPad:** guest profiles, and your login if you didn't log out, may survive removing the app and be reused on reinstall, so log out first.",
          ],
        },
      ],
    },
    {
      id: "photos",
      title: "6. Pictures",
      blocks: [
        {
          type: "paragraph",
          text:
            "Learner pictures are chosen from built-in animal avatars. We save only which picture you chose. The app does not access your photo library or camera, and doesn't upload photos.",
        },
      ],
    },
    {
      id: "microphone-and-camera",
      title: "7. Microphone and camera",
      blocks: [
        {
          type: "paragraph",
          text:
            "The app does not use the microphone or camera and does not ask for access to them.",
        },
      ],
    },
    {
      id: "notifications",
      title: "8. Notifications",
      blocks: [
        {
          type: "paragraph",
          text:
            "Reminders are optional and off until a parent turns them on (behind the parent question): a daily 7:00 pm reminder set on your device, without a learner's name. We send no push notifications. Turn reminders off in **Settings > Notifications** or device settings. Logging out or deleting your account also cancels the reminder.",
        },
      ],
    },
    {
      id: "sharing-progress",
      title: "9. Sharing progress",
      blocks: [
        {
          type: "paragraph",
          text:
            "**Share** buttons, protected by the parent question, make an image showing a learner's profile name, built-in avatar and progress, with a link to zemafidelat.com. It never includes an email address or photo. You choose where to send it from your device's share menu; choosing **Save Image** saves it to your photo library. We don't receive what you share and can't delete it.",
        },
      ],
    },
    {
      id: "how-we-use-information",
      title: "10. How we use information",
      blocks: [
        {
          type: "paragraph",
          text:
            "We use information to run Zema Fidelat: accounts, logins and password resets; recording and confirming parental consent; profiles and progress sync; reminders; share images; replying to emails; security, such as locking an account after failed logins; and warning account holders before an inactive account is deleted.",
        },
        {
          type: "paragraph",
          text:
            "No advertising IDs, location, contacts or marketing email, and no automated decisions with legal or similar effects.",
        },
        {
          type: "paragraph",
          text:
            "Where the law requires a legal reason, we rely on providing the service you asked for; your consent, including a parent's consent for each learner, which you can withdraw at any time; and our legitimate interest in security and replying to you.",
        },
      ],
    },
    {
      id: "who-handles-information-for-us",
      title: "11. Who handles information for us",
      blocks: [
        {
          type: "paragraph",
          text:
            "We use a small number of service providers to run Zema Fidelat: cloud hosting, a database and email delivery. They process information only on our instructions, under contracts that limit their use of it. They may log technical details such as your IP address and device type, and may process information in the United States and other countries, whose laws may differ from yours.",
        },
        {
          type: "paragraph",
          text:
            "Our administrators can see account and learner records. We don't sell or share children's information with anyone else. We may disclose information if the law requires it. Email us for a current list of our service providers.",
        },
      ],
    },
    {
      id: "how-long-we-keep-information",
      title: "12. How long we keep information",
      blocks: [
        {
          type: "bullets",
          items: [
            "**Account, profiles and progress:** until you delete them, or after 24 months without the account being used (signing in or syncing progress). We email the account holder 30 days before deleting an inactive account; signing in keeps it.",
            "**Login sessions:** 30 days after last use, or immediately on logout. Password-reset links expire after 1 hour.",
            "**Hosting logs:** at most one day. **Database backups:** we don't keep any, so deleted information can't be restored.",
            "**Emails you send us:** up to 24 months.",
          ],
        },
      ],
    },
    {
      id: "childrens-privacy",
      title: "13. Children's privacy",
      blocks: [
        {
          type: "bullets",
          items: [
            "Learners can be any age, but **accounts are for adults**: the account holder confirms they are 18 or older and the parent or legal guardian of the children who will use it.",
            "Before any learner information is saved to our servers, we give the account holder this notice and ask for their consent. We email a confirmation, which the parent confirms with a button on the linked page.",
            "We collect about a learner only what section 3 lists, never an email address, phone number, photo or location.",
            "Children cannot chat, add friends, contact other users, appear on leaderboards, see ads or make purchases.",
            "**The parent question** protects Settings, adding, switching, editing and deleting profiles, sharing, creating an account or logging in, and turning reminders on. It helps keep young children out of these areas but is not a security lock.",
            "Parents can review, edit or delete a learner's information in the app, ask us for a copy, or withdraw consent at any time (**Settings > Withdraw Consent**, or by email). Withdrawing consent deletes the account and every learner's information.",
            "We keep a written information security program and data retention policy for children's information.",
            "If a child created an account without a parent, email us and we will delete it.",
          ],
        },
      ],
    },
    {
      id: "deleting-information",
      title: "14. Deleting information",
      blocks: [
        {
          type: "subheading",
          id: "delete-one-learner-profile-in-the-app",
          text: "Delete one learner profile in the app",
        },
        {
          type: "paragraph",
          text:
            "Tap the profile picture on the Home screen, then **Switch Profile** > **Manage Profiles** > the profile > **Delete profile**, answering the parent question. For the current profile, you can also use **View Profile > EDIT PROFILE > Delete profile**. This deletes the profile and its progress from our servers. An account keeps at least one profile; to remove everything, delete the account.",
        },
        {
          type: "subheading",
          id: "delete-your-account-in-the-app",
          text: "Delete your account in the app",
        },
        {
          type: "steps",
          items: [
            "On the Home screen, tap the profile picture at the top right and choose **Settings**.",
            "Answer the parent question.",
            "Under **Danger Zone**, tap **Delete Account** (or **Withdraw Consent**, which does the same).",
            "Enter your password under **Confirm your password**, then tap **DELETE MY ACCOUNT**.",
          ],
        },
        {
          type: "paragraph",
          text:
            "Deletion is permanent. It normally happens at once; if anything stops it partway, it finishes automatically within 24 hours and the account can't be signed in to meanwhile. Forgot your password? Use **Forgot Password?** or email us.",
        },
        {
          type: "subheading",
          id: "delete-your-account-without-the-app",
          text: "Delete your account without the app",
        },
        {
          type: "paragraph",
          text:
            "Log in at app.zemafidelat.com, choose **Delete Account** on the dashboard and answer the parent question. Or email **hello@zemafidelat.com** from the account's email address. https://zemafidelat.com/delete-account explains what to include and what is deleted.",
        },
        {
          type: "subheading",
          id: "what-may-remain",
          text: "What may remain",
        },
        {
          type: "paragraph",
          text:
            "Settings on your device until the app is uninstalled (section 5), provider logs until they expire (section 12), and anything already shared. Uninstalling the app removes guest data.",
        },
      ],
    },
    {
      id: "how-we-protect-information",
      title: "15. How we protect information",
      blocks: [
        {
          type: "paragraph",
          text:
            "We use HTTPS, salted password hashes, secure device storage for your sign-in token, a 10-minute lock after 5 failed logins, and a password check before account deletion. Login sessions expire 30 days after last use and end on our server when you log out, change your password or delete your account. No system is completely secure, and we cannot guarantee security.",
        },
      ],
    },
    {
      id: "our-website-and-web-account-pages",
      title: "16. Our website and web account pages",
      blocks: [
        {
          type: "paragraph",
          text:
            "**zemafidelat.com** sets no cookies, uses no analytics or advertising tools, and embeds nothing from other companies.",
        },
        {
          type: "paragraph",
          text:
            "**app.zemafidelat.com** collects the same kinds of information as the app and uses one login cookie that is needed to keep you signed in. It asks the same consent at sign-up and the parent question before profile changes and account deletion.",
        },
      ],
    },
    {
      id: "your-rights-and-choices",
      title: "17. Your rights and choices",
      blocks: [
        {
          type: "paragraph",
          text:
            "Depending on where you live, you may have the right to access, correct, delete or copy your information, object to or restrict its use, and withdraw consent.",
        },
        {
          type: "bullets",
          items: [
            "**Correct:** **Settings > Edit Account Info**, **Change Password**, **Daily Goal**, or **Edit Profile**.",
            "**Delete:** section 14.",
            "**Withdraw consent:** **Settings > Withdraw Consent** (this deletes the account), or turn off reminders.",
            "**Copies and anything else:** email us, ideally from the account's email address so we can confirm it's yours. You may also be able to complain to your local data protection authority.",
          ],
        },
        {
          type: "paragraph",
          text:
            "**Where you live.** Zema Fidelat is available worldwide, and we give everyone the same protections. We ask a parent's consent for every learner profile, whatever the child's age or country.",
        },
        {
          type: "paragraph",
          text:
            "**UK and European Economic Area.** Zien Tech Solutions LLC is the data controller. We use information on the legal bases in section 10. Our providers may process information in the United States; where required, we rely on the EU-US Data Privacy Framework or the European Commission's standard contractual clauses. You can complain to your local data protection authority.",
        },
        {
          type: "paragraph",
          text:
            "**Brazil.** You have the rights in Article 18 of the LGPD, including confirmation, access, correction, deletion and information about sharing. Contact us at hello@zemafidelat.com.",
        },
        {
          type: "paragraph",
          text:
            "**Canada.** For children under 13, or under 14 in Quebec, we collect information only with a parent's consent.",
        },
        {
          type: "paragraph",
          text: "**Response time.** We reply to privacy requests within 30 days.",
        },
      ],
    },
    {
      id: "changes-to-this-policy",
      title: "18. Changes to this policy",
      blocks: [
        {
          type: "paragraph",
          text:
            "We will change the 'Last updated' date when we update this policy, and tell account holders, for example by email or in the app, before significant changes take effect. If a change affects what we collect about children, we will ask for consent again.",
        },
      ],
    },
    {
      id: "contact-us",
      title: "19. Contact us",
      blocks: [
        {
          type: "paragraph",
          text:
            "Email **hello@zemafidelat.com**, call +1 (202) 937-9321, or write to Zien Tech Solutions LLC, 2555 Windbreak Dr, Alexandria, VA 22306-2608, USA.",
        },
      ],
    },
  ],
} as const satisfies LegalDocument;
