import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/config/site";

const footerLinks = [
  {
    title: "Product",
    links: siteConfig.nav,
  },
  {
    title: "Company",
    links: [
      { label: "X / Twitter", href: siteConfig.links.x },
      { label: "GitHub", href: siteConfig.links.github },
      { label: "Contact", href: siteConfig.links.email },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">{siteConfig.tagline}</p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title} className="space-y-3">
            <h3 className="text-sm font-semibold">{group.title}</h3>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-page border-t py-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
