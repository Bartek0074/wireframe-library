import { Avatar, AvatarFallback } from '@/components/atoms/Avatar'
import { Card } from '@/components/molecules/Card'

const testimonials = [
    {
        quote:
            'Once the team started using the same layout language, it became much easier to review new pages and keep approvals moving.',
        author: 'Claire Donovan',
        title: 'Brand Designer',
        company: 'Northline',
        initials: 'CD',
    },
    {
        quote:
            'We could change the copy, change the order and still keep the pages feeling related. That consistency was the real win for us.',
        author: 'Owen Kim',
        title: 'Operations Lead',
        company: 'Harbor Stack',
        initials: 'OK',
    },
    {
        quote:
            'The blocks feel reusable without looking repetitive, which is exactly what we needed for a content-heavy marketing site.',
        author: 'Grace Miller',
        title: 'Content Strategist',
        company: 'Luma Works',
        initials: 'GM',
    },
    {
        quote:
            'It gave our design team a solid base for experiments while still letting every landing page feel intentional and tailored.',
        author: 'Lucas Wright',
        title: 'Product Marketing Manager',
        company: 'Fieldline',
    },
]

const TestimonialsSection06 = () => {
    return (
        <section className="px-4">
            <div className="grid max-w-7xl grid-cols-1 gap-12 py-16 mx-auto lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
                <div className="flex flex-col mb-16 lg:mb-0 lg:pt-4">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">
                        Testimonials
                    </p>
                    <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        An offset intro that supports a denser testimonial grid.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        This format gives the introduction a separate column so the testimonial
                        cards can fill the remaining space in a crisp, reusable grid.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.author} className="h-full border-border shadow-none">
                            <div className="flex h-full flex-col gap-5">
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

export { TestimonialsSection06 }