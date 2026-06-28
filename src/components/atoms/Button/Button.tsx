import type {
    ButtonHTMLAttributes,
    ComponentProps,
    CSSProperties,
    MouseEventHandler,
    ReactNode,
} from "react";
import Link from "next/link";
import clsx from "clsx";

export type ButtonIntent = "default" | "primary" | "accent" | "danger";
export type ButtonStyle = "solid" | "dashed" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
    label?: ReactNode;
    intent?: ButtonIntent;
    style?: ButtonStyle;
    size?: ButtonSize;
    loading?: boolean;
    className?: string;
    disabled?: boolean;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    htmlStyle?: CSSProperties;
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
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "style"> & {
        href?: undefined;
        onClick?: MouseEventHandler<HTMLButtonElement>;
    };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const styleClasses: Record<ButtonIntent, Record<ButtonStyle, string>> = {
    default: {
        solid:
            "border-2 border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-200",
        dashed:
            "border-2 border-dashed border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-200",
        outline:
            "border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-200",
        ghost:
            "border-2 border-transparent bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-200",
    },
    primary: {
        solid:
            "border-2 border-primary-600 bg-primary-600 text-gray-50 hover:bg-primary-700 focus-visible:ring-primary-100",
        dashed:
            "border-2 border-dashed border-primary-400 bg-primary-50 text-primary-700 hover:bg-primary-100 focus-visible:ring-primary-100",
        outline:
            "border-2 border-primary-500 bg-transparent text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-100",
        ghost:
            "border-2 border-transparent bg-transparent text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-100",
    },
    accent: {
        solid:
            "border-2 border-accent-600 bg-accent-600 text-gray-50 hover:bg-accent-700 focus-visible:ring-accent-100",
        dashed:
            "border-2 border-dashed border-accent-400 bg-accent-50 text-accent-700 hover:bg-accent-100 focus-visible:ring-accent-100",
        outline:
            "border-2 border-accent-500 bg-transparent text-accent-700 hover:bg-accent-50 focus-visible:ring-accent-100",
        ghost:
            "border-2 border-transparent bg-transparent text-accent-700 hover:bg-accent-50 focus-visible:ring-accent-100",
    },
    danger: {
        solid:
            "border-2 border-error-600 bg-error-600 text-gray-50 hover:bg-error-700 focus-visible:ring-error-100",
        dashed:
            "border-2 border-dashed border-error-400 bg-error-50 text-error-700 hover:bg-error-100 focus-visible:ring-error-100",
        outline:
            "border-2 border-error-500 bg-transparent text-error-700 hover:bg-error-50 focus-visible:ring-error-100",
        ghost:
            "border-2 border-transparent bg-transparent text-error-700 hover:bg-error-50 focus-visible:ring-error-100",
    },
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

const iconSizeClasses: Record<ButtonSize, string> = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
};

const Button = ({
    label,
    intent = "default",
    style: buttonStyle = "solid",
    size = "md",
    loading = false,
    className,
    disabled,
    leadingIcon,
    trailingIcon,
    htmlStyle,
    ...props
}: ButtonProps) => {
    const hasLabel = label !== undefined && label !== null && label !== "";
    const isDisabled = disabled || loading;

    const buttonClassName = clsx(
        "relative inline-flex items-center justify-center rounded-md font-medium uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-50 transition-colors duration-300 ease-out",
        styleClasses[intent][buttonStyle],
        hasLabel ? sizeClasses[size] : noLabelSizeClasses[size],
        isDisabled ? "pointer-events-none opacity-50 cursor-not-allowed" : "cursor-pointer",
        className,
    );

    const iconClassName = clsx(
        "flex shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full",
        iconSizeClasses[size],
    );

    const spinnerClassName = clsx(
        "inline-block animate-spin rounded-full border-2 border-current border-t-transparent",
        iconSizeClasses[size],
    );

    const content = (
        <span
            className={clsx(
                "inline-flex items-center justify-center",
                hasLabel && "gap-2",
                loading && "opacity-0",
            )}
        >
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
        </span>
    );

    const loadingOverlay = loading ? (
        <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className={spinnerClassName} />
        </span>
    ) : null;

    if (props.href !== undefined) {
        const { href, onClick, ...linkProps } = props;

        return (
            <Link
                href={href}
                className={buttonClassName}
                style={htmlStyle}
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

    return (
        <button
            type={type}
            className={buttonClassName}
            style={htmlStyle}
            disabled={isDisabled}
            aria-busy={loading || undefined}
            {...buttonProps}
        >
            {content}
            {loadingOverlay}
        </button>
    );
};

export default Button;
