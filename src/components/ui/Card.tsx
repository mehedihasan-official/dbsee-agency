import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Card({
  title,
  description,
  icon,
  href,
  image,
  className,
  children,
}: CardProps) {
  const content = (
    <div
      className={cn(
        "bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300",
        className,
      )}
    >
      {image && (
        <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      {icon && (
        <div className="mb-4">
          {/* Icon would be rendered here using lucide-react */}
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-primary text-xl">{icon}</span>
          </div>
        </div>
      )}
      <h3 className="font-heading font-bold text-xl text-white mb-2">
        {title}
      </h3>
      <p className="text-dark-muted">{description}</p>
      {children}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
