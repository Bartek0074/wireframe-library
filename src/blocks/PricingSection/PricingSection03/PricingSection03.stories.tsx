import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { PricingSection03 } from './PricingSection03'
import '@/app/storybook.css'

const meta: Meta<typeof PricingSection03> = {
    title: 'Blocks/Pricing Section/Offset pricing layout',
    component: PricingSection03,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PricingSection03>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <PricingSection03 />,
}
