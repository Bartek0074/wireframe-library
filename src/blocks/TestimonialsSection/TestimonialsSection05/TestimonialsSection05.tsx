import { Avatar, AvatarFallback } from '@/components/atoms/Avatar'
import { Card } from '@/components/molecules/Card'

const testimonials = [
    {
        quote:
            'The patterns are clear, flexible and calm. That made it easier for our team to move from mockups to real pages without constant rework.',
        author: 'Alicia Grant',
        title: 'Design Ops Manager',
        company: 'Monarch Studio',
        initials: 'AG',
    },
    {
        quote:
            'We were able to standardize our launch pages without making them feel generic. Every block still leaves room for our own voice.',
        author: 'Noah Bennett',
        title: 'Growth Lead',
        company: 'Signal Path',
        initials: 'NB',
    },
    {
        quote:
            'It feels like the library was designed by people who have actually shipped websites under deadline pressure. That saved us a lot of time.',
        author: 'Sofia Alvarez',
        title: 'Marketing Director',
        company: 'North River',
        initials: 'SA',
    },
    {
        quote:
            'The reusable structure helped us keep consistency across product, content and campaign pages while still making each one feel tailored.',
        author: 'Ethan Brooks',
        title: 'Head of Product',
        company: 'Cinder Labs',
        initials: 'EB',
    },
    {
        quote:
            'Our designers could focus on copy and hierarchy instead of rebuilding the same cards and sections from scratch for every page.',
        author: 'Nadia Rahman',
        title: 'Creative Lead',
        company: 'Atlas Lane',
        initials: 'NR',
    },
    {
        quote:
            'The library gives us a strong baseline, but it never feels rigid. That balance made it easy to adopt across multiple teams.',
        author: 'Marcus Hill',
        title: 'VP of Brand',
        company: 'Copper & Co.',
    },
]

const TestimonialsSection05 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl gap-12 py-16 mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">
                        Testimonials
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        A responsive grid that scales cleanly across breakpoints.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        This layout is useful when you want several customer quotes to sit beside
                        one another without forcing every card into the same visual rhythm.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.author} className="h-full border-border shadow-none">
                            <div className="flex h-full flex-col gap-5">
                                <p className="text-4xl leading-none text-brand/35">“</p>
                                <blockquote className="text-base leading-7 text-pretty text-foreground">
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

export { TestimonialsSection05 }