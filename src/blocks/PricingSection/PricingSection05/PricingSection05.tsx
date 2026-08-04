import { PricingCard } from '@/components/molecules/PricingCard'

const plans = [
    {
        title: 'Starter',
        description: 'A simple way to begin.',
        price: '$14',
        billingPeriod: '/month',
        features: ['Unlimited projects', 'Custom domains', 'Email support', 'Basic analytics'],
        ctaLabel: 'Choose Starter',
    },
    {
        title: 'Pro',
        description: 'For teams scaling delivery.',
        price: '$49',
        billingPeriod: '/month',
        features: ['Everything in Starter', 'API access', 'Priority support', 'Usage insights'],
        ctaLabel: 'Choose Pro',
        highlighted: true,
        badge: 'Most popular',
    },
    {
        title: 'Business',
        description: 'For larger organizations with governance needs.',
        price: '$129',
        billingPeriod: '/month',
        features: ['Everything in Pro', 'SSO', 'Audit logs', 'Dedicated onboarding'],
        ctaLabel: 'Choose Business',
    },
]

const faqItems = [
    {
        question: 'Can I change plans later?',
        answer: 'Yes. You can upgrade or downgrade your plan at any time from billing settings.',
    },
    {
        question: 'Do you offer annual billing?',
        answer: 'Yes. Annual plans include a discount and are available for all paid tiers.',
    },
    {
        question: 'Is there a free trial?',
        answer: 'Every paid plan includes a 14-day trial with access to all core features.',
    },
    {
        question: 'Do you provide migration help?',
        answer: 'Business and Enterprise plans include guided onboarding and migration support.',
    },
]

const PricingSection05 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Pricing</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Pricing plans with clear answers.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Choose a plan quickly and review common billing questions in the same section.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingCard key={plan.title} {...plan} />
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {faqItems.map((item) => (
                        <div key={item.question} className="rounded-2xl border border-border bg-card px-6 py-5">
                            <h3 className="text-base font-semibold text-primary">{item.question}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export { PricingSection05 }
