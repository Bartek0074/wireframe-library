import * as React from 'react'
import { X } from 'lucide-react'

import {
    Drawer as DrawerPrimitive,
    DrawerClose as DrawerClosePrimitive,
    DrawerContent as DrawerContentPrimitive,
    DrawerDescription as DrawerDescriptionPrimitive,
    DrawerFooter as DrawerFooterPrimitive,
    DrawerHeader as DrawerHeaderPrimitive,
    DrawerTitle as DrawerTitlePrimitive,
    DrawerTrigger as DrawerTriggerPrimitive,
} from '@/components/ui/drawer'
import { cn } from '@/lib/utils'

export type DrawerProps = React.ComponentProps<typeof DrawerPrimitive>

function Drawer(props: DrawerProps) {
    return <DrawerPrimitive data-slot="molecule-drawer" {...props} />
}

export type DrawerTriggerProps = React.ComponentProps<typeof DrawerTriggerPrimitive>

function DrawerTrigger(props: DrawerTriggerProps) {
    return <DrawerTriggerPrimitive data-slot="molecule-drawer-trigger" {...props} />
}

export type DrawerCloseProps = React.ComponentProps<typeof DrawerClosePrimitive>

function DrawerClose(props: DrawerCloseProps) {
    return <DrawerClosePrimitive data-slot="molecule-drawer-close" {...props} />
}

export type DrawerHeaderCloseProps = React.ComponentProps<typeof DrawerClosePrimitive>

function DrawerHeaderClose({ className, children, ...props }: DrawerHeaderCloseProps) {
    return (
        <DrawerClosePrimitive
            data-slot="molecule-drawer-header-close"
            className={cn(
                'text-muted-foreground hover:text-foreground inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors',
                'absolute right-2 top-2 md:right-3 md:top-3',
                className
            )}
            aria-label="Close drawer"
            {...props}
        >
            {children ?? <X className="size-4" />}
        </DrawerClosePrimitive>
    )
}

export type DrawerContentProps = React.ComponentProps<typeof DrawerContentPrimitive>

function DrawerContent({ className, ...props }: DrawerContentProps) {
    return (
        <DrawerContentPrimitive
            data-slot="molecule-drawer-content"
            className={cn(
                'border-border bg-card text-foreground shadow-sm',
                'data-[vaul-drawer-direction=bottom]:rounded-t-xl',
                'data-[vaul-drawer-direction=top]:rounded-b-xl',
                'data-[vaul-drawer-direction=left]:rounded-r-xl',
                'data-[vaul-drawer-direction=right]:rounded-l-xl',
                className
            )}
            {...props}
        />
    )
}

export type DrawerHeaderProps = React.ComponentProps<typeof DrawerHeaderPrimitive>

function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
    return (
        <DrawerHeaderPrimitive
            data-slot="molecule-drawer-header"
            className={cn('border-border border-b px-4 py-4 md:px-5 relative', className)}
            {...props}
        />
    )
}

export type DrawerTitleProps = React.ComponentProps<typeof DrawerTitlePrimitive>

function DrawerTitle({ className, ...props }: DrawerTitleProps) {
    return (
        <DrawerTitlePrimitive
            data-slot="molecule-drawer-title"
            className={cn('text-sm font-semibold text-foreground max-w-[calc(100%-2rem)]', className)}
            {...props}
        />
    )
}

export type DrawerDescriptionProps = React.ComponentProps<typeof DrawerDescriptionPrimitive>

function DrawerDescription({ className, ...props }: DrawerDescriptionProps) {
    return (
        <DrawerDescriptionPrimitive
            data-slot="molecule-drawer-description"
            className={cn('text-sm text-muted-foreground', className)}
            {...props}
        />
    )
}

export type DrawerFooterProps = React.ComponentProps<typeof DrawerFooterPrimitive>

function DrawerFooter({ className, ...props }: DrawerFooterProps) {
    return (
        <DrawerFooterPrimitive
            data-slot="molecule-drawer-footer"
            className={cn('border-border border-t p-4 md:px-5', className)}
            {...props}
        />
    )
}

Drawer.displayName = 'Drawer'
DrawerTrigger.displayName = 'DrawerTrigger'
DrawerClose.displayName = 'DrawerClose'
DrawerHeaderClose.displayName = 'DrawerHeaderClose'
DrawerContent.displayName = 'DrawerContent'
DrawerHeader.displayName = 'DrawerHeader'
DrawerTitle.displayName = 'DrawerTitle'
DrawerDescription.displayName = 'DrawerDescription'
DrawerFooter.displayName = 'DrawerFooter'

export {
    Drawer,
    DrawerTrigger,
    DrawerClose,
    DrawerHeaderClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
}