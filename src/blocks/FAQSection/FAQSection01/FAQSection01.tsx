import Link from "next/link";

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

const FAQSection01 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col lg:grid lg:grid-cols-12 max-w-7xl gap-8 py-16 mx-auto">
                <div className="flex flex-col lg:col-span-4 xl:col-span-5 max-w-3xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-balance text-primary sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-base max-w-[48ch] text-muted-foreground">
                        Can’t find the answer you’re looking for? Reach out to our <Link href="/support" className="text-brand/90 hover:text-brand font-medium">customer support</Link> team.
                    </p>
                </div>
                <div className="lg:col-span-8 xl:col-span-7">
                    <dl className="flex flex-col gap-10">
                        {items.map((item, index) => (
                            <div key={index}>
                                <dt className="text-base font-bold text-primary">{item.question}</dt>
                                <dd className="mt-2 text-base text-muted-foreground">{item.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export { FAQSection01 };
