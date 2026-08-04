import { TestimonialCard } from '@/components/molecules/TestimonialCard'

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

                <TestimonialCard
                    className="mx-auto w-full max-w-3xl"
                    sizes="lg"
                    classNames={{
                        content: 'p-2 sm:p-3',
                        footer: 'flex items-center justify-center gap-4',
                        authorMeta: 'text-left',
                        quoteMark: 'text-brand/40',
                    }}
                    showQuoteMark
                    quote={testimonial.quote}
                    author={testimonial.author}
                    title={testimonial.title}
                    company={testimonial.company}
                />
            </div>
        </section>
    )
}

export { TestimonialsSection01 }