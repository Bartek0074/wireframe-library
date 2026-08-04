import { Avatar, AvatarFallback } from '@/components/atoms/Avatar'
import { Card } from '@/components/molecules/Card'

const stats = [
    { label: 'Average lift', value: '32%' },
    { label: 'Design cycles saved', value: '14' },
    { label: 'Launches supported', value: '86' },
    { label: 'Customer satisfaction', value: '4.9/5' },
]

const testimonial = {
    quote:
        'The statistics created instant credibility, and the featured quote below gave the section a clear human voice that still fit the wireframe style.',
    author: 'Priya Nair',
    title: 'Head of Growth',
    company: 'Cinder Works',
}

const TestimonialsSection10 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl py-16 mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">
                        Proof points
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        Statistics above, featured testimonial below.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        This centered layout pairs metrics with a larger customer quote so the
                        section can support both credibility and storytelling.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <Card key={stat.label} className="border-border shadow-none">
                            <div className="flex flex-col items-center gap-2 px-4 py-6 text-center">
                                <p className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                <Card className="mx-auto mt-8 w-full max-w-4xl border-border shadow-none">
                    <div className="flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-10 sm:py-12">
                        <p className="text-5xl leading-none text-brand/40">“</p>
                        <blockquote className="text-2xl leading-9 text-pretty text-foreground sm:text-3xl sm:leading-10">
                            {testimonial.quote}
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <Avatar className="size-12 border border-border">
                                <AvatarFallback />
                            </Avatar>
                            <div className="text-left">
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

export { TestimonialsSection10 }