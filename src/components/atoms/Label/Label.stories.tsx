import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input } from '@/components/atoms/Input'
import { Label } from './Label'
import '@/app/storybook.css'

type StoryArgs = React.ComponentProps<typeof Label>

const meta: Meta<StoryArgs> = {
    title: 'Components/Atoms/Label',
    component: Label,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'inline-radio',
            options: ['default', 'wireframe'],
        },
        skeletonWidthClass: {
            control: 'select',
            options: ['', 'w-16', 'w-24', 'w-32', 'w-40', 'w-full'],
        },
        children: {
            control: 'text',
        },
    },
    args: {
        variant: 'default',
        skeletonWidthClass: '',
        children: 'Email address',
    },
}

export default meta

type Story = StoryObj<StoryArgs>

export const Playground: Story = {}

export const Variants: Story = {
    // eslint-disable-next-line
    render: (_) => (
        <div className="flex w-full max-w-sm flex-col gap-3">
            <Label variant="default">Email address</Label>
            <Label variant="wireframe">Email address</Label>
        </div>
    ),
}

export const WithInput: Story = {
    render: (args) => (
        <div className="flex w-full max-w-sm flex-col gap-2">
            <Label htmlFor="storybook-email" {...args} />
            <Input id="storybook-email" type="email" placeholder="you@example.com" />
        </div>
    ),
}

export const Disabled: Story = {
    render: (args) => (
        <div className="flex w-full max-w-sm flex-col gap-2" data-disabled="true">
            <Label htmlFor="storybook-disabled" {...args}>
                Disabled field
            </Label>
            <Input id="storybook-disabled" disabled placeholder="Disabled input" />
        </div>
    ),
}