import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TestimonialsSection10 } from './TestimonialsSection10'
import '@/app/storybook.css'

const meta: Meta<typeof TestimonialsSection10> = {
    title: 'Blocks/Testimonials Section/Statistics with featured testimonial',
    component: TestimonialsSection10,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestimonialsSection10>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <TestimonialsSection10 />
    ),
}
