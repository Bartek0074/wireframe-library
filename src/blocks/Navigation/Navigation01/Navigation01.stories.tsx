import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Navigation01 } from './Navigation01'
import '@/app/storybook.css'

const meta: Meta<typeof Navigation01> = {
    title: 'Blocks/Navigation/Simple',
    component: Navigation01,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `
### A clean and responsive top navigation with a logo, navigation links, and a mobile drawer.

### When to use:
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

type Story = StoryObj<typeof Navigation01>

export const Default: Story = {
    name: 'Default',
    render: (_) => (
        <Navigation01 />
    ),
}


