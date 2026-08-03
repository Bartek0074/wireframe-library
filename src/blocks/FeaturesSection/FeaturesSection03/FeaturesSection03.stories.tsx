import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FeaturesSection03 } from './FeaturesSection03'
import '@/app/storybook.css'

const meta: Meta<typeof FeaturesSection03> = {
    title: 'Blocks/Features Section/Centered',
    component: FeaturesSection03,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FeaturesSection03>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FeaturesSection03 />
    ),
}


