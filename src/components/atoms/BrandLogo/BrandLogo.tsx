import { Sparkle } from "lucide-react";

import clsx from "clsx";

export interface BrandLogoProps {
    className?: string;
    name?: string;
}

function BrandLogo({ className, name = "Brand Logo" }: BrandLogoProps) {
    return (
        <div
            data-slot="brand-logo"
            aria-label="Brand logo placeholder"
            className={clsx(
                "flex flex-row items-center justify-center p-2 gap-3 text-muted-foreground",
                className,
            )}
        >
            <Sparkle strokeWidth={1.75} />
            <span className={"tracking-wider font-medium font-heading"}>
                {name}
            </span>
        </div>
    );
}

export { BrandLogo };
