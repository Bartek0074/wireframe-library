import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FAQSection07 } from './FAQSection07'
import '@/app/storybook.css'

const meta: Meta<typeof FAQSection07> = {
    title: 'Blocks/FAQ Section/Three columns with Contact CTA',
    component: FAQSection07,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FAQSection07>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FAQSection07 />
    ),
}


