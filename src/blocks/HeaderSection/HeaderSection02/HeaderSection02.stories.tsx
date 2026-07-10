import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeaderSection02 } from './HeaderSection02'
import '@/app/storybook.css'

const meta: Meta<typeof HeaderSection02> = {
    title: 'Blocks/Header Section/Simple with Eyebrow',
    component: HeaderSection02,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeaderSection02>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeaderSection02 />
    ),
}


