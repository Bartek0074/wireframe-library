import clsx from "clsx";

export interface MarqueeProps {
    className?: string;
    items: React.ReactNode[];
}

export function Marquee({ className, items }: MarqueeProps) {
    const marqueeItems = Array.from({ length: 4 }).flatMap(() => items);

    return (
        <div className={clsx("relative overflow-hidden", className)}>
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-20 bg-linear-to-r from-background to-transparent z-1" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-20 bg-linear-to-l from-background to-transparent z-1" />
            <div className="flex w-max animate-marquee">
                {marqueeItems.map((item, i) => (
                    <div key={i} className="shrink-0 px-6">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}