interface MetricCardProps {
  label: string;
  value: string;
  sublabel?: string;
  highlight?: boolean;
  trend?: {
    value: number;
    direction: "up" | "down";
  };
}

export function MetricCard({
  label,
  value,
  sublabel,
  highlight,
  trend,
}: MetricCardProps) {
  return (
    <div className={`bg-[#141414] border border-[#262626] rounded-xl p-4 ${highlight ? "ring-1 ring-[#f59e0b]/30" : ""}`}>
      <p className="text-xs text-[#71717a] mb-2">{label}</p>
      <p className={`text-2xl font-semibold tracking-tight ${highlight ? "text-[#f59e0b]" : "text-[#fafafa]"}`}>
        {value}
      </p>
      <div className="flex items-center gap-2 mt-1">
        {sublabel && (
          <p className="text-xs text-[#71717a]">{sublabel}</p>
        )}
        {trend && (
          <span className={`text-xs font-medium ${trend.direction === "up" ? "text-[#22c55e]" : "text-[#ef4444]"}`}>
            {trend.direction === "up" ? "+" : "-"}{trend.value}%
          </span>
        )}
      </div>
    </div>
  );
}
