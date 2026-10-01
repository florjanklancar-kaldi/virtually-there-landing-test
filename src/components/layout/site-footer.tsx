import Image from "next/image";

import { socials } from "@/components/layout/social-icons";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { ratings } from "@/content/home";
import type { NavLink } from "@/content/navigation";
import { cities, footerNav } from "@/content/navigation";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-bold text-lg text-white uppercase tracking-wide">
      {children}
    </h2>
  );
}

function FooterLinks({ links, className }: { links: NavLink[]; className?: string }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            className="inline-block py-1 transition-colors hover:text-green"
            href={link.href}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/80">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1fr_1.4fr_1fr_1.4fr] lg:py-20">
        <nav aria-label="Our services">
          <FooterHeading>Our services</FooterHeading>
          <FooterLinks links={footerNav.services} />
        </nav>
        <nav aria-label="Virtual office locations">
          <FooterHeading>Virtual office locations</FooterHeading>
          <FooterLinks className="grid grid-cols-2 gap-x-6" links={cities} />
        </nav>
        <nav aria-label="About">
          <FooterHeading>About</FooterHeading>
          <FooterLinks links={footerNav.about} />
        </nav>
        <div>
          <FooterHeading>Contact us</FooterHeading>
          <ul className="space-y-1">
            <li>
              <a
                className="py-1 transition-colors hover:text-green"
                href={`mailto:${siteConfig.contact.email}`}
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                className="py-1 transition-colors hover:text-green"
                href={`tel:${siteConfig.contact.phone}`}
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-6">
            {siteConfig.offices.map((office) => (
              <address className="not-italic" key={office.label}>
                <p className="font-bold text-white uppercase">{siteConfig.name}</p>
                {office.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            ))}
          </div>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full bg-white/90 text-primary transition-all hover:-translate-y-0.5 hover:bg-green"
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col items-center gap-6 pb-12 text-center text-sm">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Image
            alt="We are a Living Wage Employer"
            className="h-18 w-auto"
            height={207}
            src="/badges/living-wage-employer.webp"
            width={263}
          />
          <a
            className="transition-opacity hover:opacity-80"
            href={siteConfig.links.trustpilot}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt={`Rated ${ratings.trustpilot.label} on Trustpilot`}
              className="h-9 w-auto"
              height={128}
              src="/badges/trustpilot-rating.webp"
              width={320}
            />
          </a>
          <Image
            alt={`Google rating ${ratings.google.score}`}
            className="h-12 w-auto"
            height={175}
            src="/badges/google-rating.webp"
            width={320}
          />
        </div>

        <nav aria-label="Legal" className="flex items-center gap-3">
          {footerNav.legal.map((link, i) => (
            <span className="flex items-center gap-3" key={link.label}>
              {i > 0 && <Separator className="h-4 bg-white/30" orientation="vertical" />}
              <a className="hover:text-green" href={link.href}>
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        <p className="text-white/60 text-xs">
          MLR Registration number: {siteConfig.legal.mlrNumber} · Organisation name:{" "}
          {siteConfig.legalName} · ICO Reference: {siteConfig.legal.icoReference}
        </p>
        <p className="text-white/60 text-xs">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
