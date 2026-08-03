import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FAQSection06 } from './FAQSection06'
import '@/app/storybook.css'

const meta: Meta<typeof FAQSection06> = {
    title: 'Blocks/FAQ Section/With image',
    component: FAQSection06,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FAQSection06>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FAQSection06 />
    ),
}


