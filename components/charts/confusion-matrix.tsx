"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ConfusionMatrixProps {
  title: string;
  description: string;
  matrix: {
    trueNeg: number;
    falsePos: number;
    falseNeg: number;
    truePos: number;
  };
  colorScheme: "blue" | "orange";
}

export function ConfusionMatrix({
  title,
  description,
  matrix,
  colorScheme,
}: ConfusionMatrixProps) {
  const colors = {
    blue: {
      high: "bg-blue-500",
      medium: "bg-blue-300",
      low: "bg-blue-100",
    },
    orange: {
      high: "bg-orange-500",
      medium: "bg-orange-300",
      low: "bg-orange-100",
    },
  };

  const getColor = (value: number, max: number) => {
    const ratio = value / max;
    if (ratio > 0.6) return colors[colorScheme].high;
    if (ratio > 0.3) return colors[colorScheme].medium;
    return colors[colorScheme].low;
  };

  const maxVal = Math.max(
    matrix.trueNeg,
    matrix.falsePos,
    matrix.falseNeg,
    matrix.truePos
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="mb-3">
            <p className="text-xs text-[#71717a] text-center">Predicted</p>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-center mr-3">
              <p
                className="text-xs text-[#71717a] transform -rotate-90 whitespace-nowrap"
                style={{ transformOrigin: "center" }}
              >
                Actual
              </p>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center text-xs text-[#71717a] pb-1"></div>
              <div className="text-center text-xs text-[#71717a] pb-1 col-span-2 grid grid-cols-2 gap-1">
                <span>No Churn</span>
                <span>Churn</span>
              </div>
              <div
                className={`w-20 h-16 ${getColor(
                  matrix.trueNeg,
                  maxVal
                )} rounded flex items-center justify-center`}
              >
                <span className="text-sm font-semibold text-white">
                  {matrix.trueNeg}
                </span>
              </div>
              <div
                className={`w-20 h-16 ${getColor(
                  matrix.falsePos,
                  maxVal
                )} rounded flex items-center justify-center`}
              >
                <span className="text-sm font-semibold text-white">
                  {matrix.falsePos}
                </span>
              </div>
              <div
                className={`w-20 h-16 ${getColor(
                  matrix.falseNeg,
                  maxVal
                )} rounded flex items-center justify-center`}
              >
                <span className="text-sm font-semibold text-white">
                  {matrix.falseNeg}
                </span>
              </div>
              <div
                className={`w-20 h-16 ${getColor(
                  matrix.truePos,
                  maxVal
                )} rounded flex items-center justify-center`}
              >
                <span className="text-sm font-semibold text-white">
                  {matrix.truePos}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3 flex gap-4 text-xs text-[#71717a]">
            <span>TN: True Negative</span>
            <span>TP: True Positive</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
