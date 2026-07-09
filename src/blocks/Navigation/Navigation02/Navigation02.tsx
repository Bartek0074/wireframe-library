"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { Logo } from "@/components/atoms/Logo";
import { Button } from "@/components/atoms/Button";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerClose,
    DrawerFooter
} from "@/components/molecules/Drawer";

import { Menu, X } from "lucide-react";

const links = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const LogoLink = () => {
    return (
        <Link href="/">
            <Logo
                variant="wideNeutral"
                className="hover:border-brand/60 hover:text-brand transition-colors cursor-pointer"
            />
        </Link>
    );
};

const MobileDrawer = ({ pathname }: { pathname: string }) => {
    return <Drawer direction="right">
        <DrawerTrigger asChild>
            <Button aria-label="Open navigation" size="icon">
                <Menu />
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader className="flex flex-row items-baseline justify-between gap-4">
                <LogoLink />
                <Button size="icon" aria-label="Close navigation" asChild>
                    <DrawerClose>
                        <X />
                    </DrawerClose>
                </Button>
            </DrawerHeader>
            <div className="flex flex-col gap-2 p-4 md:px-5">
                {links.map((link) => {
                    return (
                        <Button key={link.href} variant="default" active={pathname === link.href} asChild>
                            <Link href={link.href}>{link.label}</Link>
                        </Button>
                    );
                })}
            </div>
            <DrawerFooter>
                <div className="flex flex-col gap-4">
                    <Button variant="default" asChild>
                        <Link href="/login">Sign In</Link>
                    </Button>
                    <Button variant="brand" asChild>
                        <Link href="/register">Get Started</Link>
                    </Button>
                </div>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
}

const Navigation02 = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-center p-4 border-b border-border">
            <div className="flex items-center justify-between gap-6 flex-1 max-w-7xl">
                <div>
                    <LogoLink />
                </div>
                <div className="hidden md:flex items-start flex-1 gap-4">
                    {links.map((link) => (
                        <Button
                            key={link.href}
                            variant={"link"}
                            active={pathname === link.href}
                            asChild
                        >
                            <Link href={link.href}>{link.label}</Link>
                        </Button>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="default" asChild className="hidden md:flex">
                        <Link href="/login">Sign In</Link>
                    </Button>
                    <Button variant="brand" asChild className="hidden md:flex">
                        <Link href="/register">Get Started</Link>
                    </Button>
                    <div className="md:hidden">
                        <MobileDrawer pathname={pathname} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export { Navigation02 };
