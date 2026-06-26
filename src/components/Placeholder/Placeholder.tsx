import clsx from "clsx";

type PlaceholderProps = {
  label: string;
  className?: {
    wrapper?: string;
  };
};

export default function Placeholder({
  label,
  className
}: PlaceholderProps) {
  const wrapperClassName = clsx(
    "flex p-4 items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-gray-50 text-sm font-medium text-gray-400",
    className?.wrapper
  );


  return (
    <div className={wrapperClassName}>
      {label}
    </div>
  );
}
