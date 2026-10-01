import { PortalLink } from "@/components/portal-link";
import { FeaturePanel } from "@/components/sections/feature-panel";
import { buttonVariants } from "@/components/ui/button";
import { formatPrice } from "@/lib/locations";
import { officeOnboarding } from "@/lib/portal";

export function RegisteredUpsell({
  place,
  price,
  plan,
}: {
  place: string;
  price: number;
  plan: string;
}) {
  return (
    <section aria-labelledby="registered-title" className="section pt-8">
      <div className="container-page">
        <FeaturePanel illustration="registered" illustrationSide="left">
          <h2 className="text-4xl tracking-tight sm:text-5xl" id="registered-title">
            Add a registered office in {place}
          </h2>
          <p className="text-lg leading-relaxed sm:text-xl">
            Keep all your business post in one place. Add a registered office address to
            your
            {` ${place} `}plan to use it with Companies House and HMRC, keep your home
            address private, and show a professional address on your website and invoices.
          </p>
          <p className="font-bold text-xl">From {formatPrice(price)} a month.</p>
          <PortalLink
            className={buttonVariants({ size: "xl", className: "self-start" })}
            to={officeOnboarding(plan, "")}
          >
            Buy now
          </PortalLink>
        </FeaturePanel>
      </div>
    </section>
  );
}
