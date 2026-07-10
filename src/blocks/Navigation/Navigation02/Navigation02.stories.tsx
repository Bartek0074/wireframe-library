import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Navigation02 } from './Navigation02'
import '@/app/storybook.css'

const meta: Meta<typeof Navigation02> = {
    title: 'Blocks/Navigation/Simple with CTA',
    component: Navigation02,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Navigation02>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <Navigation02 />
    ),
}


