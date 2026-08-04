import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { CTASection07 } from './CTASection07'
import '@/app/storybook.css'

const meta: Meta<typeof CTASection07> = {
    title: 'Blocks/CTA Section/Offset layout with composition and stacked content',
    component: CTASection07,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CTASection07>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <CTASection07 />,
}