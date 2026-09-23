import { FacebookIcon, LinkedinIcon, PhoneIcon } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/config/site";

const columns = [
  {
    title: "Our Services",
    links: [
      "Virtual Office",
      "Registered Office Address",
      "Virtual Landline",
      "Call Answering",
      "Virtual Receptionist",
      "Virtual Switchboard",
      "Virtual PA",
    ],
  },
  {
    title: "Virtual Office Locations",
    links: [
      "London",
      "Manchester",
      "Birmingham",
      "Leeds",
      "Glasgow",
      "Cardiff",
      "Bradford",
      "Belfast",
    ],
  },
  {
    title: "About",
    links: [
      "Our Story",
      "Onboarding",
      "Partnerships",
      "News & Blogs",
      "FAQs",
      "Contact Us",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-background/70">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-background">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Contact Us
            </h3>
            <a
              href={siteConfig.phoneHref}
              className="mt-4 flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
            >
              <PhoneIcon className="size-4" />
              {siteConfig.phone}
            </a>
            <address className="mt-4 text-sm not-italic text-background/70">
              4th Floor, Silverstream House
              <br />
              45 Fitzroy St, Fitzrovia
              <br />
              London, W1T 6EB
            </address>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.links.linkedin}
                aria-label="LinkedIn"
                className="grid size-9 place-items-center rounded-full bg-background/10 transition-colors hover:bg-primary"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={siteConfig.links.facebook}
                aria-label="Facebook"
                className="grid size-9 place-items-center rounded-full bg-background/10 transition-colors hover:bg-primary"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-8 sm:flex-row">
          <Logo className="[&_span]:text-background [&_.text-primary]:text-primary" />
          <p className="text-center text-xs text-background/60">
            &copy; {new Date().getFullYear()} Virtually There Offices Limited.
            Registered in England. Company No. 08123456.
          </p>
        </div>
      </div>
    </footer>
  );
}
