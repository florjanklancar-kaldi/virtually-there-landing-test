import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "inline-flex shrink-0 transition-opacity hover:opacity-80",
        className,
      )}
      href="/"
    >
      <Image
        alt={siteConfig.name}
        className="h-10 w-auto sm:h-12"
        height={60}
        priority
        src="/logo/vt-logo-primary.svg"
        width={300}
      />
    </Link>
  );
}
