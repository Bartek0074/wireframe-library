import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AlertCircle } from "feather-icons-react";
import { FormField } from "./index";
import { Input } from "../atoms/Input";

type StoryArgs = React.ComponentProps<typeof FormField> & {
    placeholder: string;
    inputType: "text" | "email" | "password" | "search";
    withLeadingIcon: boolean;
    withTrailingIcon: boolean;
    disabled: boolean;
    readOnly: boolean;
};

const renderFormField = ({
    placeholder,
    inputType,
    withLeadingIcon,
    withTrailingIcon,
    disabled,
    readOnly,
    ...formFieldProps
}: StoryArgs) => (
    <FormField {...formFieldProps}>
        <Input
            state={formFieldProps.state}
            placeholder={placeholder}
            type={inputType}
            disabled={disabled}
            readOnly={readOnly}
            fullWidth
            leadingIcon={withLeadingIcon ? <AlertCircle /> : undefined}
            trailingIcon={withTrailingIcon ? <AlertCircle /> : undefined}
        />
    </FormField>
);

const meta: Meta<StoryArgs> = {
    title: "Components/Molecules/FormField",
    component: FormField,
    tags: ["autodocs"],
    argTypes: {
        label: {
            control: "text",
        },
        message: {
            control: "text",
        },
        state: {
            control: "inline-radio",
            options: ["default", "success", "warning", "error"],
        },
        layout: {
            control: "inline-radio",
            options: ["vertical", "horizontal"],
        },
        required: {
            control: "boolean",
        },
        optional: {
            control: "boolean",
        },
        placeholder: {
            control: "text",
        },
        inputType: {
            control: "select",
            options: ["text", "email", "password", "search"],
        },
        withLeadingIcon: {
            control: "boolean",
        },
        withTrailingIcon: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        readOnly: {
            control: "boolean",
        },
        children: {
            table: { disable: true },
        },
    },
    args: {
        label: "Email",
        message: undefined,
        state: "default",
        layout: "vertical",
        required: false,
        optional: false,
        placeholder: "you@example.com",
        inputType: "text",
        withLeadingIcon: false,
        withTrailingIcon: false,
        disabled: false,
        readOnly: false,
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
    name: "Base / Default",
    render: renderFormField,
    args: {
        label: "Email",
        state: "default",
        message: undefined,
    },
};

export const WithMessage: Story = {
    name: "Base / With Message",
    render: renderFormField,
    args: {
        label: "Email",
        message: "We will never share your email.",
    },
};

export const Success: Story = {
    name: "Base / Success",
    render: renderFormField,
    args: {
        label: "Email",
        message: "Looks good.",
        state: "success",
    },
};

export const Warning: Story = {
    name: "Base / Warning",
    render: renderFormField,
    args: {
        label: "Username",
        message: "This username may already be taken.",
        state: "warning",
    },
};

export const Error: Story = {
    name: "Base / Error",
    render: renderFormField,
    args: {
        label: "Password",
        message: "Password must be at least 8 characters.",
        state: "error",
        inputType: "password",
        withTrailingIcon: true,
    },
};

export const Vertical: Story = {
    name: "Layout / Vertical",
    render: renderFormField,
    args: {
        label: "Website",
        message: "Shown in your public profile.",
        layout: "vertical",
        placeholder: "https://example.com",
    },
};

export const Horizontal: Story = {
    name: "Layout / Horizontal",
    render: renderFormField,
    args: {
        label: "Website",
        message: "Shown in your public profile.",
        layout: "horizontal",
        placeholder: "https://example.com",
    },
};

export const WithLeadingIcon: Story = {
    name: "Input Variations / With Leading Icon",
    render: renderFormField,
    args: {
        label: "Search",
        placeholder: "Search...",
        inputType: "search",
        withLeadingIcon: true,
    },
};

export const WithTrailingIcon: Story = {
    name: "Input Variations / With Trailing Icon",
    render: renderFormField,
    args: {
        label: "Password",
        placeholder: "Enter password",
        inputType: "password",
        withTrailingIcon: true,
    },
};

export const Disabled: Story = {
    name: "Input Variations / Disabled",
    render: renderFormField,
    args: {
        label: "Company",
        placeholder: "Disabled field",
        disabled: true,
    },
};

export const ReadOnly: Story = {
    name: "Input Variations / Read Only",
    render: renderFormField,
    args: {
        label: "Username",
        placeholder: "Read-only value",
        readOnly: true,
    },
};

export const DifferentPlaceholderAndType: Story = {
    name: "Input Variations / Different Placeholder And Type",
    render: renderFormField,
    args: {
        label: "Contact Email",
        placeholder: "name@company.com",
        inputType: "email",
    },
};