import Link from 'next/link'

import { Avatar, AvatarFallback } from '@/components/atoms/Avatar'
import { Button } from '@/components/atoms/Button/Button'
import { Card } from '@/components/molecules/Card'

const testimonial = {
    quote:
        'We replaced a three-week design handoff with a single review loop. The structure is flexible enough to adapt, but opinionated enough to keep the team aligned.',
    author: 'Jordan Patel',
    title: 'Head of Marketing',
    company: 'Bright Harbor',
}

const TestimonialsSection02 = () => {
    return (
        <section className="px-4">
            <div className="grid max-w-7xl grid-cols-1 items-center gap-0 py-20 lg:py-24 mx-auto lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col mb-16 lg:mb-0 lg:max-w-xl">
                    <p className="text-sm font-semibold tracking-wide text-brand uppercase">
                        Customer stories
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        A split layout that leads with context and closes with proof.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        This composition gives the introduction space to explain the value
                        proposition before presenting a featured testimonial beside it.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button variant="brand" asChild>
                            <Link href="/customers">View customer stories</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/contact">Talk to sales</Link>
                        </Button>
                    </div>
                </div>

                <Card className="border-border shadow-none">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <Avatar className="size-11 border border-border">
                                <AvatarFallback />
                            </Avatar>
                            <div>
                                <p className="font-semibold text-primary">{testimonial.author}</p>
                                <p className="text-sm text-muted-foreground">
                                    {testimonial.title} · {testimonial.company}
                                </p>
                            </div>
                        </div>
                        <blockquote className="text-xl leading-8 text-pretty text-foreground sm:text-2xl sm:leading-9">
                            {testimonial.quote}
                        </blockquote>
                        <div className="grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
                            <div>
                                <p className="text-sm font-medium text-primary">Shorter cycles</p>
                                <p className="text-sm text-muted-foreground">
                                    Clear patterns cut review time and remove design guesswork.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-primary">Better alignment</p>
                                <p className="text-sm text-muted-foreground">
                                    Shared layouts keep product, design and marketing in sync.
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}

export { TestimonialsSection02 }