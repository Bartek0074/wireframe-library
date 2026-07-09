"use client";

import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { Label } from "@/components/atoms/Label";
import { Input } from "@/components/atoms/Input";
import { LogoLink } from "@/components/molecules/LogoLink/LogoLink";

const links = [
    { href: "/overview", label: "Overview" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const secondaryLinks = [
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
    { href: "/cookies", label: "Cookies" },
];


const Footer08 = () => {
    return (
        <footer className="flex items-center justify-center p-4 py-8 border-t border-border">
            <div className="flex flex-col flex-1 max-w-7xl">
                <div className="flex flex-col justify-between lg:items-center gap-x-8 gap-y-12 lg:flex-row">
                    <div className="flex flex-col gap-6 md:items-start">
                        <LogoLink href="/" />
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                            {links.map((link) => (
                                <Button
                                    key={link.href}
                                    asChild
                                    variant="link"
                                    size="sm"
                                    className="w-fit"
                                >
                                    <Link href={link.href}>{link.label}</Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Label htmlFor="email">Stay up to date</Label>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Input id="email" placeholder="Enter your email" className="sm:w-fit" />
                            <Button variant="brand">Subscribe</Button>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-border/40 pt-8 md:mt-12 md:flex-row md:gap-6">
                    <div> <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company. All rights reserved.</p></div>
                    <div className="flex gap-4">
                        {secondaryLinks.map((link) => (
                            <Button key={link.href} asChild variant="mutedLink" size="sm">
                                <Link href={link.href}>{link.label}</Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer08 };
