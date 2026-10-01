import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import type { Metadata } from "next";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/page/page-hero";
import { Faq } from "@/components/sections/faq";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { pickFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to the Virtually There team about virtual offices, registered addresses and call answering. Call 0203 476 7792 or email team@virtually-there.net.",
  alternates: { canonical: "/contact-us/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact Us" }]}
        illustration="whisper"
        intro="Ask us anything. We’ll give you clear, straightforward answers, and we sometimes have offers that aren’t on the website yet."
        title="Get in touch"
      >
        <a
          className={buttonVariants({ variant: "brand", size: "xl" })}
          href={`tel:${siteConfig.contact.phone}`}
        >
          <PhoneIcon data-icon="inline-start" />
          Call {siteConfig.contact.phoneDisplay}
        </a>
        <a
          className={buttonVariants({ variant: "outline", size: "xl" })}
          href={`mailto:${siteConfig.contact.email}`}
        >
          <MailIcon data-icon="inline-start" />
          Email us
        </a>
      </PageHero>
      <section aria-labelledby="offices-title" className="section bg-green-background">
        <div className="container-page">
          <h2 className="mb-10 text-4xl tracking-tight sm:text-5xl" id="offices-title">
            Our offices
          </h2>
          <RevealGroup className="grid gap-6 md:grid-cols-2">
            {siteConfig.offices.map((office) => (
              <RevealItem key={office.label}>
                <address className="flex h-full gap-4 rounded-2xl bg-white p-8 not-italic shadow-xs">
                  <MapPinIcon
                    aria-hidden
                    className="mt-1 size-6 shrink-0 text-green-dark"
                  />
                  <span className="text-lg leading-relaxed">
                    <strong className="block text-xl">{office.label}</strong>
                    {office.lines.join(", ")}
                  </span>
                </address>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <Faq items={pickFaqs(["setupTime", "proofOfId", "contract", "overseas"])} />
    </>
  );
}
