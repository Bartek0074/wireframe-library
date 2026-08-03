'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

export interface SeparatorProps extends React.ComponentProps<'div'> { }

function Separator({ className, ...props }: SeparatorProps) {
    return (
        <div
            aria-hidden="true"
            data-slot="separator"
            className={cn(
                'h-px bg-linear-to-r from-border/40 via-border/80 to-border/10 opacity-70 transition-opacity duration-300',
                className
            )}
            {...props}
        />
    )
}

export { Separator }