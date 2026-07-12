import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeroSection05 } from './HeroSection05'
import '@/app/storybook.css'

const meta: Meta<typeof HeroSection05> = {
    title: 'Blocks/Hero Section/Centered with Trusted Brands',
    component: HeroSection05,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeroSection05>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeroSection05 />
    ),
}


