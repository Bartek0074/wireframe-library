import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeaderSection01 } from './HeaderSection01'
import '@/app/storybook.css'

const meta: Meta<typeof HeaderSection01> = {
    title: 'Blocks/Header Section/Simple',
    component: HeaderSection01,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeaderSection01>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeaderSection01 />
    ),
}


