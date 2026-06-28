import {
    forwardRef,
    useId,
    type InputHTMLAttributes,
    type ReactNode,
} from "react";
import clsx from "clsx";

export type InputSize = "sm" | "md" | "lg";
export type InputState = "default" | "success" | "warning" | "error";

export type InputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "className"
> & {
    size?: InputSize;
    state?: InputState;
    label?: string;
    message?: string;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    fullWidth?: boolean;
    className?: string;
    classNames?: {
        wrapper?: string;
        input?: string;
        label?: string;
        message?: string;
    };
};

const sizeClasses: Record<InputSize, string> = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-5 text-lg",
};

const iconPaddingLeading: Record<InputSize, string> = {
    sm: "pl-7",
    md: "pl-9",
    lg: "pl-10",
};

const iconPaddingTrailing: Record<InputSize, string> = {
    sm: "pr-7",
    md: "pr-9",
    lg: "pr-10",
};

const iconSizeClasses: Record<InputSize, string> = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
};

const iconInsetLeading: Record<InputSize, string> = {
    sm: "left-2",
    md: "left-2.5",
    lg: "left-3",
};

const iconInsetTrailing: Record<InputSize, string> = {
    sm: "right-2",
    md: "right-2.5",
    lg: "right-3",
};

const stateClasses: Record<InputState, string> = {
    default:
        "border-gray-300 hover:border-gray-400 focus:border-primary-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-100 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-50",
    success:
        "border-success-400 hover:border-success-500 focus:border-success-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-success-100 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-50",
    warning:
        "border-warning-400 hover:border-warning-500 focus:border-warning-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warning-100 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-50",
    error:
        "border-error-400 hover:border-error-500 focus:border-error-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-error-100 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-50",
};

const labelColorClasses: Record<InputState, string> = {
    default: "text-gray-700",
    success: "text-success-700",
    warning: "text-warning-700",
    error: "text-error-700",
};

const messageColorClasses: Record<InputState, string> = {
    default: "text-gray-600",
    success: "text-success-600",
    warning: "text-warning-600",
    error: "text-error-600",
};

const iconColorClasses: Record<InputState, string> = {
    default:
        "text-gray-400 group-hover:text-gray-500 group-focus-within:text-primary-500",
    success:
        "text-success-500 group-hover:text-success-600 group-focus-within:text-success-600",
    warning:
        "text-warning-500 group-hover:text-warning-600 group-focus-within:text-warning-600",
    error:
        "text-error-500 group-hover:text-error-600 group-focus-within:text-error-600",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            size = "md",
            state = "default",
            label,
            message,
            leadingIcon,
            trailingIcon,
            fullWidth = false,
            className,
            classNames,
            id: idProp,
            disabled,
            readOnly,
            ...props
        },
        ref,
    ) => {
        const generatedId = useId();
        const id = idProp ?? generatedId;
        const messageId = `${id}-message`;

        const wrapperClassName = clsx(
            "inline-flex flex-col gap-1",
            fullWidth ? "w-full" : "w-fit",
            disabled && "pointer-events-none opacity-50",
            className,
            classNames?.wrapper,
        );

        const inputWrapperClassName = clsx(
            "group relative inline-flex items-center",
            fullWidth ? "w-full" : "w-fit",
        );

        const inputClassName = clsx(
            "inline-flex items-center rounded-md border-2 border-dashed bg-gray-50 text-gray-700 font-body outline-none transition-colors duration-300 ease-out",
            "placeholder:text-gray-400",
            sizeClasses[size],
            stateClasses[state],
            leadingIcon && iconPaddingLeading[size],
            trailingIcon && iconPaddingTrailing[size],
            fullWidth ? "w-full" : "w-fit",
            readOnly && "cursor-default",
            classNames?.input,
        );

        const labelClassName = clsx(
            "text-sm font-medium",
            labelColorClasses[state],
            classNames?.label,
        );

        const messageClassName = clsx(
            "text-sm",
            messageColorClasses[state],
            classNames?.message,
        );

        const iconBaseClassName = clsx(
            "pointer-events-none absolute top-1/2 -translate-y-1/2 flex shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full transition-colors duration-300 ease-out",
            iconSizeClasses[size],
        );

        return (
            <div className={wrapperClassName}>
                {label ? (
                    <label
                        htmlFor={id}
                        className={labelClassName}
                    >
                        {label}
                    </label>
                ) : null}

                <div className={inputWrapperClassName}>
                    {leadingIcon ? (
                        <span
                            aria-hidden="true"
                            className={clsx(
                                iconBaseClassName,
                                iconInsetLeading[size],
                                iconColorClasses[state],
                            )}
                        >
                            {leadingIcon}
                        </span>
                    ) : null}

                    <input
                        ref={ref}
                        id={id}
                        disabled={disabled}
                        readOnly={readOnly}
                        aria-describedby={message ? messageId : undefined}
                        aria-invalid={state === "error" ? true : undefined}
                        className={inputClassName}
                        {...props}
                    />

                    {trailingIcon ? (
                        <span
                            aria-hidden="true"
                            className={clsx(
                                iconBaseClassName,
                                iconInsetTrailing[size],
                                iconColorClasses[state],
                            )}
                        >
                            {trailingIcon}
                        </span>
                    ) : null}
                </div>

                {message ? (
                    <span id={messageId} className={messageClassName}>
                        {message}
                    </span>
                ) : null}
            </div>
        );
    },
);

Input.displayName = "Input";

export default Input;
