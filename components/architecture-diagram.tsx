"use client";

export function ArchitectureDiagram() {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
      <div className="mb-5">
        <h3 className="text-sm font-medium text-[#fafafa]">FL Architecture</h3>
        <p className="text-xs text-[#71717a] mt-1">Privacy-preserving training flow</p>
      </div>
      
      <div className="flex flex-col items-center py-4">
        {/* Clients */}
        <div className="flex gap-4 mb-4">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex flex-col items-center">
              <div className="w-[72px] h-[72px] bg-[#1a1a1a] rounded-lg flex flex-col items-center justify-center border border-[#262626]">
                <div className="w-8 h-8 bg-[#262626] rounded flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-[#71717a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16M4 12h16" />
                  </svg>
                </div>
                <span className="text-[10px] text-[#71717a]">Client {num}</span>
              </div>
              <span className="text-[9px] text-[#52525b] mt-1">1,878 samples</span>
            </div>
          ))}
        </div>
        
        {/* Flow indicators */}
        <div className="flex items-center gap-8 my-3">
          <div className="flex flex-col items-center">
            <svg className="w-3 h-3 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-8 8h6v8h4v-8h6z" transform="rotate(180 12 12)" />
            </svg>
            <span className="text-[8px] text-[#52525b] mt-1">Models</span>
          </div>
          <div className="text-[9px] text-[#52525b] px-2 py-1 bg-[#1a1a1a] rounded border border-[#262626]">
            Local Training
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-3 h-3 text-[#22c55e]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-8 8h6v8h4v-8h6z" />
            </svg>
            <span className="text-[8px] text-[#52525b] mt-1">Weights</span>
          </div>
        </div>
        
        {/* Aggregator */}
        <div className="flex flex-col items-center my-3">
          <div className="w-24 h-16 bg-[#1a1a1a] rounded-lg flex flex-col items-center justify-center border border-[#3b82f6]/30">
            <svg className="w-5 h-5 text-[#3b82f6] mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="text-[10px] text-[#a1a1aa]">FedAvg</span>
          </div>
          <span className="text-[9px] text-[#52525b] mt-1">Weight Aggregation</span>
        </div>
        
        {/* Global Model */}
        <div className="flex flex-col items-center mt-3">
          <div className="w-20 h-14 bg-[#22c55e]/10 rounded-lg flex flex-col items-center justify-center border border-[#22c55e]/30">
            <span className="text-[10px] text-[#22c55e] font-medium">Global</span>
            <span className="text-[10px] text-[#22c55e]">Model</span>
          </div>
        </div>
        
        {/* Privacy badge */}
        <div className="flex items-center gap-2 mt-5 px-3 py-1.5 bg-[#22c55e]/10 rounded-full border border-[#22c55e]/20">
          <svg className="w-3 h-3 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-[10px] text-[#22c55e]">Raw data never shared</span>
        </div>
      </div>
    </div>
  );
}
