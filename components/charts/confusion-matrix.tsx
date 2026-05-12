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

export function ConfusionMatrix({ title, subtitle, matrix, variant }: ConfusionMatrixProps) {
  const total = matrix.tn + matrix.fp + matrix.fn + matrix.tp;
  const accuracy = ((matrix.tn + matrix.tp) / total * 100).toFixed(1);
  const maxVal = Math.max(matrix.tn, matrix.fp, matrix.fn, matrix.tp);
  
  const getOpacity = (value: number) => Math.max(0.15, value / maxVal * 0.7);
  const color = variant === "blue" ? "59, 130, 246" : "34, 197, 94";

  return (
    <div className="bg-[#141414] rounded-lg p-5 border border-[#1a1a1a]">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-[#e5e5e5]">{title}</h3>
        <p className="text-xs text-[#666] mt-0.5">{subtitle}</p>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="text-[10px] text-[#666] mb-2 uppercase tracking-wide">Predicted</div>
        <div className="flex items-center gap-3">
          <div className="text-[10px] text-[#666] uppercase tracking-wide -rotate-90 origin-center">Actual</div>
          <div>
            <div className="grid grid-cols-2 gap-1 text-[10px] text-[#666] text-center mb-1">
              <span>No</span>
              <span>Yes</span>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <Cell value={matrix.tn} label="TN" opacity={getOpacity(matrix.tn)} color={color} />
              <Cell value={matrix.fp} label="FP" opacity={getOpacity(matrix.fp)} color={color} />
              <Cell value={matrix.fn} label="FN" opacity={getOpacity(matrix.fn)} color={color} />
              <Cell value={matrix.tp} label="TP" opacity={getOpacity(matrix.tp)} color={color} />
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <span className="text-xs text-[#666]">Acc: </span>
          <span className="text-sm font-medium text-[#e5e5e5]">{accuracy}%</span>
        </div>
      </div>
    </div>
  );
}

function Cell({ value, label, opacity, color }: { value: number; label: string; opacity: number; color: string }) {
  return (
    <div 
      className="w-16 h-12 rounded flex flex-col items-center justify-center"
      style={{ backgroundColor: `rgba(${color}, ${opacity})` }}
    >
      <span className="text-sm font-medium text-white">{value}</span>
      <span className="text-[9px] text-white/60">{label}</span>
    </div>
  );
}
