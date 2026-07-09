import * as React from 'react'
import { Label as UiLabel, type LabelProps as UiLabelProps } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const WIDTH_THRESHOLD_SMALL = 6
const WIDTH_THRESHOLD_MEDIUM = 12
const WIDTH_THRESHOLD_LARGE = 18

interface LabelProps extends UiLabelProps {
    variant?: 'default' | 'wireframe'
    skeletonWidthClass?: string
}

function getSkeletonWidthFromText(text: string) {
    if (text.length <= WIDTH_THRESHOLD_SMALL) return 'w-16'
    if (text.length <= WIDTH_THRESHOLD_MEDIUM) return 'w-24'
    if (text.length <= WIDTH_THRESHOLD_LARGE) return 'w-32'
    return 'w-40'
}

function getAccessibleLabel(children: React.ReactNode) {
    if (typeof children === 'string' && children.trim().length > 0) return children
    return 'Field label'
}

function Label({ variant = 'default', skeletonWidthClass, className, children, ...props }: LabelProps) {
    if (variant === 'wireframe') {
        const widthClass =
            skeletonWidthClass ??
            (typeof children === 'string' ? getSkeletonWidthFromText(children) : 'w-24')

        return (
            <UiLabel className={cn(className)} {...props}>
                <span aria-hidden="true" className={cn('wireframe-line h-3.5', widthClass)} />
                <span className="sr-only">{getAccessibleLabel(children)}</span>
            </UiLabel>
        )
    }

    return (
        <UiLabel className={className} {...props}>
            {children}
        </UiLabel>
    )
}

export { Label }
export type { LabelProps }