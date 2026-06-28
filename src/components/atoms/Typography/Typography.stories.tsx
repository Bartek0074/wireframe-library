import "@/app/globals.css";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Typography } from "./index";

type TypographyVariant =
    | "H1"
    | "H2"
    | "H3"
    | "H4"
    | "H5"
    | "H6"
    | "Lead"
    | "P1"
    | "P2"
    | "P3";

type StoryArgs = {
    variant: TypographyVariant;
    text: string;
};

const variantMap: Record<TypographyVariant, (props: { children: string }) => React.ReactNode> = {
    H1: ({ children }) => <Typography.H1>{children}</Typography.H1>,
    H2: ({ children }) => <Typography.H2>{children}</Typography.H2>,
    H3: ({ children }) => <Typography.H3>{children}</Typography.H3>,
    H4: ({ children }) => <Typography.H4>{children}</Typography.H4>,
    H5: ({ children }) => <Typography.H5>{children}</Typography.H5>,
    H6: ({ children }) => <Typography.H6>{children}</Typography.H6>,
    Lead: ({ children }) => <Typography.Lead>{children}</Typography.Lead>,
    P1: ({ children }) => <Typography.P1>{children}</Typography.P1>,
    P2: ({ children }) => <Typography.P2>{children}</Typography.P2>,
    P3: ({ children }) => <Typography.P3>{children}</Typography.P3>,
};

const meta: Meta<StoryArgs> = {
    title: "Components/Atoms/Typography",
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["H1", "H2", "H3", "H4", "H5", "H6", "Lead", "P1", "P2", "P3"],
        },
        text: {
            control: "text",
        },
    },
    args: {
        variant: "H2",
        text: "Typography Playground",
    },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
    render: (args) => {
        const Variant = variantMap[args.variant];
        return <Variant>{args.text}</Variant>;
    },
};

export const Sizes: Story = {
    name: "Scale",
    render: () => (
        <div className="space-y-3">
            <Typography.H1>Heading 1</Typography.H1>
            <Typography.H2>Heading 2</Typography.H2>
            <Typography.H3>Heading 3</Typography.H3>
            <Typography.H4>Heading 4</Typography.H4>
            <Typography.H5>Heading 5</Typography.H5>
            <Typography.H6>Heading 6</Typography.H6>
        </div>
    ),
};

export const Variations: Story = {
    name: "Variations / Body Text",
    render: () => (
        <div className="space-y-3 max-w-3xl">
            <Typography.Lead>
                Lead text introduces the section and gives context before detailed content.
            </Typography.Lead>
            <Typography.P1>
                P1 is ideal for primary reading flow in dashboards, docs, and marketing sections.
            </Typography.P1>
            <Typography.P2>
                P2 works well for supportive descriptions below controls and section headers.
            </Typography.P2>
            <Typography.P3>
                P3 is useful for tertiary details like helper copy and metadata.
            </Typography.P3>
        </div>
    ),
};

export const UsageExample: Story = {
    name: "Real Usage Example",
    render: () => (
        <article className="max-w-3xl space-y-3">
            <Typography.H3>Release Notes</Typography.H3>
            <Typography.Lead>
                Version 0.2 focuses on form controls and interaction consistency across the library.
            </Typography.Lead>
            <Typography.P2>
                Radio and TextArea stories are now grouped by UX concepts, making component behavior
                easier to review and discuss with product teams.
            </Typography.P2>
            <Typography.P3>
                Updated 28 Jun 2026 by Design System Team.
            </Typography.P3>
        </article>
    ),
};
