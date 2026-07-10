import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeaderSection05 } from './HeaderSection05'
import '@/app/storybook.css'

const meta: Meta<typeof HeaderSection05> = {
    title: 'Blocks/Header Section/Centered',
    component: HeaderSection05,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeaderSection05>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeaderSection05 />
    ),
}


