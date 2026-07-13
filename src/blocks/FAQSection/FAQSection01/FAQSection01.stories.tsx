import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FAQSection01 } from './FAQSection01'
import '@/app/storybook.css'

const meta: Meta<typeof FAQSection01> = {
    title: 'Blocks/FAQ Section/Offset with supporting text',
    component: FAQSection01,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FAQSection01>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FAQSection01 />
    ),
}


