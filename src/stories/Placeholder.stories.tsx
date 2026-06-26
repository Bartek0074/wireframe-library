import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Placeholder } from "@/components/Placeholder";

const meta: Meta<typeof Placeholder> = {
  title: "Components/Placeholder",
  component: Placeholder,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Placeholder>;

export const Default: Story = {
  args: {
    label: "Placeholder",
    width: "w-full",
    height: "h-32",
  },
};

export const Small: Story = {
  args: {
    label: "Small Block",
    width: "w-48",
    height: "h-16",
  },
};

export const Large: Story = {
  args: {
    label: "Large Section",
    width: "w-full",
    height: "h-64",
  },
};
