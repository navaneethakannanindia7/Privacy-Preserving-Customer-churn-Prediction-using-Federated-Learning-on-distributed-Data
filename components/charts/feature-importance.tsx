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
  { feature: "TotalCharges", importance: 14.2 },
  { feature: "MonthlyCharges", importance: 12.8 },
  { feature: "tenure", importance: 11.5 },
  { feature: "Contract_Month", importance: 9.8 },
  { feature: "OnlineSecurity", importance: 7.2 },
  { feature: "TechSupport", importance: 6.8 },
  { feature: "InternetService", importance: 6.5 },
  { feature: "PaymentMethod", importance: 5.8 },
];

export function FeatureImportanceChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-[#fafafa]">Feature Importance</h3>
        <p className="text-xs text-[#71717a] mt-1">Top predictive features</p>
      </div>
      
      <div style={{ width: "100%", height: 280, minHeight: 280 }}>
        {mounted && (
          <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} layout="vertical" margin={{ left: 0, right: 10 }}>
            <XAxis
              type="number"
              tick={{ fill: "#71717a", fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              domain={[0, 16]}
              tickFormatter={(v) => `${v}%`}
            />
            <YAxis
              type="category"
              dataKey="feature"
              tick={{ fill: "#a1a1aa", fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              width={95}
            />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                return (
                  <div className="bg-[#1f1f1f] border border-[#262626] rounded-lg px-3 py-2 text-xs">
                    <p className="text-[#fafafa] font-medium">{payload[0]?.payload?.feature}</p>
                    <p className="text-[#a1a1aa]">Importance: {payload[0]?.value}%</p>
                  </div>
                );
              }}
            />
            <Bar dataKey="importance" radius={[0, 3, 3, 0]} maxBarSize={18}>
              {data.map((_, i) => (
                <Cell 
                  key={i} 
                  fill={i < 3 ? "#8b5cf6" : "#6366f1"} 
                  fillOpacity={1 - (i * 0.08)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
