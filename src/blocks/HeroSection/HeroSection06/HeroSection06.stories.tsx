import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeroSection06 } from './HeroSection06'
import '@/app/storybook.css'

const meta: Meta<typeof HeroSection06> = {
    title: 'Blocks/Hero Section/Centered with Stats',
    component: HeroSection06,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeroSection06>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeroSection06 />
    ),
}


