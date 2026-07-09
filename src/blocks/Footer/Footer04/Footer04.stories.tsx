import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer04 } from './Footer04'
import '@/app/storybook.css'

const meta: Meta<typeof Footer04> = {
    title: 'Blocks/Footer/Small With Socials',
    component: Footer04,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer04>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <Footer04 />
    ),
}


