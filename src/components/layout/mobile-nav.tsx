"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="right" className="w-80 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4 pb-6">
          {siteConfig.nav.map((item) =>
            "items" in item ? (
              <div key={item.label} className="py-1">
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>
                {item.items.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {item.label}
              </a>
            ),
          )}
          <a
            href="#customer-portal"
            onClick={() => setOpen(false)}
            className={buttonVariants({ variant: "outline", className: "mt-4" })}
          >
            Log in
          </a>
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className={buttonVariants({ className: "mt-2" })}
          >
            Buy now
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
