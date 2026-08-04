import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TestimonialsSection11 } from './TestimonialsSection11'
import '@/app/storybook.css'

const meta: Meta<typeof TestimonialsSection11> = {
    title: 'Blocks/Testimonials Section/Logo cloud with testimonials',
    component: TestimonialsSection11,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestimonialsSection11>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <TestimonialsSection11 />
    ),
}
