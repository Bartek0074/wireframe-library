import { Avatar, AvatarFallback } from '@/components/atoms/Avatar'
import { Card } from '@/components/molecules/Card'

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
            <div className="grid max-w-7xl grid-cols-1 gap-10 py-16 mx-auto lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
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

                <Card className="lg:mt-8">
                    <div className="flex flex-col gap-6">
                        <p className="text-5xl leading-none text-brand/40">“</p>
                        <blockquote className="text-xl leading-8 text-pretty text-foreground sm:text-2xl sm:leading-9">
                            {testimonial.quote}
                        </blockquote>
                        <div className="flex items-center gap-4 pt-2">
                            <Avatar className="size-12 border border-border">
                                <AvatarFallback />
                            </Avatar>
                            <div>
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

export { TestimonialsSection03 }