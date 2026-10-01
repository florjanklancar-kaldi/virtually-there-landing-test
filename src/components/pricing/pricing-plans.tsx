"use client";

import { CheckIcon, XIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PortalLink } from "@/components/portal-link";
import { buttonVariants } from "@/components/ui/button";
import type { BillingPeriod, Plan } from "@/content/pricing";
import {
  annualSaving,
  extras,
  planFeatureOrder,
  planFeatures,
  plans,
} from "@/content/pricing";
import { formatPrice } from "@/lib/locations";
import { cn } from "@/lib/utils";

const periods: { value: BillingPeriod; label: string }[] = [
  { value: "annual", label: "Annual" },
  { value: "monthly", label: "Monthly" },
];

function PeriodToggle({
  period,
  onChange,
}: {
  period: BillingPeriod;
  onChange: (value: BillingPeriod) => void;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <fieldset className="mx-auto flex w-fit rounded-full bg-green-background p-1.5">
      <legend className="sr-only">Billing period</legend>
      {periods.map((option) => (
        <label
          className="relative cursor-pointer rounded-full px-7 py-2.5 font-bold text-lg has-focus-visible:ring-3 has-focus-visible:ring-ring/50"
          key={option.value}
        >
          <input
            checked={period === option.value}
            className="sr-only"
            name="billing-period"
            onChange={() => onChange(option.value)}
            type="radio"
            value={option.value}
          />
          {period === option.value ? (
            <motion.span
              className="absolute inset-0 rounded-full bg-white shadow-sm"
              layoutId="period-pill"
              transition={
                reduceMotion ? { duration: 0 } : { type: "spring", bounce: 0.2 }
              }
            />
          ) : null}
          <span className="relative">{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}

function PlanCard({ plan, period }: { plan: Plan; period: BillingPeriod }) {
  const included = new Set(plan.includes[period]);
  return (
    <article
      className={cn(
        "flex h-full flex-col gap-6 rounded-3xl border-2 bg-white p-8",
        plan.featured ? "border-green shadow-xl" : "border-border",
      )}
    >
      <header>
        {period === "annual" ? (
          <p className="mb-3 w-fit rounded-full bg-green px-3 py-1 font-bold text-sm">
            Save {formatPrice(annualSaving(plan))} a year
          </p>
        ) : null}
        <h3 className="font-bold text-3xl">{plan.name}</h3>
        <p className="mt-2 text-lg">{plan.description}</p>
      </header>
      <p>
        <span className="font-extrabold text-5xl">{formatPrice(plan.price[period])}</span>
        <span className="text-lg"> +VAT /{period === "annual" ? "year" : "month"}</span>
      </p>
      <ul className="grid gap-3">
        {planFeatureOrder.map((key) => (
          <li className="flex items-start gap-2.5 text-lg" key={key}>
            {included.has(key) ? (
              <CheckIcon
                aria-label="Included"
                className="mt-1 size-5 shrink-0 text-green-dark"
              />
            ) : (
              <XIcon
                aria-label="Not included"
                className="mt-1 size-5 shrink-0 text-muted-foreground"
              />
            )}
            <span className={cn(!included.has(key) && "text-muted-foreground")}>
              {planFeatures[key].label}
              <span className="block text-muted-foreground text-sm">
                {planFeatures[key].detail}
              </span>
            </span>
          </li>
        ))}
      </ul>
      <PortalLink
        className={buttonVariants({
          variant: plan.featured ? "brand" : "default",
          size: "xl",
          className: "mt-auto w-full",
        })}
        to={{
          path: "/onboarding/service",
          params: {
            type: plan.portalType,
            billing: period === "annual" ? "year" : "month",
          },
        }}
      >
        Buy now
      </PortalLink>
    </article>
  );
}

export function PricingPlans() {
  const [period, setPeriod] = useState<BillingPeriod>("annual");

  return (
    <div className="flex flex-col gap-12">
      <PeriodToggle onChange={setPeriod} period={period} />
      <RevealGroup className="mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-2">
        {plans.map((plan) => (
          <RevealItem key={plan.name}>
            <PlanCard period={period} plan={plan} />
          </RevealItem>
        ))}
      </RevealGroup>
      <section aria-labelledby="extras-title" className="mx-auto w-full max-w-5xl">
        <h2 className="mb-6 font-bold text-3xl" id="extras-title">
          Optional extras
        </h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {extras.map((extra) => (
            <li
              className="flex flex-col gap-2 rounded-2xl bg-green-background p-6"
              key={extra.name}
            >
              <span className="font-bold text-xl">{extra.name}</span>
              <span className="text-lg leading-snug">{extra.description}</span>
              <span className="mt-auto pt-2 font-extrabold text-2xl">
                {formatPrice(extra.price[period])}
                <span className="font-normal text-base">
                  {" "}
                  +VAT /{period === "annual" ? "year" : "month"}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
