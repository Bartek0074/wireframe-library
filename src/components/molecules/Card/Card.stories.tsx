import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Link from 'next/link'

import { Button } from '@/components/atoms/Button'
import { Card } from './Card'
import '@/app/storybook.css'

const meta: Meta<typeof Card> = {
    title: 'Components/Molecules/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
    render: () => (
        <div className="max-w-xl">
            <Card
                title="Team Access"
                extra={
                    <Link href="#manage" className="text-brand/90 font-medium hover:text-brand">
                        Manage
                    </Link>
                }
                footer={
                    <>
                        <Button variant="default">Cancel</Button>
                        <Button>Save changes</Button>
                    </>
                }
            >
                Invite collaborators and control permissions from one place.
            </Card>
        </div>
    ),
}

export const WithoutFooter: Story = {
    render: () => (
        <div className="max-w-xl">
            <Card title="Billing Address" extra="Required">
                Use the same address that appears on your invoices and tax documents.
            </Card>
        </div>
    ),
}

export const FooterActions: Story = {
    render: () => (
        <div className="max-w-xl">
            <Card
                title="Project Settings"
                extra={
                    <Link href="#history" className="text-brand/90 font-medium hover:text-brand">
                        History
                    </Link>
                }
                classNames={{
                    body: 'space-y-3',
                    footer: 'justify-between',
                }}
                footer={
                    <>
                        <Button variant="default">Reset</Button>
                        <div className="flex items-center gap-2">
                            <Button variant="default">Preview</Button>
                            <Button>Deploy</Button>
                        </div>
                    </>
                }
            >
                <p>Update environment variables, domains, and deploy hooks.</p>
                <p>Changes can affect all active deployments in this workspace.</p>
            </Card>
        </div>
    ),
}
