import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowRight, Check, Download, Plus } from "feather-icons-react";
import { Button } from "./index";

const iconOptions = {
    Plus: <Plus />,
    Check: <Check />,
    Download: <Download />,
    ArrowRight: <ArrowRight />,
} as const;

type IconOption = keyof typeof iconOptions;

type StoryArgs = React.ComponentProps<typeof Button> & {
    leadingIconOption?: IconOption;
    trailingIconOption?: IconOption;
};

const meta: Meta<StoryArgs> = {
    title: "Components/Atoms/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        intent: {
            control: "inline-radio",
            options: ["default", "primary", "accent", "danger"],
        },
        style: {
            control: "inline-radio",
            options: ["solid", "dashed", "outline", "ghost"],
        },
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
        loading: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        leadingIconOption: {
            control: "select",
            options: [undefined, ...Object.keys(iconOptions)],
            name: "leadingIcon",
        },
        trailingIconOption: {
            control: "select",
            options: [undefined, ...Object.keys(iconOptions)],
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
        label: "Button",
        intent: "default",
        style: "solid",
        size: "md",
        loading: false,
        disabled: false,
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

const renderButton = ({ leadingIconOption, trailingIconOption, ...args }: StoryArgs) => (
    <Button
        {...args}
        leadingIcon={leadingIconOption ? iconOptions[leadingIconOption] : undefined}
        trailingIcon={trailingIconOption ? iconOptions[trailingIconOption] : undefined}
    />
);

export const Default: Story = {
    name: "Default",
    render: renderButton,
    args: {
        intent: "default",
        style: "solid",
        label: "Default",
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export const PrimarySolid: Story = {
    name: "Primary Solid",
    render: renderButton,
    args: {
        intent: "primary",
        style: "solid",
        label: "Primary Action",
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export const AccentOutline: Story = {
    name: "Accent Outline",
    render: renderButton,
    args: {
        intent: "accent",
        style: "outline",
        label: "Accent Outline",
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export const DangerGhost: Story = {
    name: "Danger Ghost",
    render: renderButton,
    args: {
        intent: "danger",
        style: "ghost",
        label: "Delete",
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export const PrimaryDashed: Story = {
    name: "Primary Dashed",
    render: renderButton,
    args: {
        intent: "primary",
        style: "dashed",
        label: "Dashed Action",
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export const LoadingSolid: Story = {
    name: "Loading / Solid",
    render: renderButton,
    args: {
        intent: "primary",
        style: "solid",
        label: "Saving",
        loading: true,
        leadingIconOption: "Download",
        trailingIconOption: "Check",
    },
};

export const LoadingOutline: Story = {
    name: "Loading / Outline",
    render: renderButton,
    args: {
        intent: "accent",
        style: "outline",
        label: "Submitting",
        loading: true,
        leadingIconOption: "Plus",
        trailingIconOption: "ArrowRight",
    },
};

export const LoadingGhost: Story = {
    name: "Loading / Ghost",
    render: renderButton,
    args: {
        intent: "danger",
        style: "ghost",
        label: "Removing",
        loading: true,
        leadingIconOption: undefined,
        trailingIconOption: "ArrowRight",
    },
};

export const IconOnlyLoading: Story = {
    name: "Loading / Icon Only",
    render: renderButton,
    args: {
        intent: "primary",
        style: "solid",
        label: undefined,
        loading: true,
        leadingIconOption: "Plus",
        trailingIconOption: undefined,
    },
};

export const WithLeadingIcon: Story = {
    name: "Extras / With Leading Icon",
    render: renderButton,
    args: {
        intent: "default",
        style: "solid",
        label: "Add Item",
        leadingIconOption: "Plus",
        trailingIconOption: undefined,
    },
};

export const LinkButton: Story = {
    name: "Extras / Link",
    render: renderButton,
    args: {
        intent: "primary",
        style: "outline",
        href: "/",
        label: "Go Home",
        leadingIconOption: undefined,
        trailingIconOption: "ArrowRight",
    },
};
