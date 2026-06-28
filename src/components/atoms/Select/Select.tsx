import {
    forwardRef,
    useCallback,
    useEffect,
    useId,
    useMemo,
    useRef,
    useState,
    type CSSProperties,
    type KeyboardEvent,
    type MouseEvent as ReactMouseEvent,
    type MouseEvent,
    type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown, X } from "feather-icons-react";
import clsx from "clsx";
import type { InputSize, InputState } from "../Input";

export type SelectOption = {
    label: string;
    value: string;
};

export type SelectProps = {
    id?: string;
    name?: string;
    label?: ReactNode;
    placeholder?: string;
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    options: SelectOption[];
    multiple?: boolean;
    state?: InputState;
    size?: InputSize;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    fullWidth?: boolean;
    className?: string;
    htmlStyle?: CSSProperties;
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
};

const sizeClasses: Record<InputSize, string> = {
    sm: "min-h-8 px-2 py-0.25 text-sm",
    md: "min-h-10 px-2.5 py-0.5 text-base",
    lg: "min-h-12 px-3 py-0.75 text-lg",
};

const labelGapClasses: Record<InputSize, string> = {
    sm: "gap-1",
    md: "gap-1.5",
    lg: "gap-2",
};

const iconSizeClasses: Record<InputSize, string> = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
};

const optionPaddingClasses: Record<InputSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
};

const chipClasses: Record<InputSize, string> = {
    sm: "gap-1.25 rounded-sm px-1 py-0.5 text-sm",
    md: "gap-1.5 rounded-md px-1.5 py-0.5 text-base",
    lg: "gap-1.75 rounded-lg px-2 py-0.75 text-lg",
};

const chipIconSizeClasses: Record<InputSize, string> = {
    sm: "h-3 w-3",
    md: "h-3.5 w-3.5",
    lg: "h-4 w-4",
};

const dropdownOffset = 4;
const dropdownAnimationMs = 180;

const triggerStateClasses: Record<InputState, string> = {
    default:
        "border-gray-300 hover:border-primary-300 focus:border-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-300",
    success:
        "border-success-400 hover:border-success-500 focus:border-success-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-success-300",
    warning:
        "border-warning-400 hover:border-warning-500 focus:border-warning-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-warning-300",
    error:
        "border-error-400 hover:border-error-500 focus:border-error-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-error-300",
};

const openStateClasses: Record<InputState, string> = {
    default: "border-primary-600 ring-1 ring-primary-300",
    success: "border-success-600 ring-1 ring-success-300",
    warning: "border-warning-600 ring-1 ring-warning-300",
    error: "border-error-600 ring-1 ring-error-300",
};

const iconColorClasses: Record<InputState, string> = {
    default: "text-gray-400 group-hover:text-gray-500 group-focus-within:text-primary-600",
    success: "text-gray-400 group-hover:text-gray-500 group-focus-within:text-success-600",
    warning: "text-gray-400 group-hover:text-gray-500 group-focus-within:text-warning-600",
    error: "text-gray-400 group-hover:text-gray-500 group-focus-within:text-error-600",
};

const labelColorClasses: Record<InputState, string> = {
    default: "text-gray-700",
    success: "text-success-700",
    warning: "text-warning-700",
    error: "text-error-700",
};

const getInitialValue = (multiple: boolean, value: string | string[] | undefined) => {
    if (multiple) {
        return Array.isArray(value) ? value : [];
    }

    return typeof value === "string" ? value : "";
};

