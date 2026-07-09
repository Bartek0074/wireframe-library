import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ArrowRight, Check, Download, Plus } from 'lucide-react'
import { Button } from './Button'
import '@/app/storybook.css'

const iconOptions = {
    none: null,
    Plus: <Plus />,
    Check: <Check />,
    Download: <Download />,
    ArrowRight: <ArrowRight />,
} as const

type IconOption = keyof typeof iconOptions

type StoryArgs = Omit<React.ComponentProps<typeof Button>, 'children'> & {
    label: string
    iconOption: IconOption
    iconPosition: 'left' | 'right'
}

const meta: Meta<StoryArgs> = {
    title: 'Components/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'inline-radio',
            options: ['default', 'secondary', 'brand', 'ghost', 'destructive', 'link', 'mutedLink'],
        },
        size: {
            control: 'inline-radio',
            options: ['default', 'sm', 'lg', 'icon'],
        },
        active: {
            control: 'boolean',
        },
        label: {
            control: 'text',
        },
        disabled: {
            control: 'boolean',
        },
        iconPosition: {
            control: 'inline-radio',
            options: ['left', 'right'],
        },
        iconOption: {
            control: 'select',
            options: Object.keys(iconOptions),
            name: 'icon',
        },
        asChild: {
            table: {
                disable: true,
            },
        },
        onClick: {
            action: 'clicked',
            table: {
                disable: true,
            },
        },
    },
    args: {
        label: 'Button',
        variant: 'default',
        size: 'default',
        disabled: false,
        iconPosition: 'left',
        iconOption: 'none',
    },
}

export default meta

type Story = StoryObj<StoryArgs>

function renderButton({ iconOption, iconPosition, label, size, ...args }: StoryArgs) {
    const icon = iconOptions[iconOption]
    const isIconOnly = size === 'icon'

    return (
        <Button size={size} {...args}>
            {isIconOnly ? (
                icon ?? <Plus />
            ) : (
                <>
                    {iconPosition === 'left' ? icon : null}
                    {label && <span>{label}</span>}
                    {iconPosition === 'right' ? icon : null}
                </>
            )}
        </Button>
    )
}

export const Playground: Story = {
    render: renderButton,
}

export const Variants: Story = {
    render: (_) => (
        <div className="flex flex-col gap-3 items-start">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="brand">Brand</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button variant="mutedLink">Muted Link</Button>
        </div>
    ),
}

export const Sizes: Story = {
    render: (_) => (
        <div className="flex flex-col gap-3 items-start">
            <Button size="lg">Large</Button>
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button size="icon" aria-label="Add item">
                <Plus />
            </Button>
        </div>
    ),
}

export const WithIcons: Story = {
    render: (_) => (
        <div className="flex flex-col items-start gap-3">
            <Button>
                <Plus />
                <span>Create new</span>
            </Button>
            <Button variant="secondary">
                <span>Download report</span>
                <Download />
            </Button>
            <Button size="icon" variant="secondary" aria-label="Confirm action">
                <Check />
            </Button>
        </div>
    ),
}

export const Disabled: Story = {
    render: (_) => (
        <div className="flex flex-col items-start gap-3">
            <Button disabled>Disabled button</Button>
        </div>
    ),
}

export const AsLink: Story = {
    render: (_) => (
        <Button asChild variant="link">
            <a href="#">
                Learn more
                <ArrowRight />
            </a>
        </Button>
    ),
}
