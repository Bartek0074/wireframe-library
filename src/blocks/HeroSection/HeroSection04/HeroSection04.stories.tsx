import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeroSection04 } from './HeroSection04'
import '@/app/storybook.css'

const meta: Meta<typeof HeroSection04> = {
    title: 'Blocks/Hero Section/Split with Image Tiles on Right',
    component: HeroSection04,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeroSection04>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeroSection04 />
    ),
}


