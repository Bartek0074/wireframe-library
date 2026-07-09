"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { LogoLink } from "@/components/molecules/LogoLink/LogoLink";
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "@/components/molecules/Dropdown";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerClose,
} from "@/components/molecules/Drawer";

import { Menu, X, ChevronDown } from "lucide-react";

const links = [
    {
        href: "", label: "Products", type: "group", items: [
            { href: "/analytics", label: "Analytics", type: "single" },
            { href: "/automation", label: "Automation", type: "single" },
            { href: "/engagement", label: "Engagement", type: "single" },
        ]
    },
    {
        href: "", label: "Resources", type: "group", items: [
            { href: "/documentation", label: "Documentation", type: "single" },
            { href: "/blog  ", label: "Blog", type: "single" },
        ]
    },
    { href: "/about", label: "About", type: "single" },
    { href: "/contact", label: "Contact", type: "single" },
];

const MobileDrawer = ({ pathname }: { pathname: string }) => {
    return <Drawer direction="right">
        <DrawerTrigger asChild>
            <Button aria-label="Open navigation" size="icon">
                <Menu />
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader className="flex flex-row items-baseline justify-between gap-4">
                <LogoLink href="/" />
                <Button size="icon" aria-label="Close navigation" asChild>
                    <DrawerClose>
                        <X />
                    </DrawerClose>
                </Button>
            </DrawerHeader>
            <div className="flex flex-col gap-2 p-4 md:px-5">
                {links.map((link) => {
                    if (link.type === "single") {
                        return (
                            <Button key={link.href} variant="default" active={pathname === link.href} asChild>
                                <Link href={link.href}>{link.label}</Link>
                            </Button>
                        )
                    }
                    else if (link.type === "group") {
                        return (
                            <div key={link.label} className="pl-4 py-2">
                                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                    {link.label}
                                </p>
                                <div className="flex flex-col gap-2">
                                    {link.items?.map((item) => (
                                        <Button key={item.href} variant="default" active={pathname === item.href} asChild>
                                            <Link href={item.href}>{item.label}</Link>
                                        </Button>
                                    ))}
                                </div>
                            </div>)
                    }
                    else return null
                })}
            </div>
        </DrawerContent>
    </Drawer>
}

const Navigation04 = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-center p-4 border-b border-border">
            <div className="flex items-center justify-between gap-12 flex-1 max-w-7xl">
                <div>
                    <LogoLink href="/" />
                </div>
                <div className="hidden md:flex items-center gap-12">
                    {links.map((link) => {
                        if (link.type === "single") {
                            return (
                                <Button
                                    key={link.href}
                                    variant={"link"}
                                    active={pathname === link.href}
                                    asChild
                                >
                                    <Link href={link.href}>{link.label}</Link>
                                </Button>)
                        }
                        else if (link.type === "group") {
                            return (
                                <Dropdown key={link.label}>
                                    <DropdownTrigger variant="link">
                                        {link.label}
                                        <ChevronDown data-slot="dropdown-chevron" />
                                    </DropdownTrigger>
                                    <DropdownContent className="w-56">
                                        {link.items?.map((item) => (
                                            <DropdownItem key={item.href} href={item.href}>
                                                <span>
                                                    {item.label}
                                                </span>
                                            </DropdownItem>
                                        ))}
                                    </DropdownContent>
                                </Dropdown>
                            )
                        }
                        else return null
                    })}
                </div>
                <div>
                    <div className="md:hidden">
                        <MobileDrawer pathname={pathname} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export { Navigation04 };
