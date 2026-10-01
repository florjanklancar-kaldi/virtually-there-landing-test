import { AppLink } from "@/components/app-link";
import { JsonLd } from "@/components/page/json-ld";
import { PageHero } from "@/components/page/page-hero";
import { PortalLink } from "@/components/portal-link";
import { Faq } from "@/components/sections/faq";
import { FeaturePanel } from "@/components/sections/feature-panel";
import { IconFeatures } from "@/components/sections/icon-features";
import { SignOff } from "@/components/sections/sign-off";
import { Testimonials } from "@/components/sections/testimonials";
import { RelatedCards } from "@/components/services/related-cards";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { pickFaqs } from "@/content/faqs";
import type { ServiceContent } from "@/content/services/types";
import { faqPageJsonLd } from "@/lib/json-ld";
import { formatPrice } from "@/lib/locations";

function ServicePrice({ price }: { price: NonNullable<ServiceContent["price"]> }) {
  return (
    <p className="leading-tight">
      <span className="block text-sm">From</span>
      <span className="font-extrabold text-4xl">{formatPrice(price.from)}</span>
      <span className="block max-w-56 text-muted-foreground text-sm">{price.note}</span>
    </p>
  );
}

export function ServicePage({ service }: { service: ServiceContent }) {
  const faqs = pickFaqs(service.faqs);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.metaDescription,
            provider: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            areaServed: "GB",
          },
          faqPageJsonLd(faqs),
        ]}
      />
      <PageHero
        badges={service.badges}
        crumbs={[{ label: service.name }]}
        illustration={service.illustration}
        intro={service.intro}
        title={service.title}
      >
        {service.price ? <ServicePrice price={service.price} /> : null}
        {"portal" in service.cta ? (
          <PortalLink
            className={buttonVariants({ variant: "brand", size: "xl" })}
            to={service.cta.portal}
          >
            {service.cta.label}
          </PortalLink>
        ) : (
          <AppLink
            className={buttonVariants({ variant: "brand", size: "xl" })}
            href={service.cta.href}
          >
            {service.cta.label}
          </AppLink>
        )}
        <a
          className={buttonVariants({ variant: "outline", size: "xl" })}
          href={`tel:${siteConfig.contact.phone}`}
        >
          Call {siteConfig.contact.phoneDisplay}
        </a>
      </PageHero>
      <IconFeatures items={service.features} />
      <section aria-labelledby="explainer-title" className="section pt-0">
        <div className="container-page">
          <FeaturePanel illustration={service.explainer.illustration}>
            <h2 className="text-4xl tracking-tight sm:text-5xl" id="explainer-title">
              {service.explainer.title}
            </h2>
            {service.explainer.paragraphs.map((p) => (
              <p className="text-lg leading-relaxed sm:text-xl" key={p}>
                {p}
              </p>
            ))}
          </FeaturePanel>
        </div>
      </section>
      {service.related ? (
        <RelatedCards slugs={service.related} title="Find the right level of support" />
      ) : null}
      <Testimonials />
      <Faq items={faqs} />
      <SignOff />
    </>
  );
}
