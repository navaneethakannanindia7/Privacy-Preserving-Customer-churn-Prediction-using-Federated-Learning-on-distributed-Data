"use client";

import { MetricCard } from "@/components/metric-card";
import { ChurnDistributionChart } from "@/components/charts/churn-distribution";
import { ModelComparisonChart } from "@/components/charts/model-comparison";
import { FeatureImportanceChart } from "@/components/charts/feature-importance";
import { KFoldValidationChart } from "@/components/charts/kfold-validation";
import { ConfusionMatrix } from "@/components/charts/confusion-matrix";
import { ClientDistributionChart } from "@/components/charts/client-distribution";
import { ArchitectureDiagram } from "@/components/architecture-diagram";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Header */}
      <header className="border-b border-[#1a1a1a] bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <h1 className="text-xl font-semibold text-[#e5e5e5] tracking-tight">
            Privacy-Preserving Customer Churn Prediction
          </h1>
          <p className="text-sm text-[#666] mt-1">
            Federated Learning on Distributed Data
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          <MetricCard label="Total Samples" value="7,043" />
          <MetricCard label="Features" value="26" />
          <MetricCard label="FL Clients" value="3" />
          <MetricCard label="Churn Rate" value="26.5%" highlight />
          <MetricCard label="Best Accuracy" value="77.7%" trend={{ value: 1.7, direction: "up" }} />
          <MetricCard label="Privacy" value="100%" />
        </div>

        {/* Model Performance Section */}
        <section className="mb-10">
          <h2 className="text-sm font-medium text-[#888] mb-4">Model Performance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ModelComparisonChart />
            <KFoldValidationChart />
          </div>
        </section>

        {/* Confusion Matrices */}
        <section className="mb-10">
          <h2 className="text-sm font-medium text-[#888] mb-4">Prediction Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ConfusionMatrix
              title="Centralized Model"
              subtitle="Traditional approach"
              matrix={{ tn: 821, fp: 242, fn: 117, tp: 257 }}
              variant="blue"
            />
            <ConfusionMatrix
              title="Federated Model"
              subtitle="Privacy-preserving"
              matrix={{ tn: 840, fp: 223, fn: 125, tp: 249 }}
              variant="green"
            />
            <div className="bg-[#141414] rounded-lg p-5 border border-[#1a1a1a]">
              <h3 className="text-sm font-medium text-[#e5e5e5] mb-4">Findings</h3>
              <ul className="space-y-3 text-sm text-[#888]">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-2 shrink-0" />
                  <span>Federated model achieves similar accuracy while preserving data privacy across all clients</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-2 shrink-0" />
                  <span>8% reduction in false positive rate compared to centralized training</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2 shrink-0" />
                  <span>Centralized shows slightly better recall for actual churn cases</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] mt-2 shrink-0" />
                  <span>Class imbalance remains a challenge for both approaches</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Analysis */}
        <section className="mb-10">
          <h2 className="text-sm font-medium text-[#888] mb-4">Data Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ChurnDistributionChart />
            <FeatureImportanceChart />
            <ClientDistributionChart />
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-10">
          <h2 className="text-sm font-medium text-[#888] mb-4">System Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ArchitectureDiagram />
            <div className="bg-[#141414] rounded-lg p-5 border border-[#1a1a1a]">
              <h3 className="text-sm font-medium text-[#e5e5e5] mb-5">Methodology</h3>
              <div className="space-y-5">
                <Step num="1" title="Data Preprocessing" desc="Binary encoding for Yes/No features, one-hot encoding for categorical variables, median imputation for TotalCharges nulls" />
                <Step num="2" title="Model Selection" desc="XGBoost classifier with 500 trees, max depth 8, learning rate 0.03, scale_pos_weight for imbalance" />
                <Step num="3" title="Federated Setup" desc="Dataset partitioned across 3 clients simulating distributed data centers with local training" />
                <Step num="4" title="Aggregation" desc="FedAvg algorithm combines local models by weighted averaging without exposing raw data" />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-6 border-t border-[#1a1a1a] flex flex-wrap justify-between gap-4 text-sm text-[#666]">
          <div>
            <span className="text-[#888]">Researchers:</span> Navaneethakannan K, Nandhagopal B
          </div>
          <div>
            Telco Customer Churn Dataset | XGBoost + FedAvg
          </div>
        </footer>
      </main>
    </div>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <span className="text-xs font-mono text-[#444] w-4">{num}</span>
      <div>
        <p className="text-sm text-[#e5e5e5] mb-1">{title}</p>
        <p className="text-sm text-[#666] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
