import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { PricingSection08 } from './PricingSection08'
import '@/app/storybook.css'

const meta: Meta<typeof PricingSection08> = {
    title: 'Blocks/Pricing Section/Pricing with trust indicators',
    component: PricingSection08,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PricingSection08>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <PricingSection08 />,
}
