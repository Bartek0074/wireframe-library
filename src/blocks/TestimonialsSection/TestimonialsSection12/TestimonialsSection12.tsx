import { Avatar, AvatarFallback } from '@/components/atoms/Avatar'
import { Card } from '@/components/molecules/Card'

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
                    <Card className="lg:col-span-7 lg:row-span-2 border-border shadow-none">
                        <div className="flex h-full flex-col gap-6 p-2 sm:p-3">
                            <p className="text-5xl leading-none text-brand/40">“</p>
                            <blockquote className="text-2xl leading-9 text-pretty text-foreground sm:text-3xl sm:leading-10">
                                {featured.quote}
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <Avatar className="size-12 border border-border">
                                    <AvatarFallback />
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-primary">{featured.author}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {featured.title} · {featured.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={testimonial.author}
                            className={[
                                'border-border shadow-none',
                                index === 0 ? 'lg:col-span-5' : '',
                                index === 1 ? 'lg:col-span-5' : '',
                                index === 2 ? 'lg:col-span-4' : '',
                                index === 3 ? 'lg:col-span-4' : '',
                                index === 4 ? 'lg:col-span-4' : '',
                            ].join(' ')}
                        >
                            <div className={['flex h-full flex-col gap-5', index === 1 ? 'lg:py-2' : ''].join(' ')}>
                                <blockquote className={[
                                    'text-base leading-7 text-pretty text-foreground',
                                    index === 0 ? 'sm:text-lg' : '',
                                ].join(' ')}>
                                    {testimonial.quote}
                                </blockquote>
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

export { TestimonialsSection12 }