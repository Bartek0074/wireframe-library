export interface PlaceholderProps {
  /** Label displayed inside the placeholder block */
  label?: string;
  /** Width class (Tailwind), e.g. "w-full" or "w-64" */
  width?: string;
  /** Height class (Tailwind), e.g. "h-32" or "h-64" */
  height?: string;
}

export default function Placeholder({
  label = "Placeholder",
  width = "w-full",
  height = "h-32",
}: PlaceholderProps) {
  return (
    <div
      className={`${width} ${height} flex items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-gray-50 text-sm font-medium text-gray-400`}
    >
      {label}
    </div>
  );
}
