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
    "Bite-sized lessons, letter tracing, word games and a new puzzle every day — so you or your kids can finally read Tigrinya. Free on Android and iPhone.",
  /*
   * One label for the one action. The header button and the hero's submit
   * are on screen together, so two spellings of it ("Get early access" in the
   * design's hero) read as two different things.
   */
  cta: "Join the waitlist",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://zemafidelat.com",
  keywords: [
    "Tigrinya",
    "Ge'ez Alphabet",
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
    { href: "#games", text: "Games" },
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
    /* The headline is split so the Ge'ez word can carry its own colour. */
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
    title: "From your first letter to your first sentence",
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
        text: "Word games, a daily crossword and the Daily Fidel Challenge keep it fun every day.",
        tone: "sky",
      },
    ],
  },

  dailyChallenge: {
    eyebrow: "Daily Fidel Challenge",
    title: "One new word. Every single day.",
    text: "Look at the picture, read the English clue, then unscramble the fidelat to spell the word. It takes a minute — and it sticks.",
    chips: ["Picture clues", "Hints when you're stuck", "Daily crossword too"],
  },

  games: {
    eyebrow: "Games that teach",
    title: "Learning that feels like playing",
    text: "Flashcards, tracing, word games and crosswords all feed the same progress — so every minute counts toward reading fluently.",
    cards: {
      flashcards: { title: "Flashcards", text: "Tap to flip — “house”" },
      tracing: { title: "Letter tracing", text: "Guided strokes for every fidel" },
      wordMatch: { title: "Word match", text: "Pick the right meaning" },
      crossword: { title: "Daily crossword", text: "A fresh grid every morning" },
    },
  },

  habits: {
    eyebrow: "Stay motivated",
    title: "Built for habits, not homework",
    cards: {
      streaks: {
        title: "Streaks",
        text: "Keep the flame alive with a little practice every day.",
      },
      goals: {
        title: "Daily goals & XP",
        text: "Pick your pace and earn XP for every activity.",
      },
      badges: {
        title: "Badges",
        text: "Unlock achievements like Word Explorer and Quiz Master.",
      },
      profiles: {
        title: "Family profiles",
        text: "One account, a profile for every learner at home.",
      },
    },
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
        "Yes. Letter tracing, picture clues and short games are made for young learners, and each child gets their own profile with their own progress.",
    },
    {
      question: "How do family profiles work?",
      answer:
        "One account holds a profile for every learner at home. Each profile keeps its own lessons, goals, streaks and badges.",
    },
    {
      question: "When is it coming to iPhone?",
      answer:
        "At about the same time as Android. Join the waitlist and we'll email you the day it's out.",
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
