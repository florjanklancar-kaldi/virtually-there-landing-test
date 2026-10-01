import { JsonLd } from "@/components/page/json-ld";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { IconFeatures } from "@/components/sections/icon-features";
import { PopularLocations } from "@/components/sections/popular-locations";
import { Services } from "@/components/sections/services";
import { SignOff } from "@/components/sections/sign-off";
import { Testimonials } from "@/components/sections/testimonials";
import { WhatIs } from "@/components/sections/what-is";
import { siteConfig } from "@/config/site";
import { faqs, usps } from "@/content/home";
import { faqPageJsonLd } from "@/lib/json-ld";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <JsonLd data={[organization, faqPageJsonLd(faqs)]} />
      <Hero />
      <Testimonials />
      <IconFeatures items={usps} />
      <WhatIs />
      <PopularLocations />
      <Services />
      <Faq items={faqs} />
      <SignOff />
    </>
  );
}
