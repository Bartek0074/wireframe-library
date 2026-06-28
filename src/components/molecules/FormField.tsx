import {
    cloneElement,
    isValidElement,
    useId,
    type ReactElement,
    type ReactNode,
} from "react";
import clsx from "clsx";
import type { InputState } from "../atoms/Input";

export type FormFieldLayout = "vertical" | "horizontal";
export type FormFieldSize = "sm" | "md" | "lg";

export type FormFieldProps = {
    label?: ReactNode;
    message?: ReactNode;
    state?: InputState;
    size?: FormFieldSize;
    required?: boolean;
    optional?: boolean;
    layout?: FormFieldLayout;
    children: ReactNode;
};

type FormFieldChildProps = {
    id?: string;
    state?: InputState;
    required?: boolean;
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
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

const verticalGapClasses: Record<FormFieldSize, string> = {
    sm: "gap-1",
    md: "gap-1.5",
    lg: "gap-2",
};

const horizontalGridClasses: Record<FormFieldSize, string> = {
    sm: "sm:grid sm:grid-cols-[minmax(0,auto)_minmax(0,1fr)] sm:items-start sm:gap-x-4 sm:gap-y-1",
    md: "sm:grid sm:grid-cols-[minmax(0,auto)_minmax(0,1fr)] sm:items-center sm:gap-x-4 sm:gap-y-1.5",
    lg: "sm:grid sm:grid-cols-[minmax(0,auto)_minmax(0,1fr)] sm:items-center sm:gap-x-5 sm:gap-y-2",
};

const horizontalLabelAlignmentClasses: Record<FormFieldSize, string> = {
    sm: "sm:pt-1",
    md: "sm:pt-0.5",
    lg: "sm:pt-0",
};

const FormField = ({
    label,
    message,
    state = "default",
    size = "md",
    required = false,
    optional = false,
    layout = "vertical",
    children,
}: FormFieldProps) => {
    const generatedId = useId();
    const messageId = message ? `${generatedId}-message` : undefined;
    const childElement = isValidElement<FormFieldChildProps>(children)
        ? children
        : null;

    const controlId = childElement?.props.id ?? generatedId;
    const describedBy = [childElement?.props["aria-describedby"], messageId]
        .filter(Boolean)
        .join(" ") || undefined;

    const control = childElement
        ? cloneElement(childElement as ReactElement<FormFieldChildProps>, {
            id: controlId,
            state,
            required: required || childElement.props.required || undefined,
            "aria-describedby": describedBy,
            "aria-invalid": state === "error" ? true : childElement.props["aria-invalid"],
        })
        : children;

    const rootClassName = clsx(
        "inline-flex w-full flex-col",
        verticalGapClasses[size],
        layout === "horizontal" &&
        horizontalGridClasses[size],
    );

    const labelClassName = clsx(
        "text-sm font-medium",
        labelColorClasses[state],
        layout === "horizontal" && horizontalLabelAlignmentClasses[size],
        required && "before:content-['*'] before:text-error-500 before:mr-1",
    );

    const messageClassName = clsx(
        "text-sm",
        messageColorClasses[state],
    );

    const requiredIndicator = optional && !required ? (
        <span aria-hidden="true" className="text-gray-500">
            (optional)
        </span>
    ) : null;

    const formattedLabel =
        layout === "horizontal" && (typeof label === "string" || typeof label === "number")
            ? `${String(label)}:`
            : label;

    return (
        <div className={rootClassName}>
            {label ? (
                <label htmlFor={controlId} className={labelClassName}>
                    <span>{formattedLabel}</span>
                    {requiredIndicator ? <span> {requiredIndicator}</span> : null}
                </label>
            ) : null}

            <div className={layout === "horizontal" ? "sm:col-start-2" : undefined}>
                {control}
            </div>

            {message ? (
                <span
                    id={messageId}
                    className={clsx(
                        messageClassName,
                        layout === "horizontal" && "sm:col-start-2",
                    )}
                >
                    {message}
                </span>
            ) : null}
        </div>
    );
};

export default FormField;