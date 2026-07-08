import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Navigation04 } from './Navigation04'
import '@/app/storybook.css'

const meta: Meta<typeof Navigation04> = {
    title: 'Blocks/Navigation 04 (Dropdown)',
    component: Navigation04,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `
### A responsive top navigation with a logo, navigation links, support for grouped navigation items, and a mobile drawer.

### When to use:
- Saas applications
- E-commerce websites
- Documentation websites
- Corporate websites
- Medium to large-sized projects
    `,
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof Navigation04>

export const Default: Story = {
    name: 'Default',
    render: (_) => (
        <Navigation04 />
    ),
}


