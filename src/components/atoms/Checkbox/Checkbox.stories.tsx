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
    }
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
    name: "Playground",
    render: (args) => <Checkbox {...args} />,
    args: {
        state: "default",
        label: "Checkbox",
        description: "This is a checkbox description.",
        defaultChecked: false,
        indeterminate: false,
        disabled: false,
        readOnly: false,
        required: false,
    },
};

export const CheckedAndUnchecked: Story = {
    name: "Checked/Unchecked/Indeterminate",
    render: (_) => (
        <div className="flex flex-col gap-3 items-start">
            <Checkbox checked={true} label="Checkbox" description="This checkbox is checked." />
            <Checkbox indeterminate={true} checked={false} label="Checkbox" description="This checkbox is indeterminate." />
            <Checkbox checked={false} label="Checkbox" description="This checkbox is unchecked." />
        </div>
    ),
};

export const States: Story = {
    name: "States",
    render: (_) => (
        <div className="flex flex-col gap-3 items-start">
            <Checkbox state="default" label="Checkbox" description="This is a default checkbox." />
            <Checkbox state="success" label="Checkbox" description="This is a success checkbox." />
            <Checkbox state="warning" label="Checkbox" description="This is a warning checkbox." />
            <Checkbox state="error" label="Checkbox" description="This is an error checkbox." />
        </div>
    ),
};

export const DisabledAndReadOnly: Story = {
    name: "Disabled/Read-Only",
    render: (_) => (
        <div className="flex flex-col gap-3 items-start">
            <Checkbox disabled={true} label="Checkbox" description="This checkbox is disabled." />
            <Checkbox readOnly={true} label="Checkbox" description="This checkbox is read-only." />
        </div>
    ),
};

export const TextVariations: Story = {
    name: "Text Variations",
    render: (_) => (
        <div className="flex flex-col gap-3 items-start">
            <Checkbox label="Checkbox" description="This is a checkbox with a description." />
            <Checkbox label="Checkbox" />
        </div>
    ),
};