import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AnnouncmentLink } from './AnnouncmentLink'
import '@/app/storybook.css'

const meta: Meta<typeof AnnouncmentLink> = {
    title: 'Components/Atoms/AnnouncmentLink',
    component: AnnouncmentLink,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
        },
        action: {
            control: 'text',
        },
        href: {
            control: 'text',
        },
        className: {
            control: 'text',
        },
    },
    args: {
        title: 'Check out our careers page.',
        action: 'Learn more',
        href: '#',
        className: 'w-fit',
    },
}

export default meta

type Story = StoryObj<typeof AnnouncmentLink>

export const Playground: Story = {}
