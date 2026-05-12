interface MetricCardProps {
  label: string;
  value: string;
  highlight?: boolean;
  trend?: {
    value: number;
    direction: "up" | "down";
  };
}

export function MetricCard({ label, value, highlight, trend }: MetricCardProps) {
  return (
    <div className="bg-[#141414] rounded-lg p-4 border border-[#1a1a1a]">
      <p className="text-xs text-[#666] mb-2">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className={`text-xl font-semibold ${highlight ? "text-[#f59e0b]" : "text-[#e5e5e5]"}`}>
          {value}
        </p>
        {trend && (
          <span className={`text-xs ${trend.direction === "up" ? "text-[#22c55e]" : "text-[#ef4444]"}`}>
            {trend.direction === "up" ? "+" : "-"}{trend.value}%
          </span>
        )}
      </div>
    </div>
  );
}
