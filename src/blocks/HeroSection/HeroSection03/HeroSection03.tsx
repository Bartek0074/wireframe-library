"use client";

import { Input } from "@/components/atoms/Input/Input";
import { Button } from "@/components/atoms/Button/Button";
import { PlaceholderImage } from "@/components/atoms/PlaceholderImage/PlaceholderImage";


const HeroSection03 = () => {
    return (
        <section className="lg:min-h-[calc(100svh-7.75rem)] px-4">
            <div className="relative grid max-w-container grid-cols-1 gap-16 lg:items-center lg:min-h-[calc(100svh-7.75rem)] max-w-7xl py-16 mx-auto">
                <div className="z-10 flex max-w-200 flex-col items-start">
                    <div className="flex flex-col items-start justify-center">
                        <p className="text-base font-semibold tracking-wide text-balance text-brand uppercase mb-8">
                            Stay in the loop
                        </p>
                        <h1 className="text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
                            Build beautiful things faster and easier.
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                        </p>
                    </div>
                    <div className="mt-10 flex flex-col xs:flex-row gap-4 w-full xs:w-fit">
                        <Input placeholder="Enter your email" className="sm:w-fit" />
                        <Button variant="brand">Subscribe</Button>
                    </div>
                </div>
                <div className="flex items-center relative lg:absolute lg:top-0 lg:right-8 lg:h-full lg:w-140">
                    <PlaceholderImage
                        className="inset-0 h-60 w-full rounded-tr-[4rem] rounded-bl-[4rem] object-cover md:h-110 md:rounded-tr-[8rem] md:rounded-bl-[8rem] lg:h-[80%]"
                        iconSize="large"
                    />
                </div>
            </div>
        </section>
    );
};

export { HeroSection03 };
