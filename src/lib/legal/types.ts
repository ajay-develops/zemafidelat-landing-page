/*
 * Shape of the legal pages (/privacy, /terms, /delete-account). The app keeps
 * the same block model in zema-frontend/src/types/legal-content.ts.
 *
 * Text fields may contain **bold** markup. Full URLs and email addresses in the
 * text are rendered as links (see src/lib/legal/inline-text.ts).
 */

export type LegalListItem =
  | string
  | {
      text: string;
      /** A list nested under this item. */
      items?: readonly LegalListItem[];
      /** A paragraph that belongs to this item, shown after its nested list. */
      trailingParagraph?: string;
    };

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; id: string; text: string }
  | { type: "bullets"; items: readonly LegalListItem[] }
  /** A numbered list of steps. */
  | { type: "steps"; items: readonly string[] }
  /** Each row has one cell per column. */
  | {
      type: "table";
      columns: readonly string[];
      rows: readonly (readonly string[])[];
    };

export type LegalSection = {
  /** Anchor for the section, e.g. /privacy#photos. Keep stable once published. */
  id: string;
  title: string;
  blocks: readonly LegalBlock[];
};

export type LegalDocument = {
  title: string;
  effectiveDate?: string;
  /** As shown on the page, e.g. "18 September 2026". */
  lastUpdated: string;
  /** The same date as `lastUpdated`, as YYYY-MM-DD, for the sitemap and <time>. */
  updatedAt: string;
  /** Blocks shown under the dates, before the first section. */
  intro?: readonly LegalBlock[];
  sections: readonly LegalSection[];
};
