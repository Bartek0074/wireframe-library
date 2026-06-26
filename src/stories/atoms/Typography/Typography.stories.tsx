import '../../storybook.css'

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TypographyPreview from "./TypographyPreview";

const meta: Meta<typeof TypographyPreview> = {
  title: "Components/Atoms/Typography",
  component: TypographyPreview,
  tags: ["autodocs"],

};

export default meta;
type Story = StoryObj<typeof TypographyPreview>;

export const Default: Story = {
  name: "Typography Preview",
  args: {},
};
