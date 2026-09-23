import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${siteConfig.name} team. We'd love to hear from you.`,
};

const details = [
  {
    icon: MailIcon,
    label: "Email",
    value: "hello@virtuallythere.com",
    href: "mailto:hello@virtuallythere.com",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+1 (555) 012-3456",
    href: "tel:+15550123456",
  },
  {
    icon: MapPinIcon,
    label: "Office",
    value: "500 Presence Ave, San Francisco, CA 94107",
  },
  {
    icon: ClockIcon,
    label: "Hours",
    value: "Mon–Fri, 9:00am – 6:00pm PT",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="section">
          <div className="container-page">
            <SectionHeading
              eyebrow="Contact"
              title="Let's talk"
              description="Have a question, feedback, or a partnership idea? Send us a message and our team will get back to you shortly."
            />

            <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_1fr]">
              <Reveal>
                <Card>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {details.map((item) => (
                    <Card key={item.label} className="h-full">
                      <CardContent className="flex items-start gap-4">
                        <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                          <item.icon className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
