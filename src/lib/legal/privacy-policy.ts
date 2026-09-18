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
        "This policy explains what information Zema Fidelat collects, why we collect it, who helps us handle it, how long we keep it, and how you can see, change or delete it.",
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
            "An account needs the account holder's full name, email address and password. Each learner profile needs a name and has a picture. Adding an age is optional when you create a profile.",
            "For accounts, learning progress is saved on the device and copied to our servers soon after each change.",
            "You can use the app as a guest without an account. Guest information stays on the device.",
            "There are no ads, no in-app purchases, no chat or contact between users, and no analytics or tracking tools. We do not sell personal information.",
            "The app does not record audio and does not use the camera.",
            "**Uploaded photos are not private.** Anyone on the internet can get a list of all uploaded profile photos from our server and view them, without an account. To avoid this, use one of the app's built-in pictures instead (section 6).",
            "You can delete a learner profile or your whole account in the app. You can also ask us by email to delete your account.",
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
            'Zema Fidelat (Zema Fidelat: Learn Tigrinya) is developed and run by the Zema Fidelat team ("we", "us"). This policy covers:',
        },
        {
          type: "bullets",
          items: [
            "the Zema Fidelat mobile app;",
            "our account web pages at app.zemafidelat.com; and",
            "our website, zemafidelat.com.",
          ],
        },
        {
          type: "paragraph",
          text: "For any privacy question or request, email **hello@zemafidelat.com**.",
        },
      ],
    },
    {
      id: "information-from-the-account-holder",
      title: "2. Information from the account holder",
      blocks: [
        {
          type: "paragraph",
          text:
            "The account holder is the person who creates the Zema Fidelat account, either in the app or at app.zemafidelat.com. We collect:",
        },
        {
          type: "table",
          columns: [
            "Information",
            "Required?",
            "What we use it for",
          ],
          rows: [
            [
              "Full name (first and last name)",
              "Yes",
              "Your account record, and the greeting in password-reset emails",
            ],
            [
              "Email address",
              "Yes",
              "Logging in, and sending password-reset emails",
            ],
            [
              "Password",
              "Yes",
              "Logging in. We store it only as a salted hash, never as readable text",
            ],
            [
              "Phone number",
              "No",
              "Stored on your account only. No feature uses it",
            ],
          ],
        },
        {
          type: "paragraph",
          text:
            "In the app, you can add, change or remove a phone number in **Settings > Edit Account Info**. The sign-up page at app.zemafidelat.com also has an optional phone field.",
        },
        {
          type: "paragraph",
          text: "To keep sign-in working, our server also records:",
        },
        {
          type: "bullets",
          items: [
            "when the account was created and last changed;",
            "your login sessions;",
            "recent failed login attempts;",
            "a password-reset code, when you ask for one.",
          ],
        },
      ],
    },
    {
      id: "information-about-each-learner",
      title: "3. Information about each learner",
      blocks: [
        {
          type: "paragraph",
          text:
            "An account can have one or more learner profiles, for example one for each child. For each profile we collect:",
        },
        {
          type: "bullets",
          items: [
            "**Name** (required). The app allows up to 100 characters. The form asks for a full name, but a first name or nickname works just as well.",
            {
              text: "**Age**, a whole number from 2 to 99:",
              items: [
                "It is optional when you create a profile in the app.",
                "The app's **Edit Profile** screen won't save any change until an age is chosen.",
                "Once an age is saved, you can change it in the app but not remove it. Email us if you want it removed.",
                "In the app, age appears only on the Edit Profile screen. It does not change what a learner sees.",
              ],
            },
            "**Picture.** In the app, every profile has a picture. A built-in picture is chosen for you unless you pick another one or a photo (section 6).",
            "**Daily learning goal** (optional), from 5 to 25 minutes.",
            {
              text:
                "**Learning progress**, created automatically as the learner uses the app. This includes:",
              items: [
                "XP, level, current and longest streak, and the last day the learner was active;",
                "which exercises and letters were completed and when, with scores;",
                "flashcard ratings, practice history and daily challenge completions;",
                "achievements and when they were unlocked;",
                "an estimate of minutes learned today, based on completed exercises rather than timed;",
                "messages in the app's notification inbox, such as 'Achievement unlocked!';",
                "small display settings, such as whether a tip has already been shown.",
              ],
            },
          ],
        },
        {
          type: "paragraph",
          text:
            "**Syncing.** For accounts, progress is saved on the device and copied to our servers, so it can be backed up and restored on other devices. While the device is online:",
        },
        {
          type: "bullets",
          items: [
            "the app uploads changes soon after they happen, for example after each completed exercise, game or daily challenge;",
            "it also syncs when you log in, when the app starts or is reopened, when a profile is created, when you switch profiles, when the internet connection comes back, and when you pull down to refresh the Home screen.",
          ],
        },
        {
          type: "paragraph",
          text: "Syncing can't be turned off for accounts. Guest mode never syncs.",
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
            "If you tap **Explore as Guest**, you can use the app without an account. Guest profiles (name, age, picture or photo, daily goal) and progress stay on the device and are not sent to us.",
        },
        {
          type: "bullets",
          items: [
            "If you then create an account on that device, guest profiles, photos and progress are uploaded to the new account automatically.",
            "If you log in to an existing account instead, the app asks whether to import or discard the guest data.",
            "Because guest data exists only on the device, we can't recover it if the app is removed or the device is lost.",
          ],
        },
      ],
    },
    {
      id: "information-that-stays-on-your-device",
      title: "5. Information that stays on your device",
      blocks: [
        {
          type: "paragraph",
          text: "Some information is kept only in the app on your device and is never sent to us:",
        },
        {
          type: "bullets",
          items: [
            "your place in a lesson, so you can continue where you stopped;",
            "your **Sound Effects** and **Notifications** settings;",
            "guest-mode data (section 4);",
            "temporary copies of pictures the app has shown, of photos you picked for a profile, and of share images (section 9).",
          ],
        },
        {
          type: "paragraph",
          text:
            "**Letter tracing.** When a learner traces a letter with a finger, a handwriting-recognition model built into the app checks the drawing on the device. The drawing is not saved or sent anywhere. Only the result, such as a completed exercise, is recorded as progress.",
        },
        {
          type: "paragraph",
          text:
            "**Pronunciation audio.** Letter and word recordings are built into the app. If a recording is missing, the app uses your device's own text-to-speech voice to read the word. Only lesson words are passed to that voice.",
        },
        {
          type: "paragraph",
          text:
            "**Volume.** Before playing a pronunciation, the app checks your device's media volume. If it is low, the app offers to turn it up. It changes the volume only if you tap **Turn Up Volume**. The volume level is not stored or sent.",
        },
        {
          type: "paragraph",
          text: "**Secure storage.** The app keeps some details in the device's secure storage:",
        },
        {
          type: "bullets",
          items: [
            "to keep you logged in: your sign-in token, account email address and current profile;",
            "while you are signing up: your full name and the profiles you are setting up;",
            "in guest mode: the guest profiles.",
          ],
        },
        {
          type: "paragraph",
          text: "Logging out removes the login details.",
        },
        {
          type: "paragraph",
          text:
            "**After logging out or deleting your account.** These stay in the app on that device:",
        },
        {
          type: "bullets",
          items: [
            "learning progress;",
            "settings;",
            "temporary picture copies;",
            "any daily reminder (section 8).",
          ],
        },
        {
          type: "paragraph",
          text: "Uninstalling the app removes them.",
        },
        {
          type: "paragraph",
          text:
            "**iPhone and iPad.** Details in the device's secure storage may stay on the device even after the app is removed. This can include guest profile details, and your login details if you did not log out first. If the app is installed again, it may use them to log you back in or to show the guest profiles again. To avoid this, log out before removing the app.",
        },
      ],
    },
    {
      id: "photos",
      title: "6. Photos",
      blocks: [
        {
          type: "paragraph",
          text: "If you choose a photo as a learner's picture:",
        },
        {
          type: "bullets",
          items: [
            "The app asks for permission to access your photos. You pick one photo and crop it to a square. The app uses only the photo you pick.",
            "The app does not open the camera. Photos can only be chosen from the photo library.",
            "Before uploading, the app shrinks the photo to at most 768 × 768 pixels and saves it as a JPEG. If that step fails, the photo you picked is uploaded unchanged.",
            "The web pages at app.zemafidelat.com upload the original file, without shrinking it.",
            "Our server stores the file exactly as it receives it. It does not remove extra details a camera may save inside a photo file, such as where the photo was taken.",
            "For accounts, the photo is uploaded to our server and stored in the United States by our file storage provider, UploadThing. In guest mode, it stays on the device until you create an account.",
          ],
        },
        {
          type: "paragraph",
          text: "**Who can see uploaded photos**",
        },
        {
          type: "bullets",
          items: [
            "Uploaded photos are stored as publicly readable files. They are not protected by a password.",
            "Our server gives a list of all uploaded profile photos to anyone who asks, without logging in. The list includes each photo's web address, file name and upload time, so anyone can find and view uploaded photos.",
            "The list does not say which learner or account a photo belongs to.",
            "The app has no features that show one family's profiles to another family.",
          ],
        },
        {
          type: "paragraph",
          text:
            "If you would rather not upload a photo of a child, choose one of the built-in pictures. A built-in picture uploads nothing: we only save which picture you chose.",
        },
        {
          type: "paragraph",
          text: "**Photos no longer used by a profile**",
        },
        {
          type: "paragraph",
          text: "An uploaded photo stays in storage when:",
        },
        {
          type: "bullets",
          items: [
            "you replace it with another photo;",
            "you switch the profile to a built-in picture; or",
            "it was uploaded but the profile was not saved, for example because saving failed. On the web pages, a photo is uploaded as soon as you choose it, before you save.",
          ],
        },
        {
          type: "paragraph",
          text:
            "Deleting a profile or your account does not remove these photos. Our records do not link them to an account, so we may not be able to tell which ones are yours. If you want one removed, email us and tell us which profile used it and roughly when it was uploaded. We will look for it, but we may not be able to find it.",
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
            "Zema Fidelat does not record audio or take pictures. No feature uses the microphone or the camera, and the app does not ask you to allow microphone or camera access.",
        },
        {
          type: "paragraph",
          text:
            "The current version of the app still lists these permissions in its technical setup, so your device or an app store page may mention them:",
        },
        {
          type: "bullets",
          items: [
            "**Android:** the app's own configuration declares the microphone ('record audio') permission. A photo-picker component the app uses adds the camera permission.",
            "**iPhone and iPad:** the app includes a message saying the camera is used for a profile picture, plus a general microphone message. Neither is used.",
          ],
        },
      ],
    },
    {
      id: "notifications",
      title: "8. Notifications",
      blocks: [
        {
          type: "bullets",
          items: [
            "Notifications are optional.",
            "If you allow them, the app sets a daily reminder on your device for 7:00 pm device time. The text is the same for everyone: 'Time to learn!' and 'Keep your streak going — complete your daily learning goal.' It does not include a learner's name.",
            "Your device schedules the reminder. We do not send push notifications from our servers. The app does not create a push notification token and does not send one to us.",
            "You can turn reminders off in **Settings > Notifications**, or in your device settings.",
            "Logging out or deleting your account does not cancel a reminder that is already set. Turn it off in Settings first, or turn off notifications for Zema Fidelat in your device settings.",
          ],
        },
      ],
    },
    {
      id: "sharing-progress",
      title: "9. Sharing progress",
      blocks: [
        {
          type: "paragraph",
          text: "Zema Fidelat has **Share** buttons in three places. Each one:",
        },
        {
          type: "bullets",
          items: [
            "makes an image;",
            "adds a short message with a link to zemafidelat.com;",
            "opens your device's share menu, where you choose where it goes.",
          ],
        },
        {
          type: "table",
          columns: [
            "Where",
            "What the image can show",
            "What the message says",
          ],
          rows: [
            [
              "**View Profile**",
              "The learner's name and picture or photo; the account's email address (for accounts); level, streaks, total XP, lessons completed, achievements and learning progress",
              "An invitation to try Zema Fidelat",
            ],
            [
              "An unlocked achievement's details (from View Profile or the achievements screen)",
              "The achievement's name and description",
              "A line about the achievement",
            ],
            [
              "**Your Learning Journey**, opened with **Share Your Learning Journey** on the Lessons screen once every lesson is finished",
              "The learner's name and picture or photo; level, XP, streak, lessons, letters learned and badges",
              "The learner's name and progress numbers",
            ],
          ],
        },
        {
          type: "bullets",
          items: [
            "The Share buttons are not behind the parent question (section 16), so a learner can use them.",
            "We do not receive a copy of what you share. Once something is shared, we cannot delete it.",
          ],
        },
      ],
    },
    {
      id: "technical-information-sent-with-every-connection",
      title: "10. Technical information sent with every connection",
      blocks: [
        {
          type: "paragraph",
          text:
            "Your device connects to our server, to our photo storage when learner pictures load, and to our website when you visit it. Each time, it automatically sends your IP address and a short description of the software making the request (the 'user agent'). All internet connections work this way. We do not store this information in our database, but our hosting and storage providers may keep it in their logs (section 15).",
        },
        {
          type: "paragraph",
          text:
            "Before you log in, the welcome and sign-up screens ask our server for the total number of registered users. This is only a count and includes no one's details.",
        },
        {
          type: "paragraph",
          text:
            "On iPhone and iPad, the app may check whether you are online by contacting a Google web address. That check carries no account or learner information.",
        },
      ],
    },
    {
      id: "what-we-dont-collect-or-do",
      title: "11. What we don't collect or do",
      blocks: [
        {
          type: "bullets",
          items: [
            "No advertising, and no advertising networks.",
            "No analytics, crash-reporting or tracking tools, in the app or on our website.",
            "We do not sell personal information, and we do not use it for advertising.",
            "No advertising ID or other device identifiers.",
            "No location: the app does not use location services or ask for your location.",
            "No contacts, calendar or text messages.",
            "No audio recordings.",
            "No payment information. The app has no purchases.",
            "No chat, messaging, friend lists, leaderboards, comments or public profiles.",
            "The only email our system sends automatically is the password-reset email. Using Zema Fidelat does not sign you up for newsletters or marketing email.",
          ],
        },
      ],
    },
    {
      id: "how-we-use-information",
      title: "12. How we use information",
      blocks: [
        {
          type: "paragraph",
          text: "We use the information described above to:",
        },
        {
          type: "bullets",
          items: [
            "create your account, log you in and reset your password;",
            "show learner profiles, and save, sync and restore learning progress;",
            "set up the daily reminders you asked for, on your device;",
            "create share images when you tap Share;",
            "reply when you email us;",
            "protect accounts, for example by locking an account after repeated failed logins and by checking your password before an account is deleted;",
            "email people who joined the website waitlist when the Android app is ready (section 19).",
          ],
        },
        {
          type: "paragraph",
          text:
            "We do not make automated decisions about you that have legal or similarly significant effects.",
        },
        {
          type: "paragraph",
          text:
            "**Legal reasons for using information.** The law where you live may require a legal reason for using information. Where it does, we rely on:",
        },
        {
          type: "bullets",
          items: [
            "**providing the service you asked for:** your account, profiles, progress and password resets;",
            "**your consent:** photo access, notifications, and optional details such as a photo or phone number. You can withdraw consent at any time (section 20);",
            "**our legitimate interest:** keeping Zema Fidelat secure and working, and replying to messages.",
          ],
        },
      ],
    },
    {
      id: "who-handles-information-for-us",
      title: "13. Who handles information for us",
      blocks: [
        {
          type: "paragraph",
          text:
            "We use these service providers to run Zema Fidelat. They process information to provide their services to us.",
        },
        {
          type: "table",
          columns: [
            "Provider",
            "What it does for us",
            "Information it handles",
          ],
          rows: [
            [
              "Vercel",
              "Hosts our server at app.zemafidelat.com and our website. Until September 2026 it also stored uploaded photos, using its Vercel Blob service",
              "Everything the app and website send to us (account details, learner profiles, progress, photos during upload, waitlist sign-ups), plus IP address and user agent in its request logs",
            ],
            [
              "MongoDB Atlas (MongoDB, Inc.)",
              "Database",
              "Account details (including the password hash), learner profiles, progress and photo records",
            ],
            [
              "UploadThing",
              "Stores uploaded photos",
              "Uploaded learner photos",
            ],
            [
              "Network Solutions",
              "Email for zemafidelat.com",
              "Password-reset emails (your email address, first name and reset link), and emails you send to hello@zemafidelat.com",
            ],
            [
              "Supabase",
              "Database for the website waitlist",
              "Waitlist email address and optional name",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Others who may handle information:",
        },
        {
          type: "bullets",
          items: [
            "**People who run Zema Fidelat** have administrator access to account and learner records, including progress, through our administration tool.",
            "**Your device's own services** handle the share menu, text-to-speech, reminders, and your email app when you tap our email address.",
            "**Google** may receive the iPhone and iPad connection check described in section 10.",
            "We may disclose information if the law requires it.",
          ],
        },
      ],
    },
    {
      id: "where-information-is-processed",
      title: "14. Where information is processed",
      blocks: [
        {
          type: "paragraph",
          text:
            "Our service providers may store and process information in the United States and other countries. Uploaded photos are stored in the United States. Data protection laws in those countries may differ from the laws where you live.",
        },
      ],
    },
    {
      id: "how-long-we-keep-information",
      title: "15. How long we keep information",
      blocks: [
        {
          type: "bullets",
          items: [
            "**Account and learner information,** including progress and each learner's current photo: for as long as the account exists. We do not currently delete inactive accounts automatically.",
            "**A learner profile:** until you delete that profile or the account.",
            "**Login session records:** expired ones are cleared at your next login. All of them are removed when the account is deleted.",
            "**Password-reset codes:** kept until used or replaced. The reset link stops working after 1 hour.",
            "**Photos no longer used by a profile** (section 6): not deleted automatically, including when a profile or account is deleted.",
            "**Hosting request logs** for our server: currently kept for no more than one day.",
            "**Email records and backups:** records kept by our email provider, and any backups kept by our database and storage providers, follow those providers' own retention periods.",
            "**Emails you send us:** kept in our mailbox until deleted. You can ask us to delete them.",
            "**Waitlist sign-ups:** kept until you ask us to remove yours.",
            "**Information on your device:** kept until you delete the guest profile it belongs to, or uninstall the app. For iPhone and iPad, see section 5.",
          ],
        },
      ],
    },
    {
      id: "childrens-privacy",
      title: "16. Children's privacy",
      blocks: [
        {
          type: "paragraph",
          text: "Zema Fidelat is for learners of all ages, including young children.",
        },
        {
          type: "paragraph",
          text:
            "**Accounts are for adults.** We ask that a parent, guardian or other adult creates the account and then sets up and manages the learner profiles. The app does not ask for proof of age. It does not check that the account holder is an adult or a parent.",
        },
        {
          type: "paragraph",
          text:
            "**What we collect about a learner** is only what section 3 lists. We do not ask learners for an email address, phone number or location.",
        },
        {
          type: "paragraph",
          text: "**What children cannot do in Zema Fidelat:**",
        },
        {
          type: "bullets",
          items: [
            "chat or send messages;",
            "add friends, or see or contact other users;",
            "appear on leaderboards or public profiles;",
            "see ads;",
            "make purchases.",
          ],
        },
        {
          type: "paragraph",
          text: "**What can reach other people:**",
        },
        {
          type: "bullets",
          items: [
            "Anyone can find and view uploaded photos (section 6).",
            "Anyone using the device can tap a Share button and send an image of a learner's progress to other apps or people (section 9).",
          ],
        },
        {
          type: "paragraph",
          text:
            "**The parent question.** Some areas of the app show 'Ask a parent to solve this simple question to continue', followed by an addition or subtraction with single-digit numbers, such as 7 + 5 or 9 − 4. The question guards:",
        },
        {
          type: "bullets",
          items: [
            "**Settings**",
            "**Switch Profile**, including **Manage Profiles**",
            "**Add Profile**",
            "deleting a profile",
          ],
        },
        {
          type: "paragraph",
          text:
            "It is meant to stop young children from opening those areas by accident. It is not a strong lock, and it does not check anyone's age. The web pages at app.zemafidelat.com do not use it.",
        },
        {
          type: "paragraph",
          text: "**Not behind the parent question:**",
        },
        {
          type: "bullets",
          items: [
            "**View Profile** on the Home screen, and **EDIT PROFILE** from there. A learner can change the profile's name, age and picture there, including choosing a photo if photo access is allowed.",
            "The Share buttons.",
            "**Create free account** in guest mode.",
          ],
        },
        {
          type: "paragraph",
          text: "**Parents' choices.** A parent or guardian can:",
        },
        {
          type: "bullets",
          items: [
            "review and change a learner's information in Edit Profile;",
            "delete a learner profile or the whole account, which stops any further collection for that learner (section 17);",
            "email us to ask for a copy of a learner's information, to have it deleted, or to stop further collection.",
          ],
        },
        {
          type: "paragraph",
          text:
            "If you believe a child created an account without a parent or guardian, email us and we will delete it.",
        },
      ],
    },
    {
      id: "deleting-information",
      title: "17. Deleting information",
      blocks: [
        {
          type: "subheading",
          id: "delete-one-learner-profile-in-the-app",
          text: "Delete one learner profile in the app",
        },
        {
          type: "paragraph",
          text: "To delete any profile:",
        },
        {
          type: "steps",
          items: [
            "On the Home screen, tap the profile picture at the top right and choose **Switch Profile**.",
            "Answer the parent question.",
            "Tap **Manage Profiles**, then tap the profile you want to delete.",
            "Tap **Delete profile**, then answer the parent question again.",
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
            "This deletes the profile, its progress and its current uploaded photo from our servers.",
        },
        {
          type: "bullets",
          items: [
            "In the app, an account must keep at least one profile. To remove the last one, delete the account.",
            "For an account's profile, progress saved in the app on that device stays until the app is uninstalled.",
            "Deleting a guest profile removes its details and progress from the device. A copy of its photo may stay in the app's temporary files.",
          ],
        },
        {
          type: "paragraph",
          text:
            "On the web pages at app.zemafidelat.com, you can delete any profile from the profile list, including the last one. There is no parent question there.",
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
          text: "Your account is deleted straight away and cannot be recovered.",
        },
        {
          type: "bullets",
          items: [
            "**If the app shows an error,** check your password and try again. If it still fails, email us, because the account may have been only partly deleted.",
            "**If you have forgotten your password,** use **Forgot Password?** on the log-in screen first, or email us.",
            "The web pages at app.zemafidelat.com do not have an option to delete an account.",
          ],
        },
        {
          type: "subheading",
          id: "delete-your-account-without-the-app",
          text: "Delete your account without the app",
        },
        {
          type: "paragraph",
          text:
            "Email **hello@zemafidelat.com** from the email address on the account and ask us to delete it. Our Delete your account page at https://zemafidelat.com/delete-account explains what to include, what is deleted and what may remain.",
        },
        {
          type: "subheading",
          id: "guest-mode",
          text: "Guest mode",
        },
        {
          type: "paragraph",
          text:
            "Guest data is only on the device. You can delete guest profiles as described above, except the last one. Uninstalling the app removes guest data. On iPhone and iPad, see section 5.",
        },
      ],
    },
    {
      id: "how-we-protect-information",
      title: "18. How we protect information",
      blocks: [
        {
          type: "bullets",
          items: [
            "The app and website connect to our servers over HTTPS, which encrypts information while it travels.",
            "Passwords are stored only as salted hashes.",
            "Your sign-in token is kept in the device's secure storage.",
            "After 5 failed login attempts, an account is locked for 10 minutes.",
            "Deleting your account requires your password, which our server checks. In the app, the **Change Password** screen asks for your current password.",
            "Login sessions expire 60 days after they were last renewed. The app renews them while you keep using it.",
            "Logging out removes your login details from the device, but it does not end the session on our server. The session ends when it expires or when the account is deleted.",
          ],
        },
        {
          type: "paragraph",
          text:
            "No system is completely secure, and we cannot guarantee the security of information. Please also note these limits:",
        },
        {
          type: "bullets",
          items: [
            "anyone can find and view uploaded photos (section 6);",
            "the parent question is not a lock (section 16).",
          ],
        },
      ],
    },
    {
      id: "our-website-and-web-account-pages",
      title: "19. Our website and web account pages",
      blocks: [
        {
          type: "paragraph",
          text:
            "**zemafidelat.com** does not set cookies, does not use analytics or advertising tools, and does not embed content from other companies.",
        },
        {
          type: "bullets",
          items: [
            "**Waitlist.** If you join the waitlist, we collect your email address (required), your name (optional) and the date you signed up. The information passes through our website host, Vercel, and is stored with Supabase. We use it to email you when the Android app is ready to download. To be removed from the waitlist, email us.",
            "**Contact link.** The Contact link opens your own email app so you can write to hello@zemafidelat.com.",
          ],
        },
        {
          type: "paragraph",
          text:
            "**app.zemafidelat.com** has web pages where you can sign up, log in, reset a password, and create, edit and delete learner profiles.",
        },
        {
          type: "bullets",
          items: [
            "They collect the same kinds of information as the app (sections 2, 3 and 6).",
            "When you log in there, a cookie keeps you logged in.",
          ],
        },
        {
          type: "paragraph",
          text: "The web pages work differently from the app in a few ways:",
        },
        {
          type: "bullets",
          items: [
            "they do not use the parent question;",
            "any profile can be deleted, including the last one;",
            "photos are uploaded as soon as you choose them, without shrinking;",
            "you cannot delete your account there.",
          ],
        },
        {
          type: "paragraph",
          text:
            "These pages, and the subject line of password-reset emails, currently use the older name 'Zema Language Learning'. They are part of Zema Fidelat.",
        },
      ],
    },
    {
      id: "your-rights-and-choices",
      title: "20. Your rights and choices",
      blocks: [
        {
          type: "paragraph",
          text: "Depending on where you live, you may have the right to:",
        },
        {
          type: "bullets",
          items: [
            "access, correct or delete your information, or get a copy of it;",
            "object to or restrict how we use it;",
            "withdraw your consent.",
          ],
        },
        {
          type: "paragraph",
          text: "Here is how:",
        },
        {
          type: "bullets",
          items: [
            {
              text: "**See and correct:**",
              items: [
                "**Settings > Edit Account Info** (Account Full Name, Account Email, Phone Number)",
                "**Settings > Change Password**",
                "**Settings > Daily Goal**",
                "**Edit Profile** (Name, Age, picture)",
              ],
            },
            "**Get a copy:** the app has no export button. Email us to ask for a copy of your information.",
            "**Delete:** see section 17.",
            {
              text: "**Withdraw permission:**",
              items: [
                "turn off reminders in **Settings > Notifications**;",
                "remove photo access in your device settings;",
                "remove your phone number in **Edit Account Info**;",
                "ask us to remove you from the waitlist.",
              ],
            },
            {
              text: "**Other requests or complaints:** email hello@zemafidelat.com.",
              items: [
                "We may need to confirm that the account is yours, for example by asking you to write from the account's email address.",
                "You may also be able to complain to the data protection authority where you live.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "changes-to-this-policy",
      title: "21. Changes to this policy",
      blocks: [
        {
          type: "paragraph",
          text:
            "When we update this policy, we will change the 'Last updated' date at the top. If we make significant changes, we will also let account holders know, for example by email or in the app, before the changes take effect.",
        },
      ],
    },
    {
      id: "contact-us",
      title: "22. Contact us",
      blocks: [
        {
          type: "paragraph",
          text: "Email: **hello@zemafidelat.com**",
        },
      ],
    },
  ],
} as const satisfies LegalDocument;
