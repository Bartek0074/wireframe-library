import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { CTASection03 } from './CTASection03'
import '@/app/storybook.css'

const meta: Meta<typeof CTASection03> = {
    title: 'Blocks/CTA Section/Centered CTA card',
    component: CTASection03,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CTASection03>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <CTASection03 />,
}