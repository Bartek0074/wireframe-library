import { Avatar, AvatarFallback } from '@/components/atoms/Avatar'
import { Card } from '@/components/molecules/Card'

const testimonial = {
    quote:
        'The new design system gave our team a common language. We shipped pages faster, and the result feels far more deliberate than our old patchwork approach.',
    author: 'Maya Chen',
    title: 'Product Design Lead',
    company: 'Northstar Labs',
}

const TestimonialsSection01 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-4xl py-20 lg:py-24 mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <p className="text-sm font-semibold tracking-wide text-brand uppercase">
                        Testimonials
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Loved by teams that move quickly.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        A short, centered testimonial layout that works well when one customer
                        quote is enough to establish trust.
                    </p>
                </div>

                <Card className="mx-auto w-full max-w-3xl">
                    <div className="flex flex-col gap-6 p-2 sm:p-3">
                        <p className="text-5xl leading-none text-brand/40">“</p>
                        <blockquote className="text-xl leading-8 text-pretty text-foreground sm:text-2xl sm:leading-9">
                            {testimonial.quote}
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <Avatar className="size-12 border border-border">
                                <AvatarFallback />
                            </Avatar>
                            <div className="text-left">
                                <p className="font-semibold text-primary">{testimonial.author}</p>
                                <p className="text-sm text-muted-foreground">
                                    {testimonial.title} · {testimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}

export { TestimonialsSection01 }