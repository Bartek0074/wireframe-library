import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/atoms/Button'
import { PlaceholderImage } from '@/components/atoms/PlaceholderImage'

const CTASection04 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
                <div className="flex flex-col lg:col-span-5">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Scale your output</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Turn ideas into production-ready pages.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Build faster with reusable blocks and visual compositions that stay clear
                        from wireframe to implementation.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button variant="brand">Get started</Button>
                        <Button variant="ghost">
                            Learn more <ArrowRight />
                        </Button>
                    </div>
                </div>

                <div className="mt-16 lg:col-span-7 lg:mt-0">
                    <PlaceholderImage className="h-96 w-full" iconSize="large" />
                </div>
            </div>
        </section>
    )
}

export { CTASection04 }