import { Typography } from "@/components/atoms/Typography";

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

export default TypographyPreview;