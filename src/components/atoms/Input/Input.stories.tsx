import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input } from './Input'
import '@/app/storybook.css'

type StoryArgs = React.ComponentProps<typeof Input> & {
    variant: 'default' | 'wireframe'
}

const meta: Meta<StoryArgs> = {
    title: 'Components/Atoms/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'inline-radio',
            options: ['default', 'wireframe'],
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'search', 'tel', 'url'],
        },
        disabled: {
            control: 'boolean',
        },
        placeholder: {
            control: 'text',
        },
    },
    args: {
        variant: 'default',
        type: 'text',
        placeholder: 'Type here...',
        disabled: false,
    },
}

export default meta

type Story = StoryObj<StoryArgs>

export const Playground: Story = {}

export const Variants: Story = {
    render: (_) => (
        <div className="flex w-full max-w-sm flex-col gap-4">
            <Input variant="default" placeholder="Default input" />
            <Input variant="wireframe" />
        </div>
    ),
}

export const Disabled: Story = {
    render: (_) => (
        <div className="flex w-full max-w-sm flex-col gap-4">
            <Input disabled placeholder="Disabled default" />
            <Input disabled variant="wireframe" />
        </div>
    ),
}