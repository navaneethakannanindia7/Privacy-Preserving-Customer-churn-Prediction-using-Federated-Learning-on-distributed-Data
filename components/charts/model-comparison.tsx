"use client";

import { useState, useEffect } from "react";
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

export function ModelComparisonChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-[#141414] rounded-lg p-5 border border-[#1a1a1a]">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-medium text-[#e5e5e5]">Model Comparison</h3>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#3b82f6]" />
            <span className="text-[#666]">Centralized</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#22c55e]" />
            <span className="text-[#666]">Federated</span>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: 240 }}>
        {mounted && (
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={data} barGap={2} barCategoryGap="20%">
              <XAxis
                dataKey="metric"
                tick={{ fill: "#666", fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                domain={[50, 85]}
                tick={{ fill: "#666", fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={30}
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.02)" }}
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 text-xs">
                      <p className="text-[#e5e5e5] mb-1">{payload[0]?.payload?.metric}</p>
                      {payload.map((p, i) => (
                        <p key={i} className="text-[#888]">
                          {p.name === "centralized" ? "Centralized" : "Federated"}: {Number(p.value).toFixed(1)}%
                        </p>
                      ))}
                    </div>
                  );
                }}
              />
              <Bar dataKey="centralized" radius={[2, 2, 0, 0]} maxBarSize={24}>
                {data.map((_, i) => (
                  <Cell key={i} fill="#3b82f6" />
                ))}
              </Bar>
              <Bar dataKey="federated" radius={[2, 2, 0, 0]} maxBarSize={24}>
                {data.map((_, i) => (
                  <Cell key={i} fill="#22c55e" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
