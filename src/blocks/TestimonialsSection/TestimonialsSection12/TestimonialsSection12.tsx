import { TestimonialCard } from '@/components/molecules/TestimonialCard'

const featured = {
    quote:
        'The bento layout gives the section a more modern landing page feel while still keeping each testimonial card reusable and straightforward.',
    author: 'Olivia Bennett',
    title: 'VP of Product Marketing',
    company: 'Arc Studio',
}

const testimonials = [
    {
        quote:
            'We could use the same section on multiple pages without every instance feeling identical or overly templated.',
        author: 'Leo Turner',
        title: 'Growth Designer',
        company: 'Northline',
    },
    {
        quote:
            'The structure makes the featured message obvious while still allowing smaller supporting quotes to add depth.',
        author: 'Ava Collins',
        title: 'Brand Strategist',
        company: 'Blue Peak',
    },
    {
        quote:
            'It is a clean wireframe-first take on a modern testimonial block, which makes it easy to adapt in real projects.',
        author: 'Ethan Price',
        title: 'Lead Designer',
        company: 'Luma Works',
    },
    {
        quote:
            'The asymmetry creates a nice rhythm across the page and helps the primary quote feel more important.',
        author: 'Grace Kim',
        title: 'Content Director',
        company: 'Monarch',
    },
    {
        quote:
            'The cards are flexible enough for future copy changes without forcing us to rework the entire layout.',
        author: 'Noah Foster',
        title: 'Marketing Lead',
        company: 'Field Note',
    },
]

const TestimonialsSection12 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl py-20 lg:py-24 mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">
                        Social proof
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Bento-style testimonial layout for modern landing pages.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        A larger featured quote anchors the grid while smaller cards create a
                        varied, responsive composition suitable for marketing pages.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <TestimonialCard
                        className="lg:col-span-7 lg:row-span-2"
                        sizes="lg"
                        classNames={{
                            content: 'p-2 sm:p-3',
                            quote: 'text-2xl leading-9 sm:text-3xl sm:leading-10',
                            footer: 'flex items-center gap-4',
                            quoteMark: 'text-brand/40',
                        }}
                        showQuoteMark
                        quote={featured.quote}
                        author={featured.author}
                        title={featured.title}
                        company={featured.company}
                    />

                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.author}
                            className={[
                                'border-border shadow-none',
                                index === 0 ? 'lg:col-span-5' : '',
                                index === 1 ? 'lg:col-span-5' : '',
                                index === 2 ? 'lg:col-span-4' : '',
                                index === 3 ? 'lg:col-span-4' : '',
                                index === 4 ? 'lg:col-span-4' : '',
                            ].join(' ')}
                            classNames={{
                                content: index === 1 ? 'lg:py-2' : undefined,
                                quote: index === 0 ? 'sm:text-lg' : undefined,
                            }}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            title={testimonial.title}
                            company={testimonial.company}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export { TestimonialsSection12 }