import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container-page flex flex-1 flex-col items-center justify-center gap-4 py-32 text-center">
      <p className="font-medium text-muted-foreground text-sm">404</p>
      <h1 className="font-semibold text-3xl tracking-tight">Page not found</h1>
      <p className="text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link className={buttonVariants({ className: "mt-4" })} href="/">
        Back home
      </Link>
    </main>
  );
}
