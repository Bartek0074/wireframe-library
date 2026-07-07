import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ChevronDown, Download, LayoutGrid, Shapes } from 'lucide-react'

import { Button } from '@/components/atoms/Button/Button'
import { Dropdown, DropdownContent, DropdownTrigger } from './Dropdown'
import { DropdownItem } from './DropdownItem'
import '@/app/storybook.css'

type StoryArgs = React.ComponentProps<typeof DropdownTrigger> & {
    label: string
}

const meta: Meta<StoryArgs> = {
    title: 'Molecules/Dropdown',
    component: DropdownTrigger,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'inline-radio',
            options: ['default', 'link'],
        },
        size: {
            control: 'inline-radio',
            options: ['default', 'sm', 'lg'],
        },
        label: {
            control: 'text',
        },
        asChild: {
            table: {
                disable: true,
            },
        },
        onClick: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        label: 'Products',
        variant: 'default',
        size: 'default',
    },
}

export default meta

type Story = StoryObj<StoryArgs>

function renderDropdown({ label, variant, size, ...args }: StoryArgs) {
    return (
        <Dropdown>
            <DropdownTrigger variant={variant} size={size} {...args}>
                <span>{label}</span>
                <ChevronDown data-slot="dropdown-chevron" />
            </DropdownTrigger>
            <DropdownContent>
                <DropdownItem href="#components">
                    <span>Components</span>
                </DropdownItem>
                <DropdownItem href="#documentation">
                    <span>Documentation</span>
                </DropdownItem>
            </DropdownContent>
        </Dropdown>
    )
}

export const Default: Story = {
    render: renderDropdown,
}

export const NavigationDropdown: Story = {
    // eslint-disable-next-line
    render: (_: any) => (
        <Dropdown>
            <DropdownTrigger variant="link" href="#products">
                <span>Products</span>
                <ChevronDown data-slot="dropdown-chevron" />
            </DropdownTrigger>
            <DropdownContent>
                <DropdownItem href="#components">
                    <span>Components</span>
                </DropdownItem>
                <DropdownItem href="#templates">
                    <span>Templates</span>
                </DropdownItem>
            </DropdownContent>
        </Dropdown>
    ),
}

export const MultipleItems: Story = {
    // eslint-disable-next-line
    render: (_: any) => (
        <Dropdown>
            <DropdownTrigger>
                <span>Library</span>
                <ChevronDown data-slot="dropdown-chevron" />
            </DropdownTrigger>
            <DropdownContent>
                <DropdownItem href="#components">
                    <LayoutGrid />
                    <span>Components</span>
                </DropdownItem>
                <DropdownItem href="#patterns">
                    <Shapes />
                    <span>Patterns</span>
                </DropdownItem>
                <DropdownItem href="#assets">
                    <Download />
                    <span>Assets</span>
                </DropdownItem>
            </DropdownContent>
        </Dropdown>
    ),
}

export const DisabledItem: Story = {
    // eslint-disable-next-line
    render: (_: any) => (
        <Dropdown>
            <DropdownTrigger href='/dssa'>
                <span>Workspace</span>
                <ChevronDown data-slot="dropdown-chevron" />
            </DropdownTrigger>
            <DropdownContent>
                <DropdownItem href="#overview">Overview</DropdownItem>
                <DropdownItem disabled>Invite members</DropdownItem>
                <DropdownItem href="#settings">Settings</DropdownItem>
            </DropdownContent>
        </Dropdown>
    ),
}

export const WithIcon: Story = {
    // eslint-disable-next-line
    render: (_: any) => (
        <Dropdown>
            <DropdownTrigger asChild>
                <Button variant="default">
                    <span>Resources</span>
                    <ChevronDown data-slot="dropdown-chevron" />
                </Button>
            </DropdownTrigger>
            <DropdownContent>
                <DropdownItem href="#components">
                    <span>Components</span>
                </DropdownItem>
                <DropdownItem href="#downloads">
                    <span>Downloads</span>
                </DropdownItem>
            </DropdownContent>
        </Dropdown>
    ),
}