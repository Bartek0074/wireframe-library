import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "./index";
import { FormField } from "../../molecules";

type StoryArgs = React.ComponentProps<typeof Checkbox>;

const meta: Meta<StoryArgs> = {
    title: "Components/Atoms/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    argTypes: {
        state: {
            control: "inline-radio",
            options: ["default", "success", "warning", "error"],
        },
        label: {
            control: "text",
        },
        description: {
            control: "text",
        },
        checked: {
            control: "boolean",
        },
        defaultChecked: {
            control: "boolean",
        },
        indeterminate: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        readOnly: {
            control: "boolean",
        },
        required: {
            control: "boolean",
        },
        onChange: {
            action: "changed",
        },
        classNames: {
            table: { disable: true },
        },
    },
    args: {
        state: "default",
        label: "Accept terms",
        description: "You can unsubscribe at any time.",
        defaultChecked: false,
        indeterminate: false,
        disabled: false,
        readOnly: false,
        required: false,
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
    render: (args) => <Checkbox {...args} />,
};

export const Checked: Story = {
    args: {
        checked: true,
        defaultChecked: undefined,
        label: "Email updates",
        description: "Receive product updates by email.",
    },
    render: (args) => <Checkbox {...args} />,
};

export const Indeterminate: Story = {
    args: {
        indeterminate: true,
        checked: false,
        defaultChecked: undefined,
        label: "Partially selected",
        description: "Some nested options are selected.",
    },
    render: (args) => <Checkbox {...args} />,
};

export const Disabled: Story = {
    args: {
        disabled: true,
        defaultChecked: true,
        label: "Disabled option",
        description: "This option is not currently editable.",
    },
    render: (args) => <Checkbox {...args} />,
};

export const SuccessState: Story = {
    args: {
        state: "success",
        defaultChecked: true,
        label: "Success state",
        description: "Selection has been validated.",
    },
    render: (args) => <Checkbox {...args} />,
};

export const WarningState: Story = {
    args: {
        state: "warning",
        defaultChecked: true,
        label: "Warning state",
        description: "Double-check this setting.",
    },
    render: (args) => <Checkbox {...args} />,
};

export const ErrorState: Story = {
    args: {
        state: "error",
        defaultChecked: false,
        label: "Error state",
        description: "You must accept this option.",
    },
    render: (args) => <Checkbox {...args} />,
};

export const WithFormField: Story = {
    args: {
        label: "Subscribe to newsletter",
        description: "Get product updates once a week.",
        state: "default",
        defaultChecked: false,
    },
    render: (args) => (
        <FormField
            label="Preferences"
            message="Choose at least one channel."
            state={args.state}
            layout="vertical"
        >
            <Checkbox {...args} />
        </FormField>
    ),
};