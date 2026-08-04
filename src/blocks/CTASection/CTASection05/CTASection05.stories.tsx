import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { CTASection05 } from './CTASection05'
import '@/app/storybook.css'

const meta: Meta<typeof CTASection05> = {
    title: 'Blocks/CTA Section/Large full-width banner CTA',
    component: CTASection05,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CTASection05>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <CTASection05 />,
}