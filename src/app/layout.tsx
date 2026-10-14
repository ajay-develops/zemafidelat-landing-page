import { ShowcaseProvider } from "@/components/showcase/showcase-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/lib/config";
import { fontDisplay, fontEthiopic, fontSans } from "@/lib/fonts";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = constructMetadata({
  // Icons come from constructMetadata, which points them at logoIcon; setting
  // them here too would override it and is one more place to forget.
  title: `${siteConfig.name} | ${siteConfig.description}`,
});

export const viewport: Viewport = {
  // The hero's mint (--mint in globals.css), so the browser chrome runs into
  // the page on phones. Metadata cannot read CSS variables, hence the copy.
  themeColor: "#eaf7e6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        fontSans.variable,
        fontDisplay.variable,
        fontEthiopic.variable,
        "scroll-smooth"
      )}
    >
      <body className="min-h-screen w-full bg-background font-sans text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === "development" ? <ShowcaseProvider /> : null}
        <div data-showcase-hide>
          <TailwindIndicator />
        </div>
      </body>
    </html>
  );
}
