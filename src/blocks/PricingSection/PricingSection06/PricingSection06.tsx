import { Check } from 'lucide-react'

import { PricingCard } from '@/components/molecules/PricingCard'

const plans = [
    {
        title: 'Starter',
        description: 'For teams launching their first product.',
        price: '$19',
        billingPeriod: '/month',
        features: ['Unlimited projects', 'Team collaboration', 'Email support'],
        ctaLabel: 'Start Starter',
    },
    {
        title: 'Pro',
        description: 'For teams scaling product and operations.',
        price: '$59',
        billingPeriod: '/month',
        features: ['Everything in Starter', 'API access', 'Priority support'],
        ctaLabel: 'Start Pro',
        highlighted: true,
        badge: 'Recommended',
    },
    {
        title: 'Business',
        description: 'For organizations with enterprise controls.',
        price: '$159',
        billingPeriod: '/month',
        features: ['Everything in Pro', 'SSO', 'Audit logs'],
        ctaLabel: 'Start Business',
    },
]

const comparisonRows = [
    {
        feature: 'Unlimited projects',
        starter: true,
        pro: true,
        business: true,
    },
    {
        feature: 'Team collaboration',
        starter: true,
        pro: true,
        business: true,
    },
    {
        feature: 'API access',
        starter: false,
        pro: true,
        business: true,
    },
    {
        feature: 'Priority support',
        starter: false,
        pro: true,
        business: true,
    },
    {
        feature: 'SSO',
        starter: false,
        pro: false,
        business: true,
    },
]

const cellIcon = (enabled: boolean) => {
    if (!enabled) {
        return <span className="text-muted-foreground">-</span>
    }

    return <Check className="mx-auto size-4 text-brand" />
}

const PricingSection06 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Pricing</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Plans with a built-in feature comparison.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Help visitors compare capabilities quickly without leaving the pricing area.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingCard key={plan.title} {...plan} />
                    ))}
                </div>

                <div className="mt-16 overflow-hidden rounded-2xl border border-border">
                    <table className="w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="bg-card">
                                <th className="px-4 py-3 text-primary">Feature</th>
                                <th className="px-4 py-3 text-center text-primary">Starter</th>
                                <th className="px-4 py-3 text-center text-primary">Pro</th>
                                <th className="px-4 py-3 text-center text-primary">Business</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.feature} className="border-t border-border">
                                    <td className="px-4 py-3 text-muted-foreground">{row.feature}</td>
                                    <td className="px-4 py-3 text-center">{cellIcon(row.starter)}</td>
                                    <td className="px-4 py-3 text-center">{cellIcon(row.pro)}</td>
                                    <td className="px-4 py-3 text-center">{cellIcon(row.business)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export { PricingSection06 }
