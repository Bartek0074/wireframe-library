import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer10 } from './Footer10'
import '@/app/storybook.css'

const meta: Meta<typeof Footer10> = {
    title: 'Blocks/Footer/Large (Multi Column with Socials and Newsletter)',
    component: Footer10,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer10>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <Footer10 />
    ),
}


