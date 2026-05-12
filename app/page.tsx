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
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-56 bg-[#141414] border-r border-[#262626] p-4 hidden lg:block">
        <div className="mb-8">
          <h1 className="text-sm font-semibold tracking-tight">FL Churn Analytics</h1>
          <p className="text-xs text-[#71717a] mt-1">Privacy-Preserving ML</p>
        </div>
        
        <nav className="space-y-1">
          <NavItem label="Overview" active />
          <NavItem label="Model Performance" />
          <NavItem label="Data Analysis" />
          <NavItem label="Architecture" />
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-[#1f1f1f] rounded-lg p-3">
            <p className="text-xs text-[#71717a]">Model</p>
            <p className="text-sm font-medium">XGBoost + FedAvg</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-56">
        {/* Top Bar */}
        <header className="sticky top-0 z-10 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-[#262626]">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Dashboard</h2>
              <p className="text-sm text-[#71717a]">Telco Customer Churn Prediction</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs px-2.5 py-1 bg-[#22c55e]/10 text-[#22c55e] rounded-full font-medium">
                Privacy Enabled
              </span>
              <span className="text-xs text-[#71717a]">
                7,043 records
              </span>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-8">
          {/* Key Metrics Row */}
          <section>
            <SectionHeader title="Overview" />
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
              <MetricCard
                label="Samples"
                value="7,043"
                sublabel="Customer records"
              />
              <MetricCard
                label="Features"
                value="26"
                sublabel="After encoding"
              />
              <MetricCard
                label="FL Clients"
                value="3"
                sublabel="Distributed nodes"
              />
              <MetricCard
                label="Churn Rate"
                value="26.5%"
                sublabel="1,869 churned"
                highlight
              />
              <MetricCard
                label="Accuracy"
                value="77.7%"
                sublabel="Federated model"
                trend={{ value: 1.7, direction: "up" }}
              />
              <MetricCard
                label="Data Privacy"
                value="100%"
                sublabel="Local training"
              />
            </div>
          </section>

          {/* Performance Charts */}
          <section>
            <SectionHeader title="Model Performance" />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <ModelComparisonChart />
              <KFoldValidationChart />
            </div>
          </section>

          {/* Confusion Matrices */}
          <section>
            <SectionHeader title="Prediction Analysis" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <ConfusionMatrix
                title="Centralized"
                subtitle="Single-server training"
                matrix={{ tn: 821, fp: 242, fn: 117, tp: 257 }}
                variant="blue"
              />
              <ConfusionMatrix
                title="Federated"
                subtitle="Distributed training"
                matrix={{ tn: 840, fp: 223, fn: 125, tp: 249 }}
                variant="green"
              />
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
                <h3 className="text-sm font-medium mb-4">Key Observations</h3>
                <ul className="space-y-3">
                  <Observation 
                    color="green"
                    text="Federated achieves comparable accuracy while keeping data private"
                  />
                  <Observation 
                    color="green"
                    text="Higher precision reduces false churn alerts by 8%"
                  />
                  <Observation 
                    color="blue"
                    text="Centralized shows 2% better recall for churn detection"
                  />
                  <Observation 
                    color="yellow"
                    text="Both models struggle with imbalanced class distribution"
                  />
                </ul>
              </div>
            </div>
          </section>

          {/* Data Analysis */}
          <section>
            <SectionHeader title="Data Analysis" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <ChurnDistributionChart />
              <FeatureImportanceChart />
              <ClientDistributionChart />
            </div>
          </section>

          {/* Architecture */}
          <section>
            <SectionHeader title="System Architecture" />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <ArchitectureDiagram />
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
                <h3 className="text-sm font-medium mb-5">Methodology</h3>
                <div className="space-y-5">
                  <MethodStep
                    number="01"
                    title="Data Preprocessing"
                    description="Binary encoding for categorical features, one-hot encoding for multi-class attributes, median imputation for missing values."
                  />
                  <MethodStep
                    number="02"
                    title="Model Configuration"
                    description="XGBoost with 500 estimators, depth 8, learning rate 0.03, class weight balancing for imbalanced data."
                  />
                  <MethodStep
                    number="03"
                    title="Federated Training"
                    description="Data split across 3 clients. Local training followed by FedAvg aggregation without sharing raw data."
                  />
                  <MethodStep
                    number="04"
                    title="Validation"
                    description="5-fold cross-validation on both centralized and federated setups for robust performance estimation."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-[#262626] pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-[#71717a]">
            <div>
              <p className="font-medium text-[#fafafa]">Research Team</p>
              <p>Navaneethakannan K, Nandhagopal B</p>
            </div>
            <div className="md:text-right">
              <p>Telco Customer Churn Dataset</p>
              <p className="text-xs">XGBoost + Federated Averaging</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
        active
          ? "bg-[#1f1f1f] text-[#fafafa] font-medium"
          : "text-[#71717a] hover:text-[#fafafa] hover:bg-[#1f1f1f]/50"
      }`}
    >
      {label}
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <h3 className="text-xs font-medium text-[#71717a] uppercase tracking-wider mb-4">
      {title}
    </h3>
  );
}

function Observation({ color, text }: { color: string; text: string }) {
  const colorMap: Record<string, string> = {
    green: "bg-[#22c55e]",
    blue: "bg-[#3b82f6]",
    yellow: "bg-[#f59e0b]",
  };
  
  return (
    <li className="flex items-start gap-3 text-sm text-[#a1a1aa]">
      <span className={`w-1.5 h-1.5 rounded-full ${colorMap[color]} mt-1.5 flex-shrink-0`} />
      <span>{text}</span>
    </li>
  );
}

function MethodStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <span className="text-xs font-mono text-[#71717a]">{number}</span>
      <div>
        <h4 className="text-sm font-medium text-[#fafafa] mb-1">{title}</h4>
        <p className="text-sm text-[#71717a] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
