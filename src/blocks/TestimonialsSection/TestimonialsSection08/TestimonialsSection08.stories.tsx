import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TestimonialsSection08 } from './TestimonialsSection08'
import '@/app/storybook.css'

const meta: Meta<typeof TestimonialsSection08> = {
    title: 'Blocks/Testimonials Section/Logo cloud with testimonial grid',
    component: TestimonialsSection08,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestimonialsSection08>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <TestimonialsSection08 />
    ),
}
