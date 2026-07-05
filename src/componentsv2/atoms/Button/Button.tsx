import type {
    ButtonHTMLAttributes,
    ComponentProps,
    MouseEventHandler,
    ReactNode,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { cx } from "@/lib/utils";

export type ButtonIntent = "default" | "primary" | "accent" | "danger";
export type ButtonVariant = "solid" | "dashed" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type IconPosition = "left" | "right";

const buttonVariants = cva(
    "relative inline-flex items-center justify-center rounded-md font-medium uppercase focus-visible:outline-none transition-colors duration-300 ease-out",
    {
        variants: {
            intent: {
                default: "",
                primary: "",
                accent: "",
                danger: "",
            },
            variant: {
                solid: "",
                dashed: "",
                outline: "",
                ghost: "",
            },
            size: {
                sm: "h-8 px-3 text-button-12",
                md: "h-10 px-4 text-button-14",
                lg: "h-12 px-5 text-button-16",
            },
            iconOnly: {
                true: "",
                false: "",
            },
        },
        compoundVariants: [
            {
                intent: "default",
                variant: "solid",
                className:
                    "border-2 border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-50 hover:text-gray-800 active:border-gray-400 active:bg-gray-200 active:text-gray-900 focus-visible:border-gray-400 focus-visible:bg-gray-200 focus-visible:ring-1 focus-visible:ring-gray-300",
            },
            {
                intent: "default",
                variant: "dashed",
                className:
                    "border-2 border-dashed border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-800 active:border-gray-400 active:bg-gray-200 active:text-gray-900 focus-visible:border-gray-400 focus-visible:bg-gray-200 focus-visible:ring-1 focus-visible:ring-gray-300",
            },
            {
                intent: "default",
                variant: "outline",
                className:
                    "border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 hover:text-gray-800 active:border-gray-400 active:bg-gray-100 active:text-gray-900 focus-visible:border-gray-400 focus-visible:bg-gray-100 focus-visible:ring-1 focus-visible:ring-gray-300",
            },
            {
                intent: "default",
                variant: "ghost",
                className:
                    "border-2 border-transparent bg-transparent text-gray-700 hover:bg-gray-50 hover:text-gray-800 active:bg-gray-100 active:text-gray-900 focus-visible:bg-gray-100 focus-visible:ring-1 focus-visible:ring-gray-300",
            },
            {
                intent: "primary",
                variant: "solid",
                className:
                    "border-2 border-primary-600 bg-primary-600 text-gray-50 hover:border-primary-500 hover:bg-primary-500 active:border-primary-700 active:bg-primary-700 focus-visible:border-primary-700 focus-visible:bg-primary-700 focus-visible:ring-1 focus-visible:ring-primary-300",
            },
            {
                intent: "primary",
                variant: "dashed",
                className:
                    "border-2 border-dashed border-primary-400 bg-primary-50 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:border-primary-600 active:bg-primary-200 active:text-primary-900 focus-visible:border-primary-600 focus-visible:bg-primary-200 focus-visible:ring-1 focus-visible:ring-primary-300",
            },
            {
                intent: "primary",
                variant: "outline",
                className:
                    "border-2 border-primary-500 bg-transparent text-primary-700 hover:bg-primary-50 hover:text-primary-800 active:border-primary-600 active:bg-primary-100 active:text-primary-900 focus-visible:border-primary-600 focus-visible:bg-primary-100 focus-visible:ring-1 focus-visible:ring-primary-300",
            },
            {
                intent: "primary",
                variant: "ghost",
                className:
                    "border-2 border-transparent bg-transparent text-primary-700 hover:bg-primary-50 hover:text-primary-800 active:bg-primary-100 active:text-primary-900 focus-visible:bg-primary-100 focus-visible:ring-1 focus-visible:ring-primary-300",
            },
            {
                intent: "accent",
                variant: "solid",
                className:
                    "border-2 border-accent-600 bg-accent-600 text-gray-50 hover:border-accent-500 hover:bg-accent-500 active:border-accent-700 active:bg-accent-700 focus-visible:border-accent-700 focus-visible:bg-accent-700 focus-visible:ring-1 focus-visible:ring-accent-300",
            },
            {
                intent: "accent",
                variant: "dashed",
                className:
                    "border-2 border-dashed border-accent-400 bg-accent-50 text-accent-700 hover:bg-accent-100 hover:text-accent-800 active:border-accent-600 active:bg-accent-200 active:text-accent-900 focus-visible:border-accent-600 focus-visible:bg-accent-200 focus-visible:ring-1 focus-visible:ring-accent-300",
            },
            {
                intent: "accent",
                variant: "outline",
                className:
                    "border-2 border-accent-500 bg-transparent text-accent-700 hover:bg-accent-50 hover:text-accent-800 active:border-accent-600 active:bg-accent-100 active:text-accent-900 focus-visible:border-accent-600 focus-visible:bg-accent-100 focus-visible:ring-1 focus-visible:ring-accent-300",
            },
            {
                intent: "accent",
                variant: "ghost",
                className:
                    "border-2 border-transparent bg-transparent text-accent-700 hover:bg-accent-50 hover:text-accent-800 active:bg-accent-100 active:text-accent-900 focus-visible:bg-accent-100 focus-visible:ring-1 focus-visible:ring-accent-300",
            },
            {
                intent: "danger",
                variant: "solid",
                className:
                    "border-2 border-error-600 bg-error-600 text-gray-50 hover:border-error-500 hover:bg-error-500 active:border-error-700 active:bg-error-700 focus-visible:border-error-700 focus-visible:bg-error-700 focus-visible:ring-1 focus-visible:ring-error-300",
            },
            {
                intent: "danger",
                variant: "dashed",
                className:
                    "border-2 border-dashed border-error-400 bg-error-50 text-error-700 hover:bg-error-100 hover:text-error-800 active:border-error-600 active:bg-error-200 active:text-error-900 focus-visible:border-error-600 focus-visible:bg-error-200 focus-visible:ring-1 focus-visible:ring-error-300",
            },
            {
                intent: "danger",
                variant: "outline",
                className:
                    "border-2 border-error-500 bg-transparent text-error-700 hover:bg-error-50 hover:text-error-800 active:border-error-600 active:bg-error-100 active:text-error-900 focus-visible:border-error-600 focus-visible:bg-error-100 focus-visible:ring-1 focus-visible:ring-error-300",
            },
            {
                intent: "danger",
                variant: "ghost",
                className:
                    "border-2 border-transparent bg-transparent text-error-700 hover:bg-error-50 hover:text-error-800 active:bg-error-100 active:text-error-900 focus-visible:bg-error-100 focus-visible:ring-1 focus-visible:ring-error-300",
            },
            {
                size: "sm",
                iconOnly: true,
                className: "h-8 w-8 p-0",
            },
            {
                size: "md",
                iconOnly: true,
                className: "h-10 w-10 p-0",
            },
            {
                size: "lg",
                iconOnly: true,
                className: "h-12 w-12 p-0",
            },
        ],
        defaultVariants: {
            intent: "default",
            variant: "solid",
            size: "md",
            iconOnly: false,
        },
    },
);

const iconSizeClasses: Record<ButtonSize, string> = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
};

