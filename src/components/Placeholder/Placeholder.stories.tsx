import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Placeholder } from "@/components/Placeholder";

const meta: Meta<typeof Placeholder> = {
  title: "Components/Placeholder",
  component: Placeholder,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    className: {
      control: "object",
      description: "Custom class names for the placeholder wrapper",
    }
  },
};

export default meta;
type Story = StoryObj<typeof Placeholder>;

export const Default: Story = {
  args: {
    label: "Placeholder",
    className: {
      wrapper: "w-full h-32",
    },
  },
};

export const Small: Story = {
  args: {
    label: "Small Block",
    className: {
      wrapper: "w-48 h-16",
    },
  },
};

export const Large: Story = {
  args: {
    label: "Large Section",
    className: {
      wrapper: "w-full h-64",
    },
  },
};
