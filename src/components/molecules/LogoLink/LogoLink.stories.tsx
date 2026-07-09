import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LogoLink } from './LogoLink'
import '@/app/storybook.css'

const meta: Meta<typeof LogoLink> = {
    title: 'Components/Molecules/LogoLink   ',
    component: LogoLink,
    tags: ['autodocs'],

}

export default meta

type Story = StoryObj<typeof LogoLink>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <LogoLink href="/" />
    ),
}