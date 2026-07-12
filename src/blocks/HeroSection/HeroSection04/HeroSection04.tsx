"use client";

import Link from "next/link";

import { AnnouncmentLink } from "@/components/atoms/AnnouncmentLink/AnnouncmentLink";
import { Button } from "@/components/atoms/Button/Button";
import { PlaceholderImage } from "@/components/atoms/PlaceholderImage/PlaceholderImage";

import { ArrowRight } from "lucide-react";

const HeroSection04 = () => {
    return (
        <section className="lg:min-h-[calc(100svh-4.5rem)]">
            <div className="grid items-center grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 md:min-h-[calc(100svh-4.5rem)] max-w-7xl mx-auto">
                <div className="flex flex-col items-start md:col-span-8 lg:col-span-6 mx-auto py-16 px-4 pb-0 md:pb-16 z-10">
                    <AnnouncmentLink
                        href="/blog/link"
                        title="Announcing our new feature"
                        action="Read more"
                        className="hidden sm:flex mb-8"
                    />
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
                            Build beautiful things faster and easier.
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8 sm:max-w-[32ch] md:max-w-none">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
                        </p>
                    </div>
                    <div className="flex gap-x-4 mt-10 ">
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
                <div className="flex flex-row justify-end md:justify-start md:col-span-4 lg:col-span-6 gap-6 sm:-mt-42 md:mt-0 pb-16 md:pb-0 md:py-4 pr-4 md:pr-0 md:pl-4 md:overflow-hidden">
                    <div className="flex flex-col mt-32.5 sm:mt-65 lg:mt-32.5 w-40 min-w-40 gap-6 lg:order-3">
                        <PlaceholderImage className="w-full h-auto aspect-2/3 rounded-4xl" />
                    </div>
                    <div className="flex flex-col mt-0 sm:mt-32.5 lg:mt-32.5 w-40 min-w-40 gap-6 lg:order-1">
                        <PlaceholderImage className="w-full h-auto aspect-2/3 rounded-4xl" />
                        <PlaceholderImage className="w-full h-auto aspect-2/3 rounded-4xl" />
                    </div>
                    <div className="flex flex-col mt-32.5 sm:mt-0 lg:mt-0 w-40 min-w-40 gap-6 lg:order-2">
                        <PlaceholderImage className="w-full h-auto aspect-2/3 rounded-4xl" />
                        <PlaceholderImage className="w-full h-auto aspect-2/3 rounded-4xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { HeroSection04 };
