import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeaderSection08 } from './HeaderSection08'
import '@/app/storybook.css'

const meta: Meta<typeof HeaderSection08> = {
    title: 'Blocks/Header Section/With Stats',
    component: HeaderSection08,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeaderSection08>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeaderSection08 />
    ),
}


