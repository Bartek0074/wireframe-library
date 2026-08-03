import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Marquee } from "./Marquee";
import { BrandLogo } from "../BrandLogo/BrandLogo";
import "@/app/storybook.css";

const meta: Meta<typeof Marquee> = {
  title: "Components/Atoms/Marquee",
  component: Marquee,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
  name: "Default",
  // eslint-disable-next-line
  render: (_) => (
    <Marquee
      items={[
        <BrandLogo key={0} name="Brand 1" />,
        <BrandLogo key={1} name="Brand 2" />,
        <BrandLogo key={2} name="Brand 3" />,
      ]}
    />
  ),
};
