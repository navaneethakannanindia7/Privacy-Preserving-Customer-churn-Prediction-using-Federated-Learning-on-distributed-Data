"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const data = [
  { metric: "Accuracy", centralized: 0.7601, federated: 0.7771 },
  { metric: "F1 Score", centralized: 0.6033, federated: 0.6133 },
  { metric: "Precision", centralized: 0.5377, federated: 0.5685 },
  { metric: "Recall", centralized: 0.6872, federated: 0.6658 },
];

export function ModelComparisonChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Centralized vs Federated Learning</CardTitle>
        <CardDescription>Performance comparison across key metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" vertical={false} />
              <XAxis
                dataKey="metric"
                tick={{ fill: "#71717a", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "#e4e4e7" }}
              />
              <YAxis
                domain={[0.5, 0.85]}
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
              <Bar
                dataKey="centralized"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
              <Bar
                dataKey="federated"
                fill="#f97316"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
