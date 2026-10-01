import { CheckIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import type { Crumb } from "@/components/page/breadcrumbs";
import { Breadcrumbs } from "@/components/page/breadcrumbs";
import { PortalLink } from "@/components/portal-link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import type { Site } from "@/content/locations/sites";
import { formatPrice } from "@/lib/locations";
import type { PortalTarget } from "@/lib/portal";

type LocationHeroProps = {
  site: Site;
  crumbs: Crumb[];
  title: string;
  intro: string;
  features: string[];
  price: number;
  ctaLabel?: string;
  buy: PortalTarget;
};

export function LocationHero({
  site,
  crumbs,
  title,
  intro,
  features,
  price,
  ctaLabel = "Buy now",
  buy,
}: LocationHeroProps) {
  return (
    <section className="overflow-hidden">
      <div className="container-page grid gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:py-16">
        <Reveal
          className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          from="left"
          immediate
        >
          <Image
            alt={site.imageAlt}
            className="object-cover"
            fill
            priority
            sizes="(min-width: 1024px) 600px, 100vw"
            src={site.image}
          />
        </Reveal>

        <div className="flex flex-col items-start gap-5">
          <Reveal immediate>
            <Breadcrumbs items={crumbs} />
          </Reveal>
          <Reveal delay={0.05} immediate>
            <h1 className="text-balance font-extrabold text-4xl leading-[1.02] tracking-tighter sm:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-xl">
              {site.building ? `${site.building}, ` : ""}
              {site.street}, {site.area}
            </p>
          </Reveal>
          <Reveal delay={0.1} immediate>
            <p className="text-lg">{intro}</p>
            <ul className="mt-4 grid gap-2">
              {features.map((feature) => (
                <li className="flex items-start gap-2.5 text-lg" key={feature}>
                  <CheckIcon
                    aria-hidden
                    className="mt-1 size-5 shrink-0 text-green-dark"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            className="flex w-full flex-wrap items-center gap-x-6 gap-y-4 rounded-2xl bg-green-background p-5"
            delay={0.15}
            immediate
          >
            <p className="leading-tight">
              <span className="block text-sm">From</span>
              <span className="font-extrabold text-4xl">{formatPrice(price)}</span>
              <span className="text-base"> /month + VAT</span>
              <span className="block text-muted-foreground text-sm">
                when billed annually
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <PortalLink
                className={buttonVariants({ variant: "brand", size: "xl" })}
                to={buy}
              >
                {ctaLabel}
              </PortalLink>
              <a
                className={buttonVariants({ variant: "outline", size: "xl" })}
                href={`tel:${siteConfig.contact.phone}`}
              >
                <PhoneIcon data-icon="inline-start" />
                Or call us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
