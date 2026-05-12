"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { metric: "Accuracy", centralized: 76.01, federated: 77.71 },
  { metric: "F1 Score", centralized: 60.33, federated: 61.33 },
  { metric: "Precision", centralized: 53.77, federated: 56.85 },
  { metric: "Recall", centralized: 68.72, federated: 66.58 },
];

const COLORS = {
  centralized: "#3b82f6",
  federated: "#22c55e",
};

export function ModelComparisonChart() {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-medium text-[#fafafa]">Model Comparison</h3>
          <p className="text-xs text-[#71717a] mt-1">Performance metrics (%)</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#3b82f6]" />
            <span className="text-[#71717a]">Centralized</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#22c55e]" />
            <span className="text-[#71717a]">Federated</span>
          </div>
        </div>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={2} barCategoryGap="20%">
            <XAxis
              dataKey="metric"
              tick={{ fill: "#71717a", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              domain={[50, 85]}
              tick={{ fill: "#71717a", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v}`}
              width={30}
            />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                return (
                  <div className="bg-[#1f1f1f] border border-[#262626] rounded-lg px-3 py-2 text-xs">
                    <p className="text-[#fafafa] font-medium mb-1">{payload[0]?.payload?.metric}</p>
                    {payload.map((p, i) => (
                      <p key={i} className="text-[#a1a1aa]">
                        {p.name === "centralized" ? "Centralized" : "Federated"}: {Number(p.value).toFixed(1)}%
                      </p>
                    ))}
                  </div>
                );
              }}
            />
            <Bar dataKey="centralized" radius={[3, 3, 0, 0]} maxBarSize={28}>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS.centralized} />
              ))}
            </Bar>
            <Bar dataKey="federated" radius={[3, 3, 0, 0]} maxBarSize={28}>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS.federated} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
