"use client";

import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Retained", value: 5174, percentage: 73.5 },
  { name: "Churned", value: 1869, percentage: 26.5 },
];

const COLORS = ["#22c55e", "#f59e0b"];

export function ChurnDistributionChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-[#fafafa]">Churn Distribution</h3>
        <p className="text-xs text-[#71717a] mt-1">Customer retention ratio</p>
      </div>
      
      <div style={{ width: "100%", height: 200, minHeight: 200 }} className="relative">
        {mounted && (
          <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        )}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-2xl font-semibold text-[#fafafa]">7,043</p>
            <p className="text-xs text-[#71717a]">Total</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#22c55e]" />
          <span className="text-xs text-[#71717a]">Retained (73.5%)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#f59e0b]" />
          <span className="text-xs text-[#71717a]">Churned (26.5%)</span>
        </div>
      </div>
    </div>
  );
}
