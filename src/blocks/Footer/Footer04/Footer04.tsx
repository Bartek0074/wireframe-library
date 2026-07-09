"use client";

import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { Logo } from "@/components/atoms/Logo";

import {Facebook, Instagram, Twitter, Youtube} from 'feather-icons-react';

const socials = [
    { href: "https://www.facebook.com", icon: <Facebook />, label: "Facebook" },
    { href: "https://www.instagram.com", icon: <Instagram />, label: "Instagram" },
    { href: "https://www.twitter.com", icon: <Twitter />, label: "Twitter" },
    { href: "https://www.youtube.com", icon: <Youtube />, label: "YouTube" },
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

const Footer04 = () => {
    return (
        <footer className="flex items-center justify-center p-4 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-1 max-w-7xl">
                <div className="md:order-2">
                    <LogoLink />
                </div>
                <div className="mt-4 md:mt-0 md:flex-1 md:order-1">
                    <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                        {socials.map((social) => (
                            <Button key={social.href} asChild variant="ghost" size="icon">
                                <Link href={social.href} aria-label={social.label}>
                                    {social.icon}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
                <p className="md:flex-1 md:text-right text-sm text-muted-foreground md:order-3">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export { Footer04 };
