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
  { feature: "TotalCharges", importance: 0.142 },
  { feature: "MonthlyCharges", importance: 0.128 },
  { feature: "tenure", importance: 0.115 },
  { feature: "Contract_Month", importance: 0.098 },
  { feature: "OnlineSecurity", importance: 0.072 },
  { feature: "TechSupport", importance: 0.068 },
  { feature: "InternetService_Fiber", importance: 0.065 },
  { feature: "PaymentMethod_Electronic", importance: 0.058 },
  { feature: "OnlineBackup", importance: 0.052 },
  { feature: "DeviceProtection", importance: 0.048 },
];

export function FeatureImportanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Features</CardTitle>
        <CardDescription>Most important features for churn prediction</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" horizontal={false} />
              <XAxis
                type="number"
                tick={{ fill: "#71717a", fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "#e4e4e7" }}
                tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
              />
              <YAxis
                type="category"
                dataKey="feature"
                tick={{ fill: "#71717a", fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "#e4e4e7" }}
                width={130}
              />
              <Tooltip
                formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, "Importance"]}
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e4e4e7",
                  borderRadius: "6px",
                  fontSize: "13px",
                }}
              />
              <Bar
                dataKey="importance"
                fill="#6366f1"
                radius={[0, 4, 4, 0]}
                maxBarSize={24}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
