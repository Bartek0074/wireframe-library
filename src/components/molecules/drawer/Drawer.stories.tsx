import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { X, Menu } from 'lucide-react'

import Link from 'next/link'
import { Button } from '@/components/atoms/Button/Button'
import { Logo } from '@/components/atoms/Logo'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerHeaderClose,
    DrawerTitle,
    DrawerTrigger,
} from './Drawer'
import '@/app/storybook.css'

const meta: Meta<typeof Drawer> = {
    title: 'Components/Molecules/Drawer',
    component: Drawer,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
}

export default meta

type Story = StoryObj<typeof Drawer>


export const Default: Story = {
    name: 'Default',
    // eslint-disable-next-line
    render: (_) => (
        <div className="p-8">
            <Drawer direction="right">
                <DrawerTrigger asChild>
                    <Button size="icon" aria-label="Open drawer">
                        <Menu />
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerHeaderClose />
                        <DrawerTitle>Default Drawer Title</DrawerTitle>
                        <DrawerDescription>Default Drawer Description</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 text-sm"><p>This is the main content area of the drawer.</p></div>
                    <DrawerFooter>
                        <p className='text-sm'>This is the footer content of the drawer.</p>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    ),
}

export const MobileNavigationExample: Story = {
    // eslint-disable-next-line
    render: (_) => (
        <div className="p-8">
            <Drawer direction="right">
                <DrawerTrigger asChild>
                    <Button aria-label="Open navigation">
                        <Menu />
                        Menu
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="flex flex-row items-baseline justify-between gap-4">
                        <Link href='/'>
                            <Logo variant="wideNeutral" className="hover:bg-accent transition-colors cursor-pointer" />
                        </Link>
                        <DrawerClose >
                            <Button variant="ghost" size="icon" aria-label="Close navigation">
                                <X />
                            </Button>
                        </DrawerClose>
                    </DrawerHeader>
                    <div className="flex flex-col gap-2 p-4 md:px-5">
                        <Button variant="default" asChild>
                            <Link href="/">Home</Link>
                        </Button>
                        <Button variant="default" asChild>
                            <Link href="/products">Products</Link>
                        </Button>
                        <Button variant="default" asChild>
                            <Link href="/pricing">Pricing</Link>
                        </Button>
                        <Button variant="default" asChild>
                            <Link href="/documentation">Documentation</Link>
                        </Button>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    ),
}


export const LongContent: Story = {
    name: 'Long Content Example',
    // eslint-disable-next-line
    render: (_) => (
        <div className="p-8">
            <Drawer>
                <DrawerTrigger asChild>
                    <Button>Open long content</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="items-start text-left">
                        <DrawerHeaderClose />
                        <DrawerTitle>Long content</DrawerTitle>
                        <DrawerDescription>Scrollable content for dense panels and mobile screens.</DrawerDescription>
                    </DrawerHeader>
                    <div className="max-h-[60vh] space-y-3 overflow-y-auto p-4 md:px-5">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div key={index} className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
                                Panel section {index + 1}
                            </div>
                        ))}
                    </div>
                    <DrawerFooter className="flex items-end">
                        <DrawerClose asChild>
                            <Button variant="default">
                                <X />
                                Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    ),
}