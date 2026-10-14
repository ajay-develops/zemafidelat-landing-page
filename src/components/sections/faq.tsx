import { Section } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/config";

export function FAQ() {
  return (
    <Section id="faq" eyebrow={siteConfig.faqEyebrow} title={siteConfig.faqTitle}>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="mx-auto max-w-3xl space-y-3"
      >
        {siteConfig.faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`item-${index}`}
            className="rounded-2xl border-0 bg-muted px-6 transition-colors data-[state=open]:bg-mint"
          >
            <AccordionTrigger className="py-5 text-left text-base font-bold text-foreground hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-muted rounded-sm">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
