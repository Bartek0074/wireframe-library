"use client";

import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { LogoLink } from "@/components/molecules/LogoLink/LogoLink";

const links = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const Footer03 = () => {
    return (
        <footer className="flex items-center justify-center p-4 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 flex-1 max-w-7xl">
                <div className="md:flex-1">
                    <LogoLink href="/" />
                </div>
                <div className="grid mt-4 md:mt-0 gap-x-8 gap-y-3 grid-cols-2 sm:grid-cols-4 md:flex">
                    {links.map((link) => (
                        <Button key={link.href} asChild variant="link" size="sm">
                            <Link href={link.href}>{link.label}</Link>
                        </Button>
                    ))}
                </div>
                <p className="md:flex-1 md:text-right text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company</p>
            </div>
        </footer>
    );
};

export { Footer03 };
