import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Breadcrumb } from './Breadcrumb'
import '@/app/storybook.css'

type StoryArgs = React.ComponentProps<typeof Breadcrumb>

const baseItems = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Wireframe Library', href: '#' },
    { label: 'Breadcrumb' },
]

const meta: Meta<StoryArgs> = {
    title: 'Components/Atoms/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'inline-radio',
            options: ['default', 'wireframe'],
        },
        items: {
            control: 'object',
        },
        separator: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        variant: 'default',
        items: baseItems,
    },
}

export default meta

type Story = StoryObj<StoryArgs>

export const Playground: Story = {}

export const Variants: Story = {
    // eslint-disable-next-line
    render: (_) => (
        <div className="flex flex-col gap-5">
            <Breadcrumb variant="default" items={baseItems} />
            <Breadcrumb variant="wireframe" items={baseItems} />
        </div>
    ),
}

export const ShortPath: Story = {
    args: {
        items: [
            { label: 'Home', href: '#' },
            { label: 'Settings' },
        ],
    },
}