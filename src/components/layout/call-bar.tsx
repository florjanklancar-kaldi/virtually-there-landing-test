import { siteConfig } from "@/config/site";

export function CallBar() {
  return (
    <div className="bg-green text-center text-primary text-sm sm:text-base">
      <a
        className="block px-4 py-1.5 transition-opacity hover:opacity-80"
        href={`tel:${siteConfig.contact.phone}`}
      >
        Prefer to chat? Call us on{" "}
        <strong className="whitespace-nowrap font-bold">
          {siteConfig.contact.phoneDisplay}
        </strong>
      </a>
    </div>
  );
}
