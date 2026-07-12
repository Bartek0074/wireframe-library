import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeroSection02 } from './HeroSection02'
import '@/app/storybook.css'

const meta: Meta<typeof HeroSection02> = {
    title: 'Blocks/Hero Section/Split with Image on Right',
    component: HeroSection02,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeroSection02>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <HeroSection02 />
    ),
}


