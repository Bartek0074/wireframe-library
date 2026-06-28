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
        label: {
            control: "text",
        },
        placeholder: {
            control: "text",
        },
        message: {
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
        label: "Label",
        placeholder: "Placeholder…",
        message: undefined,
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
        label: "Email",
        placeholder: undefined,
        message: undefined,
    },
};

export const WithPlaceholder: Story = {
    name: "Basic / Placeholder",
    render: renderInput,
    args: {
        label: "Email",
        placeholder: "you@example.com",
        message: undefined,
    },
};

export const Disabled: Story = {
    name: "Basic / Disabled",
    render: renderInput,
    args: {
        label: "Email",
        placeholder: "you@example.com",
        disabled: true,
        message: "This field is currently disabled.",
    },
};

export const ReadOnly: Story = {
    name: "Basic / Read Only",
    render: renderInput,
    args: {
        label: "Username",
        defaultValue: "john.doe",
        readOnly: true,
        message: "This field is read-only.",
    },
};

// ─── Validation ───────────────────────────────────────────────────────────────

export const Success: Story = {
    name: "Validation / Success",
    render: renderInput,
    args: {
        label: "Email",
        defaultValue: "you@example.com",
        state: "success",
        message: "Looks good!",
    },
};

export const Warning: Story = {
    name: "Validation / Warning",
    render: renderInput,
    args: {
        label: "Username",
        defaultValue: "john",
        state: "warning",
        message: "Username is already taken.",
    },
};

export const Error: Story = {
    name: "Validation / Error",
    render: renderInput,
    args: {
        label: "Password",
        defaultValue: "abc",
        state: "error",
        message: "Password must be at least 8 characters.",
    },
};

// ─── With Icons ───────────────────────────────────────────────────────────────

export const WithLeadingIcon: Story = {
    name: "With Icons / Leading Icon",
    render: renderInput,
    args: {
        label: "Search",
        placeholder: "Search…",
        leadingIconOption: "Search",
    },
};

export const WithTrailingIcon: Story = {
    name: "With Icons / Trailing Icon",
    render: renderInput,
    args: {
        label: "Email",
        placeholder: "you@example.com",
        trailingIconOption: "Mail",
    },
};

export const WithBothIcons: Story = {
    name: "With Icons / Both Icons",
    render: renderInput,
    args: {
        label: "Email",
        placeholder: "you@example.com",
        state: "success",
        message: "Email verified.",
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
        label: "Small",
        placeholder: "Small input…",
    },
};

export const Medium: Story = {
    name: "Sizes / Medium",
    render: renderInput,
    args: {
        size: "md",
        label: "Medium",
        placeholder: "Medium input…",
    },
};

export const Large: Story = {
    name: "Sizes / Large",
    render: renderInput,
    args: {
        size: "lg",
        label: "Large",
        placeholder: "Large input…",
    },
};

// ─── Full Width ───────────────────────────────────────────────────────────────

export const FullWidth: Story = {
    name: "Full Width",
    render: renderInput,
    args: {
        label: "Full width input",
        placeholder: "Stretches to container width…",
        fullWidth: true,
        message: "This input fills the available width.",
    },
};
