import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { PricingSection04 } from './PricingSection04'
import '@/app/storybook.css'

const meta: Meta<typeof PricingSection04> = {
    title: 'Blocks/Pricing Section/Two-plan comparison',
    component: PricingSection04,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PricingSection04>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <PricingSection04 />,
}
