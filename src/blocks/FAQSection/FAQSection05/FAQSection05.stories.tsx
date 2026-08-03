import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FAQSection05 } from './FAQSection05'
import '@/app/storybook.css'

const meta: Meta<typeof FAQSection05> = {
    title: 'Blocks/FAQ Section/Three columns',
    component: FAQSection05,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FAQSection05>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FAQSection05 />
    ),
}


