import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  color?: "orange" | "gray";
  className?: string;
}

export function Badge({ children, color = "orange", className }: BadgeProps) {
  const colorClasses = {
    orange: "bg-primary/10 text-primary",
    gray: "bg-white/10 text-white",
  };

  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full",
        colorClasses[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
