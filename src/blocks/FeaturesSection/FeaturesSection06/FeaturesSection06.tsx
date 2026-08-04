import { Check } from "lucide-react";

const items = [
    {
        title: "Invite team members",
        description:
            "Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.",
    },
    {
        title: "List view",
        description:
            "Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.",
    },
    {
        title: "Keyboard shortcuts",
        description:
            "In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.",
    },
    {
        title: "Calendars",
        description:
            "Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi.",
    },
    {
        title: "Notifications",
        description:
            "Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.",
    },
    {
        title: "Boards",
        description:
            "Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.",
    },
    {
        title: "Reporting",
        description:
            "Eos laudantium repellat sed architecto earum unde incidunt.",
    },
    {
        title: "Mobile app",
        description:
            "Nulla est saepe accusamus nostrum est est fugit omnis.",
    },
];

const FeaturesSection06 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl py-16 gap-16 mx-auto lg:grid lg:grid-cols-12">
                <div className="flex flex-col lg:col-span-4 xl:col-span-5">
                    <p className="text-sm font-semibold tracking-wide text-brand uppercase">
                        Everything you need
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                        All-in-one platform
                    </h2>
                    <p className="mt-4 text-lg max-w-[80ch] text-balance text-muted-foreground">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                        ratione.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:col-span-8 xl:col-span-7">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <Check className="mt-0.5 size-5 shrink-0 text-brand" />
                            <div>
                                <h3 className="text-base font-semibold text-primary">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-base text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { FeaturesSection06 };
