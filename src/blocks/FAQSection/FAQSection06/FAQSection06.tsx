import Link from "next/link";

import { PlaceholderImage } from "@/components/atoms/PlaceholderImage";
import { Accordion } from "@/components/molecules/Accordion";

const items = [
  {
    question: "How does pricing work?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Can i cancel anytime?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question:
      "Do you offer discounts for non-profits or educational institutions?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

const FAQSection06 = () => {
  return (
    <section className="px-4">
      <div className="flex flex-col max-w-7xl py-16 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-semibold text-center tracking-tight text-balance text-primary sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg max-w-[72ch] text-center text-muted-foreground">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{" "}
            <Link
              href="/support"
              className="text-brand/90 hover:text-brand font-medium"
            >
              sending us an email
            </Link>{" "}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-12 items-center lg:items-start">
          <Accordion items={items} className="lg:col-span-6" />
          <PlaceholderImage
            className="lg:col-span-6 w-full max-w-160 aspect-square h-auto"
            iconSize="large"
          />
        </div>
      </div>
    </section>
  );
};

export { FAQSection06 };
