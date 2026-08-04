import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FeaturesSection07 } from './FeaturesSection07'
import '@/app/storybook.css'

const meta: Meta<typeof FeaturesSection07> = {
    title: 'Blocks/Features Section/Bento grid',
    component: FeaturesSection07,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FeaturesSection07>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FeaturesSection07 />
    ),
}


