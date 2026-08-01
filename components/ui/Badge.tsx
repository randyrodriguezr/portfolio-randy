interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
      px-3
      py-1
      rounded-full
      bg-green-100
      text-green-700
      text-sm
      font-medium
    "
    >
      {children}
    </span>
  );
}