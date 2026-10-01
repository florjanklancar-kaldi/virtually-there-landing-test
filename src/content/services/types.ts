import type { IllustrationName } from "@/components/illustrations";
import type { FaqKey } from "@/content/faqs";
import type { PortalTarget } from "@/lib/portal";

export type IconFeature = { title: string; body: string; icon: string };

export type ServiceContent = {
  slug: string;
  /** Short name for menus and cards. */
  name: string;
  /** One-line description for cards. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  illustration: IllustrationName;
  cta: { label: string; href: string } | { label: string; portal: PortalTarget };
  /** Shown as a price badge in the hero when set. */
  price?: { from: number; note: string };
  /** Short reassurance chips under the hero CTA. */
  badges?: string[];
  explainer: { title: string; paragraphs: string[]; illustration: IllustrationName };
  features: IconFeature[];
  /** Optional cards linking to related services. */
  related?: string[];
  faqs: FaqKey[];
};
