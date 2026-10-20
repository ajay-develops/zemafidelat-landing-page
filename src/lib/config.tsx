/*
 * Everything the landing page says, in one place.
 *
 * Numbers that describe the app come from the app itself
 * (zema-frontend/src/constants/active-lessons.ts, read 2026-10-14):
 * ACTIVE_LETTER_COUNT is 224 and ACTIVE_LESSON_COUNT is 32. Update them here
 * if the curriculum changes — the design's "200+" and "[N]" were placeholders.
 */
const fidelCount = 224;
const lessonCount = 32;
/* Also from the app: LEVEL_XP_THRESHOLDS has 32 levels, achievements-content
   lists 18 badges, DAILY_LEARNING_GOAL_OPTIONS runs 5–25 minutes. */
const levelCount = 32;
const badgeCount = 18;

// Kept for when the app ships; the page shows the waitlist until then.
const apkDownloadUrl = process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL ?? "";

export const siteConfig = {
  name: "Zema Fidelat",
  /*
   * Three sizes of one mark, because one file cannot serve all three jobs.
   *
   * `logo` is the 2356px original and is only read server-side, by the OG card
   * — Satori cannot decode WebP. `logoUi` is what the page shows. `logoIcon`
   * is the favicon and apple-touch-icon, which platforms want as PNG.
   *
   * Regenerate the derivatives with `pnpm process-logo` after changing logo.png.
   */
  logo: "/logo.png",
  logoUi: "/logo-256.webp",
  logoIcon: "/logo-icon.png",
  description: "Learn to read & write Tigrinya fidel in 10 minutes a day.",
  /* For search results and link previews; the hero shows `hero.lead`. */
  heroDescription:
    // Switch the last sentence back to "Free on Android and iPhone." on launch day.
    "Bite-sized lessons, letter tracing, word games and a new puzzle every day, so you or your kids can finally read Tigrinya. Coming soon, free, to Android and iPhone.",
  /*
   * One label for the one action. The header button and the hero's submit
   * are on screen together, so two spellings of it ("Get early access" in the
   * design's hero) read as two different things.
   */
  cta: "Join the waitlist",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://zemafidelat.com",
  keywords: [
    "Tigrinya",
    "Tigrinya Alphabet",
    "Fidel",
    "Learn Tigrinya",
    "Tigrinya for kids",
    "Flashcards",
    "Daily Fidel Challenge",
    "Crosswords",
    "Letter Tracing",
    "Free Tigrinya App",
  ],
  links: {
    email: "hello@zemafidelat.com",
    download: apkDownloadUrl,
    waitlist: "#waitlist",
  },
  navLinks: [
    { href: "#how-it-works", text: "How it works" },
    { href: "#features", text: "Features" },
    { href: "#families", text: "For families" },
    { href: "#story", text: "Our story" },
    { href: "#faq", text: "FAQ" },
  ],
  footerLinks: [
    { href: "mailto:hello@zemafidelat.com", text: "Contact" },
    { href: "/privacy", text: "Privacy Policy" },
    { href: "/terms", text: "Terms" },
    { href: "/delete-account", text: "Delete your account" },
  ],

  hero: {
    /* Two parts, so a narrow screen wraps at the dot, not mid-phrase. */
    badge: ["Coming soon to Android & iPhone", "100% free"],
    /* The headline is split so the Tigrinya word can carry its own colour. */
    titleStart: "Learn to read & write",
    titleFidel: "ፊደል",
    titleEnd: "in 10 minutes a day.",
    lead: "Bite-sized lessons, letter tracing, word games and a new puzzle every day — so you or your kids can finally read Tigrinya.",
    note: "No spam, one email when the app drops.",
    ticks: [
      "No account needed",
      "Profiles for the whole family",
      `All ${fidelCount} fidelat`,
    ],
  },

  /* The scrolling band under the hero: the first three fidel families. */
  fidelBand: [
    ["ሀ", "ሁ", "ሂ", "ሃ", "ሄ", "ህ", "ሆ"],
    ["ለ", "ሉ", "ሊ", "ላ", "ሌ", "ል", "ሎ"],
    ["መ", "ሙ", "ሚ", "ማ", "ሜ", "ም", "ሞ"],
  ],

  howItWorks: {
    eyebrow: "How it works",
    title: "From your first letter to your first words",
    steps: [
      {
        title: "Learn",
        text: "Short lessons introduce each fidel family with sound, pictures and everyday words.",
        tone: "leaf",
      },
      {
        title: "Practice",
        text: "Trace every letter stroke by stroke and lock in vocabulary with smart flashcards.",
        tone: "sun",
      },
      {
        title: "Play",
        text: "Word games, daily word matching and the Daily Fidel Challenge keep it fun every day.",
        tone: "sky",
      },
    ],
  },

  dailyChallenge: {
    eyebrow: "Daily Fidel Challenge",
    title: "One new word. Every single day.",
    text: "Look at the picture, read the English clue, then unscramble the fidelat to spell the word. It takes a minute — and it sticks.",
    chips: ["Picture clues", "Hints when you're stuck", "A new word every day"],
  },

  /* The swipeable tour: every screen is a real capture (screenshots-src). */
  gallery: {
    eyebrow: "Take a look inside",
    title: "The whole app, screen by screen",
    text: "Swipe through the real app — every screen below is a screenshot from a phone.",
    screens: [
      { name: "dashboard", caption: "Your dashboard", alt: "Today's stats and cards for lessons, flashcards, letters and tracing" },
      { name: "lessons", caption: "Learning path", alt: "Lesson stops along a trail through the forest" },
      { name: "letters", caption: `All ${fidelCount} fidelat`, alt: "The letter chart, grouped by lesson" },
      { name: "flashcards", caption: "Flashcards", alt: "A flashcard with a Tigrinya word and its pronunciation" },
      { name: "trace-letters", caption: "Tracing", alt: "A plane marking the stroke path of the letter ሀ" },
      { name: "word-games", caption: "Word games", alt: "A picture of a house fly and four Tigrinya words to choose from" },
      { name: "crosswords", caption: "Word matching", alt: "Tigrinya words to pair with their English meanings" },
      { name: "daily-fidel", caption: "Daily challenge", alt: "A river picture for the clue Flood, with scrambled fidelat" },
      { name: "achievements", caption: "Badges", alt: "Unlocked badges like First Lesson and 7 Day Streak" },
      { name: "daily-goals", caption: "Daily goal", alt: "Choosing a daily goal of 15 minutes" },
    ],
  },

  /*
   * One row each: copy beside real screenshots, alternating sides.
   * `shots` are file names in public/screenshots, with their alt text.
   */
  featureRows: [
    {
      id: "lessons",
      eyebrow: "Lessons",
      title: `${lessonCount} lessons. Every letter. In order.`,
      text: "Each lesson teaches one fidel family — all seven forms of a letter — then practises it four ways before moving on.",
      bullets: [
        "Flashcards, tracing, word games and word matching in every lesson",
        `A letter chart of all ${fidelCount} fidelat, each one with its sound`,
        "A learning path that shows how far you've come — and lets you share it",
      ],
      shots: [{ name: "letters", alt: `The letter chart: all ${fidelCount} fidelat, grouped by lesson` }],
      surface: "white",
    },
    {
      id: "hear-it",
      eyebrow: "Hear it",
      title: "Hear every letter and word, said out loud",
      text: "Tap the speaker on any letter or word to hear it, recorded by a real Tigrinya speaker.",
      bullets: [
        "A pronunciation guide under every word",
        "Pictures that show what each word means",
        "Mark a card “I know this” or “Need more practice” — the app keeps the pile for you",
      ],
      shots: [
        { name: "flashcards", alt: "A flashcard showing the Tigrinya word for lemon, with its pronunciation" },
        { name: "flashcard-back", alt: "The back of the flashcard: a picture of lemons and the word Lemon" },
      ],
      surface: "mint",
    },
    {
      id: "write-it",
      eyebrow: "Write it",
      title: "Learn to write, stroke by stroke",
      text: "A little plane flies the path of each stroke. Follow it with your finger until the letter is yours.",
      bullets: [
        `Guided strokes for all ${fidelCount} fidelat`,
        "Letters you find hard collect in a “Need more practice” list",
        "Hear the letter while you trace it",
      ],
      shots: [{ name: "trace-letters", alt: "Tracing the letter ሀ: a plane marks the start of a dotted stroke path" }],
      surface: "white",
    },
    {
      id: "play-it",
      eyebrow: "Play it",
      title: "Games that check what stuck",
      text: "See the picture, pick the Tigrinya word. Match words with their meanings. Every level can be replayed.",
      bullets: [
        "Word games with pictures and audio for every lesson",
        "Word matching to pair words with their meaning",
        "Missed questions come back until you get them",
      ],
      shots: [
        { name: "word-games", alt: "A word game: a picture of a house fly and four Tigrinya words to choose from" },
        { name: "crosswords", alt: "Word matching: Tigrinya words to pair with their English meanings" },
      ],
      surface: "cream",
    },
  ],

  habits: {
    eyebrow: "Stay motivated",
    title: "Built for habits, not homework",
    shots: [
      { name: "achievements", alt: "The achievements screen with badges like First Lesson and 7 Day Streak" },
      { name: "levels", alt: "All levels: from Level 1 Beginner upward, with the XP each needs" },
      { name: "daily-goals", alt: "Setting a daily learning goal of 15 minutes" },
    ],
    cards: {
      streaks: {
        value: "7",
        unit: "day streak",
        title: "Streaks",
        text: "Keep the flame alive with a little practice every day.",
      },
      goals: {
        value: "15",
        unit: "min goal",
        title: "Daily goals & XP",
        text: "Pick 5 to 25 minutes a day and earn XP for every activity.",
      },
      badges: {
        value: String(badgeCount),
        unit: "badges",
        title: "Badges",
        text: "Unlock achievements like Word Explorer and Quiz Master.",
      },
      levels: {
        value: String(levelCount),
        unit: "levels",
        title: "Levels",
        text: "Climb from Beginner to Master as your XP grows.",
      },
    },
  },

  /* Laid out like a feature row (feature-row.tsx). */
  families: {
    id: "families",
    surface: "mint",
    eyebrow: "For families",
    title: "One app for the whole family",
    text: "Every child gets their own profile, with their own progress, goals and badges — and you stay in charge.",
    bullets: [
      "A profile for every learner, each with a friendly animal avatar",
      "Parent lock: kids can't change profiles, share, or open settings without you",
      "Start as a guest straight away; add a free account to back up progress",
      "Reminders that nudge you when it's time to practise",
    ],
    shots: [{ name: "profiles", alt: "Who's learning? Four profiles with animal avatars, and Add Profile" }],
  },

  /* The complete list. Icons are lucide names, mapped in feature-list.tsx. */
  featureList: {
    eyebrow: "Everything in the app",
    title: "All of this, free",
    text: "No subscriptions, no ads and no hidden fees — every feature below is included.",
    items: [
      { icon: "lessons", title: `${lessonCount} step-by-step lessons`, text: "One fidel family at a time, in order, from ሀ to ቨ." },
      { icon: "letters", title: `All ${fidelCount} fidelat, with sound`, text: "A full letter chart — tap any letter to hear it." },
      { icon: "voice", title: "Real recorded voices", text: "Letters and words are recorded by a real Tigrinya speaker." },
      { icon: "flashcards", title: "Picture flashcards", text: "Word on the front, picture and meaning on the back." },
      { icon: "tracing", title: "Letter tracing", text: "Follow the path stroke by stroke to learn to write." },
      { icon: "games", title: "Word games", text: "See the picture, pick the right Tigrinya word." },
      { icon: "matching", title: "Word matching", text: "Pair each word with its meaning." },
      { icon: "daily", title: "Daily Fidel Challenge", text: "A new word every day, with hints when you're stuck." },
      { icon: "xp", title: `XP and ${levelCount} levels`, text: "Every activity earns XP, from Beginner to Master." },
      { icon: "badges", title: `${badgeCount} badges`, text: "From First Letter to Word Explorer and Quiz Master." },
      { icon: "streaks", title: "Streaks & daily goals", text: "Pick 5 to 25 minutes a day and keep the streak alive." },
      { icon: "reminders", title: "Learning reminders", text: "A gentle nudge when it's time to practise." },
      { icon: "profiles", title: "Family profiles", text: "A profile for every learner, each with its own progress." },
      { icon: "lock", title: "Parent lock", text: "Kids can't change profiles, share, or open settings without you." },
      { icon: "guest", title: "No account needed", text: "Start as a guest; add a free account to back up progress." },
      { icon: "share", title: "Share progress", text: "Share your learning journey and new badges." },
    ],
  },

  story: {
    eyebrow: "Why we built this",
    title: "So the next generation can read our language.",
    /*
     * Neutral on purpose: the design left a placeholder for the founder's own
     * story and name, and none has been supplied. Replace this paragraph — and
     * add an attribution line — when the client sends theirs.
     */
    text: "Tigrinya is spoken by millions, but most apps skip its script. Zema Fidelat makes the fidel something kids and parents pick up together — a few minutes, a few letters, every day.",
    stats: [
      { value: String(fidelCount), label: "fidelat to master" },
      { value: "$0", label: "forever, no ads" },
      { value: String(lessonCount), label: "lessons at launch" },
      { value: "10", label: "minutes a day" },
    ],
  },

  faqEyebrow: "FAQ",
  faqTitle: "Questions? We've got answers.",
  faqFooter: { text: "Still have a question? Email", email: "hello@zemafidelat.com" },
  faqs: [
    {
      question: "Is Zema Fidelat really free?",
      answer:
        "Yes. Every lesson, game and puzzle is free — no subscriptions, no ads and no hidden fees.",
    },
    {
      question: "Can I use the app without signing up?",
      answer:
        "Yes. Start as a guest straight away. Create a free account whenever you want to back up your progress and use it on another device.",
    },
    {
      question: "Is it good for kids?",
      answer:
        "Yes. It's designed for ages 4 and up, and adults use it too. Letter tracing, picture clues and short games are made for young learners, and each child gets their own profile with their own progress.",
    },
    {
      question: "Can my child hear how words are said?",
      answer:
        "Yes. Letters and words are recorded by a real Tigrinya speaker. Tap the speaker to hear them.",
    },
    {
      question: "How do family profiles work?",
      answer:
        "One account holds a profile for every learner at home. Each profile keeps its own lessons, goals, streaks and badges.",
    },
    {
      question: "Is my child's information safe?",
      answer:
        "Yes. We collect only a nickname, an optional age and learning progress for each child, and only after a parent agrees. There are no ads, no chat and no tracking, and we never sell data. Read our Privacy Policy at zemafidelat.com/privacy.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Yes. Lessons, games and audio work without internet. You need a connection to back up progress to your account.",
    },
    {
      question: "Is this Tigrinya or Amharic?",
      answer:
        "Tigrinya. Both languages use the Ge'ez script, so many letters look the same, but Zema Fidelat teaches Tigrinya sounds, words and pronunciation.",
    },
    {
      question: "Does it teach every letter?",
      answer: "It teaches all 32 core letter families: 224 fidelat, seven forms each.",
    },
    {
      question: "How do I delete my account or my child's data?",
      answer:
        "You can delete a profile or your whole account in the app's Settings, on the web at app.zemafidelat.com, or by emailing us. See zemafidelat.com/delete-account for the steps.",
    },
    {
      question: "When does the app launch?",
      answer:
        "We're aiming for November 2026 on Google Play and the App Store at the same time. Join the waitlist and we'll send one email the day it's out.",
    },
  ],

  waitlist: {
    title: "Be first when the app drops.",
    text: "Leave your email and we'll send one message the day Zema Fidelat lands on Android and iPhone.",
    stores: "Coming to Google Play & the App Store",
    /* Under the "You're on the list" pill; the API sends the same words. */
    success: "We'll email you the day the app is out.",
  },
};

export type SiteConfig = typeof siteConfig;
