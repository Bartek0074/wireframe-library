import * as React from 'react'

import { Avatar, AvatarFallback } from '@/components/atoms/Avatar'
import { Card } from '@/components/molecules/Card'
import { cn } from '@/lib/utils'

type TestimonialCardSize = 'sm' | 'md' | 'lg' | 'xl'
type TestimonialCardPresetSize = 'sm' | 'default' | 'lg'

export interface TestimonialCardProps {
    quote: string
    author: string
    title: string
    company: string
    className?: string
    classNames?: {
        content?: string
        quote?: string
        footer?: string
        avatar?: string
        authorMeta?: string
        authorName?: string
        quoteMark?: string
    }
    sizes?: TestimonialCardPresetSize
    showQuoteMark?: boolean
    children?: React.ReactNode
}

const gapSizeClasses: Record<TestimonialCardSize, string> = {
    sm: 'gap-4',
    md: 'gap-5',
    lg: 'gap-6',
    xl: 'gap-6',
}

const quoteSizeClasses: Record<TestimonialCardSize, string> = {
    sm: 'text-sm leading-6 sm:text-base sm:leading-7',
    md: 'text-base leading-7',
    lg: 'text-xl leading-8 sm:text-2xl sm:leading-9',
    xl: 'text-2xl leading-9 sm:text-3xl sm:leading-10',
}

const avatarSizeClasses: Record<TestimonialCardSize, string> = {
    sm: 'size-10',
    md: 'size-11',
    lg: 'size-12',
    xl: 'size-12',
}

const quoteMarkSizeClasses: Record<TestimonialCardSize, string> = {
    sm: 'text-3xl',
    md: 'text-4xl',
    lg: 'text-5xl',
    xl: 'text-5xl',
}

function TestimonialCard({
    quote,
    author,
    title,
    company,
    className,
    classNames,
    sizes = 'default',
    showQuoteMark = false,
    children,
}: TestimonialCardProps) {
    const sizePresets: Record<
        TestimonialCardPresetSize,
        {
            gap: TestimonialCardSize
            quote: TestimonialCardSize
            avatar: TestimonialCardSize
            quoteMark: TestimonialCardSize
        }
    > = {
        sm: {
            gap: 'sm',
            quote: 'sm',
            avatar: 'sm',
            quoteMark: 'sm',
        },
        default: {
            gap: 'md',
            quote: 'md',
            avatar: 'md',
            quoteMark: 'md',
        },
        lg: {
            gap: 'lg',
            quote: 'lg',
            avatar: 'lg',
            quoteMark: 'lg',
        },
    }

    const selectedSizePreset = sizePresets[sizes]
    const gapSize = selectedSizePreset.gap
    const quoteSize = selectedSizePreset.quote
    const avatarSize = selectedSizePreset.avatar
    const quoteMarkSize = selectedSizePreset.quoteMark

    return (
        <Card className={cn('h-full border-border shadow-none', className)}>
            <div className={cn('flex h-full flex-col', gapSizeClasses[gapSize], classNames?.content)}>
                {showQuoteMark ? (
                    <p
                        className={cn(
                            'leading-none text-brand/35',
                            quoteMarkSizeClasses[quoteMarkSize],
                            classNames?.quoteMark,
                        )}
                    >
                        “
                    </p>
                ) : null}

                <blockquote
                    className={cn(
                        'text-pretty text-foreground',
                        quoteSizeClasses[quoteSize],
                        classNames?.quote,
                    )}
                >
                    {quote}
                </blockquote>

                {children}

                <div className={cn('mt-auto flex items-center gap-3 border-t border-border pt-5', classNames?.footer)}>
                    <Avatar
                        className={cn(
                            'border border-border',
                            avatarSizeClasses[avatarSize],
                            classNames?.avatar,
                        )}
                    >
                        <AvatarFallback />
                    </Avatar>
                    <div className={cn(classNames?.authorMeta)}>
                        <p className={cn('font-semibold text-primary', classNames?.authorName)}>{author}</p>
                        <p className="text-sm text-muted-foreground">
                            {title} · {company}
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export { TestimonialCard }