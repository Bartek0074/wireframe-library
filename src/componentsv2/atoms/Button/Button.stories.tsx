import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowRight, Check, Download, Plus } from "feather-icons-react";
import { Button } from "./index";
import { Typography } from "@/components/atoms/Typography";

const iconOptions = {
    Plus: <Plus />,
    Check: <Check />,
    Download: <Download />,
    ArrowRight: <ArrowRight />,
} as const;

type IconOption = keyof typeof iconOptions;

type StoryArgs = React.ComponentProps<typeof Button> & {
    iconOption?: IconOption;
};

const meta: Meta<StoryArgs> = {
    title: "ComponentsV2/Atoms/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        intent: {
            control: "inline-radio",
            options: ["default", "primary", "accent", "danger"],
        },
        variant: {
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
        iconPosition: {
            control: "inline-radio",
            options: ["left", "right"],
        },
        iconOption: {
            control: "select",
            options: [undefined, ...Object.keys(iconOptions)],
            name: "icon",
        },
        asChild: {
            table: {
                disable: true,
            },
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
        variant: "solid",
        size: "md",
        loading: false,
        disabled: false,
        iconPosition: "left",
        iconOption: undefined,
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

const renderButton = ({
    iconOption,
    ...args
}: StoryArgs) => <Button {...args} icon={iconOption ? iconOptions[iconOption] : undefined} />;

export const Playground: Story = {
    name: "Playground",
    render: renderButton,
    args: {
        intent: "default",
        variant: "solid",
        label: "Button",
    },
};

export const IntentAndStyle: Story = {
    name: "Intent & Style",
    //eslint-disable-next-line
    render: (_: any) => (
        <div className="inline-flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <Button intent="default" variant="solid" label="Solid" />
                <Button intent="default" variant="outline" label="Outline" />
                <Button intent="default" variant="dashed" label="Dashed" />
                <Button intent="default" variant="ghost" label="Ghost" />
            </div>
            <div className="flex flex-row gap-3">
                <Button intent="primary" variant="solid" label="Solid" />
                <Button intent="primary" variant="outline" label="Outline" />
                <Button intent="primary" variant="dashed" label="Dashed" />
                <Button intent="primary" variant="ghost" label="Ghost" />
            </div>
            <div className="flex flex-row gap-3">
                <Button intent="accent" variant="solid" label="Solid" />
                <Button intent="accent" variant="outline" label="Outline" />
                <Button intent="accent" variant="dashed" label="Dashed" />
                <Button intent="accent" variant="ghost" label="Ghost" />
            </div>
            <div className="flex flex-row gap-3">
                <Button intent="danger" variant="solid" label="Solid" />
                <Button intent="danger" variant="outline" label="Outline" />
                <Button intent="danger" variant="dashed" label="Dashed" />
                <Button intent="danger" variant="ghost" label="Ghost" />
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    name: "Sizes",
    //eslint-disable-next-line
    render: (_: any) => (
        <div className="flex flex-col items-start gap-3">
            <Button size="lg" label="Button" />
            <Button size="md" label="Button" />
            <Button size="sm" label="Button" />
        </div>
    ),
};

export const Icons: Story = {
    name: "Icons",
    //eslint-disable-next-line
    render: (_: any) => (
        <div className="flex flex-col items-start gap-3">
            <Button label="BUTTON" icon={<Plus />} iconPosition="left" />
            <Button label="BUTTON" icon={<ArrowRight />} iconPosition="right" />
            <Button label="BUTTON" icon={<Download />} iconPosition="left" />
            <Button icon={<Download />} aria-label="Download" />
        </div>
    ),
};

export const Loading: Story = {
    name: "Loading",
    //eslint-disable-next-line
    render: (_: any) => (
        <div className="flex flex-col items-start gap-3">
            <Button label="BUTTON" loading />
            <Button loading icon={<Download />} aria-label="Downloading" />
        </div>
    ),
};

export const Disabled: Story = {
    name: "Disabled",
    //eslint-disable-next-line
    render: (_: any) => (
        <div className="flex flex-col items-start gap-3">
            <Button label="BUTTON" disabled />
            <Button disabled icon={<Download />} aria-label="Download disabled" />
        </div>
    ),
};

export const UsageExample: Story = {
    name: "Usage Example",
    //eslint-disable-next-line
    render: (_: any) => (
        <div className="inline-flex max-w-xl flex-col items-start gap-4">
            <Typography.P2>
                Ready to publish your release notes?
            </Typography.P2>

            <div className="inline-flex gap-3">
                <Button intent="default" variant="outline" label="Save Draft" />
                <Button
                    intent="primary"
                    variant="solid"
                    label="Publish"
                    icon={<ArrowRight />}
                    iconPosition="right"
                />
            </div>
        </div>
    ),
};
