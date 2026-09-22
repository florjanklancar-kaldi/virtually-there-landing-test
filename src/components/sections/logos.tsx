const logos = ["Acme", "Globex", "Initech", "Umbrella", "Hooli", "Stark"];

export function Logos() {
  return (
    <section aria-label="Trusted by" className="border-y py-10">
      <div className="container-page">
        <p className="text-center text-sm text-muted-foreground">
          Trusted by teams at forward-thinking companies
        </p>
        <ul className="mt-6 grid grid-cols-3 items-center gap-6 text-center text-lg font-semibold text-muted-foreground/70 sm:grid-cols-6">
          {logos.map((logo) => (
            <li key={logo}>{logo}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
