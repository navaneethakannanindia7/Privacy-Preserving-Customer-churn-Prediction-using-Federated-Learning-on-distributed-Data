"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { fold: "1", centralized: 75.2, federated: 75.8 },
  { fold: "2", centralized: 78.1, federated: 77.6 },
  { fold: "3", centralized: 76.8, federated: 77.2 },
  { fold: "4", centralized: 75.5, federated: 76.8 },
  { fold: "5", centralized: 77.9, federated: 77.6 },
];

export function KFoldValidationChart() {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-medium text-[#fafafa]">Cross Validation</h3>
          <p className="text-xs text-[#71717a] mt-1">5-fold accuracy (%)</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-0.5 bg-[#3b82f6] rounded" />
            <span className="text-[#71717a]">Centralized</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-0.5 bg-[#22c55e] rounded" />
            <span className="text-[#71717a]">Federated</span>
          </div>
        </div>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="fold"
              tick={{ fill: "#71717a", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `Fold ${v}`}
            />
            <YAxis
              domain={[74, 80]}
              tick={{ fill: "#71717a", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={30}
            />
            <Tooltip
              cursor={{ stroke: "#262626" }}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                return (
                  <div className="bg-[#1f1f1f] border border-[#262626] rounded-lg px-3 py-2 text-xs">
                    <p className="text-[#fafafa] font-medium mb-1">Fold {payload[0]?.payload?.fold}</p>
                    {payload.map((p, i) => (
                      <p key={i} className="text-[#a1a1aa]">
                        {p.name === "centralized" ? "Centralized" : "Federated"}: {Number(p.value).toFixed(1)}%
                      </p>
                    ))}
                  </div>
                );
              }}
            />
            <Line
              type="monotone"
              dataKey="centralized"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ fill: "#0a0a0a", stroke: "#3b82f6", strokeWidth: 2, r: 4 }}
              activeDot={{ fill: "#3b82f6", stroke: "#3b82f6", r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="federated"
              stroke="#22c55e"
              strokeWidth={2}
              dot={{ fill: "#0a0a0a", stroke: "#22c55e", strokeWidth: 2, r: 4 }}
              activeDot={{ fill: "#22c55e", stroke: "#22c55e", r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
