import {
    forwardRef,
    useContext,
    useId,
    type InputHTMLAttributes,
    type ReactNode,
} from "react";
import clsx from "clsx";
import { RadioGroupContext, type RadioValue } from "./RadioGroup";

export type RadioState = "default" | "success" | "warning" | "error";

export type RadioProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "className" | "type" | "checked" | "value"
> & {
    value?: RadioValue;
    state?: RadioState;
    label?: ReactNode;
    description?: ReactNode;
    className?: string;
    classNames?: {
        wrapper?: string;
        radio?: string;
        dot?: string;
        label?: string;
        description?: string;
    };
};

const radioStateClasses: Record<RadioState, string> = {
    default:
        "border-gray-300 group-hover:border-gray-400 peer-focus-visible:border-primary-500 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-100 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-gray-50 peer-checked:border-primary-500",
    success:
        "border-success-400 group-hover:border-success-500 peer-focus-visible:border-success-600 peer-focus-visible:ring-1 peer-focus-visible:ring-success-100 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-gray-50 peer-checked:border-success-500",
    warning:
        "border-warning-400 group-hover:border-warning-500 peer-focus-visible:border-warning-600 peer-focus-visible:ring-1 peer-focus-visible:ring-warning-100 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-gray-50 peer-checked:border-warning-500",
    error:
        "border-error-400 group-hover:border-error-500 peer-focus-visible:border-error-600 peer-focus-visible:ring-1 peer-focus-visible:ring-error-100 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-gray-50 peer-checked:border-error-500",
};

const dotColorClasses: Record<RadioState, string> = {
    default: "bg-primary-500",
    success: "bg-success-500",
    warning: "bg-warning-500",
    error: "bg-error-500",
};

const labelColorClasses: Record<RadioState, string> = {
    default: "text-gray-700",
    success: "text-success-700",
    warning: "text-warning-700",
    error: "text-error-700",
};

const descriptionColorClasses: Record<RadioState, string> = {
    default: "text-gray-600",
    success: "text-success-600",
    warning: "text-warning-600",
    error: "text-error-600",
};

const blockOutlineStateClasses: Record<RadioState, string> = {
    default:
        "border-gray-300 bg-gray-50 text-gray-700 group-hover:bg-gray-100 group-hover:text-gray-800 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-100 peer-focus-visible:ring-inset peer-checked:border-primary-400 peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:group-hover:bg-primary-100 peer-checked:group-hover:text-primary-800",
    success:
        "border-success-400 bg-gray-50 text-success-700 group-hover:bg-success-50 group-hover:text-success-800 peer-focus-visible:ring-1 peer-focus-visible:ring-success-100 peer-focus-visible:ring-inset peer-checked:border-success-500 peer-checked:bg-success-50 peer-checked:text-success-700 peer-checked:group-hover:bg-success-100 peer-checked:group-hover:text-success-800",
    warning:
        "border-warning-400 bg-gray-50 text-warning-700 group-hover:bg-warning-50 group-hover:text-warning-800 peer-focus-visible:ring-1 peer-focus-visible:ring-warning-100 peer-focus-visible:ring-inset peer-checked:border-warning-500 peer-checked:bg-warning-50 peer-checked:text-warning-700 peer-checked:group-hover:bg-warning-100 peer-checked:group-hover:text-warning-800",
    error:
        "border-error-400 bg-gray-50 text-error-700 group-hover:bg-error-50 group-hover:text-error-800 peer-focus-visible:ring-1 peer-focus-visible:ring-error-100 peer-focus-visible:ring-inset peer-checked:border-error-500 peer-checked:bg-error-50 peer-checked:text-error-700 peer-checked:group-hover:bg-error-100 peer-checked:group-hover:text-error-800",
};

const blockSolidStateClasses: Record<RadioState, string> = {
    default:
        "border-gray-300 bg-gray-50 text-gray-700 group-hover:bg-gray-100 group-hover:text-gray-800 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-100 peer-focus-visible:ring-inset peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-gray-50 peer-checked:group-hover:bg-primary-700 peer-checked:group-hover:text-gray-50",
    success:
        "border-success-400 bg-gray-50 text-success-700 group-hover:bg-success-50 group-hover:text-success-800 peer-focus-visible:ring-1 peer-focus-visible:ring-success-100 peer-focus-visible:ring-inset peer-checked:border-success-600 peer-checked:bg-success-600 peer-checked:text-gray-50 peer-checked:group-hover:bg-success-700 peer-checked:group-hover:text-gray-50",
    warning:
        "border-warning-400 bg-gray-50 text-warning-700 group-hover:bg-warning-50 group-hover:text-warning-800 peer-focus-visible:ring-1 peer-focus-visible:ring-warning-100 peer-focus-visible:ring-inset peer-checked:border-warning-600 peer-checked:bg-warning-600 peer-checked:text-gray-50 peer-checked:group-hover:bg-warning-700 peer-checked:group-hover:text-gray-50",
    error:
        "border-error-400 bg-gray-50 text-error-700 group-hover:bg-error-50 group-hover:text-error-800 peer-focus-visible:ring-1 peer-focus-visible:ring-error-100 peer-focus-visible:ring-inset peer-checked:border-error-600 peer-checked:bg-error-600 peer-checked:text-gray-50 peer-checked:group-hover:bg-error-700 peer-checked:group-hover:text-gray-50",
};

const blockSizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-5 text-lg",
} as const;

const Radio = forwardRef<HTMLInputElement, RadioProps>(
    (
        {
            state = "default",
            label,
            description,
            className,
            classNames,
            id: idProp,
            name: nameProp,
            value,
            defaultChecked,
            disabled,
            readOnly,
            required,
            onChange,
            onClick,
            "aria-describedby": ariaDescribedBy,
            ...props
        },
        ref,
    ) => {
        const generatedId = useId();
        const id = idProp ?? generatedId;
        const descriptionId = description ? `${id}-description` : undefined;
        const groupContext = useContext(RadioGroupContext);
        const radioValue = value ?? id;
        const isInGroup = groupContext !== null;
        const isBlockMode = groupContext?.mode === "block";
        const isCheckedFromGroup = isInGroup ? groupContext.value === radioValue : undefined;

        const resolvedDisabled = Boolean(disabled || groupContext?.disabled);
        const resolvedName = groupContext?.name ?? nameProp;

        const describedBy = [ariaDescribedBy, descriptionId]
            .filter(Boolean)
            .join(" ") || undefined;

        const wrapperClassName = clsx(
            "inline-flex",
            isBlockMode && "first:ml-0 -ml-0.5",
            isBlockMode && "first:[&_[data-radio-block='true']]:rounded-l-md",
            isBlockMode && "last:[&_[data-radio-block='true']]:rounded-r-md",
            resolvedDisabled && "pointer-events-none opacity-50",
            className,
            classNames?.wrapper,
        );

        const controlLabelClassName = clsx(
            "group relative inline-flex",
            isBlockMode ? "gap-0" : "gap-2",
            isBlockMode ? "w-fit items-center" : "w-fit items-start",
            readOnly ? "cursor-default" : "cursor-pointer",
        );

        const radioClassName = clsx(
            "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 bg-gray-50 transition-colors duration-300 ease-out",
            radioStateClasses[state],
            "peer-checked:[&_[data-radio-dot='true']]:scale-100",
            "peer-checked:[&_[data-radio-dot='true']]:opacity-100",
            classNames?.radio,
        );

        const dotClassName = clsx(
            "h-2.5 w-2.5 scale-75 rounded-full opacity-0 transition-all duration-300 ease-out",
            dotColorClasses[state],
            classNames?.dot,
        );

        const textContainerClassName = "inline-flex min-w-0 w-fit flex-col";

        const labelClassName = clsx(
            "text-sm font-medium",
            labelColorClasses[state],
            classNames?.label,
        );

        const descriptionClassName = clsx(
            "text-sm",
            descriptionColorClasses[state],
            classNames?.description,
        );

        const blockClassName = clsx(
            "relative inline-flex items-center justify-center rounded-none border-2 font-medium uppercase transition-colors duration-300 ease-out",
            "z-0 peer-checked:z-10",
            blockSizeClasses[groupContext?.size ?? "md"],
            groupContext?.buttonStyle === "solid"
                ? blockSolidStateClasses[state]
                : blockOutlineStateClasses[state],
            classNames?.radio,
        );

        return (
            <div className={wrapperClassName}>
                <label htmlFor={id} className={controlLabelClassName}>
                    <input
                        ref={ref}
                        id={id}
                        type="radio"
                        name={resolvedName}
                        value={String(radioValue)}
                        checked={isInGroup ? isCheckedFromGroup : undefined}
                        defaultChecked={isInGroup ? undefined : defaultChecked}
                        disabled={resolvedDisabled}
                        readOnly={readOnly}
                        required={required}
                        aria-describedby={describedBy}
                        className="peer sr-only"
                        onClick={(event) => {
                            if (readOnly) {
                                event.preventDefault();
                                return;
                            }

                            onClick?.(event);
                        }}
                        onKeyDown={(event) => {
                            if (readOnly && (event.key === " " || event.key === "Enter")) {
                                event.preventDefault();
                            }
                        }}
                        onChange={(event) => {
                            if (readOnly) {
                                return;
                            }

                            if (event.target.checked && groupContext) {
                                groupContext.setValue(radioValue);
                            }

                            onChange?.(event);
                        }}
                        {...props}
                    />

                    {isBlockMode ? (
                        <span aria-hidden="true" data-radio-block="true" className={blockClassName}>
                            {label ?? String(radioValue)}
                        </span>
                    ) : (
                        <>
                            <span aria-hidden="true" className={radioClassName}>
                                <span data-radio-dot="true" className={dotClassName} />
                            </span>

                            {(label || description) ? (
                                <span className={textContainerClassName}>
                                    {label ? (
                                        <span className={labelClassName}>
                                            {label}
                                            {required ? (
                                                <span className="ml-1 text-error-500" aria-hidden="true">
                                                    *
                                                </span>
                                            ) : null}
                                        </span>
                                    ) : null}
                                    {description ? (
                                        <span id={descriptionId} className={descriptionClassName}>
                                            {description}
                                        </span>
                                    ) : null}
                                </span>
                            ) : null}
                        </>
                    )}
                </label>
            </div>
        );
    },
);

Radio.displayName = "Radio";

export default Radio;