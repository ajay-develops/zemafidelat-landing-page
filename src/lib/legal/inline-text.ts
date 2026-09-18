/*
 * Same rules as the app's zema-frontend/src/utils/legal-inline-text.ts, so a
 * text renders the same way in both places.
 */

export type LegalInlineSegment = {
  text: string;
  bold: boolean;
  /** `https://…` or `mailto:…` when the segment is a link. */
  href?: string;
};

const BOLD_PATTERN = /\*\*(.+?)\*\*/g;

/**
 * A full http(s) URL, stopping before trailing sentence punctuation, or an
 * email address. Bare domains such as app.zemafidelat.com are left as text.
 */
const LINK_PATTERN =
  /https?:\/\/[^\s]+?(?=[.,;:!?)]*(?:\s|$))|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

function splitLinks(text: string, bold: boolean): LegalInlineSegment[] {
  const segments: LegalInlineSegment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const start = match.index ?? 0;
    if (start > lastIndex) {
      segments.push({ text: text.slice(lastIndex, start), bold });
    }
    const value = match[0];
    segments.push({
      text: value,
      bold,
      href:
        value.includes("@") && !value.startsWith("http")
          ? `mailto:${value}`
          : value,
    });
    lastIndex = start + value.length;
  }

  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), bold });
  }

  return segments;
}

/** Splits legal text into plain, **bold** and link segments. */
export function parseLegalInlineText(text: string): LegalInlineSegment[] {
  const segments: LegalInlineSegment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(BOLD_PATTERN)) {
    const start = match.index ?? 0;
    if (start > lastIndex) {
      segments.push(...splitLinks(text.slice(lastIndex, start), false));
    }
    segments.push(...splitLinks(match[1], true));
    lastIndex = start + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push(...splitLinks(text.slice(lastIndex), false));
  }

  return segments;
}
