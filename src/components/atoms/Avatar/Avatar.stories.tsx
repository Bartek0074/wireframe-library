import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Avatar, AvatarFallback, AvatarImage } from './Avatar'
import '@/app/storybook.css'

type StoryArgs = React.ComponentProps<typeof Avatar> & {
    alt: string
    imageUrl: string
    initials: string
    showImage: boolean
}

function createAvatarDataUri(initials: string) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" role="img" aria-label="${initials}">
            <rect width="96" height="96" rx="48" fill="#e5e7eb" />
            <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#111827" font-family="Arial, sans-serif" font-size="34" font-weight="700">${initials}</text>
        </svg>
    `.trim()

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const meta: Meta<StoryArgs> = {
    title: 'Components/Atoms/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
        },
        alt: {
            control: 'text',
        },
        imageUrl: {
            control: 'text',
        },
        initials: {
            control: 'text',
        },
        showImage: {
            control: 'boolean',
        },
    },
    args: {
        className: 'size-12',
        alt: 'Taylor Brooks avatar',
        initials: 'TB',
        imageUrl: createAvatarDataUri('TB'),
        showImage: true,
    },
}

export default meta

type Story = StoryObj<StoryArgs>

function renderAvatar({ alt, imageUrl, initials, showImage, ...args }: StoryArgs) {
    return (
        <Avatar {...args}>
            {showImage ? <AvatarImage src={imageUrl} alt={alt} /> : null}
            <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
    )
}

export const Playground: Story = {
    render: renderAvatar,
}

export const Sizes: Story = {
    // eslint-disable-next-line
    render: (_) => (
        <div className="flex items-center gap-4">
            <Avatar className="size-8">
                <AvatarImage src={createAvatarDataUri('AA')} alt="Size 8 avatar" />
                <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <Avatar className="size-12">
                <AvatarImage src={createAvatarDataUri('BB')} alt="Size 12 avatar" />
                <AvatarFallback>BB</AvatarFallback>
            </Avatar>
            <Avatar className="size-16">
                <AvatarImage src={createAvatarDataUri('CC')} alt="Size 16 avatar" />
                <AvatarFallback>CC</AvatarFallback>
            </Avatar>
        </div>
    ),
}

export const FallbackOnly: Story = {
    // eslint-disable-next-line
    render: (_) => (
        <Avatar className="size-12">
            <AvatarFallback>TB</AvatarFallback>
        </Avatar>
    ),
}