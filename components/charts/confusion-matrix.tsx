"use client";

interface ConfusionMatrixProps {
  title: string;
  subtitle: string;
  matrix: {
    tn: number;
    fp: number;
    fn: number;
    tp: number;
  };
  variant: "blue" | "green";
}

export function ConfusionMatrix({
  title,
  subtitle,
  matrix,
  variant,
}: ConfusionMatrixProps) {
  const maxVal = Math.max(matrix.tn, matrix.fp, matrix.fn, matrix.tp);
  
  const getOpacity = (value: number) => {
    const ratio = value / maxVal;
    return Math.max(0.2, ratio);
  };

  const baseColor = variant === "blue" ? "59, 130, 246" : "34, 197, 94";
  
  const accuracy = ((matrix.tn + matrix.tp) / (matrix.tn + matrix.fp + matrix.fn + matrix.tp) * 100).toFixed(1);

  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-[#fafafa]">{title}</h3>
        <p className="text-xs text-[#71717a] mt-1">{subtitle}</p>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="text-xs text-[#71717a] mb-2">Predicted</div>
        <div className="flex items-center gap-2">
          <div className="text-xs text-[#71717a] -rotate-90 w-4">Actual</div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="col-span-2 grid grid-cols-2 gap-1.5 text-[10px] text-[#71717a] text-center mb-1">
              <span>No Churn</span>
              <span>Churn</span>
            </div>
            <Cell value={matrix.tn} label="TN" opacity={getOpacity(matrix.tn)} color={baseColor} />
            <Cell value={matrix.fp} label="FP" opacity={getOpacity(matrix.fp)} color={baseColor} />
            <Cell value={matrix.fn} label="FN" opacity={getOpacity(matrix.fn)} color={baseColor} />
            <Cell value={matrix.tp} label="TP" opacity={getOpacity(matrix.tp)} color={baseColor} />
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <span className="text-xs text-[#71717a]">Accuracy: </span>
          <span className="text-sm font-medium text-[#fafafa]">{accuracy}%</span>
        </div>
      </div>
    </div>
  );
}

function Cell({ 
  value, 
  label, 
  opacity, 
  color 
}: { 
  value: number; 
  label: string; 
  opacity: number; 
  color: string;
}) {
  return (
    <div 
      className="w-20 h-14 rounded-lg flex flex-col items-center justify-center"
      style={{ backgroundColor: `rgba(${color}, ${opacity})` }}
    >
      <span className="text-sm font-semibold text-white">{value}</span>
      <span className="text-[10px] text-white/70">{label}</span>
    </div>
  );
}
