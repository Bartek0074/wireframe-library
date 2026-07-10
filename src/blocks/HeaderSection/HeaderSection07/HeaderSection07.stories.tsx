import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeaderSection07 } from './HeaderSection07'
import '@/app/storybook.css'

const meta: Meta<typeof HeaderSection07> = {
    title: 'Blocks/Header Section/Centered with CTA',
    component: HeaderSection07,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeaderSection07>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeaderSection07 />
    ),
}


