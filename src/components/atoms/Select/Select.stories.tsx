import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "../../molecules";
import { Select } from "./index";

type StoryArgs = React.ComponentProps<typeof Select>;

const options = [
    { label: "Design", value: "design" },
    { label: "Engineering", value: "engineering" },
    { label: "Marketing", value: "marketing" },
    { label: "Support", value: "support" },
];

const meta: Meta<StoryArgs> = {
    title: "Components/Atoms/Select",
    component: Select,
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
        multiple: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        fullWidth: {
            control: "boolean",
        },
        options: {
            table: { disable: true },
        },
        onChange: {
            action: "changed",
        },
    },
    args: {
        placeholder: "Select a team",
        options,
        size: "md",
        state: "default",
        multiple: false,
        disabled: false,
        fullWidth: false,
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
    render: (args) => <Select {...args} />,
};

export const States: Story = {
    render: () => (
        <div className="inline-flex flex-col gap-3 w-full max-w-xl">
            <Select options={options} placeholder="Default state" />
            <Select options={options} state="success" value="engineering" placeholder="Success state" />
            <Select options={options} state="warning" value="marketing" placeholder="Warning state" />
            <Select options={options} state="error" value="support" placeholder="Error state" />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="inline-flex flex-col gap-3 w-full max-w-xl">
            <Select options={options} size="sm" placeholder="Small select" />
            <Select options={options} size="md" placeholder="Medium select" />
            <Select options={options} size="lg" placeholder="Large select" />
        </div>
    ),
};

export const MultipleSelection: Story = {
    render: () => (
        <div className="inline-flex flex-col gap-3 w-full max-w-xl">
            <Select
                options={options}
                multiple
                value={["design", "engineering"]}
                placeholder="Select teams"
            />
        </div>
    ),
};

export const UsageExample: Story = {
    render: () => (
        <div className="inline-flex flex-col gap-4 w-full max-w-xl">
            <FormField
                label="Department"
                message="Choose the team responsible for this workstream."
                state="default"
                layout="vertical"
            >
                <Select fullWidth options={options} placeholder="Select a department" />
            </FormField>

            <FormField
                label="Collaborating Teams"
                message="Add every team involved in the launch."
                state="success"
                layout="vertical"
            >
                <Select
                    fullWidth
                    multiple
                    state="success"
                    options={options}
                    value={["design", "marketing"]}
                    placeholder="Select one or more teams"
                />
            </FormField>
        </div>
    ),
};