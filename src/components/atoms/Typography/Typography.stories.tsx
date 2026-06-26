import '@/app/globals.css';

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Typography } from "./index";

const TypographyPreview = () => {
  return (
    <div className="space-y-4">
      <Typography.H1>Heading 1</Typography.H1>
      <Typography.H2>Heading 2</Typography.H2>
      <Typography.H3>Heading 3</Typography.H3>
      <Typography.H4>Heading 4</Typography.H4>
      <Typography.H5>Heading 5</Typography.H5>
      <Typography.H6>Heading 6</Typography.H6>
      <Typography.Lead>Lead Text</Typography.Lead>
      <Typography.P1>Paragraph 1</Typography.P1>
      <Typography.P2>Paragraph 2</Typography.P2>
      <Typography.P3>Paragraph 3</Typography.P3>
    </div>
  );
}

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
