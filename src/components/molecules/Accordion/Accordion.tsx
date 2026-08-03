'use client'

import * as React from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

import { cn } from '@/lib/utils'

export interface AccordionItem {
    id?: string
    question: React.ReactNode
    answer: React.ReactNode
}

export interface AccordionProps extends React.ComponentProps<'div'> {
    items: AccordionItem[]
    defaultOpenIndex?: number | null
}

function Accordion({ className, items, defaultOpenIndex = 0, ...props }: AccordionProps) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(defaultOpenIndex)
    const baseId = React.useId()

    return (
        <div
            data-slot="accordion"
            className={cn('flex flex-col gap-2', className)}
            {...props}
        >
            {items.map((item, index) => {
                const isOpen = openIndex === index
                const triggerId = item.id ? `${item.id}-trigger` : `${baseId}-trigger-${index}`
                const panelId = item.id ? `${item.id}-panel` : `${baseId}-panel-${index}`

                return (
                    <React.Fragment key={item.id ?? index}>
                        {index > 0 ? (
                            <div
                                aria-hidden="true"
                                className="h-px bg-linear-to-r from-border/80 via-border/60 to-transparent opacity-70 transition-opacity duration-300"
                            />
                        ) : null}

                        <div
                            data-slot="accordion-item"
                            data-state={isOpen ? 'open' : 'closed'}
                            className="rounded-2xl bg-transparent transition-colors"
                        >
                            <button
                                type="button"
                                id={triggerId}
                                aria-controls={panelId}
                                aria-expanded={isOpen}
                                data-slot="accordion-trigger"
                                data-state={isOpen ? 'open' : 'closed'}
                                className={cn(
                                    'flex w-full items-center gap-3 rounded-2xl bg-transparent px-0 py-3 text-left cursor-pointer',
                                    'text-base font-semibold text-primary transition-colors focus-visible:outline-none'
                                )}
                                onClick={() => {
                                    setOpenIndex(isOpen ? null : index)
                                }}
                            >
                                <span className="relative size-5 shrink-0">
                                    <PlusIcon
                                        aria-hidden="true"
                                        className={cn(
                                            'absolute inset-0 size-5 text-muted-foreground transition-all duration-200 ease-out',
                                            isOpen ? 'scale-75 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
                                        )}
                                    />
                                    <MinusIcon
                                        aria-hidden="true"
                                        className={cn(
                                            'absolute inset-0 size-5 text-muted-foreground transition-all duration-200 ease-out',
                                            isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-90 opacity-0'
                                        )}
                                    />
                                </span>
                                <span>{item.question}</span>
                            </button>

                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={triggerId}
                                data-slot="accordion-content"
                                data-state={isOpen ? 'open' : 'closed'}
                                className={cn(
                                    'grid overflow-hidden pl-8 transition-[grid-template-rows,opacity] duration-300 ease-out',
                                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                )}
                            >
                                <div className="min-h-0 overflow-hidden">
                                    <div className="pb-4 text-base text-muted-foreground">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export { Accordion }