import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";

export function Footer() {
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
              href={link.href}
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-sm font-medium tracking-tight text-muted-foreground">
        © 2026 Zema Fidelat. All rights reserved.
      </p>
    </footer>
  );
}
