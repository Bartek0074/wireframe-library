import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { PricingSection02 } from './PricingSection02'
import '@/app/storybook.css'

const meta: Meta<typeof PricingSection02> = {
    title: 'Blocks/Pricing Section/Centered pricing with highlighted plan',
    component: PricingSection02,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PricingSection02>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <PricingSection02 />,
}
