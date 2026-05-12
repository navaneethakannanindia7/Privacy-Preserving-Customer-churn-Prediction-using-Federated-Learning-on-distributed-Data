"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Retained", value: 5174, pct: 73.5 },
  { name: "Churned", value: 1869, pct: 26.5 },
];

export function ChurnDistributionChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-[#141414] rounded-lg p-5 border border-[#1a1a1a]">
      <h3 className="text-sm font-medium text-[#e5e5e5] mb-4">Churn Distribution</h3>
      
      <div style={{ width: "100%", height: 180 }} className="relative">
        {mounted && (
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="#22c55e" />
                <Cell fill="#f59e0b" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        )}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-lg font-semibold text-[#e5e5e5]">7,043</p>
            <p className="text-[10px] text-[#666]">Total</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-5 mt-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-sm bg-[#22c55e]" />
          <span className="text-xs text-[#666]">Retained 73.5%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-sm bg-[#f59e0b]" />
          <span className="text-xs text-[#666]">Churned 26.5%</span>
        </div>
      </div>
    </div>
  );
}
