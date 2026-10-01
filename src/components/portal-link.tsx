"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { PortalTarget } from "@/lib/portal";
import { portalHref } from "@/lib/portal";

const STORAGE_KEY = "vt:landing-query";

function readStored(): string {
  try {
    return sessionStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

function readQuery(): string {
  return globalThis.location.search.slice(1) || readStored();
}

function subscribe(onChange: () => void) {
  globalThis.addEventListener("popstate", onChange);
  return () => globalThis.removeEventListener("popstate", onChange);
}

/**
 * The query string the visitor arrived with (UTMs, click ids…). Saved per tab, so
 * campaign params survive browsing other pages before clicking through to the portal.
 * The server snapshot is empty: static HTML links to the plain portal URL.
 */
function useLandingQuery(): string {
  const query = useSyncExternalStore(subscribe, readQuery, () => "");

  useEffect(() => {
    const current = globalThis.location.search.slice(1);
    if (!current) {
      return;
    }
    try {
      sessionStorage.setItem(STORAGE_KEY, current);
    } catch {
      // Storage unavailable (private mode): the current page's query still applies.
    }
  }, []);

  return query;
}

type PortalLinkProps = Omit<React.ComponentProps<"a">, "href"> & { to: PortalTarget };

/** Anchor into the customer portal that forwards the visitor's query params. */
export function PortalLink({ to, ...props }: PortalLinkProps) {
  return <a {...props} href={portalHref(to, useLandingQuery())} />;
}
