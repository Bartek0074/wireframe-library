import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AlertCircle, Check, Mail, Search } from "feather-icons-react";
import { Input } from "./index";
import { FormField } from "../../molecules";

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


export const Playground: Story = {
    name: "Playground",
    render: renderInput,
    args: {
        size: "md",
        state: "default",
        placeholder: "Input",
        disabled: false,
        readOnly: false,
        fullWidth: false,
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export const States: Story = {
    name: "States",
    // eslint-disable-next-line
    render: (_) => (
        <div className="flex flex-col gap-3">
            <Input state="default" placeholder="Default state" />
            <Input state="success" placeholder="Success state" />
            <Input state="warning" placeholder="Warning state" />
            <Input state="error" placeholder="Error state" />
        </div>
    ),
};

export const Sizes: Story = {
    name: "Sizes",
    // eslint-disable-next-line
    render: (_) => (
        <div className="flex flex-col gap-3">
            <Input size="lg" placeholder="Input" />
            <Input size="md" placeholder="Input" />
            <Input size="sm" placeholder="Input" />
        </div>
    ),
};

export const Icons: Story = {
    name: "Icons",
    // eslint-disable-next-line
    render: (_) => (
        <div className="flex flex-col gap-3">
            <Input leadingIcon={<Search />} placeholder="Input" />
            <Input trailingIcon={<Mail />} placeholder="Input" />
            <Input
                leadingIcon={<Mail />}
                trailingIcon={<Check />}
                placeholder="Input"
            />
        </div>
    ),
};

export const DisabledAndReadOnly: Story = {
    name: "Disabled/Read-Only",
    // eslint-disable-next-line
    render: (_) => (
        <div className="flex flex-col gap-3">
            <Input disabled placeholder="Disabled input" />
            <Input readOnly defaultValue="Read-only input" />
        </div>
    ),
};

export const UsageExample: Story = {
    name: "Usage Example",
    // eslint-disable-next-line
    render: (_) => (
        <div className="inline-flex flex-col gap-4 w-full max-w-xl">
            <FormField
                label="Workspace Name"
                message="This appears in invitations and team settings."
                state="default"
                layout="vertical"
            >
                <Input fullWidth placeholder="Acme Product Team" />
            </FormField>

            <FormField
                label="Contact Email"
                message="Please enter a valid company email address."
                state="error"
                layout="vertical"
            >
                <Input
                    fullWidth
                    state="error"
                    placeholder="name@company.com"
                    trailingIcon={<AlertCircle />}
                />
            </FormField>
        </div>
    ),
};