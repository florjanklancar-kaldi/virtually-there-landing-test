import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPage } from "@/components/locations/location-page";
import { registeredAddresses } from "@/content/locations/registered";
import { formatPrice, getRegisteredAddress, getSite } from "@/lib/locations";

export const dynamicParams = false;

export function generateStaticParams() {
  return registeredAddresses.map((address) => ({ slug: address.path.split("/") }));
}

async function resolve(props: PageProps<"/registered-office-address/[...slug]">) {
  const { slug } = await props.params;
  const address = getRegisteredAddress(slug.join("/"));
  return { address, site: address ? getSite(address.site) : undefined };
}

export async function generateMetadata(
  props: PageProps<"/registered-office-address/[...slug]">,
): Promise<Metadata> {
  const { address, site } = await resolve(props);
  if (!(address && site)) {
    return {};
  }
  return {
    title: `${address.label} Registered Office Address & Director’s Service Address`,
    description: `Register your company at ${site.street}, ${site.area} from ${formatPrice(site.registeredFrom)} a month, including a trading address and two director’s service addresses.`,
    alternates: { canonical: `/registered-office-address/${address.path}/` },
  };
}

export default async function RegisteredAddressPage(
  props: PageProps<"/registered-office-address/[...slug]">,
) {
  const { address, site } = await resolve(props);
  if (!(address && site)) {
    notFound();
  }
  const cityCrumb = address.path.includes("/") ? [{ label: site.city }] : [];

  return (
    <LocationPage
      buy={{
        path: "/onboarding",
        params: { billing: "year", plan: address.plan, addon: "ra" },
      }}
      crumbs={[
        { label: "Registered Office Address", href: "/registered-office-address/" },
        ...cityCrumb,
        { label: address.label },
      ]}
      mode="registered"
      place={address.label}
      site={site}
      title={`Registered office address on ${site.street}`}
    />
  );
}
