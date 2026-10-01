"use client";

import { ArrowRightIcon } from "lucide-react";

import { AppLink } from "@/components/app-link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { allLocationsHref, cities, primaryNav, services } from "@/content/navigation";
import { cn } from "@/lib/utils";

const triggerClass =
  "h-10 bg-transparent px-3 text-base font-bold text-primary hover:bg-green-background data-popup-open:bg-green-background";

export function DesktopNav() {
  return (
    <NavigationMenu aria-label="Main" className="hidden lg:flex">
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClass}>
            Virtual Office
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-3 text-primary">
            <p className="px-2 pb-2 font-bold text-muted-foreground text-xs uppercase tracking-widest">
              United Kingdom
            </p>
            <ul className="grid w-[30rem] grid-cols-3 gap-0.5">
              {cities.map((city) => (
                <li key={city.href}>
                  <NavigationMenuLink
                    className="text-base text-primary"
                    closeOnClick
                    render={<AppLink href={city.href} />}
                  >
                    {city.label}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
            <NavigationMenuLink
              className="group/link mt-2 justify-between bg-green-background font-bold text-primary"
              closeOnClick
              render={<AppLink href={allLocationsHref} />}
            >
              View all locations
              <ArrowRightIcon className="transition-transform group-hover/link:translate-x-1" />
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClass}>
            Virtual Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-3 text-primary">
            <ul className="grid w-[26rem] gap-1">
              {services.map(({ icon: Icon, ...service }) => (
                <li key={service.href}>
                  <NavigationMenuLink
                    className="items-start gap-3 p-3 text-primary"
                    closeOnClick
                    render={<AppLink href={service.href} />}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-green-light">
                      <Icon className="size-4.5!" />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="font-bold">{service.label}</span>
                      <span className="text-muted-foreground text-sm">
                        {service.description}
                      </span>
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {primaryNav.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              className={cn(triggerClass, "inline-flex")}
              render={<AppLink href={item.href} />}
            >
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
