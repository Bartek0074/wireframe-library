import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TestimonialsSection04 } from './TestimonialsSection04'
import '@/app/storybook.css'

const meta: Meta<typeof TestimonialsSection04> = {
    title: 'Blocks/Testimonials Section/Featured testimonial with CTA',
    component: TestimonialsSection04,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestimonialsSection04>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <TestimonialsSection04 />
    ),
}
