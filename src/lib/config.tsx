import {
  BellIcon,
  BookOpenIcon,
  Gamepad2Icon,
  TargetIcon,
  TrophyIcon,
  UsersIcon,
} from "lucide-react";
import { testimonials } from "./testimonials";

export const BLUR_FADE_DELAY = 0.15;

const apkDownloadUrl = process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL ?? "";

export const siteConfig = {
  name: "Zema Fidelat",
  logo: "/logo.png",
  description: "Learn languages step by step—free on Android.",
  heroTagline: "Learn languages step by step—free on Android.",
  heroDescription:
    "Master a new language with interactive lessons, flashcards, letter tracing, word games, daily crosswords, and Fidel Make. Set goals, earn XP, build streaks, and unlock badges—all for free.",
  cta: "Download APK",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://zemafidelat.com",
  keywords: [
    "Language Learning",
    "Flashcards",
    "Fidel Make",
    "Crosswords",
    "Letter Tracing",
    "Word Games",
    "XP and Streaks",
    "Free Language App",
  ],
  links: {
    email: "hello@zemafidelat.com",
    download: apkDownloadUrl,
  },
  navLinks: [
    { href: "#features", text: "Features" },
    { href: "#faq", text: "FAQ" },
    { href: apkDownloadUrl, text: "Download", external: true },
    { href: "mailto:hello@zemafidelat.com", text: "Contact" },
  ],
  featureHighlightSection: {
    title: "How it works",
    subtitle: "Powerful features",
  },
  bentoSection: {
    title: "App highlights",
    subtitle: "It does a lot of things",
  },
  heroImages: [
    "/screenshots/dashboard.png",
    "/screenshots/lessons.png",
    "/screenshots/flashcards.png",
    "/screenshots/word-games.png",
    "/screenshots/crosswords.png",
  ],
  featureScroll: {
    title: "Experience",
    subtitle: "Learn your way, every day",
    images: [
      "/screenshots/daily-goals.png",
      "/screenshots/profiles.png",
      "/screenshots/notifications.png",
    ],
  },
  features: [
    {
      name: "Sign Up or Try as Guest",
      description:
        "Create an account, sign in, or jump straight in as a guest—no login required to start learning.",
      icon: <BookOpenIcon className="h-6 w-6" />,
    },
    {
      name: "Multiple Profiles",
      description:
        "Manage several learner profiles under one account, each with its own progress and achievements.",
      icon: <UsersIcon className="h-6 w-6" />,
    },
    {
      name: "Daily Learning Goals",
      description:
        "Set personalized daily goals and track your minutes, lessons, and streaks on your dashboard.",
      icon: <TargetIcon className="h-6 w-6" />,
    },
    {
      name: "XP, Streaks & Badges",
      description:
        "Earn XP with every activity, keep your learning streak alive, and unlock achievement badges.",
      icon: <TrophyIcon className="h-6 w-6" />,
    },
    {
      name: "Progress & Reminders",
      description:
        "Follow your progress across lessons and get reminder notifications so you never miss a session.",
      icon: <BellIcon className="h-6 w-6" />,
    },
    {
      name: "Games & Puzzles",
      description:
        "Play flashcards, trace letters, solve word games, daily crosswords, and Fidel Make—all in one app.",
      icon: <Gamepad2Icon className="h-6 w-6" />,
    },
  ],
  featureHighlight: [
    {
      title: "Step-by-Step Lessons",
      description:
        "Work through structured lessons with flashcards, letter tracing, and word games that build your skills gradually.",
      imageSrc: "/screenshots/lessons.png",
      direction: "rtl" as const,
    },
    {
      title: "Interactive Learning Games",
      description:
        "Practice vocabulary with flashcards, trace letters to learn new scripts, and test yourself with word selection games.",
      imageSrc: "/screenshots/trace-letters.png",
      direction: "ltr" as const,
    },
    {
      title: "Daily Puzzles & Fidel Make",
      description:
        "Challenge yourself with daily crossword puzzles and Fidel Make—fill in letters to match the meaning of each image.",
      imageSrc: "/screenshots/fidel-make.png",
      direction: "rtl" as const,
    },
  ],
  bento: [
    {
      title: "Multiple Learner Profiles",
      content:
        "Create and manage multiple profiles in one account. Each learner keeps their own progress, goals, and achievements.",
      imageSrc: "/screenshots/profiles.png",
      imageAlt: "Manage profiles screen",
      fullWidth: true,
    },
    {
      title: "Daily Goals & XP",
      content:
        "Set daily learning targets, earn XP as you practice, and watch your streak grow on a motivating dashboard.",
      imageSrc: "/screenshots/daily-goals.png",
      imageAlt: "Daily learning goals screen",
      fullWidth: false,
    },
    {
      title: "Smart Reminders",
      content:
        "Stay consistent with reminder notifications that nudge you to practice and keep your learning habit on track.",
      imageSrc: "/screenshots/notifications.png",
      imageAlt: "Notifications screen",
      fullWidth: false,
    },
    {
      title: "Games That Teach",
      content:
        "From flashcards and letter tracing to word games, crosswords, and Fidel Make—learning never feels like a chore.",
      imageSrc: "/screenshots/crosswords.png",
      imageAlt: "Crosswords game screen",
      fullWidth: true,
    },
  ],
  benefits: [
    {
      id: 1,
      text: "Structured lessons guide you from basics to fluency, one step at a time.",
      image: "/screenshots/lessons.png",
    },
    {
      id: 2,
      text: "Flashcards help you memorize vocabulary quickly with visual cues and spaced repetition.",
      image: "/screenshots/flashcards.png",
    },
    {
      id: 3,
      text: "Letter tracing games teach you to write new scripts by following guided strokes.",
      image: "/screenshots/trace-letters.png",
    },
    {
      id: 4,
      text: "Word games challenge you to pick the right answer and lock in what you've learned.",
      image: "/screenshots/word-games.png",
    },
    {
      id: 5,
      text: "Daily crossword puzzles reinforce vocabulary by matching words across the grid.",
      image: "/screenshots/crosswords.png",
    },
    {
      id: 6,
      text: "Fidel Make lets you fill in letters to spell the word that matches each image.",
      image: "/screenshots/fidel-make.png",
    },
  ],
  pricing: [
    {
      name: "Free Forever",
      href: apkDownloadUrl,
      price: "$0",
      period: "forever",
      yearlyPrice: "$0",
      features: [
        "Unlimited lessons with flashcards, tracing & word games",
        "Daily crossword puzzles and Fidel Make",
        "Multiple learner profiles with separate progress",
        "Daily goals, XP, streaks & achievement badges",
        "Progress tracking and reminder notifications",
        "Guest mode—no account required to start",
      ],
      description: "Everything included. No subscriptions, no hidden fees.",
      buttonText: "Download APK",
      isPopular: true,
    },
  ],
  faqs: [
    {
      question: "Is Zema Fidelat really free?",
      answerText:
        "Yes! Zema Fidelat is completely free to download and use. There are no subscriptions, in-app purchases, or hidden fees. Every feature—lessons, games, crosswords, profiles, and more—is included at no cost.",
      answer: (
        <span>
          Yes! Zema Fidelat is completely free to download and use. There are no
          subscriptions, in-app purchases, or hidden fees. Every feature—lessons,
          games, crosswords, profiles, and more—is included at no cost.
        </span>
      ),
    },
    {
      question: "Can I use the app without signing up?",
      answerText:
        "Absolutely. You can use Zema Fidelat as a guest without creating an account. When you're ready, sign up to save your progress across devices and unlock multiple learner profiles.",
      answer: (
        <span>
          Absolutely. You can use Zema Fidelat as a guest without creating an
          account. When you&apos;re ready, sign up to save your progress across
          devices and unlock multiple learner profiles.
        </span>
      ),
    },
    {
      question: "How do multiple profiles work?",
      answerText:
        "One account can hold several learner profiles—perfect for families or anyone studying more than one language. Each profile tracks its own progress, goals, streaks, and badges independently.",
      answer: (
        <span>
          One account can hold several learner profiles—perfect for families or
          anyone studying more than one language. Each profile tracks its own
          progress, goals, streaks, and badges independently.
        </span>
      ),
    },
    {
      question: "What learning activities are included?",
      answerText:
        "Each lesson includes flashcards, letter tracing, and word selection games. Beyond lessons, you'll find daily crossword puzzles and Fidel Make, where you fill in letters to match the meaning of an image. A dashboard keeps everything organized.",
      answer: (
        <span>
          Each lesson includes flashcards, letter tracing, and word selection
          games. Beyond lessons, you&apos;ll find daily crossword puzzles and
          Fidel Make, where you fill in letters to match the meaning of an
          image. A dashboard keeps everything organized.
        </span>
      ),
    },
    {
      question: "How do streaks, XP, and badges work?",
      answerText:
        "Complete lessons and games to earn XP. Practice daily to build your streak, and hit milestones to unlock achievement badges. Set daily learning goals on your dashboard to stay motivated and track your progress over time.",
      answer: (
        <span>
          Complete lessons and games to earn XP. Practice daily to build your
          streak, and hit milestones to unlock achievement badges. Set daily
          learning goals on your dashboard to stay motivated and track your
          progress over time.
        </span>
      ),
    },
  ],
  testimonials,
};

export type SiteConfig = typeof siteConfig;
