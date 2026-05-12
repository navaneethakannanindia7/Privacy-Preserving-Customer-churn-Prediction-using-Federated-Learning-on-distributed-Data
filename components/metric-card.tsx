import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
}: MetricCardProps) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-[#71717a] mb-1">{title}</p>
            <p className="text-2xl font-bold text-[#171717]">{value}</p>
            {subtitle && (
              <p className="text-xs text-[#a1a1aa] mt-1">{subtitle}</p>
            )}
            {trend && trendValue && (
              <p
                className={`text-xs mt-2 ${
                  trend === "up"
                    ? "text-green-600"
                    : trend === "down"
                    ? "text-red-500"
                    : "text-[#71717a]"
                }`}
              >
                {trend === "up" ? "+" : trend === "down" ? "" : ""}
                {trendValue}
              </p>
            )}
          </div>
          <div className="p-2 bg-[#f4f4f5] rounded-lg">
            <Icon className="w-5 h-5 text-[#71717a]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
