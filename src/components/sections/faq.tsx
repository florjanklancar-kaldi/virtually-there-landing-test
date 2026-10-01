import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { PlusIcon } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import type { Faq as FaqItem } from "@/content/faqs";
import { cn } from "@/lib/utils";

type FaqProps = {
  items: FaqItem[];
  title?: string;
  className?: string;
};

export function Faq({ items, title = "FAQs to help you choose", className }: FaqProps) {
  return (
    <section
      aria-labelledby="faqs-title"
      className={cn("section bg-green-background", className)}
      id="faqs"
    >
      <div className="container-page">
        <Reveal>
          <h2 className="mb-10 text-4xl tracking-tight sm:text-5xl" id="faqs-title">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion className="gap-3">
            {items.map((item) => (
              <AccordionItem
                className="rounded-md bg-white shadow-xs transition-shadow hover:shadow-md"
                key={item.question}
                value={item.question}
              >
                {/* Custom trigger: large type and a plus that rotates into a cross. */}
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="group flex flex-1 items-center justify-between gap-6 rounded-md px-6 py-6 text-left text-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:text-2xl">
                    {item.question}
                    <PlusIcon
                      aria-hidden
                      className="size-6 shrink-0 transition-transform duration-300 group-aria-expanded:rotate-45"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="px-6 pb-6 text-lg leading-relaxed">
                  {item.answer.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
