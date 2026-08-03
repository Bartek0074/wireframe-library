import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FAQSection02 } from './FAQSection02'
import '@/app/storybook.css'

const meta: Meta<typeof FAQSection02> = {
    title: 'Blocks/FAQ Section/Offset with accordion',
    component: FAQSection02,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FAQSection02>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FAQSection02 />
    ),
}


