import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowRight, Check, Download, Plus } from "feather-icons-react";
import { Button } from "./index";
import { Typography } from "../Typography";

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
        intent: {
            control: "inline-radio",
            options: ["default", "primary", "accent", "danger"],
        },
        style: {
            control: "inline-radio",
            options: ["solid", "dashed", "outline", "ghost"],
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
        loading: {
            control: "boolean",
        },
        disabled: {
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
        onClick: {
            action: "clicked",
            table: {
                disable: true,
            },
        },
    },
    args: {
        label: "Button",
        intent: "default",
        style: "solid",
        size: "md",
        loading: false,
        disabled: false,
        leadingIconOption: undefined,
        trailingIconOption: undefined,
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

const renderButton = ({
    leadingIconOption,
    trailingIconOption,
    ...args
}: StoryArgs) => (
    <Button
        {...args}
        leadingIcon={leadingIconOption ? iconOptions[leadingIconOption] : undefined}
        trailingIcon={
            trailingIconOption ? iconOptions[trailingIconOption] : undefined
        }
    />
);

export const Playground: Story = {
    name: "Playground",
    render: renderButton,
    args: {
        intent: "default",
        style: "solid",
        label: "Button",
    },
};

export const IntentAndStyle: Story = {
    name: "Intent & Style",
    render: () => (
        <div className="inline-flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <Button intent="default" style="solid" label="Solid" />
                <Button intent="default" style="outline" label="Outline" />
                <Button intent="default" style="dashed" label="Dashed" />
                <Button intent="default" style="ghost" label="Ghost" />
            </div>
            <div className="flex flex-row gap-3">
                <Button intent="primary" style="solid" label="Solid" />
                <Button intent="primary" style="outline" label="Outline" />
                <Button intent="primary" style="dashed" label="Dashed" />
                <Button intent="primary" style="ghost" label="Ghost" />
            </div>
            <div className="flex flex-row gap-3">
                <Button intent="accent" style="solid" label="Solid" />
                <Button intent="accent" style="outline" label="Outline" />
                <Button intent="accent" style="dashed" label="Dashed" />
                <Button intent="accent" style="ghost" label="Ghost" />
            </div>
            <div className="flex flex-row gap-3">
                <Button intent="danger" style="solid" label="Solid" />
                <Button intent="danger" style="outline" label="Outline" />
                <Button intent="danger" style="dashed" label="Dashed" />
                <Button intent="danger" style="ghost" label="Ghost" />
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    name: "Sizes",
    // eslint-disable-next-line
    render: (_: any) => (
        <div className="flex flex-col gap-3 items-start">
            <Button size="lg" label="Button" />
            <Button size="md" label="Button" />
            <Button size="sm" label="Button" />
        </div>
    ),
};

export const Icons: Story = {
    name: "Icons",
    // eslint-disable-next-line
    render: (_: any) => (
        <div className="flex flex-col gap-3 items-start">
            <Button
                label="BUTTON"
                leadingIcon={<Plus />}
            />
            <Button
                label="BUTTON"
                trailingIcon={<ArrowRight />}
            />
            <Button
                label="BUTTON"
                leadingIcon={<Download />}
                trailingIcon={<Check />}
            />
            <Button
                leadingIcon={<Download />}
            />
        </div>
    ),
};

export const Loading: Story = {
    name: "Loading",
    // eslint-disable-next-line
    render: (_: any) => (
        <div className="flex flex-col gap-3 items-start">
            <Button
                label="BUTTON"
                loading
            />
            <Button
                loading
                leadingIcon={<Download />}
            />
        </div>
    ),
};

export const Disabled: Story = {
    name: "Disabled",
    // eslint-disable-next-line
    render: (_: any) => (
        <div className="flex flex-col gap-3 items-start">
            <Button
                label="BUTTON"
                disabled
            />
            <Button
                disabled
                leadingIcon={<Download />}
            />
        </div>
    ),
};

export const UsageExample: Story = {
    name: "Usage Example",
    // eslint-disable-next-line
    render: (_: any) => (
        <div className="inline-flex flex-col gap-4 items-start max-w-xl">
            <Typography.P2>
                Ready to publish your release notes?
            </Typography.P2>

            <div className="inline-flex gap-3">
                <Button intent="default" style="outline" label="Save Draft" />
                <Button intent="primary" style="solid" label="Publish" trailingIcon={<ArrowRight />} />
            </div>
        </div>
    ),
};