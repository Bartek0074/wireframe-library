import { Accordion } from "@/components/molecules/Accordion/Accordion";

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

const FAQSection02 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col lg:grid lg:grid-cols-12 max-w-7xl gap-0 lg:gap-8 py-20 lg:py-24 mx-auto">
                <div className="flex flex-col mb-16 lg:mb-0 lg:col-span-4 xl:col-span-5 max-w-3xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-balance text-primary sm:text-4xl">
                        Frequently asked questions
                    </h2>
                </div>
                <div className="lg:col-span-8 xl:col-span-7">
                    <Accordion items={items} defaultOpenIndex={0} />
                </div>
            </div>
        </section>
    );
};

export { FAQSection02 };
