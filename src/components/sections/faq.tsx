import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is a virtual office?",
    a: "A virtual office is a professional business address you can use for your company without renting physical space. We receive your mail and forward it to you, and you can manage everything through our online customer portal.",
  },
  {
    q: "Can I use my virtual office address to register my company with Companies House?",
    a: "Yes. When you add a registered office address to your plan, you can use it to register your company with Companies House and HMRC while keeping your home address private.",
  },
  {
    q: "Am I tied into a long contract?",
    a: "No. We offer flexible monthly rolling contracts, so you have the freedom to cancel at any time.",
  },
  {
    q: "Are virtual offices available to all SMEs or just digital businesses?",
    a: "Virtual offices are available to any UK business, including startups, freelancers, sole traders and established SMEs across every industry.",
  },
  {
    q: "Can I buy a registered office address without a virtual office?",
    a: "Our registered office address is offered as an add-on to a virtual office plan, giving you a complete and compliant business address solution.",
  },
  {
    q: "Can I use a virtual office address on Google My Business?",
    a: "Google's guidelines require a location you staff during business hours, so a virtual office address may not be eligible for a Google My Business listing.",
  },
  {
    q: "Can I use the virtual office address on my website and marketing materials?",
    a: "Absolutely. You can display your professional business address on your website, email signatures, invoices and all marketing materials.",
  },
  {
    q: "How long does it take to set up my virtual address?",
    a: "Most customers are set up in as little as 5 minutes through our simple online onboarding process.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container-page max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          FAQs to help you choose
        </h2>
        <Accordion className="mt-10">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <a href="#contact-cta" className={buttonVariants({ className: "mt-8" })}>
          I have more questions
        </a>
      </div>
    </section>
  );
}
