import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer05 } from './Footer05'
import '@/app/storybook.css'

const meta: Meta<typeof Footer05> = {
    title: 'Blocks/Footer/Small With Newsletter',
    component: Footer05,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer05>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <Footer05 />
    ),
}


