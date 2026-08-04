'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/atoms/Button/Button'
import { cn } from '@/lib/utils'

export interface CarouselProps extends React.ComponentProps<'div'> {
    children: React.ReactNode
    slideClassName?: string
    viewportClassName?: string
    trackClassName?: string
    autoplay?: boolean
    autoplayDelay?: number
    loop?: boolean
    showControls?: boolean
    previousLabel?: string
    nextLabel?: string
}

function Carousel({
    className,
    children,
    slideClassName = 'basis-full',
    viewportClassName,
    trackClassName,
    autoplay = false,
    autoplayDelay = 5000,
    loop = true,
    showControls = true,
    previousLabel = 'Previous slide',
    nextLabel = 'Next slide',
    ...props
}: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop })
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const updateControls = React.useCallback(() => {
        if (!emblaApi) return

        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    React.useEffect(() => {
        if (!emblaApi) return

        emblaApi.on('select', updateControls)
        emblaApi.on('reInit', updateControls)

        const frame = requestAnimationFrame(updateControls)

        return () => {
            cancelAnimationFrame(frame)
            emblaApi.off('select', updateControls)
            emblaApi.off('reInit', updateControls)
        }
    }, [emblaApi, updateControls])

    React.useEffect(() => {
        if (!emblaApi || !autoplay) return undefined

        const interval = window.setInterval(() => {
            emblaApi.scrollNext()
        }, autoplayDelay)

        return () => {
            window.clearInterval(interval)
        }
    }, [autoplay, autoplayDelay, emblaApi])

    return (
        <div className={cn('relative', className)} {...props}>
            <div className={cn('overflow-hidden', viewportClassName)} ref={emblaRef}>
                <div className={cn('flex', trackClassName)}>
                    {React.Children.toArray(children).map((child, index) => (
                        <div key={index} className={cn('min-w-0 shrink-0', slideClassName)}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {showControls ? (
                <div className="mt-6 flex items-center justify-center gap-3">
                    <Button
                        variant="secondary"
                        size="icon"
                        aria-label={previousLabel}
                        onClick={() => emblaApi?.scrollPrev()}
                        disabled={!canScrollPrev}
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        variant="secondary"
                        size="icon"
                        aria-label={nextLabel}
                        onClick={() => emblaApi?.scrollNext()}
                        disabled={!canScrollNext}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            ) : null}
        </div>
    )
}

Carousel.displayName = 'Carousel'

export { Carousel }