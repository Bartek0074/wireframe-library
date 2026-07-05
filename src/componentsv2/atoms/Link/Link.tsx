import type { ComponentProps, MouseEventHandler, ReactNode } from "react";
import { cva } from "class-variance-authority";
import NextLink from "next/link";
import { cx } from "@/lib/utils";

export type LinkSize = "sm" | "md" | "lg";
export type IconPosition = "left" | "right";

const linkVariants = cva(
    "inline-flex items-center gap-2 rounded-sm font-body font-medium text-primary-600 transition-colors duration-300 ease-out hover:text-primary-500 active:text-primary-800 focus-visible:text-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-300",
    {
        variants: {
            size: {
                sm: "text-p-12 sm:text-p-14",
                md: "text-p-14 sm:text-p-16",
                lg: "text-p-16 sm:text-p-18",
            },
        },
        defaultVariants: {
            size: "md",
        },
    },
);

const iconSizeClasses: Record<LinkSize, string> = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
};

export type LinkProps = Omit<
    ComponentProps<typeof NextLink>,
    "href" | "className" | "children" | "target" | "rel" | "onClick"
> & {
    label: ReactNode;
    href: string;
    size?: LinkSize;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    className?: string;
    target?: HTMLAnchorElement["target"];
    rel?: HTMLAnchorElement["rel"];
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const Link = ({
    label,
    href,
    size = "md",
    icon,
    iconPosition = "left",
    className,
    target,
    rel,
    onClick,
    ...props
}: LinkProps) => {
    const linkClassName = cx(linkVariants({ size }), className);

    const iconClassName = cx(
        "flex shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full",
        iconSizeClasses[size],
    );

    const safeRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;

    return (
        <NextLink
            href={href}
            className={linkClassName}
            target={target}
            rel={safeRel}
            onClick={onClick}
            {...props}
        >
            {icon && iconPosition === "left" ? (
                <span aria-hidden="true" className={iconClassName}>
                    {icon}
                </span>
            ) : null}

            <span>{label}</span>

            {icon && iconPosition === "right" ? (
                <span aria-hidden="true" className={iconClassName}>
                    {icon}
                </span>
            ) : null}
        </NextLink>
    );
};

export default Link;
