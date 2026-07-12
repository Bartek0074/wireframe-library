import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeaderSection09 } from './HeaderSection09'
import '@/app/storybook.css'

const meta: Meta<typeof HeaderSection09> = {
    title: 'Blocks/Header Section/With Stats and Links',
    component: HeaderSection09,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeaderSection09>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeaderSection09 />
    ),
}


