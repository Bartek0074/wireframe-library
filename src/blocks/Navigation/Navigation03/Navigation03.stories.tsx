import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Navigation03 } from './Navigation03'
import '@/app/storybook.css'

const meta: Meta<typeof Navigation03> = {
    title: 'Blocks/Navigation/Centered',
    component: Navigation03,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Navigation03>

export const Default: Story = {
    name: 'Default',
    render: (_) => (
        <Navigation03 />
    ),
}


