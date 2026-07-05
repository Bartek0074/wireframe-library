import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowRight, ExternalLink, Home, Mail } from "feather-icons-react";
import { Link } from "./index";
import { Typography } from "@/components/atoms/Typography";

const iconOptions = {
    Home: <Home />,
    Mail: <Mail />,
    ArrowRight: <ArrowRight />,
    ExternalLink: <ExternalLink />,
} as const;

type IconOption = keyof typeof iconOptions;

type StoryArgs = React.ComponentProps<typeof Link> & {
    iconOption?: IconOption;
};

const meta: Meta<StoryArgs> = {
    title: "ComponentsV2/Atoms/Link",
    component: Link,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "inline-radio",
            options: ["sm", "md", "lg"],
        },
        label: {
            control: "text",
        },
        href: {
            control: "text",
        },
        iconPosition: {
            control: "inline-radio",
            options: ["left", "right"],
        },
        target: {
            control: "select",
            options: ["_self", "_blank", "_parent", "_top"],
        },
        rel: {
            control: "text",
        },
        iconOption: {
            control: "select",
            options: [undefined, ...Object.keys(iconOptions)],
            name: "icon",
        },
        onClick: {
            action: "clicked",
            table: {
                disable: true,
            },
        },
    },
    args: {
        label: "Link",
        href: "/",
        size: "md",
        iconPosition: "left",
        target: "_self",
        iconOption: undefined,
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

const renderLink = ({
    iconOption,
    ...args
}: StoryArgs) => <Link {...args} icon={iconOption ? iconOptions[iconOption] : undefined} />;

export const Playground: Story = {
    name: "Playground",
    render: renderLink,
};

export const Sizes: Story = {
    name: "Sizes",
    //eslint-disable-next-line
    render: (_: any) => (
        <div className="flex flex-col items-start gap-3">
            <Link size="lg" label="Link" href="/" />
            <Link size="md" label="Link" href="/" />
            <Link size="sm" label="Link" href="/" />
        </div>
    ),
};

export const Icons: Story = {
    name: "Icons",
    //eslint-disable-next-line
    render: (_: any) => (
        <div className="flex flex-col items-start gap-3">
            <Link href="/" label="Dashboard" icon={<Home />} />
            <Link href="/" label="Read more" icon={<ArrowRight />} iconPosition="right" />
            <Link href="/" label="Contact" icon={<Mail />} />
            <Link href="/" label="External" icon={<ExternalLink />} iconPosition="right" target="_blank" />
        </div>
    ),
};

export const UsageExample: Story = {
    name: "Usage Example",
    //eslint-disable-next-line
    render: (_: any) => (
        <Typography.P2>
            For more information, visit our{" "}
            <Link href="/" label="documentation" />.
        </Typography.P2>
    ),
};
