import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { BrandLogo } from './BrandLogo'
import '@/app/storybook.css'

const meta: Meta<typeof BrandLogo> = {
    title: 'Components/Atoms/Brand Logo',
    component: BrandLogo,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BrandLogo>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <BrandLogo />
    ),
}