import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer01 } from './Footer01'
import '@/app/storybook.css'

const meta: Meta<typeof Footer01> = {
    title: 'Blocks/Footer/Small (Simple)',
    component: Footer01,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer01>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <Footer01 />
    ),
}


