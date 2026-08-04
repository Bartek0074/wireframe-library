import { PlaceholderImage } from "@/components/atoms/PlaceholderImage/PlaceholderImage";

const FeaturesSection07 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl py-16 gap-16 mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-semibold text-center tracking-tight text-primary sm:text-4xl">
                        Packed with thousands of features
                    </h2>
                    <p className="mt-4 text-lg max-w-[80ch] text-center text-muted-foreground">
                        From Image generation to video generation, Everything AI has APIs
                        for literally everything. It can even create this website copy for
                        you.
                    </p>
                </div>
                <div className="grid grid-cols-1 rounded-xl lg:grid-cols-6 border border-border">
                    <div className="relative overflow-hidden col-span-1 lg:col-span-4 border-b lg:border-r border-border">
                        <h3 className="px-4 pt-4 text-left font-semibold text-xl md:px-6 md:pt-6 text-primary">
                            Project management
                        </h3>
                        <p className="text-base text-muted-foreground my-2 max-w-sm px-4 pt-2 text-left md:px-6 md:pt-2">
                            Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.
                        </p>
                        <div className="h-full max-h-96 w-full pt-2 md:pt-4 px-2">
                            <PlaceholderImage className="h-110 w-full" iconSize="large" />
                        </div>
                    </div>
                    <div className="relative overflow-hidden border-b col-span-1 lg:col-span-2 border-border">
                        <h3 className="px-4 pt-4 text-left font-semibold text-xl md:px-6 md:pt-6 text-primary">
                            Asset library
                        </h3>
                        <p className="text-base text-muted-foreground my-2 max-w-sm px-4 pt-2 text-left md:px-6 md:pt-2">
                            Eos laudantium repellat sed architecto earum unde incidunt.
                        </p>
                        <div className="flex flex-col gap-2 min-h-96 h-full max-h-96 w-full pt-2 md:pt-4">
                            <div className="flex flex-row items-center -space-x-8 px-4 justify-center h-3/5 shrink-0 w-full">
                                <PlaceholderImage className="h-8/10 shrink-0 w-auto aspect-square rotate-8 scale-90 hover:scale-100 hover:rotate-0 hover:z-1 transition-transform duration-400" />
                                <PlaceholderImage className="h-8/10 shrink-0 w-auto aspect-square scale-90 hover:scale-100 hover:rotate-0 hover:z-1 transition-transform duration-400" />
                                <PlaceholderImage className="h-8/10 shrink-0 w-auto aspect-square rotate-8 scale-90 hover:scale-100 hover:rotate-0 hover:z-1 transition-transform duration-400" />
                            </div>
                            <div className="flex flex-row items-center -space-x-8 px-4 justify-center h-3/5 shrink-0 w-full">
                                <PlaceholderImage className="h-8/10 shrink-0 w-auto aspect-square -rotate-5 scale-90 hover:scale-100 hover:rotate-0 hover:z-1 transition-transform duration-400" />
                                <PlaceholderImage className="h-8/10 shrink-0 w-auto aspect-square rotate-5 scale-90 hover:scale-100 hover:rotate-0 hover:z-1 transition-transform duration-400" />
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden border-b lg:border-b-0 col-span-1 lg:col-span-3 lg:border-r border-border">
                        <h3 className="px-4 pt-4 text-left font-semibold text-xl md:px-6 md:pt-6 text-primary">
                            Knowledge base
                        </h3>
                        <p className="text-base text-muted-foreground my-2 max-w-sm px-4 pt-2 text-left md:px-6 md:pt-2">
                            Nulla est saepe accusamus nostrum est est fugit omnis.
                        </p>
                        <div className="h-full max-h-96 w-full pt-2 md:pt-4 px-2">
                            <PlaceholderImage className="h-110 w-full" iconSize="large" />
                        </div>
                    </div>
                    <div className="relative overflow-hidden col-span-1 lg:col-span-3">
                        <h3 className="px-4 pt-4 text-left font-semibold text-xl md:px-6 md:pt-6 text-primary">
                            Cloud deployment
                        </h3>
                        <p className="text-base text-muted-foreground my-2 max-w-sm px-4 pt-2 text-left md:px-6 md:pt-2">
                            Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.
                        </p>
                        <div className="h-full max-h-96 w-full pt-2 md:pt-4 px-2">
                            <div className="relative h-100 w-full">
                                <PlaceholderImage
                                    className="absolute right-[-15%] bottom-[-15%] h-full aspect-square w-auto rounded-full"
                                    iconSize="large"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { FeaturesSection07 };
