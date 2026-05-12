"use client";

import { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-[#141414] rounded-lg p-5 border border-[#1a1a1a]">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-medium text-[#e5e5e5]">5-Fold Cross Validation</h3>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-0.5 bg-[#3b82f6] rounded" />
            <span className="text-[#666]">Centralized</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-0.5 bg-[#22c55e] rounded" />
            <span className="text-[#666]">Federated</span>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: 240 }}>
        {mounted && (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={data}>
              <XAxis
                dataKey="fold"
                tick={{ fill: "#666", fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `Fold ${v}`}
              />
              <YAxis
                domain={[74, 80]}
                tick={{ fill: "#666", fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={30}
              />
              <Tooltip
                cursor={{ stroke: "#333" }}
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 text-xs">
                      <p className="text-[#e5e5e5] mb-1">Fold {payload[0]?.payload?.fold}</p>
                      {payload.map((p, i) => (
                        <p key={i} className="text-[#888]">
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
                dot={{ fill: "#141414", stroke: "#3b82f6", strokeWidth: 2, r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="federated"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{ fill: "#141414", stroke: "#22c55e", strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
