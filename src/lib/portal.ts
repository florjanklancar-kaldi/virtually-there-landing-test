import { siteConfig } from "@/config/site";

/** A link into the customer portal: a path plus the query the portal expects. */
export type PortalTarget = {
  path: "/login" | "/onboarding" | "/onboarding/service";
  params?: Record<string, string>;
};

export const portal = {
  login: { path: "/login" },
  onboarding: { path: "/onboarding" },
} satisfies Record<string, PortalTarget>;

/**
 * Builds the absolute portal URL. `carried` is the visitor's own query string
 * (UTMs, click ids…); the target's params win when both set the same key.
 */
export function portalHref(target: PortalTarget, carried = ""): string {
  const url = new URL(target.path, siteConfig.portalUrl);
  const query = new URLSearchParams(carried);
  for (const [key, value] of Object.entries(target.params ?? {})) {
    query.set(key, value);
  }
  url.search = query.toString();
  return url.toString();
}

/** Buy now for a virtual office plan, e.g. plan "london_fitzrovia". */
export function officeOnboarding(plan: string, addon: "" | "vo" = "vo"): PortalTarget {
  return { path: "/onboarding", params: { billing: "year", plan, addon } };
}
