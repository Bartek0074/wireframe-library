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

const FeaturesSection03 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl py-20 lg:py-24 mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <p className="text-sm font-semibold text-center tracking-wide text-brand uppercase">
                        Features
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-center tracking-tight text-primary sm:text-4xl">
                        Beautiful analytics to grow smarter
                    </h2>
                    <p className="mt-4 text-lg max-w-[72ch] text-center text-balance text-muted-foreground">
                        Powerful, self-serve product and growth analytics to help you
                        convert, engage, and retain more users. Trusted by over 4,000
                        startups.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center flex-col">
                            <div className="flex shrink-0 items-center justify-center border border-border size-12 rounded-md">
                                <item.icon className="size-6 text-primary" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-primary text-center">
                                {item.title}
                            </h3>
                            <p className="mt-1 text-base text-muted-foreground text-center">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { FeaturesSection03 };
