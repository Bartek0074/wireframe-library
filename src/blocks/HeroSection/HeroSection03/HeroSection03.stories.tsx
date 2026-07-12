import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeroSection03 } from './HeroSection03'
import '@/app/storybook.css'

const meta: Meta<typeof HeroSection03> = {
    title: 'Blocks/Hero Section/Split with Offset Image on Right',
    component: HeroSection03,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeroSection03>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeroSection03 />
    ),
}


