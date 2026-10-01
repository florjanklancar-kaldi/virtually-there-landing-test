import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";

import { siteConfig } from "@/config/site";

import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Virtual Office & Business Address UK | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name}: ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}: ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${sourceSans.variable} h-full scroll-smooth antialiased`}
      lang="en-GB"
    >
      <body className="flex min-h-full flex-col">
        <a
          className="sr-only z-60 rounded-md bg-background px-4 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
          href="#main"
        >
          Skip to content
        </a>
        <div
          className="sticky top-0 z-50 flex h-9 items-center justify-center truncate bg-destructive px-4 font-bold text-destructive-foreground text-xs uppercase tracking-wide sm:text-sm"
          role="note"
        >
          ⚠ Test site: not the live Virtually There website
        </div>
        {children}
      </body>
    </html>
  );
}
