import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { CTASection06 } from './CTASection06'
import '@/app/storybook.css'

const meta: Meta<typeof CTASection06> = {
    title: 'Blocks/CTA Section/Centered CTA with trust indicators',
    component: CTASection06,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CTASection06>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <CTASection06 />,
}