import { FeaturePanel } from "@/components/sections/feature-panel";
import { whatIs } from "@/content/home";

export function WhatIs() {
  return (
    <section aria-labelledby="what-is" className="section pt-8 sm:pt-12">
      <div className="container-page">
        <FeaturePanel illustration="whatIs">
          <h2 className="font-normal text-4xl tracking-tight sm:text-5xl" id="what-is">
            {whatIs.title}
          </h2>
          {whatIs.paragraphs.map((p) => (
            <p className="text-lg leading-relaxed sm:text-xl" key={p}>
              {p}
            </p>
          ))}
        </FeaturePanel>
      </div>
    </section>
  );
}
