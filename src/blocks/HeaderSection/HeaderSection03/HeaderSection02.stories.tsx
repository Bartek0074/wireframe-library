import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeaderSection03 } from './HeaderSection03'
import '@/app/storybook.css'

const meta: Meta<typeof HeaderSection03> = {
    title: 'Blocks/Header Section/Simple with Breadcrumb',
    component: HeaderSection03,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeaderSection03>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeaderSection03 />
    ),
}


