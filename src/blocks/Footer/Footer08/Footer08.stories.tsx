import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer08 } from './Footer08'
import '@/app/storybook.css'

const meta: Meta<typeof Footer08> = {
    title: 'Blocks/Footer/Medium With Newsletter and Legal Links',
    component: Footer08,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer08>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <Footer08 />
    ),
}


