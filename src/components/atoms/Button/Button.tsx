import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none cursor-pointer disabled:cursor-auto",
    {
        variants: {
            variant: {
                default: 'border border-border bg-card text-foreground hover:bg-accent',
                secondary: 'border border-border bg-muted text-muted-foreground hover:bg-accent',
                brand: 'border border-brand bg-brand/10 text-brand hover:bg-brand/15',
                ghost: 'hover:bg-accent hover:text-foreground',
                destructive: 'border border-destructive bg-destructive/10 text-destructive hover:bg-destructive/15',
                link: 'relative rounded-none text-primary after:pointer-events-none after:absolute after:bottom-[20%] after:left-0 after:h-[1px] after:right-0 after:origin-left after:opacity-0 after:bg-primary hover:after:opacity-100 focus-visible:after:opacity-100 after:transition-opacity',
                mutedLink: 'relative rounded-none text-muted-foreground after:pointer-events-none after:absolute after:bottom-[20%] after:left-0 after:h-[1px] after:right-0 after:origin-left after:opacity-0 after:bg-muted-foreground hover:after:opacity-100 focus-visible:after:opacity-100 after:transition-opacity',
            },
            size: {
                default: 'h-10 px-6 py-2',
                sm: 'h-8 rounded-lg px-4',
                lg: 'h-12 rounded-lg px-8',
                icon: 'size-10',
            },
            active: {
                true: '',
                false: '',
            },
        },
        compoundVariants: [
            {
                variant: "default",
                active: true,
                class: "bg-accent/40 font-bold text-foreground",
            },
            {
                variant: "link",
                class: "px-0",
            },
            {
                variant: "mutedLink",
                class: "px-0",
            },
            {
                variant: "link",
                size: 'lg',
                class: "after:bottom-[30%]",
            },
            {
                variant: "mutedLink",
                size: 'lg',
                class: "after:bottom-[30%]",
            },
            {
                variant: "link",
                active: true,
                class: "font-bold",
            },
            {
                variant: "mutedLink",
                active: true,
                class: "font-bold",
            },
        ],

        defaultVariants: {
            variant: "default",
            size: "default",
            active: false,
        },
    }
)

export interface ButtonProps
    extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
    variant?: 'default' | 'secondary' | 'brand' | 'ghost' | 'destructive' | 'link' | 'mutedLink'
    size?: 'default' | 'sm' | 'lg' | 'icon'
    active?: boolean
    asChild?: boolean
}

function Button({ className, variant, size, active = false, asChild = false, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            data-slot="button"
            data-active={active}
            className={cn(buttonVariants({ variant, size, className, active }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
