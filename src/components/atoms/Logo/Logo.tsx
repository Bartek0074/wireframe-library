import * as React from 'react'
import { Sparkle } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const logoVariants = cva(
    'inline-flex select-none items-center justify-center gap-2 whitespace-nowrap border border-border bg-card text-foreground outline-none shrink-0',
    {
        variants: {
            variant: {
                squareNeutral: 'text-foreground rounded-full',
                squareBrand: 'border-brand bg-brand/10 text-brand rounded-full',
                wideNeutral: 'text-foreground rounded-lg',
                wideBrand: 'border-brand bg-brand/10 text-brand rounded-lg',
            },
            size: {
                default: 'h-10 px-4 text-sm',
                sm: 'h-8 px-3 text-xs',
                lg: 'h-12 px-5 text-sm',
            },
        },
        defaultVariants: {
            variant: 'squareNeutral',
            size: 'default',
        },
    }
)

export interface LogoProps
    extends React.ComponentProps<'div'>,
    VariantProps<typeof logoVariants> {
    variant?: 'squareNeutral' | 'squareBrand' | 'wideNeutral' | 'wideBrand'
    size?: 'default' | 'sm' | 'lg'
}

function Logo({ className, variant, size, ...props }: LogoProps) {
    const isWide = variant === 'wideNeutral' || variant === 'wideBrand'
    const isBrand = variant === 'squareBrand' || variant === 'wideBrand'

    return (
        <div
            data-slot="logo"
            aria-label="Logo placeholder"
            className={cn(
                logoVariants({ variant, size }),
                isWide ? ' justify-start' : 'size-10 justify-center',
                size === 'sm' && (isWide ? '' : 'size-8'),
                size === 'lg' && (isWide ? '' : 'size-12'),
                isBrand ? 'border-brand bg-brand/10 text-brand' : 'border-border bg-card text-foreground',
                'cursor-default transition-none',
                className
            )}
            {...props}
        >
            {!isWide && <span
                className={cn(
                    'flex shrink-0 items-center justify-center',
                    isWide ? 'size-5' : 'size-5',
                    size === 'sm' && 'size-4',
                    size === 'lg' && 'size-6'
                )}
            >
                <Sparkle className={cn(size === 'sm' ? 'size-4' : 'size-5')} strokeWidth={2} />
            </span>}
            <span
                className={cn(
                    'tracking-[0.18em] uppercase font-semibold',
                    isWide ? 'block' : 'hidden',
                    size === 'sm' && 'text-[0.65rem]',
                    size === 'default' && 'text-xs',
                    size === 'lg' && 'text-sm'
                )}
            >
                Logo
            </span>
        </div>
    )
}

export { Logo, logoVariants }
