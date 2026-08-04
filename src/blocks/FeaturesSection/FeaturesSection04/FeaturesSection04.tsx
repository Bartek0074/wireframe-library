import { CloudUpload, Database, Lock } from "lucide-react";

import { PlaceholderImage } from "@/components/atoms/PlaceholderImage";

const items = [
    {
        icon: CloudUpload,
        title: "Push to deploy.",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        icon: Lock,
        title: "SSL certificates.",
        description:
            "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    },
    {
        icon: Database,
        title: "Database backups.",
        description:
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    },
];

const FeaturesSection04 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-2 gap-16 max-w-7xl py-16 mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-col mb-10">
                        <p className="text-sm font-semibold tracking-wide text-brand uppercase">
                            Deploy faster
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                            A better workflow
                        </h2>
                        <p className="mt-4 text-lg max-w-[80ch] text-balance text-muted-foreground">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                            impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8">
                        {items.map((item, index) => (
                            <div key={index} className="flex flex-row">
                                <div className="pt-0.75 mr-2.5">
                                    <item.icon className="size-5 text-brand/70" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-base font-semibold text-primary">
                                        {item.title}{" "}
                                        <span className="font-normal text-muted-foreground">
                                            {item.description}
                                        </span>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <PlaceholderImage
                    className="w-full h-auto aspect-square max-w-160"
                    iconSize="large"
                />
            </div>
        </section>
    );
};

export { FeaturesSection04 };
