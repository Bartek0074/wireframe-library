import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer09} from './Footer09'
import '@/app/storybook.css'

const meta: Meta<typeof Footer09> = {
    title: 'Blocks/Footer/Large (Multi Column with Socials)',
    component: Footer09,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer09>

export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <Footer09 />
    ),
}


