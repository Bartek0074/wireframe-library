import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'
import { useDropdownContext } from './Dropdown'

type DropdownItemButtonProps = React.ComponentProps<'button'> & {
    href?: undefined
}

type DropdownItemSharedProps = {
    inset?: boolean
    asChild?: boolean
    disabled?: boolean
}

type DropdownItemAnchorProps = React.ComponentProps<'a'> & {
    href: string
}

export type DropdownItemProps =
    | (DropdownItemSharedProps & DropdownItemButtonProps)
    | (DropdownItemSharedProps & DropdownItemAnchorProps)

function DropdownItem({
    className,
    inset = false,
    disabled,
    onClick,
    children,
    asChild = false,
    href,
    ...props
}: DropdownItemProps & Partial<DropdownItemAnchorProps>) {
    const { setOpen } = useDropdownContext()

    if (asChild) {
        return (
            <Slot
                data-slot="dropdown-item"
                role="menuitem"
                data-disabled={disabled ? '' : undefined}
                aria-disabled={disabled || undefined}
                className={cn(
                    'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition-colors outline-none cursor-pointer [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground hover:bg-accent data-disabled:pointer-events-none data-disabled:cursor-auto data-disabled:opacity-50',
                    inset && 'pl-8',
                    className
                )}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                    ; (onClick as React.MouseEventHandler<HTMLElement> | undefined)?.(event)

                    if (!event.defaultPrevented && !disabled) {
                        setOpen(false)
                    }
                }}
                {...props}
            >
                {children}
            </Slot>
        )
    }

    if (href !== undefined) {
        const anchorProps = props as Omit<DropdownItemAnchorProps, 'href' | 'disabled' | 'inset' | 'asChild'>

        return (
            <a
                data-slot="dropdown-item"
                role="menuitem"
                data-disabled={disabled ? '' : undefined}
                aria-disabled={disabled || undefined}
                href={href}
                className={cn(
                    'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition-colors outline-none cursor-pointer [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground hover:bg-accent data-disabled:pointer-events-none data-disabled:cursor-auto data-disabled:opacity-50',
                    inset && 'pl-8',
                    className
                )}
                onClick={(event) => {
                    ; (onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined)?.(event)

                    if (!event.defaultPrevented && !disabled) {
                        setOpen(false)
                    }
                }}
                {...anchorProps}
            >
                {children}
            </a>
        )
    }

    const buttonProps = props as Omit<DropdownItemButtonProps, 'href' | 'disabled' | 'inset' | 'asChild'>

    return (
        <button
            data-slot="dropdown-item"
            role="menuitem"
            data-disabled={disabled ? '' : undefined}
            aria-disabled={disabled || undefined}
            disabled={disabled}
            className={cn(
                'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition-colors outline-none cursor-pointer [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground hover:bg-accent data-disabled:pointer-events-none data-disabled:cursor-auto data-disabled:opacity-50',
                inset && 'pl-8',
                className
            )}
            onClick={(event) => {
                ; (onClick as React.MouseEventHandler<HTMLButtonElement> | undefined)?.(event)

                if (!event.defaultPrevented && !disabled) {
                    setOpen(false)
                }
            }}
            type="button"
            {...buttonProps}
        >
            {children}
        </button>
    )
}

DropdownItem.displayName = 'DropdownItem'

export { DropdownItem }