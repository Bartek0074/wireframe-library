import clsx from "clsx";

export interface MarqueeProps {
    className?: string;
    items: React.ReactNode[];
}

export function Marquee({ className, items }: MarqueeProps) {
    const marqueeItems = Array.from({ length: 4 }).flatMap(() => items);

    return (
        <div className={clsx("overflow-hidden", className)}>
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