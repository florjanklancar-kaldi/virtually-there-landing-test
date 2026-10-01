import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPage } from "@/components/locations/location-page";
import { formatPrice, getCity, getSite, subSiteParams } from "@/lib/locations";
import { officeOnboarding } from "@/lib/portal";

export const dynamicParams = false;

export function generateStaticParams() {
  return subSiteParams();
}

async function resolve(props: PageProps<"/virtual-offices/[city]/[site]">) {
  const { city, site } = await props.params;
  return { city: getCity(city), site: getSite(`${city}/${site}`) };
}

export async function generateMetadata(
  props: PageProps<"/virtual-offices/[city]/[site]">,
): Promise<Metadata> {
  const { site } = await resolve(props);
  if (!site) {
    return {};
  }
  return {
    title: `${site.label} Virtual Office, ${site.city} | From ${formatPrice(site.priceFrom)}/month`,
    description: `A virtual office on ${site.street}, ${site.area} from ${formatPrice(site.priceFrom)} a month, with free mail scanning and no set-up fee.`,
    alternates: { canonical: `/virtual-offices/${site.path}/` },
  };
}

export default async function SitePage(
  props: PageProps<"/virtual-offices/[city]/[site]">,
) {
  const { city, site } = await resolve(props);
  if (!(city && site)) {
    notFound();
  }

  return (
    <LocationPage
      buy={officeOnboarding(site.plan)}
      crumbs={[
        { label: "Virtual Offices", href: "/virtual-offices/" },
        { label: city.name, href: `/virtual-offices/${city.slug}/` },
        { label: site.label },
      ]}
      mode="office"
      place={site.label}
      site={site}
      title={`Your virtual office in ${site.label}`}
    />
  );
}
