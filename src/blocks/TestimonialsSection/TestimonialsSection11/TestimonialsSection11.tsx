import { TestimonialCard } from '@/components/molecules/TestimonialCard'

const companies = [
    'Northstar',
    'Blue Peak',
    'Cedar Labs',
    'Bright Harbor',
    'Luma Works',
    'Signal Path',
    'Monarch',
    'Field Note',
]

const testimonials = [
    {
        quote:
            'The reusable patterns made our launch pages easier to build and easier to maintain over time.',
        author: 'Daniel Brooks',
        title: 'Design Lead',
        company: 'Northstar',
    },
    {
        quote:
            'The team could focus on messaging and hierarchy instead of repeatedly rebuilding the same testimonial logic.',
        author: 'Sofia Patel',
        title: 'Marketing Manager',
        company: 'Blue Peak',
    },
    {
        quote:
            'It is a strong foundation for wireframes because it still leaves space for real content decisions later.',
        author: 'Evan Carter',
        title: 'Product Designer',
        company: 'Cedar Labs',
    },
    {
        quote:
            'We now have a consistent way to show social proof across product, marketing and campaign pages.',
        author: 'Maya Chen',
        title: 'Creative Director',
        company: 'Bright Harbor',
    },
    {
        quote:
            'The structure is calm, flexible and easy to hand off, which matters more than people think on a busy team.',
        author: 'Noah Reed',
        title: 'Growth Strategist',
        company: 'Luma Works',
    },
    {
        quote:
            'It keeps the page feeling human while still giving us enough control to keep layouts aligned.',
        author: 'Clara Nguyen',
        title: 'Brand Manager',
        company: 'Signal Path',
    },
]

const TestimonialsSection11 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl py-20 lg:py-24 mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">
                        Trusted partners
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        A logo cloud followed by a testimonial grid.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Use simple placeholder company names to establish trust before presenting
                        a flexible set of customer quotes underneath.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {companies.map((company) => (
                        <div
                            key={company}
                            className="flex items-center justify-center rounded-xl border border-border bg-card px-4 py-6 text-center text-sm font-medium text-muted-foreground"
                        >
                            {company}
                        </div>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.author}
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

export { TestimonialsSection11 }