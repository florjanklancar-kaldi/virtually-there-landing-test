import { SectionHeading } from "@/components/sections/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Virtually There?",
    a: "A one-paragraph answer to the most common question.",
  },
  { q: "Who is it for?", a: "Describe your ideal customer in a sentence or two." },
  {
    q: "How much does it cost?",
    a: "Summarise pricing and point to the pricing section.",
  },
  { q: "Is my data secure?", a: "Explain your security and privacy posture briefly." },
  { q: "Can I cancel anytime?", a: "Yes — explain your cancellation policy here." },
];

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container-page max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <Accordion className="mt-12">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
