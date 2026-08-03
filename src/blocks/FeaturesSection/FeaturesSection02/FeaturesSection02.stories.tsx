import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FeaturesSection02 } from './FeaturesSection02'
import '@/app/storybook.css'

const meta: Meta<typeof FeaturesSection02> = {
    title: 'Blocks/Features Section/Simple',
    component: FeaturesSection02,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FeaturesSection02>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <FeaturesSection02 />
    ),
}


