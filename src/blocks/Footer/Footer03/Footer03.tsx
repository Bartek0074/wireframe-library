"use client";

import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { Logo } from "@/components/atoms/Logo";

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

const Footer03 = () => {
    return (
        <footer className="flex items-center justify-center p-4 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 flex-1 max-w-7xl">
                <LogoLink />
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:flex">
                    {links.map((link) => (
                        <Button key={link.href} asChild variant="link" size="sm">
                            <Link href={link.href}>{link.label}</Link>
                        </Button>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company</p>
            </div>
        </footer>
    );
};

export { Footer03 };
