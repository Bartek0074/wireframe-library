import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { PricingCard } from './PricingCard'
import '@/app/storybook.css'

const meta: Meta<typeof PricingCard> = {
    title: 'Components/Molecules/PricingCard',
    component: PricingCard,
    tags: ['autodocs'],
    args: {
        title: 'Pro',
        description: 'For growing teams shipping product weekly.',
        price: '$39',
        billingPeriod: '/month',
        features: ['Unlimited projects', 'Team collaboration', 'API access', 'Priority support'],
        ctaLabel: 'Start free trial',
        ctaHref: '#',
    },
    parameters: {
        layout: 'centered',
    },
}

export default meta

type Story = StoryObj<typeof PricingCard>

export const Default: Story = {
    render: (args) => (
        <div className="w-full max-w-sm">
            <PricingCard {...args} />
        </div>
    ),
}

export const Highlighted: Story = {
    args: {
        highlighted: true,
        badge: 'Most popular',
    },
    render: (args) => (
        <div className="w-full max-w-sm">
            <PricingCard {...args} />
        </div>
    ),
}
