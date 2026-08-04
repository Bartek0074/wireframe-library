import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/atoms/Button'

const CTASection01 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Get started</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Start building today.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Launch faster with a flexible workflow that helps your team ship polished
                        pages in days, not weeks.
                    </p>
                </div>

                <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
                    <Button variant="brand">Get started</Button>
                    <Button variant="ghost">
                        Learn more <ArrowRight />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export { CTASection01 }