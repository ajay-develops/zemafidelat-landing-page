import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto flex w-full max-w-[var(--max-container-width)] flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-pale">
            <Icons.logo className="h-7 w-auto" decorative />
            <span className="font-display text-lg font-bold">{siteConfig.name}</span>
          </Link>
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {siteConfig.footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-sm text-sm text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-pale"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
