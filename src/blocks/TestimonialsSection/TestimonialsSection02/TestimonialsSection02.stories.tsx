import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TestimonialsSection02 } from './TestimonialsSection02'
import '@/app/storybook.css'

const meta: Meta<typeof TestimonialsSection02> = {
    title: 'Blocks/Testimonials Section/Split with featured testimonial',
    component: TestimonialsSection02,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TestimonialsSection02>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <TestimonialsSection02 />
    ),
}
