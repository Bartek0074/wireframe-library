import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer07 } from './Footer07'
import '@/app/storybook.css'

const meta: Meta<typeof Footer07> = {
    title: 'Blocks/Footer/Medium With Newsletter',
    component: Footer07,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer07>

export const Default: Story = {
    name: 'Default',
    render: (_) => (
        <Footer07 />
    ),
}


