import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { withAnchorBase } from "@/lib/utils";
import Link from "next/link";

type FooterProps = {
  /** "/" on pages other than the homepage, so section links lead back to it. */
  anchorBase?: string;
};

export function Footer({ anchorBase = "" }: FooterProps) {
  return (
    <footer className="container flex flex-col items-center gap-y-5 rounded-lg px-7 py-5 text-center md:px-10">
      <div className="flex items-center gap-x-2">
        <Icons.logo className="h-8 w-8" />
        <p className="text-lg font-bold text-foreground">{siteConfig.name}</p>
      </div>

      {/* Centred as a stack. The links and the copyright used to sit at
          opposite ends of a justify-between row, and the wordmark hung off the
          left edge above them. */}
      <ul className="flex flex-col items-center gap-x-5 gap-y-2 text-muted-foreground md:flex-row">
        {siteConfig.navLinks.map((link) => (
          <li
            key={link.text}
            className="text-[15px]/normal font-medium text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground hover:underline hover:underline-offset-4"
          >
            <a
              href={withAnchorBase(link.href, anchorBase)}
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      <nav aria-label="Legal">
        <ul className="flex flex-col items-center gap-x-5 gap-y-2 md:flex-row">
          {siteConfig.legalLinks.map((link) => (
            <li
              key={link.href}
              className="text-sm font-medium text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground hover:underline hover:underline-offset-4"
            >
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="text-sm font-medium tracking-tight text-muted-foreground">
        © 2026 Zema Fidelat. All rights reserved.
      </p>
    </footer>
  );
}
