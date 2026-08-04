import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TestimonialsSection03 } from './TestimonialsSection03'
import '@/app/storybook.css'

const meta: Meta<typeof TestimonialsSection03> = {
    title: 'Blocks/Testimonials Section/Offset heading with single testimonial',
    component: TestimonialsSection03,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestimonialsSection03>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <TestimonialsSection03 />
    ),
}
