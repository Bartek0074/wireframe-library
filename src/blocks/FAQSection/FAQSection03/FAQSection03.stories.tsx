import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FAQSection03 } from './FAQSection03'
import '@/app/storybook.css'

const meta: Meta<typeof FAQSection03> = {
    title: 'Blocks/FAQ Section/Side by side',
    component: FAQSection03,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FAQSection03>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FAQSection03 />
    ),
}


