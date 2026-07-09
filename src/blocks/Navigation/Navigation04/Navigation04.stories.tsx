import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Navigation04 } from './Navigation04'
import '@/app/storybook.css'

const meta: Meta<typeof Navigation04> = {
    title: 'Blocks/Navigation/Dropdown',
    component: Navigation04,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Navigation04>

export const Default: Story = {
    name: 'Default',
    render: (_) => (
        <Navigation04 />
    ),
}


