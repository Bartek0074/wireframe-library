import * as React from 'react'

import { cn } from '@/lib/utils'

export interface StatProps {
    value: React.ReactNode
    label: React.ReactNode
    className?: string
    classNames?: {
        value?: string
        label?: string
    }
}

function Stat({ value, label, className, classNames }: StatProps) {
    return (
        <div className={cn('flex flex-col-reverse gap-1', className)}>
            <dd className={cn('text-base text-muted-foreground', classNames?.label)}>{label}</dd>
            <dt className={cn('text-4xl font-semibold tracking-tight text-primary', classNames?.value)}>
                {value}
            </dt>
        </div>
    )
}

export { Stat }
