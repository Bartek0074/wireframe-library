import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { FormField } from "../../molecules";
import { Radio, RadioGroup } from "./index";

type StoryArgs = React.ComponentProps<typeof RadioGroup>;

const ControlledGroup = ({ onChange, ...args }: StoryArgs) => {
    const [value, setValue] = useState<"email" | "sms" | "push">("email");

    return (
        <RadioGroup
            {...args}
            value={value}
            onChange={(nextValue) => {
                setValue(nextValue as "email" | "sms" | "push");
                onChange?.(nextValue);
            }}
        >
            <Radio value="email" label="Email" />
            <Radio value="sms" label="SMS" />
            <Radio value="push" label="Push" />
        </RadioGroup>
    );
};

const meta: Meta<StoryArgs> = {
    title: "Components/Atoms/Radio",
    component: RadioGroup,
    tags: ["autodocs"],
    argTypes: {
        mode: {
            control: "inline-radio",
            options: ["default", "block"],
        },
        size: {
            control: "inline-radio",
            options: ["sm", "md", "lg"],
        },
        buttonStyle: {
            control: "inline-radio",
            options: ["outline", "solid"],
        },
        value: {
            control: "text",
        },
        defaultValue: {
            control: "text",
        },
        name: {
            control: "text",
        },
        disabled: {
            control: "boolean",
        },
        onChange: {
            action: "changed",
        },
        children: {
            table: { disable: true },
        },
    },
    args: {
        mode: "default",
        size: "md",
        buttonStyle: "outline",
        defaultValue: "email",
        disabled: false,
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const DefaultRadioGroup: Story = {
    render: (args) => (
        <RadioGroup {...args}>
            <Radio value="email" label="Email" description="Best for detailed updates." />
            <Radio value="sms" label="SMS" description="Fast critical alerts only." />
            <Radio value="push" label="Push notifications" description="Updates in the mobile app." />
        </RadioGroup>
    ),
};

export const ControlledRadioGroup: Story = {
    render: (args) => <ControlledGroup {...args} />,
};

export const DisabledRadioGroup: Story = {
    args: {
        defaultValue: "sms",
        disabled: true,
    },
    render: (args) => (
        <RadioGroup {...args}>
            <Radio value="email" label="Email" />
            <Radio value="sms" label="SMS" />
            <Radio value="push" label="Push" />
        </RadioGroup>
    ),
};

export const SuccessAndErrorStates: Story = {
    render: () => (
        <div className="inline-flex flex-col gap-5">
            <FormField
                label="Preferred contact"
                message="Looks good."
                state="success"
                layout="vertical"
            >
                <RadioGroup defaultValue="email">
                    <Radio value="email" label="Email" state="success" />
                    <Radio value="sms" label="SMS" state="success" />
                </RadioGroup>
            </FormField>

            <FormField
                label="Payment method"
                message="Select a valid option."
                state="error"
                layout="vertical"
            >
                <RadioGroup>
                    <Radio
                        value="card"
                        label="Credit card"
                        description="Currently unavailable for this account."
                        state="error"
                    />
                    <Radio value="transfer" label="Bank transfer" state="error" />
                </RadioGroup>
            </FormField>
        </div>
    ),
};

export const BlockMode: Story = {
    args: {
        mode: "block",
        buttonStyle: "outline",
        defaultValue: "monthly",
    },
    render: (args) => (
        <RadioGroup {...args}>
            <Radio value="weekly" label="Weekly" />
            <Radio value="monthly" label="Monthly" />
            <Radio value="quarterly" label="Quarterly" />
        </RadioGroup>
    ),
};

export const BlockModeSizes: Story = {
    render: () => (
        <div className="inline-flex flex-col gap-3">
            <RadioGroup mode="block" buttonStyle="outline" size="sm" defaultValue="sm-2">
                <Radio value="sm-1" label="Small A" />
                <Radio value="sm-2" label="Small B" />
                <Radio value="sm-3" label="Small C" />
            </RadioGroup>

            <RadioGroup mode="block" buttonStyle="outline" size="md" defaultValue="md-2">
                <Radio value="md-1" label="Medium A" />
                <Radio value="md-2" label="Medium B" />
                <Radio value="md-3" label="Medium C" />
            </RadioGroup>

            <RadioGroup mode="block" buttonStyle="outline" size="lg" defaultValue="lg-2">
                <Radio value="lg-1" label="Large A" />
                <Radio value="lg-2" label="Large B" />
                <Radio value="lg-3" label="Large C" />
            </RadioGroup>
        </div>
    ),
};

export const BlockModeSolid: Story = {
    args: {
        mode: "block",
        buttonStyle: "solid",
        defaultValue: "monthly",
    },
    render: (args) => (
        <RadioGroup {...args}>
            <Radio value="weekly" label="Weekly" />
            <Radio value="monthly" label="Monthly" />
            <Radio value="quarterly" label="Quarterly" />
        </RadioGroup>
    ),
};