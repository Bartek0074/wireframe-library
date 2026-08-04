import { Button } from '@/components/atoms/Button'
import { PricingCard } from '@/components/molecules/PricingCard'

const enterpriseFeatures = [
    'Custom security and compliance reviews',
    'Advanced user provisioning',
    'White-glove onboarding',
    'Strategic account support',
]

const PricingSection07 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Pricing</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Self-serve for teams, enterprise for scale.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Choose a standard plan today or contact sales for a tailored enterprise rollout.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <PricingCard
                        title="Business"
                        description="For teams ready to scale operations."
                        price="$149"
                        billingPeriod="/month"
                        features={[
                            'Unlimited projects',
                            'Team collaboration',
                            'API access',
                            'Priority support',
                            'Advanced analytics',
                        ]}
                        ctaLabel="Choose Business"
                        highlighted
                        badge="Most popular"
                    />

                    <div className="rounded-2xl border border-border bg-card px-6 py-6">
                        <p className="inline-flex w-fit items-center rounded-full border border-border px-3 py-1 text-xs font-semibold tracking-wide uppercase text-brand">
                            Enterprise
                        </p>
                        <h3 className="mt-4 text-xl font-semibold text-primary">Enterprise</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            For organizations with procurement, compliance and custom deployment needs.
                        </p>
                        <p className="mt-6 text-4xl font-semibold tracking-tight text-primary">Custom</p>
                        <p className="mt-1 text-sm text-muted-foreground">Annual contracts available</p>

                        <ul className="mt-6 flex flex-col gap-3">
                            {enterpriseFeatures.map((feature) => (
                                <li key={feature} className="text-sm text-muted-foreground">
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <Button className="w-full">Contact sales</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { PricingSection07 }
