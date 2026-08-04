import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TestimonialsSection07 } from './TestimonialsSection07'
import '@/app/storybook.css'

const meta: Meta<typeof TestimonialsSection07> = {
    title: 'Blocks/Testimonials Section/Masonry testimonial grid',
    component: TestimonialsSection07,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestimonialsSection07>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <TestimonialsSection07 />
    ),
}
