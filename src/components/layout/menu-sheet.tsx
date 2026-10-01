"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import {
  ArrowRightIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  PlusIcon,
  XIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { Logo } from "@/components/layout/logo";
import { socials } from "@/components/layout/social-icons";
import { PortalLink } from "@/components/portal-link";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import {
  allLocationsHref,
  cities,
  primaryNav,
  secondaryNav,
  services,
} from "@/content/navigation";
import { portal } from "@/lib/portal";
import { cn } from "@/lib/utils";

const rowClass =
  "group flex w-full items-center justify-between gap-4 py-4 text-left font-medium text-2xl text-primary outline-none transition-colors hover:text-green-dark focus-visible:text-green-dark";

const subLinkClass =
  "block rounded-md px-3 py-2 text-base text-primary transition-colors hover:bg-white hover:text-green-dark";

/** Big, divided link row with an arrow that slides in on hover. */
function MenuLink({ label, href }: { label: string; href: string }) {
  return (
    <a className={rowClass} href={href}>
      {label}
      <ArrowRightIcon className="size-5 -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" />
    </a>
  );
}

function MenuGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <AccordionItem className="border-primary/15 border-b" value={label}>
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger className={rowClass}>
          {label}
          <PlusIcon className="size-5 shrink-0 transition-transform duration-300 group-aria-expanded:rotate-45" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionContent className="pb-4 [&_a]:no-underline">{children}</AccordionContent>
    </AccordionItem>
  );
}

/** Full menu: everything on mobile, secondary links only on desktop. */
export function MenuSheet() {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  // Staggered slide-in, replayed each time the sheet opens (content mounts on open).
  const item = (i: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, x: 24 },
          animate: { opacity: 1, x: 0 },
          transition: {
            delay: 0.06 + i * 0.04,
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            aria-label="Open menu"
            className="size-11"
            size="icon-lg"
            variant="ghost"
          />
        }
      >
        <MenuIcon className="size-7!" />
      </SheetTrigger>
      <SheetContent
        className="gap-0 overflow-y-auto border-none bg-green-background text-primary data-[side=right]:w-full sm:data-[side=right]:max-w-md"
        initialFocus={closeRef}
        showCloseButton={false}
        side="right"
      >
        <SheetHeader className="flex-row items-center justify-between px-6 py-5 sm:px-10">
          <SheetTitle render={<div />}>
            <Logo />
          </SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
          <SheetClose
            render={
              <Button
                aria-label="Close menu"
                className="size-11 rounded-full hover:bg-white"
                ref={closeRef}
                size="icon-lg"
                variant="ghost"
              />
            }
          >
            <XIcon className="size-7! transition-transform duration-300 hover:rotate-90" />
          </SheetClose>
        </SheetHeader>

        <nav aria-label="Menu" className="px-6 pt-2 sm:px-10">
          <ul>
            <li className="lg:hidden">
              <motion.div {...item(0)}>
                <Accordion>
                  <MenuGroup label="Virtual Office">
                    <ul className="grid grid-cols-2 gap-x-2">
                      {[...cities, { label: "View all", href: allLocationsHref }].map(
                        (c) => (
                          <li key={c.label}>
                            <a className={subLinkClass} href={c.href}>
                              {c.label}
                            </a>
                          </li>
                        ),
                      )}
                    </ul>
                  </MenuGroup>
                  <MenuGroup label="Virtual Services">
                    <ul>
                      {services.map(({ label, href, icon: Icon }) => (
                        <li key={href}>
                          <a
                            className={cn(subLinkClass, "flex items-center gap-3")}
                            href={href}
                          >
                            <Icon className="size-4 text-green-dark" />
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </MenuGroup>
                </Accordion>
              </motion.div>
            </li>
            {primaryNav.map((link, i) => (
              <motion.li
                className="border-primary/15 border-b lg:hidden"
                key={link.href}
                {...item(i + 1)}
              >
                <MenuLink {...link} />
              </motion.li>
            ))}
            {secondaryNav.map((link, i) => (
              <motion.li
                className="border-primary/15 border-b last:border-b-0"
                key={link.href}
                {...item(i + 1)}
              >
                <MenuLink {...link} />
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.div
          className="mt-auto flex flex-col gap-5 px-6 pt-8 pb-8 sm:px-10"
          {...item(secondaryNav.length + 1)}
        >
          <div className="flex flex-col gap-3 sm:hidden">
            <PortalLink
              className={buttonVariants({ variant: "brand", size: "xl" })}
              to={portal.onboarding}
            >
              Buy now
            </PortalLink>
            <PortalLink
              className={buttonVariants({ variant: "outline", size: "xl" })}
              to={portal.login}
            >
              Log in
            </PortalLink>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-xs">
            <p className="font-bold">Prefer to chat?</p>
            <div className="mt-3 flex flex-col gap-2 text-base">
              <a
                className="flex items-center gap-3 transition-colors hover:text-green-dark"
                href={`tel:${siteConfig.contact.phone}`}
              >
                <PhoneIcon className="size-4 text-green-dark" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                className="flex items-center gap-3 transition-colors hover:text-green-dark"
                href={`mailto:${siteConfig.contact.email}`}
              >
                <MailIcon className="size-4 text-green-dark" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <ul className="flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full bg-white text-primary shadow-xs transition-all hover:-translate-y-0.5 hover:bg-green"
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
