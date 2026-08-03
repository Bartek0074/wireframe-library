import React from 'react'

import Link from 'next/link'

const items = [
    {
        question: "How does pricing work?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        question: "Can i cancel anytime?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        question: "Do you offer technical support?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        question: "Is there a free trial available?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        question: "What payment methods do you accept?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        question: "Is my data secure?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        question: "Do you offer discounts for non-profits or educational institutions?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        question: "How do I contact customer support?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    }
]

const FAQSection04 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl gap-8 py-16 mx-auto">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl font-semibold text-center tracking-tight text-balance text-primary sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-base max-w-[72ch] text-center text-muted-foreground">
                        Have a different question and can’t find the answer you’re looking for? Reach out to our support team by <Link href="/support" className="text-brand/90 hover:text-brand font-medium">sending us an email</Link> and we’ll get back to you as soon as we can.
                    </p>
                </div>
                <dl className="flex flex-col gap-6 sm:grid sm:gap-x-6 sm:gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="flex flex-col gap-4">
                                <dt className="text-base font-bold text-primary">{item.question}</dt>
                                <dd className="text-base text-muted-foreground">{item.answer}</dd>
                            </div>
                        </React.Fragment>
                    ))}
                </dl>
            </div>
        </section>
    )
}

export { FAQSection04 }
