"use client";

import Link from "next/link";

import { AnnouncmentLink } from "@/components/atoms/AnnouncmentLink/AnnouncmentLink";
import { Button } from "@/components/atoms/Button/Button";

import { ArrowRight } from "lucide-react";

const stats = [
    {
        id: 1,
        value: "250+",
        name: "Projects completed",
    },
    {
        id: 2,
        value: "10K+",
        name: "Happy customers",
    },
    {
        id: 3,
        value: "15+",
        name: "Years of experience",
    },
    {
        id: 4,
        value: "24/7",
        name: "Customer support",
    },
];

const HeroSection06 = () => {
    return (
        <section className="min-h-[calc(100svh-7.75rem)] px-4">
            <div className="flex flex-col items-center justify-center min-h-[calc(100svh-7.75rem)] max-w-7xl py-16 mx-auto">
                <AnnouncmentLink
                    href="/blog/link"
                    title="Announcing our new feature"
                    action="Read more"
                    className="hidden sm:flex mb-8"
                />
                <div className="flex flex-col items-center justify-center max-w-3xl">
                    <h1 className="text-5xl font-semibold tracking-tight text-balance text-primary sm:text-7xl text-center">
                        Build beautiful things faster and easier.
                    </h1>
                    <p className="mt-8 text-lg font-medium text-center text-pretty text-muted-foreground sm:text-xl/8">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                        cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                    </p>
                </div>
                <div className="flex items-center justify-center gap-x-4 mt-10 ">
                    <Button variant="brand" asChild>
                        <Link href="/get-started">Get started</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="/get-started">
                            Learn more <ArrowRight />
                        </Link>
                    </Button>
                </div>
                <dl className="w-full mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col-reverse gap-1 text-center">
                            <dd className="text-base text-muted-foreground">{stat.name}</dd>
                            <dt className="text-4xl font-semibold tracking-tight text-primary">
                                {stat.value}
                            </dt>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export { HeroSection06 };
