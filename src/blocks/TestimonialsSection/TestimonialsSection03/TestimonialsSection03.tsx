import { TestimonialCard } from '@/components/molecules/TestimonialCard'

const testimonial = {
    quote:
        'The strongest part is how predictable everything feels. Each section can be adapted without breaking the overall composition, which makes handoff much easier.',
    author: 'Elena Morris',
    title: 'Creative Director',
    company: 'Field Note Studio',
}

const TestimonialsSection03 = () => {
    return (
        <section className="px-4">
            <div className="grid max-w-7xl grid-cols-1 gap-0 py-20 lg:py-24 mx-auto lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
                <div className="flex flex-col mb-16 lg:mb-0 lg:pt-10">
                    <p className="text-sm font-semibold tracking-wide text-brand uppercase">
                        Testimonials
                    </p>
                    <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        An offset heading gives the quote room to breathe.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        This layout works well when a single testimonial needs a more editorial
                        feel and the heading should sit slightly apart from the main card.
                    </p>
                </div>

                <TestimonialCard
                    sizes="lg"
                    classNames={{
                        footer: 'flex items-center gap-4 pt-2',
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

export { TestimonialsSection03 }