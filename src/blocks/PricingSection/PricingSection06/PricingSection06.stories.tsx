import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { PricingSection06 } from './PricingSection06'
import '@/app/storybook.css'

const meta: Meta<typeof PricingSection06> = {
    title: 'Blocks/Pricing Section/Pricing with comparison table',
    component: PricingSection06,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PricingSection06>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <PricingSection06 />,
}
