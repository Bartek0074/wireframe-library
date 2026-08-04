import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TestimonialsSection06 } from './TestimonialsSection06'
import '@/app/storybook.css'

const meta: Meta<typeof TestimonialsSection06> = {
    title: 'Blocks/Testimonials Section/Offset heading with testimonial grid',
    component: TestimonialsSection06,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestimonialsSection06>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <TestimonialsSection06 />
    ),
}
