import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationGrid } from "@/components/locations/city-chooser";
import { LocationPage } from "@/components/locations/location-page";
import { PageHero } from "@/components/page/page-hero";
import { PortalLink } from "@/components/portal-link";
import { Faq } from "@/components/sections/faq";
import { SignOff } from "@/components/sections/sign-off";
import { buttonVariants } from "@/components/ui/button";
import { pickFaqs } from "@/content/faqs";
import { cities } from "@/content/locations/cities";
import { locationFaqs } from "@/content/locations/copy";
import { formatPrice, getCity, getSites, minPrice } from "@/lib/locations";
import { officeOnboarding, portal } from "@/lib/portal";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata(
  props: PageProps<"/virtual-offices/[city]">,
): Promise<Metadata> {
  const { city: slug } = await props.params;
  const city = getCity(slug);
  if (!city) {
    return {};
  }
  const from = formatPrice(minPrice(getSites(city.sites)));
  return {
    title: `${city.name} Virtual Office from ${from}/month with Free Mail Scans`,
    description: `A professional ${city.name} business address from ${from} a month: no set-up fee, 10 free mail scans monthly and cancel any time.`,
    alternates: { canonical: `/virtual-offices/${city.slug}/` },
  };
}

export default async function CityPage(props: PageProps<"/virtual-offices/[city]">) {
  const { city: slug } = await props.params;
  const city = getCity(slug);
  if (!city) {
    notFound();
  }
  const sites = getSites(city.sites);
  const crumbs = [
    { label: "Virtual Offices", href: "/virtual-offices/" },
    { label: city.name },
  ];
  const [single] = sites;

  if (sites.length === 1 && single) {
    return (
      <LocationPage
        buy={officeOnboarding(single.plan)}
        crumbs={crumbs}
        mode="office"
        place={city.name}
        site={single}
        title={`Your virtual office in ${city.name}`}
      />
    );
  }

  return (
    <>
      <PageHero
        badges={["No set-up fees", "10 free mail scans a month", "Cancel any time"]}
        crumbs={crumbs}
        illustration="address"
        intro={`Choose from ${sites.length} ${city.name} business addresses, from ${formatPrice(minPrice(sites))} a month.`}
        title={`Virtual offices in ${city.name}`}
      >
        <a className={buttonVariants({ size: "xl" })} href="#sites-title">
          Choose your address
        </a>
        <PortalLink
          className={buttonVariants({ variant: "brand", size: "xl" })}
          to={
            city.onboardingCity
              ? { path: "/onboarding", params: { selectedCity: city.onboardingCity } }
              : portal.onboarding
          }
        >
          Buy now
        </PortalLink>
      </PageHero>
      <LocationGrid
        sites={sites}
        title={`Choose your ${city.name} virtual office`}
        titleFor={(site) =>
          site.label.includes(site.city) ? site.label : `${site.label}, ${site.city}`
        }
      />
      <Faq items={pickFaqs(locationFaqs.office)} />
      <SignOff />
    </>
  );
}
