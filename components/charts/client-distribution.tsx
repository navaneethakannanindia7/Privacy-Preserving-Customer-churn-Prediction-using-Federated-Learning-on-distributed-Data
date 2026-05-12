"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const data = [
  { client: "Client 1", samples: 1878 },
  { client: "Client 2", samples: 1878 },
  { client: "Client 3", samples: 1878 },
];

export function ClientDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Distribution</CardTitle>
        <CardDescription>Training samples per federated client</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" vertical={false} />
              <XAxis
                dataKey="client"
                tick={{ fill: "#71717a", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "#e4e4e7" }}
              />
              <YAxis
                tick={{ fill: "#71717a", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "#e4e4e7" }}
              />
              <Tooltip
                formatter={(value: number) => [value.toLocaleString(), "Samples"]}
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e4e4e7",
                  borderRadius: "6px",
                  fontSize: "13px",
                }}
              />
              <Bar
                dataKey="samples"
                fill="#10b981"
                radius={[4, 4, 0, 0]}
                maxBarSize={60}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
