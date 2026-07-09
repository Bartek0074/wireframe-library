"use client";

import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
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

const Footer05 = () => {
    return (
        <footer className="flex items-center justify-center p-4 border-t border-border">
            <div className="flex flex-col gap-8 flex-1 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between gap-8 flex-1">
                    <div>
                        <LogoLink />
                    </div>
                    <div className="flex flex-col xs:flex-row gap-4">
                        <Input placeholder="Enter your email" className="sm:w-fit" />
                        <Button variant="brand">Subscribe</Button>
                    </div>
                </div>
                <div>
                    <p className="text-left md:text-right text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export { Footer05 };
