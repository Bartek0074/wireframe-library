import { cn } from '@/lib/utils'

type SwitchVariant = 'default'

export interface SwitchOption<T extends string = string> {
    value: T
    label: string
}

export interface SwitchProps<T extends string = string> {
    value: T
    options: SwitchOption<T>[]
    onValueChange: (value: T) => void
    variant?: SwitchVariant
    ariaLabel?: string
    className?: string
    classNames?: {
        root?: string
        activeOption?: string
        inactiveOption?: string
    }
}

function Switch<T extends string>({
    value,
    options,
    onValueChange,
    variant = 'default',
    ariaLabel = 'Switch',
    className,
    classNames,
}: SwitchProps<T>) {
    const rootVariantClass =
        variant === 'default' ? 'rounded-full border border-border bg-card p-1' : ''

    const activeOptionClass =
        variant === 'default'
            ? 'bg-accent/40 font-bold text-foreground'
            : 'text-foreground'

    const inactiveOptionClass =
        variant === 'default'
            ? 'text-muted-foreground hover:bg-accent hover:text-foreground'
            : 'text-muted-foreground'

    return (
        <div
            role="group"
            aria-label={ariaLabel}
            className={cn('mx-auto flex w-fit items-center', rootVariantClass, classNames?.root, className)}
        >
            {options.map((option) => {
                const isActive = value === option.value

                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => onValueChange(option.value)}
                        aria-pressed={isActive}
                        className={cn(
                            'rounded-full px-4 py-1.5 text-sm font-medium transition-colors outline-none cursor-pointer',
                            isActive
                                ? cn(activeOptionClass, classNames?.activeOption)
                                : cn(inactiveOptionClass, classNames?.inactiveOption),
                        )}
                    >
                        {option.label}
                    </button>
                )
            })}
        </div>
    )
}

export { Switch }