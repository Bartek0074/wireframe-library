import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer03 } from './Footer03'
import '@/app/storybook.css'

const meta: Meta<typeof Footer03> = {
    title: 'Blocks/Footer/Small With Links',
    component: Footer03,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer03>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <Footer03 />
    ),
}


