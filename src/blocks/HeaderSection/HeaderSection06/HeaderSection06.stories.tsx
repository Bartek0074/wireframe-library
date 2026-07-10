import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeaderSection06 } from './HeaderSection06'
import '@/app/storybook.css'

const meta: Meta<typeof HeaderSection06> = {
    title: 'Blocks/Header Section/Centered with Eyebrow',
    component: HeaderSection06,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeaderSection06>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeaderSection06 />
    ),
}


