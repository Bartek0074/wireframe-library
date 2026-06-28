import {
    createContext,
    useCallback,
    useId,
    useMemo,
    useState,
    type HTMLAttributes,
    type ReactNode,
} from "react";
import clsx from "clsx";

export type RadioValue = string | number;
export type RadioGroupMode = "default" | "block";
export type RadioGroupSize = "sm" | "md" | "lg";
export type RadioGroupButtonStyle = "outline" | "solid";

export type RadioGroupContextValue = {
    name: string;
    value?: RadioValue;
    disabled: boolean;
    mode: RadioGroupMode;
    size: RadioGroupSize;
    buttonStyle: RadioGroupButtonStyle;
    setValue: (nextValue: RadioValue) => void;
};

export type RadioGroupProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
    value?: RadioValue;
    defaultValue?: RadioValue;
    onChange?: (value: RadioValue) => void;
    name?: string;
    disabled?: boolean;
    mode?: RadioGroupMode;
    size?: RadioGroupSize;
    buttonStyle?: RadioGroupButtonStyle;
    children: ReactNode;
};

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

const RadioGroup = ({
    value,
    defaultValue,
    onChange,
    name,
    disabled = false,
    mode = "default",
    size = "md",
    buttonStyle = "outline",
    className,
    children,
    ...props
}: RadioGroupProps) => {
    const generatedId = useId();
    const generatedName = `radio-${generatedId.replace(/:/g, "")}`;
    const groupName = name ?? generatedName;
    const [internalValue, setInternalValue] = useState<RadioValue | undefined>(defaultValue);
    const isControlled = value !== undefined;
    const selectedValue = isControlled ? value : internalValue;

    const handleValueChange = useCallback(
        (nextValue: RadioValue) => {
            if (!isControlled) {
                setInternalValue(nextValue);
            }

            onChange?.(nextValue);
        },
        [isControlled, onChange],
    );

    const contextValue = useMemo(
        () => ({
            name: groupName,
            value: selectedValue,
            disabled,
            mode,
            size,
            buttonStyle,
            setValue: handleValueChange,
        }),
        [buttonStyle, disabled, groupName, handleValueChange, mode, selectedValue, size],
    );

    return (
        <RadioGroupContext.Provider value={contextValue}>
            <div
                role="radiogroup"
                aria-disabled={disabled || undefined}
                className={clsx(
                    mode === "block"
                        ? "inline-flex w-fit items-stretch gap-0"
                        : "inline-flex flex-col gap-2",
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
};

export default RadioGroup;