import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeaderSection04 } from './HeaderSection04'
import '@/app/storybook.css'

const meta: Meta<typeof HeaderSection04> = {
    title: 'Blocks/Header Section/Simple with CTA',
    component: HeaderSection04,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeaderSection04>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeaderSection04 />
    ),
}


