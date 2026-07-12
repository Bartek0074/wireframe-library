"use client";

import Link from "next/link";

import { Button } from "@/components/atoms/Button/Button";

import { ArrowRight } from "lucide-react";

const links = [
    {
        id: 1,
        name: "Open roles",
        href: "#",
    },
    {
        id: 2,
        name: "Internship program",
        href: "#",
    },
    {
        id: 3,
        name: "Our values",
        href: "#",
    },
    {
        id: 4,
        name: "Meet our leadership",
        href: "#",
    },
];

const stats = [
    {
        id: 1,
        name: "Offices worldwide",
        value: "12",
    },
    {
        id: 2,
        name: "Full-time colleagues",
        value: "300+",
    },
    {
        id: 3,
        name: "Hours per week",
        value: "40",
    },
    {
        id: 4,
        name: "Paid time off",
        value: "Unlimited",
    },
];

const HeaderSection09 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl py-16 mx-auto">
                <div className="flex flex-col max-w-3xl">
                    <h1 className="text-5xl font-semibold tracking-tight text-balance text-primary sm:text-7xl">
                        Work with us
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 text-base sm:grid-cols-2 md:flex lg:gap-x-10">
                    {links.map((link) => (
                        <Button key={link.id} variant="link" asChild className="w-fit">
                            <Link href={link.href}>
                                {link.name}
                                <ArrowRight />
                            </Link>
                        </Button>
                    ))}
                </div>
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col-reverse gap-1">
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

export { HeaderSection09 };
