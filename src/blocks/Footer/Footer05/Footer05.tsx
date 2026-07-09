"use client";

import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { LogoLink } from "@/components/molecules/LogoLink/LogoLink";

const Footer05 = () => {
    return (
        <footer className="flex items-center justify-center p-4 py-8 border-t border-border">
            <div className="flex flex-col gap-8 flex-1 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between gap-8 flex-1">
                    <div>
                        <LogoLink href="/" />
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
