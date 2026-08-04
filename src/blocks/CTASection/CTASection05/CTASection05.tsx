import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/atoms/Button'

const CTASection05 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Built for momentum</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Everything you need to launch faster.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        A bold, high-visibility CTA panel designed for the final push before users
                        choose their next step.
                    </p>
                </div>

                <div className="mt-16">
                    <div className="rounded-3xl border border-border bg-card px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                            <div className="max-w-3xl">
                                <h3 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                                    Ready to grow your business?
                                </h3>
                                <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                                    Activate your team workspace, align your launch flow and ship
                                    conversion-ready pages in record time.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
                                <Button variant="brand" size="lg">Get started</Button>
                                <Button variant="ghost" size="lg">
                                    Learn more <ArrowRight />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { CTASection05 }