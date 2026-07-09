import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer06 } from './Footer06'
import '@/app/storybook.css'

const meta: Meta<typeof Footer06> = {
    title: 'Blocks/Footer/Medium',
    component: Footer06,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer06>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <Footer06 />
    ),
}


