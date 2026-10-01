"use client";

import { CheckIcon, InfoIcon, XIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
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

const columns = "md:grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-6";
const rowHeight = "md:h-14";

function InfoTip({ label, detail }: { label: string; detail: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        aria-describedby={open ? id : undefined}
        aria-expanded={open}
        aria-label={`More about ${label}`}
        className="inline-flex size-5 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((value) => !value)}
        onFocus={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
        type="button"
      >
        <InfoIcon aria-hidden="true" className="size-4" />
      </button>
      {open ? (
        <span
          className="absolute bottom-full left-1/2 z-20 mb-2 w-64 -translate-x-1/2 rounded-lg bg-primary p-3 text-left font-normal text-primary-foreground text-sm leading-snug shadow-lg"
          id={id}
          role="tooltip"
        >
          {detail}
        </span>
      ) : null}
    </span>
  );
}

function PeriodSwitch({
  period,
  onChange,
}: {
  period: BillingPeriod;
  onChange: (value: BillingPeriod) => void;
}) {
  const reduceMotion = useReducedMotion();
  const annual = period === "annual";
  return (
    <div className="flex items-center gap-3 text-lg">
      <button
        className={cn(
          "transition-colors",
          annual ? "text-muted-foreground hover:text-primary" : "font-bold text-primary",
        )}
        onClick={() => onChange("monthly")}
        type="button"
      >
        Monthly
      </button>
      <button
        aria-checked={annual}
        aria-label="Pay annually"
        className={cn(
          "flex h-8 w-16 items-center rounded-full border-2 border-primary p-1 transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
          annual ? "justify-end bg-primary" : "justify-start bg-white",
        )}
        onClick={() => onChange(annual ? "monthly" : "annual")}
        role="switch"
        type="button"
      >
        <motion.span
          className={cn("size-5 rounded-full", annual ? "bg-white" : "bg-primary")}
          layout
          transition={reduceMotion ? { duration: 0 } : { type: "spring", bounce: 0.25 }}
        />
      </button>
      <button
        className={cn(
          "transition-colors",
          annual ? "font-bold text-primary" : "text-muted-foreground hover:text-primary",
        )}
        onClick={() => onChange("annual")}
        type="button"
      >
        Annual
      </button>
    </div>
  );
}

function FeatureLabels() {
  return (
    <div aria-hidden="true" className="hidden md:block">
      <div className="h-[calc(8.5rem+2px)]" />
      <ul>
        {planFeatureOrder.map((key) => (
          <li
            className={cn(
              "flex items-center justify-end gap-2 text-right text-lg",
              rowHeight,
            )}
            key={key}
          >
            {planFeatures[key].label}
            <InfoTip detail={planFeatures[key].detail} label={planFeatures[key].label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlanColumn({
  plan,
  period,
  onChoosePeriod,
}: {
  plan: Plan;
  period: BillingPeriod;
  onChoosePeriod: (value: BillingPeriod) => void;
}) {
  const included = new Set(plan.includes[period]);
  const annual = period === "annual";
  return (
    <div className="flex flex-col gap-4">
      <article className="overflow-hidden rounded-2xl border-2 border-primary bg-white">
        <h3 className="flex h-20 items-center justify-center px-4 text-center font-bold text-xl">
          {plan.name}
        </h3>
        {annual ? (
          <p className="flex h-[3.5rem] items-center justify-center bg-primary px-4 font-bold text-lg text-primary-foreground uppercase tracking-wide">
            Save {formatPrice(annualSaving(plan))}!
          </p>
        ) : (
          <button
            className="flex h-[3.5rem] w-full items-center justify-center bg-primary px-4 font-bold text-primary-foreground text-sm uppercase tracking-wide transition-colors hover:bg-primary/85"
            onClick={() => onChoosePeriod("annual")}
            type="button"
          >
            Save with an annual plan
          </button>
        )}
        <ul className="px-4">
          {planFeatureOrder.map((key) => {
            const has = included.has(key);
            return (
              <li
                className={cn(
                  "flex items-center justify-between gap-3 border-border border-b py-3 md:justify-center md:py-0",
                  rowHeight,
                )}
                key={key}
              >
                <span
                  className={cn("text-base md:sr-only", !has && "text-muted-foreground")}
                >
                  {planFeatures[key].label}
                  <span className="sr-only">: {has ? "included" : "not included"}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded border-2",
                    has
                      ? "border-green-dark bg-green-light text-green-dark"
                      : "border-destructive/70 bg-destructive-foreground text-destructive",
                  )}
                >
                  {has ? (
                    <CheckIcon className="size-4" strokeWidth={3} />
                  ) : (
                    <XIcon className="size-4" strokeWidth={3} />
                  )}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="flex flex-col items-center px-4 py-6 text-center">
          <span className="text-muted-foreground text-sm">From</span>
          <span className="flex items-baseline gap-1">
            <span className="font-extrabold text-5xl tracking-tight">
              {formatPrice(plan.price[period])}
            </span>
            <span className="text-sm">+VAT</span>
          </span>
          <span className="text-muted-foreground text-sm">/{annual ? "year" : "month"}</span>
        </p>
      </article>
      <PortalLink
        className={buttonVariants({ size: "lg", className: "w-full md:mx-auto md:w-[92%]" })}
        to={{
          path: "/onboarding/service",
          params: { type: plan.portalType, billing: annual ? "year" : "month" },
        }}
      >
        Buy now
        <span className="sr-only"> {plan.name}</span>
      </PortalLink>
    </div>
  );
}

function Extras({ period }: { period: BillingPeriod }) {
  const unit = period === "annual" ? "year" : "month";
  return (
    <section aria-labelledby="extras-title" className="flex flex-col gap-4">
      <div className={columns}>
        <h3
          className="font-bold text-primary text-sm uppercase tracking-widest md:text-right"
          id="extras-title"
        >
          Optional extras
        </h3>
      </div>
      <ul className="flex flex-col rounded-2xl bg-white md:bg-transparent">
        {extras.map((extra, index) => (
          <li
            className={cn("flex items-center justify-between gap-4 px-4 py-3 md:p-0", columns)}
            key={extra.name}
          >
            <span className="flex items-center gap-2 text-lg md:justify-end md:text-right">
              {extra.name}
              <InfoTip detail={extra.description} label={extra.name} />
            </span>
            <span
              className={cn(
                "flex items-center justify-center gap-1 md:col-span-2 md:bg-white md:px-4",
                rowHeight,
                index === 0 && "md:rounded-t-2xl",
                index === extras.length - 1
                  ? "md:rounded-b-2xl"
                  : "md:border-border md:border-b",
              )}
            >
              <span className="font-bold text-lg">{formatPrice(extra.price[period])}</span>
              <span className="text-muted-foreground text-sm">+VAT/{unit}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PricingPlans() {
  const [period, setPeriod] = useState<BillingPeriod>("annual");

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <h2 className="text-4xl tracking-tight sm:text-5xl">
          <span className="font-extrabold text-green-dark">Save</span> with an annual plan
        </h2>
        <PeriodSwitch onChange={setPeriod} period={period} />
      </div>
      <div className={cn("flex flex-col gap-8", columns)}>
        <FeatureLabels />
        {plans.map((plan) => (
          <PlanColumn
            key={plan.name}
            onChoosePeriod={setPeriod}
            period={period}
            plan={plan}
          />
        ))}
      </div>
      <Extras period={period} />
    </div>
  );
}
