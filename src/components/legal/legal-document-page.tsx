import { LegalRichText } from "@/components/legal/legal-rich-text";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import type {
  LegalBlock,
  LegalDocument,
  LegalListItem,
} from "@/lib/legal/types";
import { cn } from "@/lib/utils";

function LegalList({
  items,
  nested = false,
}: {
  items: readonly LegalListItem[];
  nested?: boolean;
}) {
  return (
    <ul
      className={cn(
        "space-y-2 pl-6",
        nested
          ? "mt-2 list-[circle] marker:text-muted-foreground"
          : "list-disc marker:text-primary"
      )}
    >
      {items.map((item, index) => {
        const entry: Exclude<LegalListItem, string> =
          typeof item === "string" ? { text: item } : item;

        return (
          <li key={`${index}-${entry.text}`} className="pl-1">
            <LegalRichText text={entry.text} />
            {entry.items ? <LegalList items={entry.items} nested /> : null}
            {entry.trailingParagraph ? (
              <p className="mt-3">
                <LegalRichText text={entry.trailingParagraph} />
              </p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function LegalBlocks({
  blocks,
  labelledBy,
}: {
  blocks: readonly LegalBlock[];
  /** Id of the heading that names these blocks, for scrollable tables. */
  labelledBy?: string;
}) {
  return (
    <>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "paragraph":
            return (
              <p key={key}>
                <LegalRichText text={block.text} />
              </p>
            );
          case "subheading":
            return (
              <h3
                key={key}
                id={block.id}
                className="scroll-mt-20 pt-4 text-lg font-semibold tracking-tight text-foreground"
              >
                {block.text}
              </h3>
            );
          case "bullets":
            return <LegalList key={key} items={block.items} />;
          case "steps":
            return (
              <ol
                key={key}
                className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-foreground"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={`${itemIndex}-${item}`} className="pl-1">
                    <LegalRichText text={item} />
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              // Scrolls sideways on narrow screens; focusable so keyboard
              // users can scroll it too.
              <div
                key={key}
                role="region"
                aria-labelledby={labelledBy}
                tabIndex={0}
                className="overflow-x-auto rounded-lg border"
              >
                <table className="w-full min-w-[36rem] border-collapse text-left text-sm leading-6">
                  <thead className="bg-muted">
                    <tr>
                      {block.columns.map((column) => (
                        <th
                          key={column}
                          scope="col"
                          className="px-4 py-3 font-semibold text-foreground"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr
                        key={`${rowIndex}-${row[0]}`}
                        className="border-t align-top"
                      >
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th
                              key={cellIndex}
                              scope="row"
                              className="px-4 py-3 font-medium text-foreground"
                            >
                              <LegalRichText text={cell} />
                            </th>
                          ) : (
                            <td key={cellIndex} className="px-4 py-3">
                              <LegalRichText text={cell} />
                            </td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export function LegalDocumentPage({
  content,
  showContents = false,
}: {
  content: LegalDocument;
  /** Lists links to every section below the introduction. */
  showContents?: boolean;
}) {
  return (
    <main className="relative">
      <Header anchorBase="/" />

      <article className="mx-auto w-full max-w-3xl px-6 pb-16 pt-10 text-base leading-7 text-muted-foreground sm:pt-16">
        <header className="border-b pb-8">
          <h1 className="text-balance text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
            {content.title}
          </h1>
          <div className="mt-4 space-y-1 text-sm">
            {content.effectiveDate ? (
              <p>
                <strong className="font-semibold text-foreground">
                  Effective date:
                </strong>{" "}
                {content.effectiveDate}
              </p>
            ) : null}
            <p>
              <strong className="font-semibold text-foreground">
                Last updated:
              </strong>{" "}
              <time dateTime={content.updatedAt}>{content.lastUpdated}</time>
            </p>
          </div>
        </header>

        {content.intro ? (
          <div className="mt-8 space-y-5">
            <LegalBlocks blocks={content.intro} />
          </div>
        ) : null}

        {showContents ? (
          <nav
            aria-labelledby="legal-contents"
            className="mt-10 rounded-xl border bg-muted/50 p-6"
          >
            <p
              id="legal-contents"
              className="text-sm font-semibold uppercase tracking-wider text-foreground"
            >
              Contents
            </p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {content.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {content.sections.map((section) => {
          const headingId = `${section.id}-heading`;

          return (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={headingId}
              className="mt-12 scroll-mt-20 space-y-5"
            >
              <h2
                id={headingId}
                className="text-2xl font-bold tracking-tight text-foreground"
              >
                {section.title}
              </h2>
              <LegalBlocks blocks={section.blocks} labelledBy={headingId} />
            </section>
          );
        })}
      </article>

      <Footer anchorBase="/" />
    </main>
  );
}
