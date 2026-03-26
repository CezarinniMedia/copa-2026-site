import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "darker" | "gradient-green" | "gradient-blue";
}

const variantClasses: Record<string, string> = {
  default: "",
  darker: "bg-surface-darker",
  "gradient-green": "bg-gradient-to-b from-[#0a100c] to-background",
  "gradient-blue": "bg-gradient-to-b from-[#08081a] to-background",
};

export function SectionWrapper({
  children,
  className,
  id,
  variant = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 px-4 sm:px-6 lg:px-8",
        variantClasses[variant],
        className
      )}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
