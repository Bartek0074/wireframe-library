import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/atoms/Button'

const CTASection03 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Before you go</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Build something amazing.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        One simple step to activate your workspace and move from planning to
                        launch-ready pages.
                    </p>
                </div>

                <div className="mt-16">
                    <div className="mx-auto w-full max-w-5xl">
                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="h-px flex-1 bg-border" />
                            <Button variant="brand" size="lg" className="px-10">
                                Start building today <ArrowRight />
                            </Button>
                            <div className="h-px flex-1 bg-border" />
                        </div>

                        <p className="mt-4 text-center text-sm text-muted-foreground">
                            No credit card required. Invite your team anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { CTASection03 }