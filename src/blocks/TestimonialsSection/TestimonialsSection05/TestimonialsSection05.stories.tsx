import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TestimonialsSection05 } from './TestimonialsSection05'
import '@/app/storybook.css'

const meta: Meta<typeof TestimonialsSection05> = {
    title: 'Blocks/Testimonials Section/Responsive testimonial grid',
    component: TestimonialsSection05,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestimonialsSection05>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <TestimonialsSection05 />
    ),
}
