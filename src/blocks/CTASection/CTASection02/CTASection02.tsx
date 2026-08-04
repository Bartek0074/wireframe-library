import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/atoms/Button'

const CTASection02 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28 lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="flex flex-col lg:col-span-7">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Launch faster</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Everything you need to launch with confidence.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Move from planning to production with reusable blocks, clean handoff and
                        workflows designed for product teams.
                    </p>
                </div>

                <div className="mt-16 flex flex-col gap-4 sm:flex-row lg:col-span-5 lg:mt-0 lg:items-center lg:justify-end">
                    <Button variant="brand" className="w-full sm:w-auto lg:min-w-36">Start free</Button>
                    <Button variant="ghost" className="w-full sm:w-auto lg:min-w-36">
                        Contact sales <ArrowRight />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export { CTASection02 }