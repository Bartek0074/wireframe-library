import { Summary, Mails, Zap } from "lucide-react";

const items = [
    {
        icon: Mails,
        title: "Share team inboxes",
        description:
            "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
        icon: Zap,
        title: "Deliver instant answers",
        description:
            "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
        icon: Summary,
        title: "Manage your team with reports",
        description:
            "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
];

const FeaturesSection01 = () => {
    return (
        <section className="px-4">
            <div className="flex max-w-7xl  py-16 mx-auto">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center flex-col">
                            <div className="flex shrink-0 items-center justify-center border border-border size-12 rounded-md">
                                <item.icon className="size-6 text-primary" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-primary text-center">{item.title}</h3>
                            <p className="mt-1 text-base text-muted-foreground text-center">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { FeaturesSection01 };
