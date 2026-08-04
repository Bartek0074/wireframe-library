import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Switch } from './Switch'
import '@/app/storybook.css'

const meta: Meta<typeof Switch> = {
    title: 'Components/Molecules/Switch',
    component: Switch,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Switch>

function SwitchPreview() {
    const [value, setValue] = useState<'monthly' | 'yearly'>('monthly')

    return (
        <Switch
            value={value}
            onValueChange={setValue}
            ariaLabel="Billing cycle"
            options={[
                { value: 'monthly', label: 'Monthly' },
                { value: 'yearly', label: 'Yearly' },
            ]}
        />
    )
}

export const Default: Story = {
    render: () => <SwitchPreview />,
}