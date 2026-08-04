"use client";

import { useMemo, useState } from "react";

import { PricingCard } from "@/components/molecules/PricingCard";
import { Switch } from "@/components/molecules/Switch";

type BillingCycle = "monthly" | "yearly";

const plans = [
  {
    title: "Starter",
    description: "Great for solo makers and side projects.",
    monthlyPrice: "$15",
    yearlyPrice: "$12",
    features: [
      "Unlimited projects",
      "Community support",
      "Basic analytics",
      "Custom domains",
    ],
    ctaLabel: "Start Starter",
  },
  {
    title: "Pro",
    description: "Built for product teams running weekly releases.",
    monthlyPrice: "$45",
    yearlyPrice: "$36",
    features: [
      "Team collaboration",
      "API access",
      "Priority support",
      "Automation workflows",
    ],
    ctaLabel: "Start Pro",
    highlighted: true,
    badge: "Recommended",
  },
  {
    title: "Business",
    description: "For teams with advanced governance requirements.",
    monthlyPrice: "$119",
    yearlyPrice: "$95",
    features: [
      "Advanced permissions",
      "Audit logs",
      "SAML SSO",
      "Dedicated support",
    ],
    ctaLabel: "Start Business",
  },
];

const PricingSection02 = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const pricingPlans = useMemo(() => {
    return plans.map((plan) => ({
      ...plan,
      price: billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice,
      billingPeriod: billingCycle === "monthly" ? "/month" : "/year",
      badge:
        billingCycle === "yearly" && plan.highlighted
          ? "Recommended · Save 20%"
          : plan.badge,
      ctaLabel: "Start " + plan.title,
    }));
  }, [billingCycle]);

  return (
    <section className="px-4">
      <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-brand">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Pick the plan that matches your momentum.
          </h2>
          <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
            Start with a flexible plan today and upgrade only when your team
            needs more.
          </p>
        </div>

        <div className="mt-16">
          <Switch
            value={billingCycle}
            onValueChange={setBillingCycle}
            ariaLabel="Billing cycle"
            options={[
              { value: "monthly", label: "Monthly" },
              { value: "yearly", label: "Yearly" },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)_minmax(0,1fr)] lg:items-end">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.title}
                {...plan}
                className={
                  index === 1 ? "lg:scale-105" : ""
                }
                classNames={
                  index === 1
                    ? {
                        body: "px-7 py-7",
                        price: "text-5xl",
                      }
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { PricingSection02 };
