import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AlertCircle, Check, Mail, Search } from "feather-icons-react";
import { Input } from "./index";

const iconOptions = {
    Search: <Search />,
    Mail: <Mail />,
    Check: <Check />,
    AlertCircle: <AlertCircle />,
} as const;

type IconOption = keyof typeof iconOptions;

type StoryArgs = React.ComponentProps<typeof Input> & {
    leadingIconOption?: IconOption;
    trailingIconOption?: IconOption;
};

const meta: Meta<StoryArgs> = {
    title: "Components/Atoms/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "inline-radio",
            options: ["sm", "md", "lg"],
        },
        state: {
            control: "inline-radio",
            options: ["default", "success", "warning", "error"],
        },
        placeholder: {
            control: "text",
        },
        disabled: {
            control: "boolean",
        },
        readOnly: {
            control: "boolean",
        },
        fullWidth: {
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
        classNames: {
            table: { disable: true },
        },
    },
    args: {
        size: "md",
        state: "default",
        placeholder: "Placeholder…",
        disabled: false,
        readOnly: false,
        fullWidth: false,
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

const renderInput = ({ leadingIconOption, trailingIconOption, ...args }: StoryArgs) => (
    <Input
        {...args}
        leadingIcon={leadingIconOption ? iconOptions[leadingIconOption] : undefined}
        trailingIcon={trailingIconOption ? iconOptions[trailingIconOption] : undefined}
    />
);

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Default: Story = {
    name: "Basic / Default",
    render: renderInput,
    args: {
        placeholder: undefined,
    },
};

export const WithPlaceholder: Story = {
    name: "Basic / Placeholder",
    render: renderInput,
    args: {
        placeholder: "you@example.com",
    },
};

export const Disabled: Story = {
    name: "Basic / Disabled",
    render: renderInput,
    args: {
        placeholder: "you@example.com",
        disabled: true,
    },
};

export const ReadOnly: Story = {
    name: "Basic / Read Only",
    render: renderInput,
    args: {
        defaultValue: "john.doe",
        readOnly: true,
    },
};

// ─── Validation ───────────────────────────────────────────────────────────────

export const Success: Story = {
    name: "Validation / Success",
    render: renderInput,
    args: {
        defaultValue: "you@example.com",
        state: "success",
    },
};

export const Warning: Story = {
    name: "Validation / Warning",
    render: renderInput,
    args: {
        defaultValue: "john",
        state: "warning",
    },
};

export const Error: Story = {
    name: "Validation / Error",
    render: renderInput,
    args: {
        defaultValue: "abc",
        state: "error",
    },
};

// ─── With Icons ───────────────────────────────────────────────────────────────

export const WithLeadingIcon: Story = {
    name: "With Icons / Leading Icon",
    render: renderInput,
    args: {
        placeholder: "Search…",
        leadingIconOption: "Search",
    },
};

export const WithTrailingIcon: Story = {
    name: "With Icons / Trailing Icon",
    render: renderInput,
    args: {
        placeholder: "you@example.com",
        trailingIconOption: "Mail",
    },
};

export const WithBothIcons: Story = {
    name: "With Icons / Both Icons",
    render: renderInput,
    args: {
        placeholder: "you@example.com",
        state: "success",
        leadingIconOption: "Mail",
        trailingIconOption: "Check",
    },
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Small: Story = {
    name: "Sizes / Small",
    render: renderInput,
    args: {
        size: "sm",
        placeholder: "Small input…",
    },
};

export const Medium: Story = {
    name: "Sizes / Medium",
    render: renderInput,
    args: {
        size: "md",
        placeholder: "Medium input…",
    },
};

export const Large: Story = {
    name: "Sizes / Large",
    render: renderInput,
    args: {
        size: "lg",
        placeholder: "Large input…",
    },
};

// ─── Full Width ───────────────────────────────────────────────────────────────

export const FullWidth: Story = {
    name: "Full Width",
    render: renderInput,
    args: {
        placeholder: "Stretches to container width…",
        fullWidth: true,
    },
};
