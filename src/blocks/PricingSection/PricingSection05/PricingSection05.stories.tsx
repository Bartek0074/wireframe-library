import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { PricingSection05 } from './PricingSection05'
import '@/app/storybook.css'

const meta: Meta<typeof PricingSection05> = {
    title: 'Blocks/Pricing Section/Pricing with FAQ',
    component: PricingSection05,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PricingSection05>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <PricingSection05 />,
}
