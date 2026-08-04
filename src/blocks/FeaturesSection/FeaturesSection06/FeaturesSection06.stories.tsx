import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FeaturesSection06 } from './FeaturesSection06'
import '@/app/storybook.css'

const meta: Meta<typeof FeaturesSection06> = {
    title: 'Blocks/Features Section/Offset with feature list',
    component: FeaturesSection06,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FeaturesSection06>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FeaturesSection06 />
    ),
}


