import type { LegalDocument } from "@/lib/legal/types";

/*
 * Keep in step with the in-app copy in
 * zema-frontend/src/constants/privacy-content.ts. Change both together.
 *
 * Text may contain **bold** markup. Full URLs and email addresses in the text
 * become links when rendered (src/components/legal/legal-rich-text.tsx).
 */
export const privacyPolicy = {
  title: "Zema Fidelat Privacy Policy",
  effectiveDate: "18 September 2026",
  lastUpdated: "18 September 2026",
  updatedAt: "2026-09-18",
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
            "Zema Fidelat is an app for learning the Tigrinya (Ge'ez) alphabet.",
            "An account needs the account holder's full name, email address and password. Each learner profile has a name, a picture and an optional age.",
            "Account progress is copied to our servers. Guest data stays on the device.",
            "No ads, purchases, chat or contact between users, analytics or tracking. We do not sell personal information. The app does not record audio or use the camera.",
            "**Uploaded photos:** only your account can see them, but anyone who is given a photo's unpublished web address can open it. Built-in pictures upload nothing (section 6).",
            "You can delete a profile or your account in the app, or ask us by email.",
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
            "Zema Fidelat (Zema Fidelat: Learn Tigrinya) is run by the Zema Fidelat team (\"we\", \"us\"). This policy covers the app, our account web pages at app.zemafidelat.com, and our website, zemafidelat.com. Privacy questions and requests: **hello@zemafidelat.com**.",
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
            "**Full name and email address** (required): to run the account, log in and send password-reset emails.",
            "**Password** (required): stored only as a salted hash.",
            "**Phone number** (optional): no feature uses it. Change or remove it in **Settings > Edit Account Info**.",
          ],
        },
        {
          type: "paragraph",
          text:
            "Our server also records account dates, login sessions, recent failed logins and password-reset codes.",
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
            "**age** (optional when creating a profile, but **Edit Profile** needs one to save changes; once saved, email us to remove it);",
            "**picture:** built-in or a photo (section 6);",
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
            "**Never sent to us:** your place in a lesson, sound and notification settings, guest data, temporary picture copies, and letter-tracing drawings (checked in the app; only the result is saved). Your device's own text-to-speech may read lesson words.",
            "Login details and guest profiles are kept in the device's secure storage. After logging out or deleting your account, progress, settings, picture copies and any reminder stay on the device until the app is uninstalled.",
            "**iPhone and iPad:** guest profiles, and your login if you didn't log out, may survive removing the app and be reused on reinstall, so log out first.",
          ],
        },
      ],
    },
    {
      id: "photos",
      title: "6. Photos",
      blocks: [
        {
          type: "paragraph",
          text:
            "With your permission, the app uses only the one photo you pick from your library, never the camera. Account photos are stored in the United States by UploadThing, as received, so they may include details such as where the photo was taken. Guest photos stay on the device.",
        },
        {
          type: "paragraph",
          text: "**Who can see uploaded photos**",
        },
        {
          type: "bullets",
          items: [
            "Only your account, and our administrators, can see your uploaded photos through our server. Other accounts, and people who are not logged in, cannot list them or look them up.",
            "Each photo file is stored at a long, random web address and is not protected by a password. We don't publish or share these addresses, but anyone who is given one can open that photo.",
            "A built-in picture uploads nothing: we only save which picture you chose.",
          ],
        },
        {
          type: "paragraph",
          text:
            "**Photos no longer used** (replaced or never saved) stay in storage, even after deleting a profile or account. Email us which profile used one and roughly when, and we will try to find it.",
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
            "No feature uses the microphone or camera, and the app never asks for access. The app's technical setup still lists these permissions, so your device or an app store may mention them.",
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
            "Reminders are optional: a daily 7:00 pm reminder set on your device, without a learner's name. We send no push notifications. Turn reminders off in **Settings > Notifications** or device settings; logging out or deleting your account does not cancel one already set.",
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
            "**Share** buttons make an image that can show a learner's name, picture or photo and progress, add a link to zemafidelat.com, and open your device's share menu. The **View Profile** image also shows the account's email address. A learner can use Share without the parent question. We don't receive what you share and can't delete it.",
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
            "We use information to run Zema Fidelat: accounts, logins and password resets; profiles and progress sync; reminders; share images; replying to emails; security, such as locking an account after failed logins; and emailing the website waitlist when the Android app is ready.",
        },
        {
          type: "paragraph",
          text:
            "No advertising IDs, location, contacts or marketing email, and no automated decisions with legal or similar effects.",
        },
        {
          type: "paragraph",
          text:
            "Where the law requires a legal reason, we rely on providing the service you asked for, your consent (photos, notifications, optional details), which you can withdraw at any time, and our legitimate interest in security and replying to you.",
        },
      ],
    },
    {
      id: "who-handles-information-for-us",
      title: "11. Who handles information for us",
      blocks: [
        {
          type: "bullets",
          items: [
            "**Vercel:** hosts our server and website. It stored uploaded photos until September 2026.",
            "**MongoDB Atlas (MongoDB, Inc.):** database for accounts, password hashes, profiles, progress and photo records.",
            "**UploadThing:** stores uploaded photos.",
            "**Network Solutions:** our email, including password-reset emails.",
            "**Supabase:** the website waitlist.",
          ],
        },
        {
          type: "paragraph",
          text:
            "Our administrators can see account and learner records. On iPhone and iPad, the app may contact Google to check you are online, sending no account information. We may disclose information if the law requires it.",
        },
        {
          type: "paragraph",
          text:
            "Providers may log your IP address and user agent, and may process information in the United States and other countries, whose laws may differ from yours.",
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
            "**Account, profiles, progress and current photos:** until you delete them or the account. We don't currently delete inactive accounts automatically.",
            "**Login sessions:** removed when the account is deleted. Password-reset links expire after 1 hour.",
            "**Unused photos:** not deleted automatically (section 6).",
            "**Hosting logs:** currently at most one day. **Email records and backups:** our providers' own retention periods.",
            "**Emails you send us:** until deleted. **Waitlist sign-ups:** until you ask us to remove yours.",
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
            "Learners can be any age, but **accounts are for adults**: a parent, guardian or other adult should create the account and manage profiles. The app does not check age.",
            "We collect about a learner only what section 3 lists, never an email address, phone number or location.",
            "Children cannot chat, add friends, contact other users, appear on leaderboards, see ads or make purchases.",
            "**The parent question** (a simple sum) guards **Settings** and switching, adding and deleting profiles. It is **not a strong lock**. It does not cover Share, **Create free account**, or **EDIT PROFILE**, where a learner can change the name, age and picture, including choosing a photo.",
            "Parents can edit or delete a learner's information, or email us for a copy or to stop collection. If a child created an account without a parent, email us and we will delete it.",
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
            "Tap the profile picture on the Home screen, then **Switch Profile** > **Manage Profiles** > the profile > **Delete profile**, answering the parent question. For the current profile, you can also use **View Profile > EDIT PROFILE > Delete profile**. This deletes the profile, its progress and current photo from our servers. In the app, an account must keep at least one profile.",
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
            "Under **Danger Zone**, tap **Delete Account**.",
            "Enter your password under **Confirm your password**, then tap **DELETE MY ACCOUNT**.",
          ],
        },
        {
          type: "paragraph",
          text:
            "Deletion is immediate and permanent. If you see an error, retry, then email us. Forgot your password? Use **Forgot Password?** or email us.",
        },
        {
          type: "subheading",
          id: "delete-your-account-without-the-app",
          text: "Delete your account without the app",
        },
        {
          type: "paragraph",
          text:
            "Email **hello@zemafidelat.com** from the account's email address. https://zemafidelat.com/delete-account explains what to include and what is deleted.",
        },
        {
          type: "subheading",
          id: "what-may-remain",
          text: "What may remain",
        },
        {
          type: "paragraph",
          text:
            "Data on your device (section 5), unused photos (section 6), provider logs and backups (section 12), and anything already shared. Uninstalling the app removes guest data.",
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
            "We use HTTPS, salted password hashes, secure device storage for your sign-in token, a 10-minute lock after 5 failed logins, and a password check before account deletion. Login sessions expire 60 days after they were last renewed; logging out does not end the session on our server. No system is completely secure, and we cannot guarantee security.",
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
            "**zemafidelat.com** sets no cookies, uses no analytics or advertising tools, and embeds nothing from other companies. The waitlist stores your email address, optional name and sign-up date with Supabase; email us to be removed.",
        },
        {
          type: "paragraph",
          text:
            "**app.zemafidelat.com** (still named 'Zema Language Learning', as are password-reset emails) collects the same kinds of information as the app, uses a login cookie, and has no parent question.",
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
            "**Withdraw consent:** turn off reminders, remove photo access in device settings, remove your phone number, or leave the waitlist.",
            "**Copies and anything else:** email us, ideally from the account's email address so we can confirm it's yours. You may also be able to complain to your local data protection authority.",
          ],
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
            "We will change the 'Last updated' date when we update this policy, and tell account holders, for example by email or in the app, before significant changes take effect.",
        },
      ],
    },
    {
      id: "contact-us",
      title: "19. Contact us",
      blocks: [
        {
          type: "paragraph",
          text: "Email: **hello@zemafidelat.com**",
        },
      ],
    },
  ],
} as const satisfies LegalDocument;
