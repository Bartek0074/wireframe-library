import { PricingCard } from '@/components/molecules/PricingCard'

const plans = [
    {
        title: 'Starter',
        description: 'A lightweight plan for building foundations.',
        price: '$18',
        billingPeriod: '/month',
        features: ['Unlimited projects', 'Team collaboration', 'Basic reporting', 'Email support'],
        ctaLabel: 'Choose Starter',
    },
    {
        title: 'Pro',
        description: 'For teams moving from MVP to growth.',
        price: '$52',
        billingPeriod: '/month',
        features: ['Everything in Starter', 'API access', 'Advanced analytics', 'Priority support'],
        ctaLabel: 'Choose Pro',
        highlighted: true,
        badge: 'Best value',
    },
]

const PricingSection03 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28 lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="flex flex-col lg:col-span-4 xl:col-span-5">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Pricing</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Flexible pricing for teams that scale.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Start lean, then unlock deeper controls as your product and team complexity
                        increase.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 lg:col-span-8 lg:mt-0 xl:col-span-7 xl:grid-cols-2">
                    {plans.map((plan) => (
                        <PricingCard key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export { PricingSection03 }
