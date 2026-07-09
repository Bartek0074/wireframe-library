"use client";

import Link from "next/link";

import { Button } from "@/components/atoms/Button";
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

const Footer07 = () => {
    return (
        <footer className="flex items-center justify-center p-4 py-8 border-t border-border">
            <div className="flex flex-col flex-1 max-w-7xl">
                <div className="flex flex-col gap-8 md:items-center">
                    <div>
                        <LogoLink href="/" />
                    </div>
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
                <div className="mt-12 flex flex-col-reverse justify-between items-center gap-4 border-t border-border/40 pt-8 md:mt-12 md:flex-row md:gap-6">
                    <div className="flex flex-col xs:flex-row gap-4">
                        <Input placeholder="Enter your email" />
                        <Button variant="brand">Subscribe</Button>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer07 };
