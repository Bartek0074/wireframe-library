import type { ButtonHTMLAttributes, ComponentProps, MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "default" | "primary";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
    label?: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    disabled?: boolean;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
};

type LinkButtonProps = BaseButtonProps &
    Omit<ComponentProps<typeof Link>, "href" | "className" | "children" | "onClick"> & {
        href: string;
        onClick?: MouseEventHandler<HTMLAnchorElement>;
        type?: never;
    };

type NativeButtonProps = BaseButtonProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
        href?: undefined;
        onClick?: MouseEventHandler<HTMLButtonElement>;
    };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
    default: "border-2 border-dashed border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100",
    primary: "border-2 border-dashed border-primary-400 bg-primary-50 text-primary-700 hover:bg-primary-100",
};

const sizeClasses: Record<ButtonSize, string> = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-5 text-lg",
};

const noLabelSizeClasses: Record<ButtonSize, string> = {
    sm: "h-8 w-8 p-0",
    md: "h-10 w-10 p-0",
    lg: "h-12 w-12 p-0",
};

const Button = ({
    label,
    variant = "default",
    size = "md",
    className,
    disabled,
    leadingIcon,
    trailingIcon,
    ...props
}: ButtonProps) => {
    const hasLabel = label !== undefined && label !== null && label !== "";

    const buttonClassName = clsx(
        "inline-flex items-center justify-center rounded-md font-medium uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-50 cursor-pointer transition-colors duration-150 ease-out",
        variantClasses[variant],
        hasLabel ? sizeClasses[size] : noLabelSizeClasses[size],
        disabled && "pointer-events-none opacity-50",
        hasLabel && "gap-2",
        className
    );

    const iconClassName = "flex shrink-0 items-center justify-center";

    const content = (
        <>
            {leadingIcon ? (
                <span aria-hidden="true" className={iconClassName}>
                    {leadingIcon}
                </span>
            ) : null}

            {hasLabel ? <span>{label}</span> : null}

            {trailingIcon ? (
                <span aria-hidden="true" className={iconClassName}>
                    {trailingIcon}
                </span>
            ) : null}
        </>
    );

    if (props.href !== undefined) {
        const { href, onClick, ...linkProps } = props;

        return (
            <Link
                href={href}
                className={buttonClassName}
                aria-disabled={disabled || undefined}
                tabIndex={disabled ? -1 : undefined}
                onClick={(event) => {
                    if (disabled) {
                        event.preventDefault();
                        return;
                    }

                    onClick?.(event);
                }}
                {...linkProps}
            >
                {content}
            </Link>
        );
    }

    const { type = "button", ...buttonProps } = props;

    return (
        <button
            type={type}
            className={buttonClassName}
            disabled={disabled}
            {...buttonProps}
        >
            {content}
        </button>
    );
};

export default Button;
