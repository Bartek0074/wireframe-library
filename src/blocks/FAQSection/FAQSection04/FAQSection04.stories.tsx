import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FAQSection04 } from './FAQSection04'
import '@/app/storybook.css'

const meta: Meta<typeof FAQSection04> = {
    title: 'Blocks/FAQ Section/Three columns',
    component: FAQSection04,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FAQSection04>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FAQSection04 />
    ),
}


