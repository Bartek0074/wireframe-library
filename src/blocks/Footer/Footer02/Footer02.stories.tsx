import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer02 } from './Footer02'
import '@/app/storybook.css'

const meta: Meta<typeof Footer02> = {
    title: 'Blocks/Footer/Small',
    component: Footer02,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer02>

export const Default: Story = {
    name: 'Default',
    render: (_) => (
        <Footer02 />
    ),
}


