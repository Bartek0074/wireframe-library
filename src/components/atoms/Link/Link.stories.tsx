import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowRight, ExternalLink, Home, Mail } from "feather-icons-react";
import { Link } from "./index";

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
    },
    args: {
        label: "Read more",
        href: "#",
        size: "md",
        target: "_self",
        rel: undefined,
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
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

export const Default: Story = {
    name: "Link / Basic / Default",
    render: renderLink,
    args: {
        label: "Read more",
        href: "#",
        target: "_self",
        rel: undefined,
    },
};

export const External: Story = {
    name: "Link / Basic / External",
    render: renderLink,
    args: {
        label: "Open docs",
        href: "https://example.com",
        target: "_blank",
        rel: "noopener noreferrer",
        trailingIconOption: "ExternalLink",
    },
};

export const WithLeadingIcon: Story = {
    name: "Link / With Icons / Leading Icon",
    render: renderLink,
    args: {
        label: "Go to homepage",
        href: "#",
        leadingIconOption: "Home",
        trailingIconOption: undefined,
    },
};

export const WithTrailingIcon: Story = {
    name: "Link / With Icons / Trailing Icon",
    render: renderLink,
    args: {
        label: "Continue",
        href: "#",
        leadingIconOption: undefined,
        trailingIconOption: "ArrowRight",
    },
};

export const WithBothIcons: Story = {
    name: "Link / With Icons / Both Icons",
    render: renderLink,
    args: {
        label: "Contact support",
        href: "#",
        leadingIconOption: "Mail",
        trailingIconOption: "ExternalLink",
    },
};

export const Small: Story = {
    name: "Link / Sizes / Small",
    render: renderLink,
    args: {
        size: "sm",
        label: "Small link",
    },
};

export const Medium: Story = {
    name: "Link / Sizes / Medium",
    render: renderLink,
    args: {
        size: "md",
        label: "Medium link",
    },
};

export const Large: Story = {
    name: "Link / Sizes / Large",
    render: renderLink,
    args: {
        size: "lg",
        label: "Large link",
    },
};