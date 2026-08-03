import * as React from 'react'

import { cn } from '@/lib/utils'

export interface CardProps extends Omit<React.ComponentProps<'div'>, 'title'> {
    title?: React.ReactNode
    extra?: React.ReactNode
    footer?: React.ReactNode
    classNames?: {
        body?: string
        footer?: string
        header?: string
    }
}

function Card({
    className,
    title,
    extra,
    footer,
    classNames,
    children,
    ...props
}: CardProps) {
    const hasHeader = title !== undefined || extra !== undefined

    return (
        <div
            data-slot="molecule-card"
            className={cn('border border-border bg-card text-foreground rounded-2xl overflow-hidden', className)}
            {...props}
        >
            {hasHeader ? (
                <div
                    data-slot="molecule-card-header"
                    className={cn('border-border border-b px-5 py-4 flex items-center justify-between gap-3', classNames?.header)}
                >
                    <h3 data-slot="molecule-card-title" className="text-base font-semibold text-foreground">
                        {title}
                    </h3>
                    {extra ? (
                        <div data-slot="molecule-card-extra" className="text-sm text-muted-foreground">
                            {extra}
                        </div>
                    ) : null}
                </div>
            ) : null}

            <div data-slot="molecule-card-content" className={cn('px-5 py-4 text-sm text-muted-foreground', classNames?.body)}>
                {children}
            </div>

            {footer !== undefined ? (
                <div
                    data-slot="molecule-card-footer"
                    className={cn('border-border border-t px-5 py-4 flex items-center justify-end gap-2', classNames?.footer)}
                >
                    {footer}
                </div>
            ) : null}
        </div>
    )
}

Card.displayName = 'Card'

export { Card }
