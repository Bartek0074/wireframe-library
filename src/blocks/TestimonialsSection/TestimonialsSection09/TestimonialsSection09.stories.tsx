import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TestimonialsSection09 } from './TestimonialsSection09'
import '@/app/storybook.css'

const meta: Meta<typeof TestimonialsSection09> = {
    title: 'Blocks/Testimonials Section/Simple testimonial carousel',
    component: TestimonialsSection09,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestimonialsSection09>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <TestimonialsSection09 />
    ),
}
