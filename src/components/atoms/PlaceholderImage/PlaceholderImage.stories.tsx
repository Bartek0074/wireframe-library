import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { PlaceholderImage } from './PlaceholderImage'
import '@/app/storybook.css'

type StoryArgs = React.ComponentProps<typeof PlaceholderImage>

const meta: Meta<StoryArgs> = {
    title: 'Components/Atoms/PlaceholderImage',
    component: PlaceholderImage,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
        },
        iconSize: {
            control: {
                type: 'select',
                options: ['small', 'default', 'large', 'extra-large'],
            },
        },
    },
    args: {
        className: 'w-80 h-auto aspect-square',
        iconSize: 'default',
    },
}

export default meta

type Story = StoryObj<StoryArgs>

export const Playground: Story = {}


export const WithDifferentSizing: Story = {
    // eslint-disable-next-line
    render: (_) => (
        <div className="flex flex-col gap-4 items-start">
            <PlaceholderImage className="h-120 w-150" iconSize="extra-large" />
            <PlaceholderImage className="h-60 w-60" iconSize="large" />
            <PlaceholderImage className="h-45 w-45" iconSize="default" />
        </div>
    ),
}