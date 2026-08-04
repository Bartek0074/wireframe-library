import { ShieldCheck, CreditCard, BadgeCheck } from 'lucide-react'

import { PricingCard } from '@/components/molecules/PricingCard'

const plans = [
    {
        title: 'Starter',
        description: 'A simple setup for new projects.',
        price: '$12',
        billingPeriod: '/month',
        features: ['Unlimited projects', 'Custom domains', 'Team collaboration', 'Email support'],
        ctaLabel: 'Choose Starter',
    },
    {
        title: 'Pro',
        description: 'Built for teams that need speed and scale.',
        price: '$44',
        billingPeriod: '/month',
        features: ['Everything in Starter', 'API access', 'Priority support', 'Advanced analytics'],
        ctaLabel: 'Choose Pro',
        highlighted: true,
        badge: 'Most popular',
    },
    {
        title: 'Business',
        description: 'Designed for complex organizations.',
        price: '$119',
        billingPeriod: '/month',
        features: ['Everything in Pro', 'SSO', 'Audit logs', 'Dedicated support'],
        ctaLabel: 'Choose Business',
    },
]

const trustItems = [
    {
        icon: ShieldCheck,
        title: '30-day money-back guarantee',
    },
    {
        icon: BadgeCheck,
        title: 'Secure checkout and verified billing',
    },
    {
        icon: CreditCard,
        title: 'Supports all major cards',
    },
]

const paymentLogos = ['Visa', 'Mastercard', 'Amex', 'Stripe']

const PricingSection08 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Pricing</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Transparent pricing with trust signals.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Pair plan selection with guarantees and payment clarity to reduce purchase friction.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingCard key={plan.title} {...plan} />
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {trustItems.map((item) => (
                        <div
                            key={item.title}
                            className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3"
                        >
                            <item.icon className="size-4 text-brand" />
                            <p className="text-sm text-muted-foreground">{item.title}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-2xl border border-border bg-card px-6 py-5">
                    <p className="text-center text-sm text-muted-foreground">Accepted payment methods</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {paymentLogos.map((logo) => (
                            <div
                                key={logo}
                                className="flex items-center justify-center rounded-lg border border-border px-3 py-2 text-sm font-medium text-primary"
                            >
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export { PricingSection08 }
