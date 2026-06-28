import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { FormField } from "../../molecules";
import { Radio, RadioGroup } from "./index";

type StoryArgs = React.ComponentProps<typeof RadioGroup>;

const ControlledUsage = () => {
    const [channel, setChannel] = useState<"email" | "sms" | "push">("email");

    return (
        <div className="inline-flex flex-col gap-2">
            <RadioGroup value={channel} onChange={(value) => setChannel(value as typeof channel)}>
                <Radio value="email" label="Email" description="Detailed product updates." />
                <Radio value="sms" label="SMS" description="Critical notifications only." />
                <Radio value="push" label="Push" description="Mobile app notifications." />
            </RadioGroup>
            <span className="text-sm text-gray-600">Selected: {channel}</span>
        </div>
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

export const Playground: Story = {
    render: (args) => (
        <RadioGroup {...args}>
            <Radio value="email" label="Radio 1" description="Description for radio 1." />
            <Radio value="sms" label="Radio 2" description="Description for radio 2." />
            <Radio value="push" label="Radio 3" description="Description for radio 3." />
        </RadioGroup>
    ),
};

export const Sizes: Story = {
    name: "Sizes (Block)",
    // eslint-disable-next-line
    render: (_) => (
        <div className="inline-flex flex-col gap-3">
            <RadioGroup mode="block" buttonStyle="outline" size="sm" defaultValue="sm-b">
                <Radio value="sm-a" label="Button 1" />
                <Radio value="sm-b" label="Button 2" />
                <Radio value="sm-c" label="Button 3" />
            </RadioGroup>

            <RadioGroup mode="block" buttonStyle="outline" size="md" defaultValue="md-b">
                <Radio value="md-a" label="Button 1" />
                <Radio value="md-b" label="Button 2" />
                <Radio value="md-c" label="Button 3" />
            </RadioGroup>

            <RadioGroup mode="block" buttonStyle="outline" size="lg" defaultValue="lg-b">
                <Radio value="lg-a" label="Button 1" />
                <Radio value="lg-b" label="Button 2" />
                <Radio value="lg-c" label="Button 3" />
            </RadioGroup>
        </div>
    ),
};

export const States: Story = {
    name: "States",
    // eslint-disable-next-line
    render: (_) => (
        <div className="inline-flex flex-col gap-4 items-start">
            <RadioGroup defaultValue="default-1">
                <Radio value="default-1" label="Radio 1" state="default" />
                <Radio value="default-2" label="Radio 2" state="default" />
            </RadioGroup>

            <RadioGroup defaultValue="success-1">
                <Radio value="success-1" label="Radio 1" state="success" />
                <Radio value="success-2" label="Radio 2" state="success" />
            </RadioGroup>

            <RadioGroup defaultValue="warning-1">
                <Radio value="warning-1" label="Radio 1" state="warning" />
                <Radio value="warning-2" label="Radio 2" state="warning" />
            </RadioGroup>

            <RadioGroup defaultValue="error-1">
                <Radio value="error-1" label="Radio 1" state="error" />
                <Radio value="error-2" label="Radio 2" state="error" />
            </RadioGroup>
        </div>
    ),
};

export const Variations: Story = {
    name: "Button Styles (Block)",
    // eslint-disable-next-line
    render: (_) => (
        <div className="inline-flex flex-col gap-3">
            <RadioGroup mode="block" buttonStyle="outline" size="md" defaultValue="md-b">
                <Radio value="md-a" label="Button 1" />
                <Radio value="md-b" label="Button 2" />
                <Radio value="md-c" label="Button 3" />
            </RadioGroup>

            <RadioGroup mode="block" buttonStyle="solid" size="md" defaultValue="sm-b">
                <Radio value="sm-a" label="Button 1" />
                <Radio value="sm-b" label="Button 2" />
                <Radio value="sm-c" label="Button 3" />
            </RadioGroup>
        </div>
    ),
};

export const UsageExample: Story = {
    name: "Usage Example",
    // eslint-disable-next-line
    render: (_) => (
        <div className="inline-flex flex-col gap-5">
            <FormField
                label="Preferred Contact"
                message="Choose how we should send release notes."
                state="default"
                layout="vertical"
            >
                <ControlledUsage />
            </FormField>

            <FormField
                label="Plan"
                message="You can switch plans at any time."
                layout="vertical"
            >
                <RadioGroup mode="block" buttonStyle="solid" defaultValue="team">
                    <Radio value="starter" label="Starter" />
                    <Radio value="team" label="Team" />
                    <Radio value="business" label="Business" />
                </RadioGroup>
            </FormField>
        </div>
    ),
};
