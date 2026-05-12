"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Server, Database, Shield, ArrowRight, ArrowDown } from "lucide-react";

export function ArchitectureDiagram() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Federated Learning Architecture</CardTitle>
        <CardDescription>How privacy is preserved during model training</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center py-4">
          {/* Clients Row */}
          <div className="flex gap-6 mb-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#f4f4f5] rounded-lg flex flex-col items-center justify-center border border-[#e4e4e7]">
                  <Database className="w-6 h-6 text-[#71717a] mb-1" />
                  <span className="text-xs text-[#71717a]">Client {num}</span>
                </div>
                <p className="text-[10px] text-[#a1a1aa] mt-1">Local Data</p>
              </div>
            ))}
          </div>

          {/* Arrows Down */}
          <div className="flex gap-6 mb-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="w-20 flex justify-center">
                <ArrowDown className="w-4 h-4 text-[#a1a1aa]" />
              </div>
            ))}
          </div>

          {/* Local Training */}
          <div className="flex gap-6 mb-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="w-20 h-12 bg-blue-50 rounded flex items-center justify-center border border-blue-200">
                <span className="text-[10px] text-blue-600 text-center px-1">Train Locally</span>
              </div>
            ))}
          </div>

          {/* Converging Arrows */}
          <div className="flex items-center gap-2 mb-6">
            <ArrowRight className="w-4 h-4 text-[#a1a1aa] rotate-45" />
            <ArrowDown className="w-4 h-4 text-[#a1a1aa]" />
            <ArrowRight className="w-4 h-4 text-[#a1a1aa] -rotate-45 transform scale-x-[-1]" />
          </div>

          {/* Central Server */}
          <div className="flex flex-col items-center mb-4">
            <div className="w-28 h-20 bg-orange-50 rounded-lg flex flex-col items-center justify-center border border-orange-200">
              <Server className="w-6 h-6 text-orange-500 mb-1" />
              <span className="text-xs text-orange-600">Aggregator</span>
            </div>
            <p className="text-[10px] text-[#a1a1aa] mt-1">FedAvg</p>
          </div>

          {/* Privacy Shield */}
          <div className="flex items-center gap-2 mt-4 px-4 py-2 bg-green-50 rounded-full border border-green-200">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-xs text-green-700">Data Never Leaves Client</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
