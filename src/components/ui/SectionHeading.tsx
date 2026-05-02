import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("mb-12", align === "center" && "text-center", className)}
    >
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
        {eyebrow}
      </p>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-dark-muted text-lg max-w-2xl",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
