import React from 'react'

import { Separator } from '@/components/atoms/Separator'

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
    }
]

const FAQSection03 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl py-16 mx-auto">
                <div className="flex flex-col max-w-3xl mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight text-balance text-primary sm:text-4xl">
                        Frequently asked questions
                    </h2>
                </div>
                <dl className="flex flex-col gap-6">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-2">
                                <dt className="text-base font-bold text-primary lg:col-span-4">{item.question}</dt>
                                <dd className="text-base text-muted-foreground lg:col-span-8">{item.answer}</dd>
                            </div>
                            {index < items.length - 1 && <Separator />}
                        </React.Fragment>
                    ))}
                </dl>
            </div>
        </section>
    )
}

export { FAQSection03 }
