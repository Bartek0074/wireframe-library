"use client";

import Link from "next/link";

import { Button } from "@/components/atoms/Button/Button";

const HeaderSection07 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col items-center max-w-7xl py-16 mx-auto">
                <div className="flex flex-col items-center max-w-3xl text-center">
                    <p className="text-base font-semibold tracking-wide text-balance text-brand uppercase">
                        Pricing
                    </p>
                    <h1 className="mt-3 text-5xl font-semibold tracking-tight text-balance text-primary sm:text-7xl">
                        Pricing that fit your scale
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                        cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-10 ">
                        <Button variant="default" asChild>
                            <Link href="/chat">Chat to sales</Link>
                        </Button>
                        <Button variant="brand" asChild>
                            <Link href="/get-started">Get started</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { HeaderSection07 };
