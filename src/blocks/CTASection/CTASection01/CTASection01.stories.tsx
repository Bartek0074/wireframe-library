import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { CTASection01 } from './CTASection01'
import '@/app/storybook.css'

const meta: Meta<typeof CTASection01> = {
    title: 'Blocks/CTA Section/Centered heading with two actions',
    component: CTASection01,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CTASection01>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <CTASection01 />,
}