type ButtonAccessibilityProps =
    | {
        label: Exclude<ReactNode, null | undefined>;
        "aria-label"?: string;
    }
    | {
        label?: undefined | null;
        "aria-label": string;
    };

type BaseButtonProps = ButtonAccessibilityProps & {
    intent?: ButtonIntent;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    loading?: boolean;
    className?: string;
    disabled?: boolean;
    asChild?: boolean;
};

type LinkButtonProps = BaseButtonProps &
    Omit<
        ComponentProps<typeof Link>,
        "href" | "className" | "children" | "onClick" | "style"
    > & {
        href: string;
        onClick?: MouseEventHandler<HTMLAnchorElement>;
        type?: never;
    };

type NativeButtonProps = BaseButtonProps &
    Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "className" | "children" | "style"
    > & {
        href?: undefined;
        onClick?: MouseEventHandler<HTMLButtonElement>;
    };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const iconContainerClassName =
    "flex shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full";

const spinnerClassName =
    "inline-block animate-spin rounded-full border-2 border-current border-t-transparent";

const Button = ({
    label,
    icon,
    iconPosition = "left",
    intent = "default",
    variant = "solid",
    size = "md",
    loading = false,
    className,
    disabled,
    asChild = false,
    ...props
}: ButtonProps) => {
    const hasLabel = label !== undefined && label !== null && label !== "";
    const iconOnly = !hasLabel;
    const isDisabled = disabled || loading;
    const ariaLabel = props["aria-label"];

    if (process.env.NODE_ENV !== "production" && iconOnly && !ariaLabel) {
        console.warn("Icon-only Button requires aria-label for accessibility.");
    }

    const buttonClassName = cx(
        buttonVariants({
            intent,
            variant,
            size,
            iconOnly,
        }),
        isDisabled
            ? "pointer-events-none cursor-not-allowed opacity-50"
            : "cursor-pointer",
        className,
    );

    const content = (
        <span
            className={cx(
                "inline-flex items-center justify-center",
                hasLabel && icon && "gap-2",
                loading && "opacity-0",
            )}
        >
            {hasLabel && iconPosition === "left" && icon ? (
                <span
                    aria-hidden="true"
                    className={cx(iconContainerClassName, iconSizeClasses[size])}
                >
                    {icon}
                </span>
            ) : null}

            {hasLabel ? <span>{label}</span> : null}

            {hasLabel && iconPosition === "right" && icon ? (
                <span
                    aria-hidden="true"
                    className={cx(iconContainerClassName, iconSizeClasses[size])}
                >
                    {icon}
                </span>
            ) : null}

            {!hasLabel && icon ? (
                <span
                    aria-hidden="true"
                    className={cx(iconContainerClassName, iconSizeClasses[size])}
                >
                    {icon}
                </span>
            ) : null}
        </span>
    );

    const loadingOverlay = loading ? (
        <span
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
        >
            <span className={cx(spinnerClassName, iconSizeClasses[size])} />
        </span>
    ) : null;

    if (props.href !== undefined) {
        const { href, onClick, ...linkProps } = props;

        return (
            <Link
                href={href}
                className={buttonClassName}
                aria-disabled={isDisabled || undefined}
                aria-busy={loading || undefined}
                tabIndex={isDisabled ? -1 : undefined}
                onClick={(event) => {
                    if (isDisabled) {
                        event.preventDefault();
                        return;
                    }

                    onClick?.(event);
                }}
                {...linkProps}
            >
                {content}
                {loadingOverlay}
            </Link>
        );
    }

    const { type = "button", ...buttonProps } = props;
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            type={type}
            className={buttonClassName}
            disabled={!asChild ? isDisabled : undefined}
            aria-disabled={asChild ? isDisabled || undefined : undefined}
            aria-busy={loading || undefined}
            {...buttonProps}
        >
            {content}
            {loadingOverlay}
        </Comp>
    );
};

export default Button;
