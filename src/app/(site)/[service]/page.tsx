import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getService, services } from "@/content/services/registry";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[service]">,
): Promise<Metadata> {
  const service = getService((await props.params).service);
  if (!service) {
    return {};
  }
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/${service.slug}/` },
  };
}

export default async function Page(props: PageProps<"/[service]">) {
  const service = getService((await props.params).service);
  if (!service) {
    notFound();
  }
  return <ServicePage service={service} />;
}
