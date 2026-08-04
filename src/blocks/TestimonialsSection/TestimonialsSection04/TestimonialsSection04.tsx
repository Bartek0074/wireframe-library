import Link from 'next/link'

import { Avatar, AvatarFallback } from '@/components/atoms/Avatar'
import { Button } from '@/components/atoms/Button/Button'
import { Card } from '@/components/molecules/Card'

const testimonial = {
    quote:
        'We finally had a reusable foundation that felt polished enough for launch day, but flexible enough for every experiment we wanted to run after it.',
    author: 'Priya Desai',
    title: 'Founder',
    company: 'North Peak',
}

const TestimonialsSection04 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl gap-8 py-16 mx-auto">
                <Card className="border-border shadow-none">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-col gap-5 lg:max-w-3xl">
                            <p className="text-sm font-semibold tracking-wide uppercase text-brand">
                                Featured testimonial
                            </p>
                            <blockquote className="text-2xl font-medium leading-9 text-pretty text-foreground sm:text-3xl sm:leading-[2.5rem]">
                                {testimonial.quote}
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <Avatar className="size-12 border border-border">
                                    <AvatarFallback />
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-primary">{testimonial.author}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.title} · {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 lg:items-end lg:text-right">
                            <p className="max-w-sm text-sm text-muted-foreground">
                                Pair the featured quote with a clear action so the section works as
                                both social proof and a conversion moment.
                            </p>
                            <Button variant="brand" asChild className="w-full sm:w-auto">
                                <Link href="/contact">Start a project</Link>
                            </Button>
                        </div>
                    </div>
                </Card>

                <Card className="border-border bg-muted/20">
                    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-primary">
                                Ready to see the pattern in your own layout?
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Use the same block structure with your own copy, links and customer
                                quotes.
                            </p>
                        </div>
                        <Button variant="ghost" asChild className="w-full sm:w-auto">
                            <Link href="/blocks">Browse blocks</Link>
                        </Button>
                    </div>
                </Card>
            </div>
        </section>
    )
}

export { TestimonialsSection04 }