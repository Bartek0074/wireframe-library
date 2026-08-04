import {
    Trash,
    Edit,
    MessageCircleMore,
    Heart,
} from "lucide-react";

const items = [
    {
        icon: Trash,
        title: "Spam report",
        description:
            "Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum.",
    },
    {
        icon: Edit,
        title: "Compose in markdown",
        description:
            "Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus.",
    },
    {
        icon: MessageCircleMore,
        title: "Email commenting",
        description:
            "Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis.",
    },
    {
        icon: Heart,
        title: "Customer connections",
        description:
            "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis.",
    },
];

const FeaturesSection05 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl py-20 lg:py-24 gap-0 lg:gap-16 mx-auto lg:grid lg:grid-cols-12">
                <div className="mb-16 lg:mb-0 lg:col-span-4 xl:col-span-5">
                    <h2 className="text-3xl font-semibold tracking-tight text-balance text-primary sm:text-4xl">
                        Stay on top of customer support
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:col-span-8 xl:col-span-7">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex shrink-0 items-center justify-center border border-border size-10 rounded-md">
                                <item.icon className="size-5 text-primary" />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-primary">
                                {item.title}
                            </h3>
                            <p className="mt-1 text-base text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { FeaturesSection05 };
