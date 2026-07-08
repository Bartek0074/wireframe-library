'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggleFab() {
    const handleToggle = () => {
        const root = document.documentElement;
        const isDark = root.classList.contains('dark');
        const nextMode = isDark ? 'light' : 'dark';

        root.classList.toggle('dark', nextMode === 'dark');
        window.localStorage.setItem('theme-mode', nextMode);
    };

    return (
        <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={handleToggle}
            className="fixed bottom-6 right-6 z-50 rounded-full shadow-xl backdrop-blur"
            aria-label="Toggle dark/light mode"
            title="Toggle dark/light mode"
        >
            <Moon className="size-5 dark:hidden" aria-hidden="true" />
            <Sun className="hidden size-5 dark:block" aria-hidden="true" />
        </Button>
    );
}
