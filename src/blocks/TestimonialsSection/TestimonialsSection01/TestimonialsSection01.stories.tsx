import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TestimonialsSection01 } from './TestimonialsSection01'
import '@/app/storybook.css'

const meta: Meta<typeof TestimonialsSection01> = {
    title: 'Blocks/Testimonials Section/Centered single testimonial',
    component: TestimonialsSection01,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestimonialsSection01>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <TestimonialsSection01 />
    ),
}
