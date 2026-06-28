import type { Meta, StoryObj } from "@storybook/nextjs-vite";
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
        minRows: 1,
        maxRows: undefined,
        showCount: false,
        maxLength: undefined,
        fullWidth: false,
        disabled: false,
        readOnly: false,
        placeholder: "Write your notes...",
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
    render: (args) => <TextArea {...args} />,
};

export const WithCounter: Story = {
    args: {
        showCount: true,
        maxLength: 120,
        defaultValue: "This is an editable text area.",
    },
    render: (args) => <TextArea {...args} />,
};

export const AutoResize: Story = {
    args: {
        autoResize: true,
        minRows: 1,
        maxRows: 6,
        showCount: true,
        maxLength: 240,
        fullWidth: true,
        defaultValue:
            "Typing more content will grow this field until maxRows is reached.",
    },
    render: (args) => <TextArea {...args} />,
};

export const ErrorState: Story = {
    args: {
        state: "error",
        showCount: true,
        maxLength: 30,
        defaultValue: "Input with error styling.",
    },
    render: (args) => <TextArea {...args} />,
};