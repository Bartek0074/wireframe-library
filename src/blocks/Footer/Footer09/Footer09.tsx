"use client";

import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { LogoLink } from "@/components/molecules/LogoLink/LogoLink";

import { Facebook, Instagram, Twitter, Youtube } from 'feather-icons-react';

const socials = [
    { href: "https://www.facebook.com", icon: <Facebook />, label: "Facebook" },
    { href: "https://www.instagram.com", icon: <Instagram />, label: "Instagram" },
    { href: "https://www.twitter.com", icon: <Twitter />, label: "Twitter" },
    { href: "https://www.youtube.com", icon: <Youtube />, label: "YouTube" },
];

const columns = [
    {
        title: "Solutions",
        links: [
            { href: "/marketing", label: "Marketing" },
            { href: "/analytics", label: "Analytics" },
            { href: "/automation", label: "Automation" },
            { href: "/commerce", label: "Commerce" },
        ],
    },
    {
        title: "Support",
        links: [
            { href: "/submit-ticket", label: "Submit Ticket" },
            { href: "/documentation", label: "Documentation" },
            { href: "/guides", label: "Guides" },
        ],
    },
    {
        title: "Company",
        links: [
            { href: "/about", label: "About Us" },
            { href: "/blog", label: "Blog" },
            { href: "/jobs", label: "Jobs" },
            { href: "/press", label: "Press" },
        ],
    },
    {
        title: "Legal",
        links: [
            { href: "/terms", label: "Terms of Service" },
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/cookie-policy", label: "Cookie Policy" },
        ],
    },
];

const Footer09 = () => {
    return (
        <footer className="flex items-center justify-center p-4 py-8 border-t border-border">
            <div className="flex flex-col flex-1 max-w-7xl">
                <div className="grid gap-12 md:gap-16 md:grid-cols-12">
                    <div className="md:col-span-4 lg:col-span-3">
                        <LogoLink href="/" />
                        <p className="mt-6 md:mt-8 text-sm text-muted-foreground">Making wireframes easier with reusable components.</p>
                        <div className="mt-4 md:mt-6 flex gap-2 flex-wrap">
                            {socials.map((social) => (
                                <Button key={social.href} asChild variant="ghost" size="icon">
                                    <Link href={social.href} aria-label={social.label}>
                                        {social.icon}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
                        {columns.map((column) => (
                            <div key={column.title}>
                                <h3 className="text-sm font-medium">{column.title}</h3>
                                <ul className="mt-6 space-y-2.5">
                                    {column.links.map((link) => (
                                        <li key={link.href}>
                                            <Button asChild variant="mutedLink" size="sm">
                                                <Link href={link.href}>{link.label}</Link>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12  border-t border-border/40 pt-8 md:mt-12 ">
                    <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export { Footer09 };
