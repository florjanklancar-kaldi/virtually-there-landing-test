import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#0a0a0a",
        color: "#fafafa",
      }}
    >
      <div style={{ fontSize: 36, opacity: 0.6 }}>{siteConfig.name}</div>
      <div style={{ fontSize: 80, fontWeight: 600, marginTop: 16, letterSpacing: -2 }}>
        {siteConfig.tagline}
      </div>
    </div>,
    size,
  );
}
