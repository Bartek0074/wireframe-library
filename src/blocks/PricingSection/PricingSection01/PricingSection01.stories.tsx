import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { PricingSection01 } from './PricingSection01'
import '@/app/storybook.css'

const meta: Meta<typeof PricingSection01> = {
    title: 'Blocks/Pricing Section/Simple three-column pricing',
    component: PricingSection01,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PricingSection01>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <PricingSection01 />,
}
