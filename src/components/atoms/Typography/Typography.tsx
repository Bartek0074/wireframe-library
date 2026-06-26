import clsx from "clsx";

type PlaceholderProps = {
    children?: string;
    className?: {
        text?: string;
    };
};

const H1 = ({ children, className }: PlaceholderProps) => {
    const textClassName = clsx(
        "text-5xl sm:text-6xl font-heading text-gray-900",
        className?.text
    );

    return (
        <h1 className={textClassName}>
            {children}
        </h1>
    );
}

const H2 = ({ children, className }: PlaceholderProps) => {
    const textClassName = clsx(
        "text-4xl sm:text-5xl font-heading text-gray-900",
        className?.text
    );

    return (
        <h2 className={textClassName}>
            {children}
        </h2>
    );
}

const H3 = ({ children, className }: PlaceholderProps) => {
    const textClassName = clsx(
        "text-3xl sm:text-4xl font-heading text-gray-900",
        className?.text
    );

    return (
        <h3 className={textClassName}>
            {children}
        </h3>
    );
}
const H4 = ({ children, className }: PlaceholderProps) => {
    const textClassName = clsx(
        "text-2xl sm:text-3xl font-heading text-gray-900",
        className?.text
    );

    return (
        <h4 className={textClassName}>
            {children}
        </h4>
    );
}

const H5 = ({ children, className }: PlaceholderProps) => {
    const textClassName = clsx(
        "text-xl sm:text-2xl font-heading text-gray-900",
        className?.text
    );

    return (
        <h5 className={textClassName}>
            {children}
        </h5>
    );
}

const H6 = ({ children, className }: PlaceholderProps) => {
    const textClassName = clsx(
        "text-lg sm:text-xl font-heading text-gray-900",
        className?.text
    );

    return (
        <h6 className={textClassName}>
            {children}
        </h6>
    );
}

const Lead = ({ children, className }: PlaceholderProps) => {
    const textClassName = clsx(
        "text-lg sm:text-xl font-body text-gray-700",
        className?.text
    );

    return (
        <p className={textClassName}>
            {children}
        </p>
    );
}

const P1 = ({ children, className }: PlaceholderProps) => {
    const textClassName = clsx(
        "text-base sm:text-lg font-body text-gray-900",
        className?.text
    );

    return (
        <p className={textClassName}>
            {children}
        </p>
    );
}

const P2 = ({ children, className }: PlaceholderProps) => {
    const textClassName = clsx(
        "text-sm sm:text-base font-body text-gray-900",
        className?.text
    );

    return (
        <p className={textClassName}>
            {children}
        </p>
    );
}

const P3 = ({ children, className }: PlaceholderProps) => {
    const textClassName = clsx(
        "text-xs sm:text-sm font-body <text-gray-9></text-gray-9>00",
        className?.text
    );

    return (
        <p className={textClassName}>
            {children}
        </p>
    );
}

const Typography = {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Lead,
    P1,
    P2,
    P3,
};

export default Typography;

