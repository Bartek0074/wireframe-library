import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowRight, ExternalLink, Home, Mail } from "feather-icons-react";
import { Link } from "./index";
import { Typography } from "../../atoms/Typography";

const iconOptions = {
    Home: <Home />,
    Mail: <Mail />,
    ArrowRight: <ArrowRight />,
    ExternalLink: <ExternalLink />,
} as const;

type IconOption = keyof typeof iconOptions;

type StoryArgs = React.ComponentProps<typeof Link> & {
    leadingIconOption?: IconOption;
    trailingIconOption?: IconOption;
};

const meta: Meta<StoryArgs> = {
    title: "Components/Atoms/Link",
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
        target: {
            control: "select",
            options: ["_self", "_blank", "_parent", "_top"],
        },
        rel: {
            control: "text",
        },
        leadingIconOption: {
            control: "select",
            options: Object.keys(iconOptions),
            name: "leadingIcon",
        },
        trailingIconOption: {
            control: "select",
            options: Object.keys(iconOptions),
            name: "trailingIcon",
        },
        onClick: {
            action: "clicked",
            table: {
                disable: true,
            },
        },
    }
};

export default meta;
type Story = StoryObj<StoryArgs>;

const renderLink = ({ leadingIconOption, trailingIconOption, ...args }: StoryArgs) => (
    <Link
        {...args}
        leadingIcon={leadingIconOption ? iconOptions[leadingIconOption] : undefined}
        trailingIcon={trailingIconOption ? iconOptions[trailingIconOption] : undefined}
    />
);

export const Playground: Story = {
    name: "Playground",
    render: renderLink,
    args: {
        label: "Link",
        href: "#",
        size: "md",
        target: "_self",
    },
};

export const Sizes: Story = {
    name: "Sizes",
    // eslint-disable-next-line
    render: (_) => (
        <div className="flex flex-col gap-3 items-start">
            <Link size="lg" label="Link" href="#" />
            <Link size="md" label="Link" href="#" />
            <Link size="sm" label="Link" href="#" />
        </div>
    ),
};

export const Icons: Story = {
    name: "With Icons",
    // eslint-disable-next-line
    render: (_) => (
        <div className="flex flex-col gap-3 items-start">
            <Link label="Link" href="#" leadingIcon={<Home />} />
            <Link label="Link" href="#" trailingIcon={<ArrowRight />} />
            <Link label="Link" href="#" leadingIcon={<Mail />} trailingIcon={<ExternalLink />} />
        </div>
    ),
};

export const UsageExample: Story = {
    name: "Usage Example",
    // eslint-disable-next-line
    render: (_) => (
        <Typography.P2>
            For more information, visit our{" "}
            <Link label="documentation" href="#" />.
        </Typography.P2>

    ),
};