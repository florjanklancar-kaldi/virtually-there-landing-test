import { siteConfig } from "@/config/site";

// lucide-react v1 dropped brand icons, so these are minimal hand-drawn glyphs.
type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function FacebookIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M15 4h-2a4 4 0 0 0-4 4v3H7v3h2v7h3v-7h3l.5-3H12V8.5A1 1 0 0 1 13 7.5h2Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M7 10v8M7 6.5v.01M11 18v-8M11 13.5a3 3 0 0 1 6 0V18" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <rect height="16" rx="4.5" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M16.5 7.5v.01" />
    </svg>
  );
}

export const socials = [
  { label: "Facebook", href: siteConfig.links.facebook, icon: FacebookIcon },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: "Instagram", href: siteConfig.links.instagram, icon: InstagramIcon },
];
