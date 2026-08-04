import { ArrowRight, Star } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/atoms/Avatar'
import { Button } from '@/components/atoms/Button'

const stats = [
    { value: '4.9/5', label: 'Average rating' },
    { value: '12k+', label: 'Active teams' },
    { value: '37%', label: 'Faster launch cycles' },
]

const CTASection06 = () => {
    return (
        <section className="px-4">
            <div className="mx-auto flex max-w-7xl flex-col py-20 lg:py-28">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">Get started</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Everything you need to launch faster.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Activate your workspace in minutes and start shipping polished experiences
                        with less overhead.
                    </p>
                </div>

                <div className="mt-16 flex flex-col items-center">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Button variant="brand">Start free</Button>
                        <Button variant="ghost">
                            Contact sales <ArrowRight />
                        </Button>
                    </div>

                    <div className="mt-10 w-full max-w-5xl rounded-2xl border border-border bg-card px-4 py-5 sm:px-6 sm:py-6">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <Avatar className="size-10 border border-border bg-card"><AvatarFallback /></Avatar>
                                    <Avatar className="size-10 border border-border bg-card"><AvatarFallback /></Avatar>
                                    <Avatar className="size-10 border border-border bg-card"><AvatarFallback /></Avatar>
                                    <Avatar className="size-10 border border-border bg-card"><AvatarFallback /></Avatar>
                                </div>

                                <div>
                                    <div className="flex items-center gap-1 text-brand">
                                        <Star className="size-4 fill-current" />
                                        <Star className="size-4 fill-current" />
                                        <Star className="size-4 fill-current" />
                                        <Star className="size-4 fill-current" />
                                        <Star className="size-4 fill-current" />
                                    </div>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Trusted by high-velocity product and marketing teams.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="text-left sm:text-center">
                                        <p className="text-2xl font-semibold tracking-tight text-primary">
                                            {stat.value}
                                        </p>
                                        <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { CTASection06 }