import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { CTASection04 } from './CTASection04'
import '@/app/storybook.css'

const meta: Meta<typeof CTASection04> = {
    title: 'Blocks/CTA Section/Split layout with image composition',
    component: CTASection04,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CTASection04>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <CTASection04 />,
}