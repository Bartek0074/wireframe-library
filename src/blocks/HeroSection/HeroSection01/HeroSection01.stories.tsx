import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeroSection01 } from './HeroSection01'
import '@/app/storybook.css'

const meta: Meta<typeof HeroSection01> = {
    title: 'Blocks/Hero Section/Centered',
    component: HeroSection01,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeroSection01>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeroSection01 />
    ),
}


