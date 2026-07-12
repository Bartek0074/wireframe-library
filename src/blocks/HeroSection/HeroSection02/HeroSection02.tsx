"use client";

import Link from "next/link";

import { AnnouncmentLink } from "@/components/atoms/AnnouncmentLink/AnnouncmentLink";
import { Button } from "@/components/atoms/Button/Button";
import { PlaceholderImage } from "@/components/atoms/PlaceholderImage/PlaceholderImage";

import { ArrowRight } from "lucide-react";

const HeroSection02 = () => {
    return (
        <section className="lg:min-h-[calc(100svh-4.5rem)] px-4">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8 lg:min-h-[calc(100svh-4.5rem)] max-w-7xl py-16 mx-auto">
                <div className="flex flex-col items-start mx-auto">
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
                        <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
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
                <div className="relative lg:h-full lg:min-h-160">
                    <PlaceholderImage
                        className="inset-0 h-70 w-full object-cover md:h-110 lg:absolute lg:h-full"
                        iconSize="large"
                    />
                </div>
            </div>
        </section>
    );
};

export { HeroSection02 };
