'use client'

import { Carousel } from '@/components/molecules/Carousel'
import { TestimonialCard } from '@/components/molecules/TestimonialCard'

const testimonials = [
    {
        quote:
            'The carousel format makes it easy to scan customer stories one by one without losing the clean wireframe feel we want for the page.',
        author: 'Amelia Foster',
        title: 'Product Marketing Manager',
        company: 'Northline Systems',
    },
    {
        quote:
            'The swipe interaction feels natural on mobile, and the previous and next controls keep the experience familiar on desktop.',
        author: 'Julian Reed',
        title: 'Growth Lead',
        company: 'Bright Harbor',
    },
    {
        quote:
            'One testimonial at a time gives the section a focused, editorial rhythm that works well on launch pages and landing pages.',
        author: 'Maya Collins',
        title: 'Brand Director',
        company: 'Luma Studio',
    },
    {
        quote:
            'The cards stay readable even when the carousel shows more than one item, which keeps the section practical for larger screens.',
        author: 'Nora White',
        title: 'Content Strategist',
        company: 'Field Note',
    },
    {
        quote:
            'A familiar carousel with visible neighbors helps the section feel active without overwhelming the page with motion.',
        author: 'Ethan Gray',
        title: 'Head of Brand',
        company: 'Cinder Works',
    },
    {
        quote:
            'We wanted something simple, reusable and easy to extend later. This kind of carousel keeps the implementation clean.',
        author: 'Sofia Reed',
        title: 'Marketing Designer',
        company: 'Northstar Labs',
    },
]

const TestimonialsSection09 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-5xl py-20 lg:py-24 mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <p className="text-sm font-semibold tracking-wide uppercase text-brand">
                        Testimonials
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        A simple carousel for focused customer proof.
                    </h2>
                    <p className="mt-4 max-w-[72ch] text-lg text-balance text-muted-foreground">
                        One testimonial is visible at a time, with looped drag support and arrow
                        controls for a familiar marketing section interaction.
                    </p>
                </div>

                <Carousel
                    autoplay
                    autoplayDelay={4500}
                    trackClassName="-ml-4"
                    slideClassName="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.author}
                            sizes="sm"
                            classNames={{
                                content: 'px-5 py-4 sm:px-6 sm:py-5',
                                quote: 'sm:text-lg sm:leading-8',
                                footer: 'flex items-center justify-center gap-3 border-t border-border pt-4',
                                authorMeta: 'text-left',
                            }}
                            showQuoteMark
                            quote={testimonial.quote}
                            author={testimonial.author}
                            title={testimonial.title}
                            company={testimonial.company}
                        />
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export { TestimonialsSection09 }