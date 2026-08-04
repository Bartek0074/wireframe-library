import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FeaturesSection05 } from './FeaturesSection05'
import '@/app/storybook.css'

const meta: Meta<typeof FeaturesSection05> = {
    title: 'Blocks/Features Section/Offset 2x2 grid',
    component: FeaturesSection05,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FeaturesSection05>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FeaturesSection05 />
    ),
}


