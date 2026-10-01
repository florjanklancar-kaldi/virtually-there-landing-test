import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PriceBadge } from "@/components/locations/location-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/page/page-hero";
import { PortalLink } from "@/components/portal-link";
import { Faq } from "@/components/sections/faq";
import { FeaturePanel } from "@/components/sections/feature-panel";
import { IconFeatures } from "@/components/sections/icon-features";
import { SignOff } from "@/components/sections/sign-off";
import { buttonVariants } from "@/components/ui/button";
import { pickFaqs } from "@/content/faqs";
import { locationFaqs, locationUsps } from "@/content/locations/copy";
import { REGISTERED_FROM, registeredCities } from "@/content/locations/registered";
import { portal } from "@/lib/portal";

export const metadata: Metadata = {
  title: "Registered Office Address UK | From £17/month",
  description:
    "A registered office address for Companies House and HMRC from £17 a month, with a trading address, two director’s service addresses and free mail scanning.",
  alternates: { canonical: "/registered-office-address/" },
};

export default function RegisteredOfficePage() {
  return (
    <>
      <PageHero
        badges={[
          "Valid for Companies House & HMRC",
          "2 director’s service addresses",
          "No set-up fee",
        ]}
        crumbs={[{ label: "Registered Office Address" }]}
        illustration="registered"
        intro={`Register your company at a professional UK address and keep your home address off the public record, from £${REGISTERED_FROM} a month.`}
        title="Registered office address"
      >
        <PortalLink
          className={buttonVariants({ variant: "brand", size: "xl" })}
          to={portal.onboarding}
        >
          Buy now
        </PortalLink>
      </PageHero>

      <section aria-labelledby="ra-cities" className="section pt-4">
        <div className="container-page">
          <Reveal className="mb-14 text-center">
            <h2 className="font-bold text-4xl tracking-tight sm:text-5xl" id="ra-cities">
              Choose your registered address
            </h2>
          </Reveal>
          <RevealGroup className="mx-auto grid max-w-5xl grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {registeredCities.map((city) => (
              <RevealItem key={city.name}>
                <Link className="group relative block" href={{ pathname: city.href }}>
                  <PriceBadge
                    price={"price" in city ? city.price : REGISTERED_FROM}
                    size="sm"
                  />
                  <span className="relative block aspect-[17/10] overflow-hidden rounded-xl">
                    <Image
                      alt={`${city.name} skyline`}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      fill
                      sizes="(min-width: 1024px) 240px, (min-width: 640px) 33vw, 50vw"
                      src={city.image}
                    />
                  </span>
                  <span className="mt-3 block font-semibold text-lg group-hover:text-green-dark">
                    {city.name}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <IconFeatures className="pt-0" items={locationUsps("registered office")} />

      <section aria-labelledby="what-is-ra" className="section pt-0">
        <div className="container-page">
          <FeaturePanel illustration="whisper">
            <h2 className="text-4xl tracking-tight sm:text-5xl" id="what-is-ra">
              What is a registered office address?
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl">
              Every UK limited company must give Companies House an official address where
              statutory post can be delivered. It appears on the public register, so using
              ours keeps your home address private.
            </p>
            <p className="text-lg leading-relaxed sm:text-xl">
              Our package also includes a full trading address for your website, invoices
              and marketing, plus director’s service addresses for up to two directors.
            </p>
          </FeaturePanel>
        </div>
      </section>

      <Faq items={pickFaqs(locationFaqs.registered)} />
      <SignOff />
    </>
  );
}
