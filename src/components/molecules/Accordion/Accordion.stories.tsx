import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Link from 'next/link'

import { Accordion } from './Accordion'
import '@/app/storybook.css'

const items = [
    {
        question: 'How does pricing work?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
        question: 'Can I cancel anytime?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        question: 'Do you offer technical support?',
        answer: (
            <>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </p>
                <p>
                    Reach out to our{' '}
                    <Link href="#support" className="text-brand/90 font-medium hover:text-brand">
                        customer support
                    </Link>{' '}
                    team if you need help.
                </p>
            </>
        ),
    },
    {
        question: 'Is there a free trial available?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
]

const meta: Meta<typeof Accordion> = {
    title: 'Components/Molecules/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    args: {
        items,
        defaultOpenIndex: 0,
    },
}

export default meta

type Story = StoryObj<typeof Accordion>

export const FAQ: Story = {}

export const ClosedByDefault: Story = {
    args: {
        defaultOpenIndex: null,
    },
}

export const SupportLinks: Story = {
    render: (_) => (
        <div className="max-w-2xl">
            <Accordion
                defaultOpenIndex={1}
                items={[
                    {
                        question: 'What happens after I submit a request?',
                        answer: 'Our team reviews the request and replies with the next steps.',
                    },
                    {
                        question: 'Where can I get help?',
                        answer: (
                            <p>
                                Visit the <Link href="#support" className="text-brand/90 font-medium hover:text-brand">support page</Link> or email us directly.
                            </p>
                        ),
                    },
                ]}
            />
        </div>
    ),
}