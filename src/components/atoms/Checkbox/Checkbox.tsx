import {
    forwardRef,
    useCallback,
    useEffect,
    useId,
    useRef,
    type InputHTMLAttributes,
    type ReactNode,
} from "react";
import clsx from "clsx";

export type CheckboxState = "default" | "success" | "warning" | "error";

export type CheckboxProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "className" | "type"
> & {
    state?: CheckboxState;
    label?: ReactNode;
    description?: ReactNode;
    indeterminate?: boolean;
    className?: string;
    classNames?: {
        wrapper?: string;
        checkbox?: string;
        label?: string;
        description?: string;
    };
};

const checkboxBoxClassName = "h-5 w-5";
const checkboxIconClassName = "h-3 w-3";
const checkPath = "M3.5 8.25L6.5 11.25L12.5 5.25";
const indeterminatePath = "M3.5 8H12.5";

const boxStateClasses: Record<CheckboxState, string> = {
    default:
        "border-gray-300 group-hover:border-primary-300 peer-focus-visible:border-primary-600 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-300 peer-checked:border-primary-500 peer-checked:bg-primary-500 peer-checked:text-gray-50",
    success:
        "border-success-400 group-hover:border-success-500 peer-focus-visible:border-success-600 peer-focus-visible:ring-1 peer-focus-visible:ring-success-300 peer-checked:border-success-500 peer-checked:bg-success-500 peer-checked:text-gray-50",
    warning:
        "border-warning-400 group-hover:border-warning-500 peer-focus-visible:border-warning-600 peer-focus-visible:ring-1 peer-focus-visible:ring-warning-300 peer-checked:border-warning-500 peer-checked:bg-warning-500 peer-checked:text-gray-50",
    error:
        "border-error-400 group-hover:border-error-500 peer-focus-visible:border-error-600 peer-focus-visible:ring-1 peer-focus-visible:ring-error-300 peer-checked:border-error-500 peer-checked:bg-error-500 peer-checked:text-gray-50",
};

const indeterminateStateClasses: Record<CheckboxState, string> = {
    default: "border-primary-500 bg-primary-500 text-gray-50",
    success: "border-success-500 bg-success-500 text-gray-50",
    warning: "border-warning-500 bg-warning-500 text-gray-50",
    error: "border-error-500 bg-error-500 text-gray-50",
};

const labelColorClasses: Record<CheckboxState, string> = {
    default: "text-gray-700",
    success: "text-success-700",
    warning: "text-warning-700",
    error: "text-error-700",
};

const descriptionColorClasses: Record<CheckboxState, string> = {
    default: "text-gray-600",
    success: "text-success-600",
    warning: "text-warning-600",
    error: "text-error-600",
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            state = "default",
            label,
            description,
            indeterminate = false,
            className,
            classNames,
            id: idProp,
            disabled,
            readOnly,
            required,
            onChange,
            onClick,
            "aria-describedby": ariaDescribedBy,
            "aria-invalid": ariaInvalid,
            ...props
        },
        ref,
    ) => {
        const generatedId = useId();
        const id = idProp ?? generatedId;
        const descriptionId = description ? `${id}-description` : undefined;
        const inputRef = useRef<HTMLInputElement | null>(null);

        const setRefs = useCallback(
            (node: HTMLInputElement | null) => {
                inputRef.current = node;

                if (typeof ref === "function") {
                    ref(node);
                    return;
                }

                if (ref) {
                    ref.current = node;
                }
            },
            [ref],
        );

        useEffect(() => {
            if (inputRef.current) {
                inputRef.current.indeterminate = indeterminate;
            }
        }, [indeterminate]);

        const describedBy = [ariaDescribedBy, descriptionId]
            .filter(Boolean)
            .join(" ") || undefined;

        const wrapperClassName = clsx(
            "inline-flex",
            disabled && "pointer-events-none opacity-50",
            className,
            classNames?.wrapper,
        );

        const controlLabelClassName = clsx(
            "group relative inline-flex gap-2",
            "w-fit items-start",
            readOnly ? "cursor-default" : "cursor-pointer",
        );

        const boxClassName = clsx(
            "mt-0.5 inline-flex shrink-0 items-center justify-center rounded-md border-2 border bg-gray-50 transition-colors duration-300 ease-out",
            checkboxBoxClassName,
            boxStateClasses[state],
            !indeterminate && "peer-checked:[&_[data-checkbox-icon='check']]:opacity-100",
            indeterminate && indeterminateStateClasses[state],
            classNames?.checkbox,
        );

        const iconClassName = clsx(
            "opacity-0 transition-opacity duration-300 ease-out",
            checkboxIconClassName,
            indeterminate && "opacity-100",
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

        return (
            <div className={wrapperClassName}>
                <label htmlFor={id} className={controlLabelClassName}>
                    <input
                        ref={setRefs}
                        id={id}
                        type="checkbox"
                        disabled={disabled}
                        readOnly={readOnly}
                        required={required}
                        aria-checked={indeterminate ? "mixed" : undefined}
                        aria-invalid={ariaInvalid ?? (state === "error" ? true : undefined)}
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
                            if (readOnly && event.key === " ") {
                                event.preventDefault();
                            }
                        }}
                        onChange={(event) => {
                            if (readOnly) {
                                return;
                            }

                            onChange?.(event);
                        }}
                        {...props}
                    />

                    <span aria-hidden="true" className={boxClassName}>
                        <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            data-checkbox-icon="check"
                            className={iconClassName}
                        >
                            <path
                                d={indeterminate ? indeterminatePath : checkPath}
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
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
                </label>
            </div>
        );
    },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;