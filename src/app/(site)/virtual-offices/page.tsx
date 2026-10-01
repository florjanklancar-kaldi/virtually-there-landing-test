import type { Metadata } from "next";
import Link from "next/link";
import { LocationGrid } from "@/components/locations/city-chooser";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page/page-hero";
import { Faq } from "@/components/sections/faq";
import { IconFeatures } from "@/components/sections/icon-features";
import { SignOff } from "@/components/sections/sign-off";
import { buttonVariants } from "@/components/ui/button";
import { pickFaqs } from "@/content/faqs";
import { usps } from "@/content/home";
import { cities } from "@/content/locations/cities";
import { locationFaqs } from "@/content/locations/copy";
import { sites } from "@/content/locations/sites";

export const metadata: Metadata = {
  title: "UK Virtual Office Addresses | From £10/month",
  description:
    "Virtual office addresses in 13 UK cities from £10 a month, including London, Manchester, Birmingham, Glasgow and Belfast. No set-up fees.",
  alternates: { canonical: "/virtual-offices/" },
};

export default function VirtualOfficesPage() {
  return (
    <>
      <PageHero
        badges={["No set-up fees", "Live in about 5 minutes", "Cancel any time"]}
        crumbs={[{ label: "Virtual Offices" }]}
        illustration="address"
        intro="A professional business address in 13 UK cities from £10 a month, with mail handling and a 24/7 customer portal."
        title="UK virtual office addresses"
      >
        <a className={buttonVariants({ size: "xl" })} href="#sites-title">
          Choose your address
        </a>
      </PageHero>
      <IconFeatures className="pt-0" items={usps} />
      <section aria-labelledby="cities-title" className="bg-green-background py-14">
        <div className="container-page">
          <Reveal>
            <h2 className="mb-6 font-bold text-3xl" id="cities-title">
              Browse by city
            </h2>
            <ul className="flex flex-wrap gap-3">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    className="block rounded-full bg-white px-5 py-2.5 font-semibold text-lg shadow-xs transition-all hover:-translate-y-0.5 hover:bg-green"
                    href={{ pathname: `/virtual-offices/${city.slug}/` }}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <LocationGrid
        intro="Every address includes 10 free mail scans a month and full access to our customer portal."
        sites={sites}
        title="Choose your virtual office address"
      />
      <Faq items={pickFaqs(locationFaqs.office)} />
      <SignOff />
    </>
  );
}
