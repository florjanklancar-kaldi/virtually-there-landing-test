import { ChevronDownIcon, PhoneIcon } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="border-b">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {siteConfig.nav.map((item) =>
              "items" in item ? (
                <div key={item.label} className="group relative">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                  >
                    {item.label}
                    <ChevronDownIcon className="size-3.5 opacity-60" />
                  </a>
                  <div className="invisible absolute left-0 top-full min-w-56 translate-y-1 rounded-lg border bg-popover p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.items.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#customer-portal"
              className="hidden text-sm font-medium text-foreground/80 transition-colors hover:text-primary sm:inline-flex"
            >
              Log in
            </a>
            <a
              href="#pricing"
              className={cn(buttonVariants(), "hidden sm:inline-flex")}
            >
              Buy now
            </a>
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/10">
        <div className="container-page flex h-10 items-center justify-center gap-2 text-sm">
          <PhoneIcon className="size-4 text-primary" />
          <span className="text-muted-foreground">Prefer to chat, call us on</span>
          <a href={siteConfig.phoneHref} className="font-semibold text-foreground hover:text-primary">
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
