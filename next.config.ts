import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import { registeredRedirects } from "./src/content/locations/registered";

export default function config(phase: string): NextConfig {
  // Match the live WordPress URLs (all end in a slash) so links and rankings carry over.
  // Disabled in dev: the v0 preview proxy strips trailing slashes, which loops against Next's add-slash redirect.
  const trailingSlash = phase !== PHASE_DEVELOPMENT_SERVER;
  const slash = trailingSlash ? "/" : "";

  return {
    reactCompiler: true,
    typedRoutes: true,
    poweredByHeader: false,
    trailingSlash,
    redirects() {
      return Promise.resolve(
        Object.entries(registeredRedirects).map(([from, to]) => ({
          source: `/registered-office-address/${from}${slash}`,
          destination: `/virtual-offices/${to}${slash}`,
          permanent: true,
        })),
      );
    },
    images: {
      formats: ["image/avif", "image/webp"],
    },
  };
}
