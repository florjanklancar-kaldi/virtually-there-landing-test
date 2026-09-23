import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Virtually There home"
      className={cn("flex items-center gap-2", className)}
    >
      <span aria-hidden className="text-primary">
        <svg
          width="34"
          height="34"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8c-2 5-2 12 1 18 3 6 8 11 15 13"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M20 6c-1 6 0 13 4 19 3 5 8 9 14 11"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M30 10c0 6 1 12 4 17"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-foreground">
        Virtually<span className="text-primary">There</span>
        <sup className="ml-0.5 text-[0.6em] font-semibold text-muted-foreground">
          &reg;
        </sup>
      </span>
    </Link>
  );
}
