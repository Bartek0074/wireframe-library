import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FeaturesSection04 } from './FeaturesSection04'
import '@/app/storybook.css'

const meta: Meta<typeof FeaturesSection04> = {
    title: 'Blocks/Features Section/With image',
    component: FeaturesSection04,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FeaturesSection04>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FeaturesSection04 />
    ),
}


