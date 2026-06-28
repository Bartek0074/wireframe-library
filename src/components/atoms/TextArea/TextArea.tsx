import {
    forwardRef,
    useCallback,
    useEffect,
    useId,
    useRef,
    useState,
    type TextareaHTMLAttributes,
} from "react";
import clsx from "clsx";

export type TextAreaSize = "sm" | "md" | "lg";
export type TextAreaState = "default" | "success" | "warning" | "error";
export type TextAreaResize = "vertical" | "horizontal" | "both";

export type TextAreaProps = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "size" | "className"
> & {
    size?: TextAreaSize;
    state?: TextAreaState;
    fullWidth?: boolean;
    autoResize?: boolean;
    minRows?: number;
    maxRows?: number;
    resize?: TextAreaResize;
    showCount?: boolean;
    className?: string;
    classNames?: {
        wrapper?: string;
        textarea?: string;
        count?: string;
    };
};

const sizeClasses: Record<TextAreaSize, string> = {
    sm: "h-8 px-3 py-1.5 text-sm leading-4",
    md: "h-10 px-4 py-2 text-base leading-5",
    lg: "h-12 px-5 py-2.5 text-lg leading-6",
};

const stateClasses: Record<TextAreaState, string> = {
    default:
        "border-gray-300 hover:border-primary-300 focus:border-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-300",
    success:
        "border-success-400 hover:border-success-500 focus:border-success-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-success-300",
    warning:
        "border-warning-400 hover:border-warning-500 focus:border-warning-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warning-300",
    error:
        "border-error-400 hover:border-error-500 focus:border-error-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-error-300",
};

const countColorClasses: Record<TextAreaState, string> = {
    default: "text-gray-600",
    success: "text-success-600",
    warning: "text-warning-600",
    error: "text-error-600",
};

const resizeClasses: Record<TextAreaResize, string> = {
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
};

const getTextLength = (value: unknown): number => {
    if (typeof value === "string") {
        return value.length;
    }

    if (typeof value === "number") {
        return String(value).length;
    }

    if (Array.isArray(value)) {
        return value.join("").length;
    }

    return 0;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        {
            size = "md",
            state = "default",
            fullWidth = false,
            autoResize = false,
            minRows = 1,
            maxRows,
            resize = "vertical",
            showCount = false,
            className,
            classNames,
            id: idProp,
            value,
            defaultValue,
            onChange,
            disabled,
            readOnly,
            maxLength,
            rows,
            style,
            "aria-describedby": ariaDescribedBy,
            "aria-invalid": ariaInvalid,
            ...props
        },
        ref,
    ) => {
        const generatedId = useId();
        const id = idProp ?? generatedId;
        const countId = `${id}-count`;
        const textareaRef = useRef<HTMLTextAreaElement | null>(null);
        const [currentLength, setCurrentLength] = useState<number>(
            getTextLength(value ?? defaultValue),
        );

        const setRefs = useCallback(
            (node: HTMLTextAreaElement | null) => {
                textareaRef.current = node;

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

        const isCountExceeded =
            showCount && typeof maxLength === "number" && currentLength > maxLength;

        const describedBy = [ariaDescribedBy, showCount ? countId : undefined]
            .filter(Boolean)
            .join(" ") || undefined;

        const resolvedAriaInvalid =
            ariaInvalid ??
            (state === "error" || isCountExceeded ? true : undefined);

        const adjustHeight = useCallback(() => {
            if (!autoResize || !textareaRef.current) {
                return;
            }

            const element = textareaRef.current;
            const computed = window.getComputedStyle(element);
            const lineHeight = parseFloat(computed.lineHeight) || 0;
            const paddingTop = parseFloat(computed.paddingTop) || 0;
            const paddingBottom = parseFloat(computed.paddingBottom) || 0;
            const borderTop = parseFloat(computed.borderTopWidth) || 0;
            const borderBottom = parseFloat(computed.borderBottomWidth) || 0;
            const baseHeight = paddingTop + paddingBottom + borderTop + borderBottom;

            const minHeight = lineHeight > 0 ? lineHeight * minRows + baseHeight : 0;
            const maxHeight =
                lineHeight > 0 && typeof maxRows === "number"
                    ? lineHeight * maxRows + baseHeight
                    : undefined;

            element.style.height = "auto";

            const targetHeight = element.scrollHeight;
            const clampedHeight = Math.max(
                minHeight,
                Math.min(targetHeight, maxHeight ?? Number.POSITIVE_INFINITY),
            );

            element.style.height = `${clampedHeight}px`;
            element.style.overflowY =
                maxHeight && targetHeight > maxHeight ? "auto" : "hidden";
        }, [autoResize, maxRows, minRows]);

        useEffect(() => {
            setCurrentLength(getTextLength(value ?? defaultValue));
        }, [defaultValue, value]);

        useEffect(() => {
            adjustHeight();
        }, [adjustHeight, currentLength, value]);

        const wrapperClassName = clsx(
            "relative inline-flex flex-col",
            fullWidth ? "w-full" : "w-fit",
            disabled && "pointer-events-none opacity-50",
            classNames?.wrapper,
        );

        const textareaClassName = clsx(
            "rounded-md border-2 border-dashed bg-gray-50 text-gray-700 font-body outline-none transition-colors duration-300 ease-out",
            "placeholder:text-gray-400",
            sizeClasses[size],
            stateClasses[state],
            autoResize ? "resize-none" : resizeClasses[resize],
            fullWidth ? "w-full" : "w-fit",
            readOnly && "cursor-default",
            className,
            classNames?.textarea,
        );

        const countClassName = clsx(
            "absolute right-0 top-full mt-0.25 text-right text-xs",
            isCountExceeded ? "text-error-600" : countColorClasses[state],
            classNames?.count,
        );

        return (
            <div className={wrapperClassName}>
                <textarea
                    ref={setRefs}
                    id={id}
                    disabled={disabled}
                    readOnly={readOnly}
                    rows={rows ?? minRows}
                    maxLength={maxLength}
                    style={style}
                    aria-describedby={describedBy}
                    aria-invalid={resolvedAriaInvalid}
                    className={textareaClassName}
                    onChange={(event) => {
                        setCurrentLength(event.target.value.length);
                        onChange?.(event);
                    }}
                    {...props}
                />

                {showCount ? (
                    <span id={countId} className={countClassName}>
                        {typeof maxLength === "number"
                            ? `${currentLength} / ${maxLength}`
                            : currentLength}
                    </span>
                ) : null}
            </div>
        );
    },
);

TextArea.displayName = "TextArea";

export default TextArea;