import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { PricingSection07 } from './PricingSection07'
import '@/app/storybook.css'

const meta: Meta<typeof PricingSection07> = {
    title: 'Blocks/Pricing Section/Pricing with enterprise card',
    component: PricingSection07,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PricingSection07>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <PricingSection07 />,
}
