import * as React from 'react'

import {
    Breadcrumb as UiBreadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    type BreadcrumbProps as UiBreadcrumbProps,
} from '@/components/ui/breadcrumb'
import { cn } from '@/lib/utils'

type BreadcrumbDataItem = {
    label: string
    href?: string
}

interface BreadcrumbProps extends Omit<UiBreadcrumbProps, 'children'> {
    variant?: 'default' | 'wireframe'
    items?: BreadcrumbDataItem[]
    separator?: React.ReactNode
}

const defaultItems: BreadcrumbDataItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'Current Page' },
]

function Breadcrumb({
    variant = 'default',
    items = defaultItems,
    separator,
    className,
    ...props
}: BreadcrumbProps) {
    const renderSeparator = () => {
        if (separator === undefined) return <BreadcrumbSeparator />
        return <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
    }

    if (variant === 'wireframe') {
        return (
            <UiBreadcrumb className={className} {...props}>
                <BreadcrumbList>
                    {items.map((item, index) => (
                        <React.Fragment key={`${item.label}-${index}`}>
                            <BreadcrumbItem>
                                <span
                                    aria-hidden="true"
                                    className={cn(
                                        'wireframe-line h-3.5',
                                        index === items.length - 1 ? 'w-24' : 'w-16'
                                    )}
                                />
                                <span className="sr-only">{item.label}</span>
                            </BreadcrumbItem>
                            {index < items.length - 1 ? renderSeparator() : null}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </UiBreadcrumb>
        )
    }

    return (
        <UiBreadcrumb className={className} {...props}>
            <BreadcrumbList>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1

                    return (
                        <React.Fragment key={`${item.label}-${index}`}>
                            <BreadcrumbItem>
                                {isLast || !item.href ? (
                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!isLast ? renderSeparator() : null}
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </UiBreadcrumb>
    )
}

export { Breadcrumb }
export type { BreadcrumbProps, BreadcrumbDataItem }