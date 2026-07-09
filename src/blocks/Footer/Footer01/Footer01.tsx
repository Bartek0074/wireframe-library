"use client";


const Footer01 = () => {
    return (
        <footer className="flex items-center justify-center p-4 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-1 max-w-7xl">
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export { Footer01 };
