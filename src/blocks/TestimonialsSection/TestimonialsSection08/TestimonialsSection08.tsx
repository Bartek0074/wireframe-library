import { TestimonialCard } from '@/components/molecules/TestimonialCard'

const logos = ['Northstar', 'Bright Harbor', 'Field Note', 'Monarch', 'Signal Path', 'Luma Works']

const testimonials = [
    {
        quote:
            'The shared component language makes every page feel like part of the same system, even when the content changes completely.',
        author: 'Sara Mitchell',
        title: 'Head of Lifecycle',
        company: 'Northstar',
        initials: 'SM',
    },
    {
        quote:
            'We adopted the blocks across teams because they were easy to understand and even easier to adapt for our own brand voice.',
        author: 'Trevor Ellis',
        title: 'Senior Designer',
        company: 'Bright Harbor',
        initials: 'TE',
    },
    {
        quote:
            'The consistency shows up immediately, but the library still leaves enough room for each product area to feel distinct.',
        author: 'Isabel Price',
        title: 'Marketing Lead',
        company: 'Field Note',
        initials: 'IP',
    },
    {
        quote:
            'It is rare to find a reusable system that looks polished in a storybook and still feels practical in a real launch workflow.',
        author: 'Omar Hassan',
        title: 'Product Strategist',
        company: 'Monarch',
        initials: 'OH',
    },
    {
        quote:
            'The testimonial blocks are structured enough for speed and open enough for thoughtful editing, which is exactly what we needed.',
        author: 'Leah Turner',
        title: 'Copy Lead',
        company: 'Signal Path',
        initials: 'LT',
    },
    {
        quote:
            'Every page launch feels calmer now because we are not reinventing the same social proof patterns over and over.',
        author: 'Henry Park',
        title: 'Design Manager',
        company: 'Luma Works',
    },
]

const TestimonialsSection08 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl py-20 lg:py-24 mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">
                        Trusted by teams
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        A logo cloud followed by a responsive testimonial grid.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        Start with a simple trust signal, then give visitors a clean grid of
                        customer quotes that scales well across breakpoints.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    {logos.map((logo) => (
                        <div
                            key={logo}
                            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground"
                        >
                            {logo}
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

export { TestimonialsSection08 }