import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowRight, Check, Download, Plus } from "feather-icons-react";
import { Button } from "../../../components/atoms/Button/index";

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
        variant: {
            control: "inline-radio",
            options: ["default", "primary"],
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
        label: "Button",
        variant: "default",
        size: "md",
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
    name: "Basic / Default",
    render: renderButton,
    args: {
        variant: "default",
        label: "Default Button",
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export const Primary: Story = {
    name: "Basic / Primary",
    render: renderButton,
    args: {
        variant: "primary",
        label: "Primary Button",
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export const WithLeadingIcon: Story = {
    name: "With Icons / Leading Icon",
    render: renderButton,
    args: {
        variant: "default",
        label: "Add Item",
        leadingIconOption: "Plus",
        trailingIconOption: undefined,
    },
};

export const WithTrailingIcon: Story = {
    name: "With Icons / Trailing Icon",
    render: renderButton,
    args: {
        variant: "primary",
        label: "Continue",
        leadingIconOption: undefined,
        trailingIconOption: "ArrowRight",
    },
};

export const WithBothIcons: Story = {
    name: "With Icons / Both Icons",
    render: renderButton,
    args: {
        variant: "primary",
        label: "Download File",
        leadingIconOption: "Download",
        trailingIconOption: "Check",
    },
};

export const WithOnlyLeadingIcon: Story = {
    name: "With Icons / Only Icon",
    render: renderButton,
    args: {
        variant: "default",
        label: undefined,
        leadingIconOption: "Plus",
        trailingIconOption: undefined,
    },
};


export const Small: Story = {
    name: "Sizes / Small",
    render: renderButton,
    args: {
        size: "sm",
        label: "Small Button",
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export const Medium: Story = {
    name: "Sizes / Medium",
    render: renderButton,
    args: {
        size: "md",
        label: "Medium Button",
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export const Large: Story = {
    name: "Sizes / Large",
    render: renderButton,
    args: {
        size: "lg",
        label: "Large Button",
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export const Disabled: Story = {
    name: "States / Disabled",
    render: renderButton,
    args: {
        disabled: true,
        label: "Disabled Button",
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};
