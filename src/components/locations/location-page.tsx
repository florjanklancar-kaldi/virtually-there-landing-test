import { ComparisonTable } from "@/components/locations/comparison-table";
import { LocationHero } from "@/components/locations/location-hero";
import { PortalSection } from "@/components/locations/portal-section";
import { RegisteredUpsell } from "@/components/locations/registered-upsell";
import type { Crumb } from "@/components/page/breadcrumbs";
import { JsonLd } from "@/components/page/json-ld";
import { Faq } from "@/components/sections/faq";
import { IconFeatures } from "@/components/sections/icon-features";
import { SignOff } from "@/components/sections/sign-off";
import { Testimonials } from "@/components/sections/testimonials";
import { siteConfig } from "@/config/site";
import { pickFaqs } from "@/content/faqs";
import type { LocationMode } from "@/content/locations/copy";
import {
  locationFaqs,
  locationFeatures,
  locationIntro,
  locationUsps,
} from "@/content/locations/copy";
import type { Site } from "@/content/locations/sites";
import { faqPageJsonLd } from "@/lib/json-ld";
import type { PortalTarget } from "@/lib/portal";

type LocationPageProps = {
  site: Site;
  mode: LocationMode;
  crumbs: Crumb[];
  title: string;
  /** Place name used in headings, e.g. "Mayfair" or "Manchester". */
  place: string;
  /** Portal onboarding link for this address. */
  buy: PortalTarget;
};

/** Full page for a single address: virtual office or registered office mode. */
export function LocationPage({
  site,
  mode,
  crumbs,
  title,
  place,
  buy,
}: LocationPageProps) {
  const faqs = pickFaqs(locationFaqs[mode]);
  const price = mode === "registered" ? site.registeredFrom : site.priceFrom;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: title,
            provider: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            areaServed: site.city,
            offers: { "@type": "Offer", price, priceCurrency: "GBP" },
          },
          faqPageJsonLd(faqs),
        ]}
      />
      <LocationHero
        buy={buy}
        crumbs={crumbs}
        features={locationFeatures(site, mode)}
        intro={locationIntro(site, mode)}
        price={price}
        site={site}
        title={title}
      />
      <ComparisonTable buy={buy} place={place} site={site} />
      <IconFeatures className="pt-0" items={locationUsps(place)} />
      <PortalSection place={place} />
      {mode === "office" ? (
        <RegisteredUpsell place={place} plan={site.plan} price={site.registeredFrom} />
      ) : null}
      <Testimonials />
      <Faq items={faqs} />
      <SignOff />
    </>
  );
}
