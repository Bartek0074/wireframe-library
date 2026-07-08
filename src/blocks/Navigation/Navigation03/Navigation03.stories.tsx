import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Navigation03 } from './Navigation03'
import '@/app/storybook.css'

const meta: Meta<typeof Navigation03> = {
    title: 'Blocks/Navigation/Centered',
    component: Navigation03,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `
### A balanced and responsive top navigation with a centered logo, navigation links on both sides, and a mobile drawer.

### When to use:
- Portfolio
- Creative websites
- Personal websites
- Luxury products
- Small to medium-sized projects
    `,
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof Navigation03>

export const Default: Story = {
    name: 'Default',
    render: (_) => (
        <Navigation03 />
    ),
}


