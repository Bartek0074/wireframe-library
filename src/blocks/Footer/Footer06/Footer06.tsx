"use client";

import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { Logo } from "@/components/atoms/Logo";

const links = [
    { href: "/link_1", label: "Link 1" },
    { href: "/link_2", label: "Link 2" },
    { href: "/link_3", label: "Link 3" },
    { href: "/link_4", label: "Link 4" },
    { href: "/link_5", label: "Link 5" },
    { href: "/link_6", label: "Link 6" },
];

const secondaryLinks = [
    { href: "/small_link_1", label: "Small Link 1" },
    { href: "/small_link_2", label: "Small Link 2" },
    { href: "/small_link_3", label: "Small Link 3" },
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

const Footer06 = () => {
    return (
        <footer className="flex items-center justify-center p-4 border-t border-border">
            <div className="flex flex-col flex-1 max-w-7xl">
                <div className="flex flex-col gap-8 md:items-center">
                    <div>
                        <LogoLink />
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
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-border/40 pt-8 md:mt-12 md:flex-row md:gap-6">
                    <div> <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company. All rights reserved.</p></div>
                    <div className="flex gap-2">
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

export { Footer06 };
