import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

import clsx from 'clsx'

export interface AnnouncmentLinkProps {
    href: string,
    title?: string,
    action?: string,
    className?: string,
}

function AnnouncmentLink({ href, title, action, className }: AnnouncmentLinkProps) {

    const classes = clsx(
        'group flex items-center justify-center gap-2 h-8 rounded-full px-3 border bg-card border-border hover:bg-accent/20 hover:border-brand/30 transition-colors',
        className
    )


    const titleClasses = clsx(
        'text-sm text-secondary-foreground/95',
    )

    const actionClasses = clsx(
        'flex items-center gap-1 text-sm font-bold text-brand/80 group-hover:text-brand/100 transition-colors',
    )

    return (
        <Link href={href} className={classes}>
            {title && <span className={titleClasses}>{title}</span>}
            {action && <span className={actionClasses}>{action} <ArrowRight className="size-4" strokeWidth={2.5} /></span>}
        </Link>
    )
}

export { AnnouncmentLink }
