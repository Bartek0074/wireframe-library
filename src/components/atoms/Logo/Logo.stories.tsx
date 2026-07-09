import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Logo } from './Logo'
import '@/app/storybook.css'

const meta: Meta<typeof Logo> = {
    title: 'Components/Atoms/Logo',
    component: Logo,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'inline-radio',
            options: ['squareNeutral', 'squareBrand', 'wideNeutral', 'wideBrand'],
        },
        size: {
            control: 'inline-radio',
            options: ['sm', 'default', 'lg'],
        },
    },
    args: {
        variant: 'squareNeutral',
        size: 'default',
    },
}

export default meta

type Story = StoryObj<typeof Logo>

export const Playground: Story = {}

export const Variants: Story = {
    // eslint-disable-next-line
    render: (_) => (
        <div className="flex flex-col items-start gap-3">
            <Logo variant="squareNeutral" size="default" />
            <Logo variant="squareBrand" size="default" />
            <Logo variant="wideNeutral" size="default" />
            <Logo variant="wideBrand" size="default" />
        </div>
    ),
}

export const Sizes: Story = {
    // eslint-disable-next-line
    render: (_) => (
        <div className="flex flex-col items-start gap-3">
            <Logo size="sm" />
            <Logo size="default" />
            <Logo size="lg" />
        </div>
    ),
}
