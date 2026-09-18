import { parseLegalInlineText } from "@/lib/legal/inline-text";
import Link from "next/link";
import { Fragment } from "react";

/* The texts spell out full URLs; ones on this site navigate client-side. */
const SITE_ORIGIN = "https://zemafidelat.com";

const linkClassName =
  "font-medium text-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:decoration-primary [overflow-wrap:anywhere]";

function LegalLink({ href, children }: { href: string; children: string }) {
  if (href.startsWith(`${SITE_ORIGIN}/`)) {
    return (
      <Link href={href.slice(SITE_ORIGIN.length)} className={linkClassName}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={linkClassName}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
    >
      {children}
    </a>
  );
}

/** Text with **bold** segments; URLs and email addresses become links. */
export function LegalRichText({ text }: { text: string }) {
  return (
    <>
      {parseLegalInlineText(text).map((segment, index) => {
        const content = segment.href ? (
          <LegalLink href={segment.href}>{segment.text}</LegalLink>
        ) : (
          segment.text
        );

        return segment.bold ? (
          <strong key={index} className="font-semibold text-foreground">
            {content}
          </strong>
        ) : (
          <Fragment key={index}>{content}</Fragment>
        );
      })}
    </>
  );
}
