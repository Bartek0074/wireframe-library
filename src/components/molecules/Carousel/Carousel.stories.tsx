import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Avatar, AvatarFallback } from '@/components/atoms/Avatar'
import { Card } from '@/components/molecules/Card'

import { Carousel } from './Carousel'
import '@/app/storybook.css'

const items = [
    { author: 'Alyssa Stone', title: 'Design Lead', company: 'Northline' },
    { author: 'Marcus Hill', title: 'Growth Manager', company: 'Bright Harbor' },
    { author: 'Nina Park', title: 'Product Director', company: 'Luma Studio' },
    { author: 'Owen Ford', title: 'Brand Strategist', company: 'Signal Path' },
    { author: 'Tara Brooks', title: 'Marketing Lead', company: 'Cinder Works' },
    { author: 'Leo Bennett', title: 'Creative Director', company: 'Field Note' },
]

const meta: Meta<typeof Carousel> = {
    title: 'Components/Molecules/Carousel',
    component: Carousel,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
    render: () => (
        <div className="max-w-6xl">
            <Carousel
                autoplay
                autoplayDelay={3500}
                trackClassName="-ml-4"
                slideClassName="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
                {items.map((item) => (
                    <Card key={item.author} className="h-full border-border shadow-none">
                        <div className="flex h-full flex-col gap-5 px-5 py-6 text-center">
                            <p className="text-4xl leading-none text-brand/35">“</p>
                            <p className="text-base leading-7 text-pretty text-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt.
                            </p>
                            <div className="mt-auto flex items-center justify-center gap-3 border-t border-border pt-5">
                                <Avatar className="size-10 border border-border">
                                    <AvatarFallback />
                                </Avatar>
                                <div className="text-left">
                                    <p className="font-semibold text-primary">{item.author}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {item.title} · {item.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </Carousel>
        </div>
    ),
}