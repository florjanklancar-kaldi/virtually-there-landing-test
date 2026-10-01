"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

import { CallBar } from "@/components/layout/call-bar";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { Logo } from "@/components/layout/logo";
import { MenuSheet } from "@/components/layout/menu-sheet";
import { PortalLink } from "@/components/portal-link";
import { buttonVariants } from "@/components/ui/button";
import { portal } from "@/lib/portal";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 8));

  return (
    <header
      className={cn(
        "sticky top-9 z-40 w-full bg-background transition-shadow duration-300",
        scrolled && "shadow-[0_8px_24px_-12px_rgb(71_85_101/0.35)]",
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between gap-4 transition-[height] duration-300",
          scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24",
        )}
      >
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-2 sm:gap-4">
          <PortalLink
            className="hidden text-lg text-primary transition-colors hover:text-green-dark sm:inline"
            to={portal.login}
          >
            Log in
          </PortalLink>
          <PortalLink
            className={buttonVariants({
              variant: "brand",
              size: "xl",
              className: "hidden sm:inline-flex",
            })}
            to={portal.onboarding}
          >
            Buy now
          </PortalLink>
          <MenuSheet />
        </div>
      </div>
      <CallBar />
    </header>
  );
}
