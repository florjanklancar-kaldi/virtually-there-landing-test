import Link from "next/link";
import type { ComponentProps } from "react";

type AppLinkProps = Omit<ComponentProps<"a">, "href"> & { href: string };

/** Client-side `<Link>` for internal paths, plain `<a>` for external URLs. */
export function AppLink({ href, ...props }: AppLinkProps) {
  if (href.startsWith("/")) {
    return <Link href={{ pathname: href }} {...props} />;
  }
  return <a href={href} {...props} />;
}
