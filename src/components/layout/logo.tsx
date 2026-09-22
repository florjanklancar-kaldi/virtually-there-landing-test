import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-semibold tracking-tight", className)}
    >
      <span
        aria-hidden
        className="grid size-7 place-items-center rounded-md bg-primary text-xs font-bold text-primary-foreground"
      >
        VT
      </span>
      {siteConfig.name}
    </Link>
  );
}
