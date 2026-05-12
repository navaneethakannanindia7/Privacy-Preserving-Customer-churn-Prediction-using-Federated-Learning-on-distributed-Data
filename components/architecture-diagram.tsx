"use client";

export function ArchitectureDiagram() {
  return (
    <div className="bg-[#141414] rounded-lg p-5 border border-[#1a1a1a]">
      <h3 className="text-sm font-medium text-[#e5e5e5] mb-5">Federated Learning Flow</h3>
      
      <div className="flex flex-col items-center py-2">
        {/* Clients Row */}
        <div className="flex gap-3 mb-3">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex flex-col items-center">
              <div className="w-16 h-14 bg-[#1a1a1a] rounded flex flex-col items-center justify-center border border-[#252525]">
                <svg className="w-4 h-4 text-[#555] mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                </svg>
                <span className="text-[9px] text-[#666]">Client {num}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Arrows Down */}
        <div className="flex items-center gap-6 my-2">
          <span className="text-[8px] text-[#555]">Local Train</span>
          <svg className="w-4 h-4 text-[#444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="text-[8px] text-[#555]">Send Weights</span>
        </div>
        
        {/* Aggregator */}
        <div className="w-20 h-12 bg-[#1a1a1a] rounded flex flex-col items-center justify-center border border-[#3b82f6]/30 my-2">
          <span className="text-[10px] text-[#3b82f6]">FedAvg</span>
          <span className="text-[8px] text-[#555]">Aggregator</span>
        </div>
        
        {/* Arrow Down */}
        <svg className="w-4 h-4 text-[#444] my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        
        {/* Global Model */}
        <div className="w-24 h-12 bg-[#22c55e]/10 rounded flex flex-col items-center justify-center border border-[#22c55e]/30">
          <span className="text-[10px] text-[#22c55e] font-medium">Global Model</span>
        </div>
        
        {/* Privacy Note */}
        <div className="flex items-center gap-1.5 mt-4 px-2.5 py-1 bg-[#22c55e]/5 rounded border border-[#22c55e]/10">
          <svg className="w-3 h-3 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-[9px] text-[#22c55e]">Data never leaves client</span>
        </div>
      </div>
    </div>
  );
}
