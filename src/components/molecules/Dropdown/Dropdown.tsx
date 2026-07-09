import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { createPortal } from 'react-dom'

import { cn } from '@/lib/utils'

const dropdownTriggerVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none cursor-pointer disabled:cursor-auto [&_[data-slot=dropdown-chevron]]:transition-transform [&[data-state=open]_[data-slot=dropdown-chevron]]:rotate-180",
    {
        variants: {
            variant: {
                default: 'border border-border bg-card text-foreground hover:bg-accent',
                link: 'relative rounded-none text-primary after:pointer-events-none after:absolute after:bottom-[20%] after:left-0 after:h-[1px] after:right-0 after:origin-left after:opacity-0 after:bg-primary hover:after:opacity-100 focus-visible:after:opacity-100 after:transition-opacity',

            },
            size: {
                default: 'h-10 px-6 py-2',
                sm: 'h-8 rounded-lg px-4',
                lg: 'h-12 rounded-lg px-8',
            },
        },
        compoundVariants: [
            {
                variant: "link",
                class: "px-0",
            },
            {
                variant: "link",
                size: 'lg',
                class: "after:bottom-[30%]",
            },
        ],
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

type DropdownContextValue = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    contentId: string
    rootRef: React.RefObject<HTMLDivElement | null>
    contentRef: React.RefObject<HTMLDivElement | null>
}

const DropdownContext = React.createContext<DropdownContextValue | null>(null)

function useDropdownContext() {
    const context = React.useContext(DropdownContext)

    if (!context) {
        throw new Error('Dropdown components must be used within Dropdown.')
    }

    return context
}

export interface DropdownProps extends React.ComponentProps<'div'> {
    defaultOpen?: boolean
}

function Dropdown({ className, children, defaultOpen = false, ...props }: DropdownProps) {
    const [open, setOpen] = React.useState(defaultOpen)
    const contentId = React.useId()
    const rootRef = React.useRef<HTMLDivElement>(null)
    const contentRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (!open) {
            return undefined
        }

        function handlePointerDown(event: MouseEvent) {
            const target = event.target as Node

            if (
                !rootRef.current?.contains(target) &&
                !contentRef.current?.contains(target)
            ) {
                setOpen(false)
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handlePointerDown)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('mousedown', handlePointerDown)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [open])

    return (
        <DropdownContext.Provider
            value={{ open, setOpen, contentId, rootRef, contentRef }}
        >
            <div
                ref={rootRef}
                data-slot="dropdown"
                className={cn('relative inline-flex', className)}
                {...props}
            >
                {children}
            </div>
        </DropdownContext.Provider>
    )
}

type DropdownTriggerSharedProps = VariantProps<typeof dropdownTriggerVariants> & {
    asChild?: boolean
}

type DropdownTriggerButtonProps = DropdownTriggerSharedProps & Omit<React.ComponentProps<'button'>, 'size'> & {
    href?: undefined
}

type DropdownTriggerAnchorProps = DropdownTriggerSharedProps & Omit<React.ComponentProps<'a'>, 'size'> & {
    href?: string
}

export type DropdownTriggerProps = DropdownTriggerButtonProps | DropdownTriggerAnchorProps

function DropdownTrigger({
    className,
    children,
    variant,
    size,
    asChild = false,
    href,
    onClick,
    ...props
}: DropdownTriggerProps & Partial<DropdownTriggerAnchorProps>) {
    const { open, setOpen, contentId } = useDropdownContext()
    const triggerClassName = cn(dropdownTriggerVariants({ variant, size }), className)

    const toggleOpen = () => {
        setOpen((current) => !current)
    }

    if (asChild) {
        return (
            <Slot
                data-slot="dropdown-trigger"
                data-state={open ? 'open' : 'closed'}
                aria-expanded={open}
                aria-haspopup="menu"
                aria-controls={contentId}
                className={triggerClassName}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                    ; (onClick as React.MouseEventHandler<HTMLElement> | undefined)?.(event)

                    if (!event.defaultPrevented) {
                        toggleOpen()
                    }
                }}
                {...props}
            >
                {children}
            </Slot>
        )
    }

    if (href !== undefined) {
        const anchorProps = props as Omit<DropdownTriggerAnchorProps, 'asChild' | 'variant' | 'size' | 'href'>

        return (
            <a
                data-slot="dropdown-trigger"
                data-state={open ? 'open' : 'closed'}
                aria-expanded={open}
                aria-haspopup="menu"
                aria-controls={contentId}
                className={triggerClassName}
                href={href}
                onClick={(event) => {
                    ; (onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined)?.(event)

                    if (!event.defaultPrevented) {
                        event.preventDefault()
                        toggleOpen()
                    }
                }}
                {...anchorProps}
            >
                {children}
            </a>
        )
    }

    const buttonProps = props as Omit<DropdownTriggerButtonProps, 'asChild' | 'variant' | 'size' | 'href'>

    return (
        <button
            data-slot="dropdown-trigger"
            data-state={open ? 'open' : 'closed'}
            aria-expanded={open}
            aria-haspopup="menu"
            aria-controls={contentId}
            className={triggerClassName}
            onClick={(event) => {
                ; (onClick as React.MouseEventHandler<HTMLButtonElement> | undefined)?.(event)

                if (!event.defaultPrevented) {
                    toggleOpen()
                }
            }}
            type="button"
            {...buttonProps}
        >
            {children}
        </button>
    )
}

export type DropdownContentProps = React.ComponentProps<'div'>

function DropdownContent({ className, children, ...props }: DropdownContentProps) {
    const { open, contentId, rootRef, contentRef } = useDropdownContext()
    const [mounted, setMounted] = React.useState(false)
    const [position, setPosition] = React.useState({ top: 0, left: 0, minWidth: 0 })

    React.useEffect(() => {
        setMounted(true)
    }, [])

    React.useLayoutEffect(() => {
        if (!open || !rootRef.current) {
            return undefined
        }

        function updatePosition() {
            const rect = rootRef.current?.getBoundingClientRect()

            if (!rect) {
                return
            }

            setPosition({
                top: rect.bottom + 8,
                left: rect.left,
                minWidth: rect.width,
            })
        }

        updatePosition()

        window.addEventListener('resize', updatePosition)
        window.addEventListener('scroll', updatePosition, true)

        return () => {
            window.removeEventListener('resize', updatePosition)
            window.removeEventListener('scroll', updatePosition, true)
        }
    }, [open, rootRef])

    if (!open || !mounted) {
        return null
    }

    return createPortal(
        <div
            id={contentId}
            ref={contentRef}
            data-slot="dropdown-content"
            role="menu"
            className={cn(
                'fixed z-1000 min-w-40 overflow-hidden rounded-lg border border-border bg-card p-1 text-foreground shadow-sm',
                className
            )}
            style={{
                top: position.top,
                left: position.left,
                minWidth: position.minWidth,
            }}
            {...props}
        >
            {children}
        </div>,
        document.body
    )
}

Dropdown.displayName = 'Dropdown'
DropdownTrigger.displayName = 'DropdownTrigger'
DropdownContent.displayName = 'DropdownContent'

export {
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    dropdownTriggerVariants,
    useDropdownContext,
}
