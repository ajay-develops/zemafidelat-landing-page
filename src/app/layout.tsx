import { ShowcaseProvider } from "@/components/showcase/showcase-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/config";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = constructMetadata({
  title: `${siteConfig.name} | ${siteConfig.description}`,
  icons: {
    icon: siteConfig.logo,
    apple: siteConfig.logo,
  },
});

export const viewport: Viewport = {
  // No colorScheme here. It was pinned to "light", which left the browser
  // painting inputs, scrollbars and autofill in light styling even with the
  // dark theme applied — metadata cannot see the theme, which lives as a class
  // on <html>. globals.css sets color-scheme per theme instead.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        `${GeistSans.variable} ${GeistMono.variable}`,
        "scroll-smooth"
      )}
    >
      <body
        className={cn(
          "min-h-screen bg-background antialiased w-full mx-auto font-sans"
        )}
      >
        {/*
          Follow the OS until the visitor picks a side with the switch in the
          header (components/theme-toggle.tsx); next-themes then remembers it.

          No disableTransitionOnChange: that prop force-disables every CSS
          transition on the page for the frame the theme changes, which is the
          exact frame the switch animates in. Nothing transitions on load
          anyway — the blocking script sets the class before the first paint.
        */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          {process.env.NODE_ENV === "development" ? <ShowcaseProvider /> : null}
          <div data-showcase-hide>
            <TailwindIndicator />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
