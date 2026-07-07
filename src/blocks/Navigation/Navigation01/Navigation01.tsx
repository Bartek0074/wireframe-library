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

const links = [
    { href: "/link_1", label: "Link 1" },
    { href: "/link_2", label: "Link 2" },
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

const Navigation01 = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-center p-4 border-b border-border">
            <div className="flex items-center justify-between gap-4 flex-1 max-w-7xl">
                <div>
                    <LogoLink />
                </div>
                <div className="hidden md:flex items-center gap-4">
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
                <div>
                    <div className="md:hidden">
                        <Drawer direction="right">
                            <DrawerTrigger asChild>
                                <Button aria-label="Open navigation" size="icon">
                                    <Menu />
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader className="flex flex-row items-baseline justify-between gap-4">
                                    <LogoLink />
                                    <DrawerClose>
                                        <Button size="icon" aria-label="Close navigation">
                                            <X />
                                        </Button>
                                    </DrawerClose>
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
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export { Navigation01 };
