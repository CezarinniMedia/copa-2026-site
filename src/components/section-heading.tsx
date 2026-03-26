import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-14", className)}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-1 rounded-full bg-copa-verde" />
        <div className="w-2 h-1 rounded-full bg-copa-amarelo" />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground mt-4">{subtitle}</p>
      )}
    </div>
  );
}
