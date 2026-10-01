import type { NextConfig } from "next";
import { registeredRedirects } from "./src/content/locations/registered";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  poweredByHeader: false,
  // Match the live WordPress URLs (all end in a slash) so links and rankings carry over.
  trailingSlash: true,
  redirects() {
    return Promise.resolve(
      Object.entries(registeredRedirects).map(([from, to]) => ({
        source: `/registered-office-address/${from}/`,
        destination: `/virtual-offices/${to}/`,
        permanent: true,
      })),
    );
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
