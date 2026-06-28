import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "../../molecules";
import { TextArea } from "./index";

type StoryArgs = React.ComponentProps<typeof TextArea>;

const meta: Meta<StoryArgs> = {
    title: "Components/Atoms/TextArea",
    component: TextArea,
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
        resize: {
            control: "inline-radio",
            options: ["vertical", "horizontal", "both"],
        },
        autoResize: {
            control: "boolean",
        },
        minRows: {
            control: {
                type: "number",
                min: 1,
                max: 8,
                step: 1,
            },
        },
        maxRows: {
            control: {
                type: "number",
                min: 1,
                max: 12,
                step: 1,
            },
        },
        showCount: {
            control: "boolean",
        },
        maxLength: {
            control: {
                type: "number",
                min: 1,
                max: 400,
                step: 1,
            },
        },
        fullWidth: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        readOnly: {
            control: "boolean",
        },
        placeholder: {
            control: "text",
        },
        classNames: {
            table: { disable: true },
        },
        onChange: {
            table: { disable: true },
        },
    },
    args: {
        size: "md",
        state: "default",
        resize: "vertical",
        autoResize: false,
        minRows: 2,
        maxRows: undefined,
        showCount: false,
        maxLength: undefined,
        fullWidth: false,
        disabled: false,
        readOnly: false,
        placeholder: "TextArea",
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
    render: (args) => <TextArea {...args} />,
};

export const Sizes: Story = {
    name: "Sizes",
    // eslint-disable-next-line
    render: (_) => (
        <div className="inline-flex flex-col gap-3 w-full max-w-xl">
            <TextArea size="sm" placeholder="TextArea" />
            <TextArea size="md" placeholder="TextArea" />
            <TextArea size="lg" placeholder="TextArea" />
        </div>
    ),
};

export const States: Story = {
    name: "States",
    // eslint-disable-next-line
    render: (_) => (
        <div className="inline-flex flex-col gap-3 w-full max-w-xl">
            <TextArea state="default" placeholder="TextArea" />
            <TextArea state="success" placeholder="TextArea" />
            <TextArea state="warning" placeholder="TextArea" />
            <TextArea state="error" placeholder="TextArea" />
        </div>
    ),
};

export const Variations: Story = {
    name: "Variations / Behavior",
    // eslint-disable-next-line
    render: (_) => (
        <div className="inline-flex flex-col gap-4 w-full max-w-xl">
            <TextArea
                showCount
                maxLength={120}
                placeholder="TextArea"
            />

            <TextArea
                autoResize
                minRows={2}
                maxRows={6}
                showCount
                maxLength={240}
                fullWidth
                placeholder="TextArea"
            />

            <TextArea
                resize="both"
                placeholder="TextArea"
            />
        </div>
    ),
};

export const UsageExample: Story = {
    name: "Real Usage Example",
    render: () => (
        <div className="inline-flex flex-col gap-5 w-full max-w-xl">
            <FormField
                label="Project Summary"
                message="Keep it concise so stakeholders can scan it quickly."
                state="default"
                layout="vertical"
            >
                <TextArea
                    minRows={3}
                    fullWidth
                    showCount
                    maxLength={240}
                    placeholder="Summarize the latest sprint outcomes..."
                />
            </FormField>

            <FormField
                label="Retrospective Notes"
                message="Please fix highlighted issues before publishing."
                state="error"
                layout="vertical"
            >
                <TextArea
                    state="error"
                    minRows={3}
                    fullWidth
                    showCount
                    maxLength={160}
                    defaultValue="Need to include action items and owners."
                />
            </FormField>
        </div>
    ),
};
