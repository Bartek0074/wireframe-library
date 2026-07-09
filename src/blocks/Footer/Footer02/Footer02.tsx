"use client";

import Link from "next/link";

import { Logo } from "@/components/atoms/Logo";

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

const Footer02 = () => {
    return (
        <footer className="flex items-center justify-center p-4 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-1 max-w-7xl">
                <LogoLink />
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export { Footer02 };
