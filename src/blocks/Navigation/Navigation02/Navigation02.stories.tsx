import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Navigation02 } from './Navigation02'
import '@/app/storybook.css'

const meta: Meta<typeof Navigation02> = {
    title: 'Blocks/Navigation/Simple + CTA',
    component: Navigation02,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `
### A clean and responsive top navigation with a logo, navigation links, CTA buttons, and a mobile drawer.

### When to use:
- SaaS products
- Landing pages
- Startup websites
- Marketing websites
- Corporate websites
- Small to medium-sized projects
    `,
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof Navigation02>

export const Default: Story = {
    name: 'Default',
    render: (_) => (
        <Navigation02 />
    ),
}


