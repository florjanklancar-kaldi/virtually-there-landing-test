import type { LucideIcon } from "lucide-react";
import { MailIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";

import { Illustration } from "@/components/illustrations";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { signOff } from "@/content/home";

const channels: { label: string; value: string; href: string; icon: LucideIcon }[] = [
  {
    label: "Call us",
    value: siteConfig.contact.phoneDisplay,
    href: `tel:${siteConfig.contact.phone}`,
    icon: PhoneIcon,
  },
  {
    label: "Email us",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: MailIcon,
  },
  {
    label: "Message us",
    value: signOff.cta.label,
    href: signOff.cta.href,
    icon: MessageCircleIcon,
  },
];

export function SignOff() {
  return (
    <section
      aria-labelledby="sign-off-title"
      className="bg-green-background pb-16 sm:pb-24"
    >
      <div className="container-page">
        <Reveal className="relative grid items-center gap-10 overflow-hidden rounded-2xl bg-white p-8 shadow-xs sm:p-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <p className="font-semibold text-green-dark text-sm uppercase tracking-wider">
              {signOff.eyebrow}
            </p>
            <h2
              className="mt-2 text-balance text-4xl tracking-tight sm:text-5xl"
              id="sign-off-title"
            >
              {signOff.title}
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg">{signOff.body}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {channels.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    className="group flex h-full items-center gap-3 rounded-xl border border-border p-4 transition-all hover:-translate-y-0.5 hover:border-green hover:shadow-md sm:flex-col sm:items-start"
                    href={href}
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-green-light text-green-dark transition-colors group-hover:bg-green group-hover:text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-muted-foreground text-sm">{label}</span>
                      <span className="block truncate font-bold">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-60 lg:max-w-80">
            <Illustration name="yoga" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
