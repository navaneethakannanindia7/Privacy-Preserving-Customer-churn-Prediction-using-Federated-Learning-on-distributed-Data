"use client";

const clients = [
  { id: 1, samples: 1878, churnRate: 26.4 },
  { id: 2, samples: 1878, churnRate: 26.7 },
  { id: 3, samples: 1878, churnRate: 26.3 },
];

export function ClientDistributionChart() {
  const maxSamples = Math.max(...clients.map(c => c.samples));
  
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-[#fafafa]">Client Distribution</h3>
        <p className="text-xs text-[#71717a] mt-1">Training data per node</p>
      </div>
      
      <div className="space-y-4 mt-6">
        {clients.map((client) => (
          <div key={client.id}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-[#a1a1aa]">Client {client.id}</span>
              <span className="text-xs text-[#71717a]">{client.samples.toLocaleString()} samples</span>
            </div>
            <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#22c55e] rounded-full transition-all duration-500"
                style={{ width: `${(client.samples / maxSamples) * 100}%` }}
              />
            </div>
            <p className="text-[10px] text-[#71717a] mt-1">Churn rate: {client.churnRate}%</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-[#262626]">
        <div className="flex justify-between text-xs">
          <span className="text-[#71717a]">Total training samples</span>
          <span className="text-[#fafafa] font-medium">5,634</span>
        </div>
        <div className="flex justify-between text-xs mt-1">
          <span className="text-[#71717a]">Test samples</span>
          <span className="text-[#fafafa] font-medium">1,409</span>
        </div>
      </div>
    </div>
  );
}
