import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { CTASection02 } from './CTASection02'
import '@/app/storybook.css'

const meta: Meta<typeof CTASection02> = {
    title: 'Blocks/CTA Section/Split text and actions',
    component: CTASection02,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CTASection02>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => <CTASection02 />,
}