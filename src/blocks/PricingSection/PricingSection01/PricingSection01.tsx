import { PricingCard } from '@/components/molecules/PricingCard'

const plans = [
    {
        title: 'Starter',
        description: 'For individuals validating early ideas.',
        price: '$12',
        billingPeriod: '/month',
        features: ['Unlimited projects', 'Team collaboration', 'Basic analytics', 'Email support'],
        ctaLabel: 'Get Starter',
    },
    {
        title: 'Pro',
        description: 'For growing teams building faster.',
        price: '$39',
        billingPeriod: '/month',
        features: ['Everything in Starter', 'API access', 'Custom domains', 'Priority support'],
        ctaLabel: 'Start Pro',
        highlighted: true,
        badge: 'Most popular',
    },
    {
        title: 'Business',
        description: 'For scaling companies with advanced needs.',
        price: '$99',
        billingPeriod: '/month',
        features: ['Everything in Pro', 'Advanced analytics', 'SSO', 'Dedicated onboarding'],
        ctaLabel: 'Choose Business',
    },
]

const PricingSection01 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Pricing</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Simple plans for every stage.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Clear monthly pricing with no hidden fees, designed for teams that want to
                        ship quickly.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingCard key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export { PricingSection01 }
