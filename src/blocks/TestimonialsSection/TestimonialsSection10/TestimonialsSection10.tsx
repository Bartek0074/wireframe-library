import { TestimonialCard } from '@/components/molecules/TestimonialCard'
import { Stat } from '@/components/atoms/Stat'

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
            <div className="flex flex-col max-w-7xl py-20 lg:py-24 mx-auto">
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
                        <Stat
                            key={stat.label}
                            value={stat.value}
                            label={stat.label}
                            className="text-center"
                        />
                    ))}
                </div>

                <TestimonialCard
                    className="mx-auto mt-16 w-full max-w-4xl"
                    sizes="lg"
                    classNames={{
                        content: 'items-center px-6 py-10 text-center sm:px-10 sm:py-12',
                        quote: 'text-2xl leading-9 sm:text-3xl sm:leading-10',
                        footer: 'flex items-center gap-4',
                        authorMeta: 'text-left',
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

export { TestimonialsSection10 }