const Select = forwardRef<HTMLDivElement, SelectProps>(
    (
        {
            id: idProp,
            name,
            label,
            placeholder = "Select an option",
            value,
            onChange,
            options,
            multiple = false,
            state = "default",
            size = "md",
            disabled = false,
            readOnly = false,
            required = false,
            fullWidth = false,
            className,
            htmlStyle,
            "aria-describedby": ariaDescribedBy,
            "aria-invalid": ariaInvalid,
        },
        ref,
    ) => {
        const generatedId = useId();
        const id = idProp ?? generatedId;
        const listboxId = `${id}-listbox`;
        const rootRef = useRef<HTMLDivElement | null>(null);
        const triggerRef = useRef<HTMLDivElement | null>(null);
        const dropdownRef = useRef<HTMLDivElement | null>(null);
        const [open, setOpen] = useState(false);
        const [renderDropdown, setRenderDropdown] = useState(false);
        const [dropdownVisible, setDropdownVisible] = useState(false);
        const [highlightedIndex, setHighlightedIndex] = useState(0);
        const [internalValue, setInternalValue] = useState<string | string[]>(() =>
            getInitialValue(multiple, value),
        );
        const [dropdownPosition, setDropdownPosition] = useState({
            top: 0,
            left: 0,
            width: 0,
        });

        const isControlled = value !== undefined;
        const currentValue = isControlled ? value : internalValue;
        const selectedValues = useMemo(
            () => (multiple ? (Array.isArray(currentValue) ? currentValue : []) : []),
            [currentValue, multiple],
        );
        const selectedValue = !multiple && typeof currentValue === "string" ? currentValue : "";

        const selectedLabels = useMemo(() => {
            if (multiple) {
                return options
                    .filter((option) => selectedValues.includes(option.value))
                    .map((option) => option.label);
            }

            return options.find((option) => option.value === selectedValue)?.label;
        }, [multiple, options, selectedValue, selectedValues]);

        const selectedLabel = typeof selectedLabels === "string" ? selectedLabels : undefined;

        const hasSelection = multiple ? selectedValues.length > 0 : Boolean(selectedValue);

        useEffect(() => {
            if (!isControlled) {
                return;
            }

            setInternalValue(getInitialValue(multiple, value));
        }, [isControlled, multiple, value]);

        const updateDropdownPosition = useCallback(() => {
            if (!triggerRef.current) {
                return;
            }

            const rect = triggerRef.current.getBoundingClientRect();

            setDropdownPosition({
                top: rect.bottom + dropdownOffset,
                left: rect.left,
                width: rect.width,
            });
        }, []);

        useEffect(() => {
            if (!open) {
                return;
            }

            updateDropdownPosition();

            const handlePointerDown = (event: globalThis.MouseEvent) => {
                const target = event.target as Node;

                if (
                    rootRef.current?.contains(target) ||
                    dropdownRef.current?.contains(target)
                ) {
                    return;
                }

                setOpen(false);
            };

            const handleViewportChange = () => {
                updateDropdownPosition();
            };

            document.addEventListener("mousedown", handlePointerDown);
            window.addEventListener("resize", handleViewportChange);
            window.addEventListener("scroll", handleViewportChange, true);

            return () => {
                document.removeEventListener("mousedown", handlePointerDown);
                window.removeEventListener("resize", handleViewportChange);
                window.removeEventListener("scroll", handleViewportChange, true);
            };
        }, [open, updateDropdownPosition]);

        useEffect(() => {
            if (open) {
                setRenderDropdown(true);

                const animationFrame = window.requestAnimationFrame(() => {
                    setDropdownVisible(true);
                });

                return () => {
                    window.cancelAnimationFrame(animationFrame);
                };
            }

            setDropdownVisible(false);

            const timeoutId = window.setTimeout(() => {
                setRenderDropdown(false);
            }, dropdownAnimationMs);

            return () => {
                window.clearTimeout(timeoutId);
            };
        }, [open]);

        const emitChange = (nextValue: string | string[]) => {
            if (!isControlled) {
                setInternalValue(nextValue);
            }

            onChange?.(nextValue);
        };

        const toggleOption = (optionValue: string) => {
            if (disabled || readOnly) {
                return;
            }

            if (multiple) {
                const nextValue = selectedValues.includes(optionValue)
                    ? selectedValues.filter((valueItem) => valueItem !== optionValue)
                    : [...selectedValues, optionValue];

                emitChange(nextValue);
                return;
            }

            emitChange(optionValue);
            setOpen(false);
        };

        const removeValue = (optionValue: string, event: MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            event.stopPropagation();

            if (disabled || readOnly || !multiple) {
                return;
            }

            emitChange(selectedValues.filter((valueItem) => valueItem !== optionValue));
        };

        const openDropdown = () => {
            if (disabled || readOnly) {
                return;
            }

            setOpen(true);
        };

        const handleTriggerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
            if (disabled || readOnly) {
                return;
            }

            if (!open && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
                event.preventDefault();
                openDropdown();
                setHighlightedIndex(0);
                return;
            }

            if (!open && (event.key === "Enter" || event.key === " ")) {
                event.preventDefault();
                openDropdown();
                setHighlightedIndex(0);
                return;
            }

            if (!open) {
                return;
            }

            if (event.key === "Escape") {
                event.preventDefault();
                setOpen(false);
                return;
            }

            if (event.key === "ArrowDown") {
                event.preventDefault();
                setHighlightedIndex((current) =>
                    current + 1 >= options.length ? 0 : current + 1,
                );
                return;
            }

            if (event.key === "ArrowUp") {
                event.preventDefault();
                setHighlightedIndex((current) =>
                    current - 1 < 0 ? options.length - 1 : current - 1,
                );
                return;
            }

            if ((event.key === "Enter" || event.key === " ") && options[highlightedIndex]) {
                event.preventDefault();
                toggleOption(options[highlightedIndex].value);
            }
        };

        const displayValue = multiple ? undefined : selectedLabel;

        const rootClassName = clsx(
            "inline-flex flex-col",
            labelGapClasses[size],
            fullWidth ? "w-full" : "w-fit",
        );

        const labelClassName = clsx(
            "text-sm font-medium",
            labelColorClasses[state],
        );

        const triggerWrapperClassName = clsx(
            "group relative inline-flex items-center",
            fullWidth ? "w-full" : "w-fit",
            disabled && "pointer-events-none opacity-50",
        );

        const triggerClassName = clsx(
            "inline-flex w-full items-center justify-between gap-3 rounded-md border-2 bg-gray-50 text-left text-gray-700 font-body outline-none transition-colors duration-300 ease-out",
            sizeClasses[size],
            triggerStateClasses[state],
            open && openStateClasses[state],
            !hasSelection && "text-gray-400",
            readOnly && "cursor-default",
            className,
        );

        const triggerValueClassName = clsx(
            "min-w-0 flex-1",
            multiple && hasSelection ? "flex flex-wrap items-center gap-1.5" : "truncate",
        );

        const chipClassName = clsx(
            "inline-flex max-w-full items-center bg-gray-100 text-gray-700",
            chipClasses[size],
        );

        const chipRemoveButtonClassName = clsx(
            "inline-flex shrink-0 items-center justify-center rounded-full text-gray-500 transition-colors duration-300 ease-out hover:text-gray-700 focus-visible:outline-none cursor-pointer",
            chipIconSizeClasses[size],
        );

        const iconClassName = clsx(
            "pointer-events-none flex shrink-0 items-center justify-center transition-colors duration-300 ease-out [&_svg]:h-full [&_svg]:w-full",
            iconSizeClasses[size],
            disabled
                ? "text-gray-300"
                : "text-gray-400 group-hover:text-gray-500 group-focus-within:text-primary-600",
        );

        const dropdownClassName = clsx(
            "max-h-60 overflow-auto rounded-md border-2 border-gray-300 bg-gray-50 shadow-sm transition-all ease-out",
            dropdownVisible
                ? "translate-y-0 scale-100 opacity-100 duration-300"
                : "-translate-y-1 scale-[0.98] opacity-0 duration-300",
        );

        const optionClassName = (isHighlighted: boolean, isSelected: boolean) =>
            clsx(
                "flex w-full items-center justify-between gap-3 text-left text-gray-700 transition-colors duration-300 ease-out",
                optionPaddingClasses[size],
                isSelected ? "bg-primary-50 text-primary-700" : isHighlighted ? "bg-gray-100" : "bg-gray-50",
                !isSelected && "hover:bg-gray-100",
            );

        const handleTriggerClick = (event: ReactMouseEvent<HTMLDivElement>) => {
            event.preventDefault();

            if (readOnly || disabled) {
                return;
            }

            setOpen((current) => !current);
        };

        const handleTriggerMouseDown = (event: ReactMouseEvent<HTMLDivElement>) => {
            if (readOnly || disabled) {
                return;
            }

            event.preventDefault();
        };

        const dropdown = renderDropdown
            ? createPortal(
                <div
                    ref={dropdownRef}
                    id={listboxId}
                    aria-multiselectable={multiple || undefined}
                    className={dropdownClassName}
                    role="listbox"
                    style={{
                        position: "fixed",
                        top: dropdownPosition.top,
                        left: dropdownPosition.left,
                        width: dropdownPosition.width,
                        zIndex: 1000,
                    }}
                >
                    {options.map((option, index) => {
                        const isSelected = multiple
                            ? selectedValues.includes(option.value)
                            : selectedValue === option.value;
                        const isHighlighted = highlightedIndex === index;

                        return (
                            <button
                                key={option.value}
                                aria-selected={isSelected}
                                className={optionClassName(isHighlighted, isSelected)}
                                role="option"
                                type="button"
                                onMouseEnter={() => setHighlightedIndex(index)}
                                onClick={() => toggleOption(option.value)}
                            >
                                <span className="min-w-0 flex-1 truncate">{option.label}</span>
                                {isSelected ? (
                                    <span aria-hidden="true" className={clsx(iconClassName, "text-primary-600")}>
                                        <Check />
                                    </span>
                                ) : null}
                            </button>
                        );
                    })}
                </div>,
                document.body,
            )
            : null;

        return (
            <div ref={rootRef} className={rootClassName}>
                {label ? <span className={labelClassName}>{label}</span> : null}

                <div className={triggerWrapperClassName}>
                    <div
                        ref={(node) => {
                            triggerRef.current = node;

                            if (typeof ref === "function") {
                                ref(node);
                                return;
                            }

                            if (ref) {
                                ref.current = node;
                            }
                        }}
                        id={id}
                        aria-controls={listboxId}
                        aria-describedby={ariaDescribedBy}
                        aria-expanded={open}
                        aria-haspopup="listbox"
                        aria-invalid={ariaInvalid}
                        aria-required={required || undefined}
                        className={triggerClassName}
                        role="combobox"
                        style={htmlStyle}
                        tabIndex={disabled ? -1 : 0}
                        data-name={name}
                        onMouseDown={handleTriggerMouseDown}
                        onClick={handleTriggerClick}
                        onKeyDown={handleTriggerKeyDown}
                    >
                        <span className={triggerValueClassName}>
                            {multiple && selectedValues.length > 0 ? (
                                selectedValues.map((selectedOptionValue) => {
                                    const option = options.find(
                                        (optionItem) => optionItem.value === selectedOptionValue,
                                    );

                                    if (!option) {
                                        return null;
                                    }

                                    return (
                                        <span key={option.value} className={chipClassName}>
                                            <span className="min-w-0 truncate">{option.label}</span>
                                            <button
                                                type="button"
                                                aria-label={`Remove ${option.label}`}
                                                className={chipRemoveButtonClassName}
                                                onMouseDown={(event) => {
                                                    event.preventDefault();
                                                    event.stopPropagation();
                                                }}
                                                onClick={(event) => removeValue(option.value, event)}
                                            >
                                                <X />
                                            </button>
                                        </span>
                                    );
                                })
                            ) : (
                                <span className="block truncate">{displayValue || placeholder}</span>
                            )}
                        </span>

                        <span aria-hidden="true" className={iconClassName}>
                            <ChevronDown
                                className={clsx(
                                    open && "rotate-180",
                                    "transition-transform duration-300 ease-out",
                                )}
                            />
                        </span>
                    </div>
                </div>

                {dropdown}
            </div>
        );
    },
);

Select.displayName = "Select";

export default Select;