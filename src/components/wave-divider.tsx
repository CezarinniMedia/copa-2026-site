interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  variant?: "wave" | "curve" | "angle";
  className?: string;
}

const svgPaths: Record<string, string> = {
  wave: "M0,0 L1440,0 L1440,64 Q1080,128 720,64 Q360,0 0,64 Z",
  curve: "M0,0 L1440,0 L1440,32 Q720,160 0,96 Z",
  angle: "M0,0 L1440,0 L1440,32 L0,96 Z",
};

export function WaveDivider({
  topColor,
  bottomColor,
  variant = "wave",
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`relative w-full h-12 md:h-20 -my-px ${className}`}
      style={{ backgroundColor: bottomColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <path d={svgPaths[variant]} fill={topColor} />
      </svg>
    </div>
  );
}
