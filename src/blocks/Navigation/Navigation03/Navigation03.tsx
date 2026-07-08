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
} from "@/components/molecules/Drawer";

import { Menu, X } from "lucide-react";


const leftLinks = [
    { href: "/link_1", label: "Link 1" },
    { href: "/link_2", label: "Link 2" },
];

const rightLinks = [
    { href: "/link_3", label: "Link 3" },
    { href: "/link_4", label: "Link 4" },
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
                {[...leftLinks, ...rightLinks].map((link) => {
                    return (
                        <Button key={link.href} variant="default" active={pathname === link.href} asChild>
                            <Link href={link.href}>{link.label}</Link>
                        </Button>
                    );
                })}
            </div>
        </DrawerContent>
    </Drawer>
}

const Navigation03 = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-center p-4 border-b border-border">
            <div className="flex items-center justify-between gap-4 flex-1 max-w-7xl">
                <div className="flex-1">
                    <div className="hidden md:flex items-center justify-end gap-4">
                        {leftLinks.map((link) => (
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
                </div>
                <div><LogoLink /></div>
                <div className="flex-1">
                    <div className="hidden md:flex items-center justify-start gap-4">
                        {rightLinks.map((link) => (
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
                    <div className="flex justify-end md:hidden">
                        <MobileDrawer pathname={pathname} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export { Navigation03 };
