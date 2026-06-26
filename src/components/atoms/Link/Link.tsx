import type { ComponentProps, MouseEventHandler, ReactNode } from "react";
import NextLink from "next/link";
import clsx from "clsx";

type LinkSize = "sm" | "md" | "lg";

export type LinkProps = Omit<
    ComponentProps<typeof NextLink>,
    "href" | "className" | "children" | "target" | "rel" | "onClick"
> & {
    label: ReactNode;
    href: string;
    size?: LinkSize;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    className?: string;
    target?: HTMLAnchorElement["target"];
    rel?: HTMLAnchorElement["rel"];
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const sizeClasses: Record<LinkSize, string> = {
    sm: "text-xs sm:text-sm",
    md: "text-sm sm:text-base",
    lg: "text-base sm:text-lg",
};

const iconSizeClasses: Record<LinkSize, string> = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
};

const Link = ({
    label,
    href,
    size = "md",
    leadingIcon,
    trailingIcon,
    className,
    target,
    rel,
    onClick,
    ...props
}: LinkProps) => {
    const linkClassName = clsx(
        "inline-flex items-center gap-2 rounded-sm font-body font-medium text-primary-600 cursor-pointer transition-colors duration-150 ease-out hover:text-primary-700 active:text-primary-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-50",
        sizeClasses[size],
        className,
    );

    const iconClassName = clsx(
        "flex shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full",
        iconSizeClasses[size],
    );

    return (
        <NextLink
            href={href}
            className={linkClassName}
            target={target}
            rel={rel}
            onClick={onClick}
            {...props}
        >
            {leadingIcon ? (
                <span aria-hidden="true" className={iconClassName}>
                    {leadingIcon}
                </span>
            ) : null}

            <span>{label}</span>

            {trailingIcon ? (
                <span aria-hidden="true" className={iconClassName}>
                    {trailingIcon}
                </span>
            ) : null}
        </NextLink>
    );
};

export default Link;