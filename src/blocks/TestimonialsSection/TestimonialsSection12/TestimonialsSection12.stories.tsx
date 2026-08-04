import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TestimonialsSection12 } from './TestimonialsSection12'
import '@/app/storybook.css'

const meta: Meta<typeof TestimonialsSection12> = {
    title: 'Blocks/Testimonials Section/Bento testimonial layout',
    component: TestimonialsSection12,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestimonialsSection12>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <TestimonialsSection12 />
    ),
}
