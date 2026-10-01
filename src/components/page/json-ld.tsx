/** Renders structured data. `<` is escaped so content can't break out of the script tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be inlined as raw JSON; the payload is escaped above.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
      type="application/ld+json"
    />
  );
}
