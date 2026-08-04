import { PricingCard } from '@/components/molecules/PricingCard'

const PricingSection04 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Pricing</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Compare plans side by side.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Built for teams deciding between a fast self-serve plan and a higher-touch
                        business setup.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <PricingCard
                        title="Pro"
                        description="Best for product teams and scaleups."
                        price="$59"
                        billingPeriod="/month"
                        features={[
                            'Unlimited projects',
                            'Team collaboration',
                            'API access',
                            'Priority support',
                            'Advanced analytics',
                        ]}
                        ctaLabel="Choose Pro"
                        badge="Most popular"
                        highlighted
                    />
                    <PricingCard
                        title="Business"
                        description="Best for organizations with advanced controls."
                        price="$149"
                        billingPeriod="/month"
                        features={[
                            'Everything in Pro',
                            'SSO and SCIM',
                            'Audit logs',
                            'Dedicated success manager',
                            'Custom contracts',
                        ]}
                        ctaLabel="Choose Business"
                        classNames={{
                            body: 'bg-card/60',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export { PricingSection04 }
