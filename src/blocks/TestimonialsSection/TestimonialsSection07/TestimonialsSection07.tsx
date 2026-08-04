import { Avatar, AvatarFallback } from '@/components/atoms/Avatar'
import { Card } from '@/components/molecules/Card'

const testimonials = [
    {
        quote:
            'The block structure gave us a reliable scaffold for a large launch site. That let us focus on the narrative instead of the plumbing.',
        author: 'Hannah Lee',
        title: 'Director of Brand',
        company: 'Arc & Origin',
        initials: 'HL',
    },
    {
        quote:
            'We could adapt the same testimonial module for product pages, blog pages and campaign pages without making any of them feel copied.',
        author: 'Dylan Foster',
        title: 'Growth Designer',
        company: 'North Point',
        initials: 'DF',
    },
    {
        quote:
            'The masonry-style flow creates a more editorial feel, which is great when the quote lengths are naturally uneven.',
        author: 'Mia Thompson',
        title: 'Lead Copywriter',
        company: 'Studio Axis',
        initials: 'MT',
    },
    {
        quote:
            'Some pages need a short punchy quote, others need a longer narrative. This layout handles both without looking forced or repetitive.',
        author: 'Caleb Warren',
        title: 'VP of Marketing',
        company: 'Pinehouse',
        initials: 'CW',
    },
    {
        quote:
            'It was easy to use the same system for a series of customer stories and still let each card carry its own pace and emphasis.',
        author: 'Jade Nguyen',
        title: 'Content Lead',
        company: 'Brightway',
        initials: 'JN',
    },
    {
        quote:
            'The layout feels purposeful at every size. On smaller screens the stack is clean, and on larger screens the variation becomes a feature.',
        author: 'Isaac Brooks',
        title: 'Creative Technologist',
        company: 'Commonform',
        initials: 'IB',
    },
    {
        quote:
            'That combination of consistency and freedom made adoption much easier across the whole company.',
        author: 'Renee Walker',
        title: 'Marketing Ops Manager',
        company: 'Cove Studio',
    },
]

const TestimonialsSection07 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl gap-12 py-16 mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">
                        Testimonials
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        A masonry-style grid for quotes with different lengths.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        This layout creates a more editorial rhythm while still keeping the cards
                        fully reusable and responsive.
                    </p>
                </div>

                <div className="columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={testimonial.author}
                            className="break-inside-avoid border-border shadow-none"
                        >
                            <div className="flex flex-col gap-5">
                                <p className="text-4xl leading-none text-brand/35">“</p>
                                <blockquote
                                    className={[
                                        'text-base leading-7 text-pretty text-foreground',
                                        index % 3 === 0 ? 'sm:text-lg sm:leading-8' : '',
                                    ].join(' ')}
                                >
                                    {testimonial.quote}
                                </blockquote>
                                {index % 2 === 0 ? (
                                    <p className="text-sm text-muted-foreground">
                                        The team used this section to highlight a consistent rollout
                                        across multiple campaign pages.
                                    </p>
                                ) : null}
                                <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                                    <Avatar className="size-11 border border-border">
                                        <AvatarFallback />
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-primary">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.title} · {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export { TestimonialsSection07 }