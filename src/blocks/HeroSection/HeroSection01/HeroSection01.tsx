"use client";

import Link from "next/link";

import { AnnouncmentLink } from "@/components/atoms/AnnouncmentLink/AnnouncmentLink";
import { Button } from "@/components/atoms/Button/Button";

import { ArrowRight } from "lucide-react";

const HeroSection01 = () => {
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
            </div>
        </section>
    );
};

export { HeroSection01 };
