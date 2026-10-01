// Competitor terms as published in the comparison tables on virtually-there.net.
// Monthly prices vary per location and are set on each site; re-verify before launch.

export const providerIds = [
  "virtualHq",
  "orega",
  "regus",
  "servcorp",
  "rombourne",
  "cityOffice",
  "allia",
] as const;

export type ProviderId = (typeof providerIds)[number];

export type ProviderTerms = {
  name: string;
  freeScans: boolean;
  cancelAnytime: boolean;
  portal: boolean;
  setupFee: number;
};

export const providers: Record<ProviderId, ProviderTerms> = {
  allia: {
    name: "Allia Cambridge",
    freeScans: true,
    cancelAnytime: true,
    portal: false,
    setupFee: 0,
  },
  cityOffice: {
    name: "City Office",
    freeScans: true,
    cancelAnytime: true,
    portal: true,
    setupFee: 0,
  },
  orega: {
    name: "Orega",
    freeScans: false,
    cancelAnytime: true,
    portal: false,
    setupFee: 50,
  },
  regus: {
    name: "Regus",
    freeScans: false,
    cancelAnytime: true,
    portal: true,
    setupFee: 0,
  },
  rombourne: {
    name: "Rombourne",
    freeScans: false,
    cancelAnytime: false,
    portal: false,
    setupFee: 0,
  },
  servcorp: {
    name: "Servcorp",
    freeScans: true,
    cancelAnytime: true,
    portal: false,
    setupFee: 0,
  },
  virtualHq: {
    name: "Virtual HQ",
    freeScans: false,
    cancelAnytime: true,
    portal: false,
    setupFee: 30,
  },
};

/** Our own row in every comparison table. */
export const ownTerms: Omit<ProviderTerms, "name"> = {
  freeScans: true,
  cancelAnytime: true,
  portal: true,
  setupFee: 0,
};
