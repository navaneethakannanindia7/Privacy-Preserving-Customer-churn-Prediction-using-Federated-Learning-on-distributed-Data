"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const data = [
  { fold: "Fold 1", centralized: 0.752, federated: 0.758 },
  { fold: "Fold 2", centralized: 0.781, federated: 0.776 },
  { fold: "Fold 3", centralized: 0.768, federated: 0.772 },
  { fold: "Fold 4", centralized: 0.755, federated: 0.768 },
  { fold: "Fold 5", centralized: 0.779, federated: 0.776 },
];

export function KFoldValidationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>K-Fold Cross Validation</CardTitle>
        <CardDescription>Accuracy across 5 folds for both approaches</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
              <XAxis
                dataKey="fold"
                tick={{ fill: "#71717a", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "#e4e4e7" }}
              />
              <YAxis
                domain={[0.7, 0.82]}
                tick={{ fill: "#71717a", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "#e4e4e7" }}
                tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
              />
              <Tooltip
                formatter={(value: number) => [`${(value * 100).toFixed(2)}%`]}
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e4e4e7",
                  borderRadius: "6px",
                  fontSize: "13px",
                }}
              />
              <Legend
                verticalAlign="top"
                height={36}
                formatter={(value) => (
                  <span style={{ color: "#71717a", fontSize: "13px" }}>
                    {value === "centralized" ? "Centralized" : "Federated"}
                  </span>
                )}
              />
              <Line
                type="monotone"
                dataKey="centralized"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="federated"
                stroke="#f97316"
                strokeWidth={2}
                dot={{ fill: "#f97316", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
