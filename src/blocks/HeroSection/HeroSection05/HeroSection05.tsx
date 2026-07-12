"use client";

import Link from "next/link";

import { AnnouncmentLink } from "@/components/atoms/AnnouncmentLink/AnnouncmentLink";
import { Button } from "@/components/atoms/Button/Button";
import { Marquee } from "@/components/atoms/Marquee/Marquee";
import { BrandLogo } from "@/components/atoms/BrandLogo/BrandLogo";

import { ArrowRight } from "lucide-react";

const brands = [
    <BrandLogo name="Brand 1" />,
    <BrandLogo name="Brand 2" />,
    <BrandLogo name="Brand 3" />,
    <BrandLogo name="Brand 4" />,
    <BrandLogo name="Brand 5" />,
]

const HeroSection05 = () => {
    return (
        <section className="min-h-[calc(100svh-4.5rem)] px-4">
            <div className="flex flex-col items-center justify-center min-h-[calc(100svh-4.5rem)] max-w-7xl py-16 mx-auto">
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
                <div className="mt-16 w-full">
                    <Marquee items={brands} />
                </div>
            </div>
        </section>
    );
};

export { HeroSection05 };
