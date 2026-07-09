import * as React from 'react'

import { cn } from '@/lib/utils'

import { PhotoIcon } from '@heroicons/react/24/outline'

type PlaceholderImageProps = {
    className?: string,
    iconSize?: 'small' | 'default' | 'large' | 'extra-large',
}

const ImageIcon = ({
    className,
}: { className?: string }) => <PhotoIcon className={cn("text-muted-foreground/30 size-12", className)} />


function PlaceholderImage({
    className,
    iconSize= 'default'
}: PlaceholderImageProps) {
    return (
        <div className={cn(
            'border-input bg-card relative overflow-hidden rounded-lg border w-60 h-60',
            className
        )}>
            <div className="bg-card absolute inset-0 flex items-center justify-center">
                <ImageIcon className={cn(
                    iconSize === 'small' && 'size-6',
                    iconSize === 'default' && 'size-12',
                    iconSize === 'large' && 'size-24',
                    iconSize === 'extra-large' && 'size-48'
                )} />
            </div>
        </div>
    )
}

export { PlaceholderImage }
