import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FeaturesSection01 } from './FeaturesSection01'
import '@/app/storybook.css'

const meta: Meta<typeof FeaturesSection01> = {
    title: 'Blocks/Features Section/Simple (without heading)',
    component: FeaturesSection01,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FeaturesSection01>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FeaturesSection01 />
    ),
}


