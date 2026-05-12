"use client";

const clients = [
  { id: 1, samples: 1878, churnRate: 26.4 },
  { id: 2, samples: 1878, churnRate: 26.7 },
  { id: 3, samples: 1878, churnRate: 26.3 },
];

export function ClientDistributionChart() {
  return (
    <div className="bg-[#141414] rounded-lg p-5 border border-[#1a1a1a]">
      <h3 className="text-sm font-medium text-[#e5e5e5] mb-4">Client Distribution</h3>
      
      <div className="space-y-4">
        {clients.map((client) => (
          <div key={client.id}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-[#888]">Client {client.id}</span>
              <span className="text-xs text-[#666]">{client.samples.toLocaleString()}</span>
            </div>
            <div className="h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
              <div className="h-full bg-[#22c55e] rounded-full" style={{ width: "100%" }} />
            </div>
            <p className="text-[10px] text-[#555] mt-1">Churn: {client.churnRate}%</p>
          </div>
        ))}
      </div>
      
      <div className="mt-5 pt-4 border-t border-[#1a1a1a] space-y-1.5">
        <div className="flex justify-between text-xs">
          <span className="text-[#666]">Train samples</span>
          <span className="text-[#888]">5,634</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-[#666]">Test samples</span>
          <span className="text-[#888]">1,409</span>
        </div>
      </div>
    </div>
  );
}
