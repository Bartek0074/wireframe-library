import * as React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

import { Button } from '@/components/atoms/Button'
import { Card } from '@/components/molecules/Card'
import { cn } from '@/lib/utils'

type PricingCardCtaVariant = 'default' | 'secondary' | 'brand' | 'ghost' | 'destructive' | 'link' | 'mutedLink'

export interface PricingCardProps {
    title: string
    description?: string
    price: string
    billingPeriod?: string
    features?: string[]
    badge?: string
    ctaLabel?: string
    ctaHref?: string
    ctaVariant?: PricingCardCtaVariant
    highlighted?: boolean
    footer?: React.ReactNode
    className?: string
    classNames?: {
        body?: string
        title?: string
        description?: string
        price?: string
        billingPeriod?: string
        features?: string
        featureItem?: string
        badge?: string
        cta?: string
        footer?: string
    }
    children?: React.ReactNode
}

function PricingCard({
    title,
    description,
    price,
    billingPeriod = '/month',
    features = [],
    badge,
    ctaLabel,
    ctaHref,
    ctaVariant = 'brand',
    highlighted = false,
    footer,
    className,
    classNames,
    children,
}: PricingCardProps) {
    return (
        <Card
            className={cn(
                'h-full rounded-2xl',
                highlighted ? 'border-brand bg-brand/5' : '',
                className,
            )}
            classNames={{
                body: cn('h-full px-6 py-6 text-foreground', classNames?.body),
            }}
        >
            <div className="flex h-full flex-col">
                {badge ? (
                    <span
                        className={cn(
                            'inline-flex w-fit items-center rounded-full border border-border px-3 py-1 text-xs font-semibold tracking-wide uppercase text-brand',
                            classNames?.badge,
                        )}
                    >
                        {badge}
                    </span>
                ) : null}

                <h3 className={cn('mt-4 text-xl font-semibold text-primary', classNames?.title)}>{title}</h3>

                {description ? (
                    <p className={cn('mt-2 text-sm text-muted-foreground', classNames?.description)}>
                        {description}
                    </p>
                ) : null}

                <div className="mt-6 flex items-end gap-2">
                    <p className={cn('text-4xl font-semibold tracking-tight text-primary', classNames?.price)}>
                        {price}
                    </p>
                    <p className={cn('mb-1 text-sm text-muted-foreground', classNames?.billingPeriod)}>
                        {billingPeriod}
                    </p>
                </div>

                {features.length > 0 ? (
                    <ul className={cn('mt-6 flex flex-col gap-3', classNames?.features)}>
                        {features.map((feature) => (
                            <li
                                key={feature}
                                className={cn('flex items-start gap-2 text-sm text-muted-foreground', classNames?.featureItem)}
                            >
                                <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                ) : null}

                {children}

                {ctaLabel ? (
                    <div className={cn('mt-6', classNames?.cta)}>
                        {ctaHref ? (
                            <Button asChild variant={ctaVariant} className="w-full">
                                <Link href={ctaHref}>{ctaLabel}</Link>
                            </Button>
                        ) : (
                            <Button variant={ctaVariant} className="w-full">
                                {ctaLabel}
                            </Button>
                        )}
                    </div>
                ) : null}

                {footer ? (
                    <div className={cn('mt-6 text-sm text-muted-foreground', classNames?.footer)}>{footer}</div>
                ) : null}
            </div>
        </Card>
    )
}

export { PricingCard }
