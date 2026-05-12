"use client";

import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { feature: "TotalCharges", importance: 14.2 },
  { feature: "MonthlyCharges", importance: 12.8 },
  { feature: "tenure", importance: 11.5 },
  { feature: "Contract", importance: 9.8 },
  { feature: "OnlineSecurity", importance: 7.2 },
  { feature: "TechSupport", importance: 6.8 },
  { feature: "InternetService", importance: 6.5 },
];

export function FeatureImportanceChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-[#141414] rounded-lg p-5 border border-[#1a1a1a]">
      <h3 className="text-sm font-medium text-[#e5e5e5] mb-4">Feature Importance</h3>
      
      <div style={{ width: "100%", height: 220 }}>
        {mounted && (
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={data} layout="vertical" margin={{ left: -10, right: 10 }}>
              <XAxis
                type="number"
                tick={{ fill: "#666", fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                domain={[0, 16]}
                tickFormatter={(v) => `${v}%`}
              />
              <YAxis
                type="category"
                dataKey="feature"
                tick={{ fill: "#888", fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                width={90}
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.02)" }}
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 text-xs">
                      <p className="text-[#e5e5e5]">{payload[0]?.payload?.feature}</p>
                      <p className="text-[#888]">Importance: {payload[0]?.value}%</p>
                    </div>
                  );
                }}
              />
              <Bar dataKey="importance" radius={[0, 2, 2, 0]} maxBarSize={14}>
                {data.map((_, i) => (
                  <Cell key={i} fill={i < 3 ? "#8b5cf6" : "#6366f1"} fillOpacity={1 - i * 0.1} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
