import { ArrowRight, Check } from 'lucide-react'

import { Button } from '@/components/atoms/Button'
import { PlaceholderImage } from '@/components/atoms/PlaceholderImage'

const highlights = [
    'Unlimited workspaces',
    'Team collaboration',
    'Reusable design patterns',
    'Dedicated customer success',
]

const CTASection07 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28">
                <div className="flex flex-col">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Enterprise ready</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Scale your workflows without slowing your team.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Combine reusable foundations with flexible architecture built for teams that
                        ship often.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-6">
                        <PlaceholderImage className="h-96 w-full" iconSize="large" />
                    </div>

                    <div className="flex flex-col lg:col-span-6 lg:pl-6 xl:pl-10">
                        <h3 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                            Build something amazing.
                        </h3>
                        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                            Move from first idea to polished release with less operational
                            complexity and clearer collaboration.
                        </p>

                        <ul className="mt-6 flex flex-col gap-3">
                            {highlights.map((highlight) => (
                                <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Button variant="brand">Get started</Button>
                            <Button variant="ghost">
                                Book a demo <ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { CTASection07 }