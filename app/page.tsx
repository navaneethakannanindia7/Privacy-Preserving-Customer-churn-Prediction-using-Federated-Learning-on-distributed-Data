"use client";

import {
  Users,
  TrendingUp,
  Shield,
  Database,
  Layers,
  Target,
} from "lucide-react";
import { MetricCard } from "@/components/metric-card";
import { ChurnDistributionChart } from "@/components/charts/churn-distribution";
import { ModelComparisonChart } from "@/components/charts/model-comparison";
import { FeatureImportanceChart } from "@/components/charts/feature-importance";
import { KFoldValidationChart } from "@/components/charts/kfold-validation";
import { ConfusionMatrix } from "@/components/charts/confusion-matrix";
import { ClientDistributionChart } from "@/components/charts/client-distribution";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="bg-white border-b border-[#e4e4e7] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-[#171717]">
                Customer Churn Prediction
              </h1>
              <p className="text-sm text-[#71717a]">
                Privacy-Preserving Federated Learning Analysis
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#71717a]">
              <span className="px-2 py-1 bg-[#f4f4f5] rounded text-xs">
                XGBoost + FedAvg
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6">
        {/* Key Metrics */}
        <section className="mb-8">
          <h2 className="text-sm font-medium text-[#71717a] uppercase tracking-wide mb-4">
            Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <MetricCard
              title="Total Samples"
              value="7,043"
              subtitle="Customer records"
              icon={Users}
            />
            <MetricCard
              title="Features"
              value="26"
              subtitle="After encoding"
              icon={Layers}
            />
            <MetricCard
              title="Clients"
              value="3"
              subtitle="Federated nodes"
              icon={Database}
            />
            <MetricCard
              title="Churn Rate"
              value="26.5%"
              subtitle="1,869 customers"
              icon={TrendingUp}
            />
            <MetricCard
              title="Best Accuracy"
              value="77.7%"
              subtitle="Federated model"
              icon={Target}
              trend="up"
              trendValue="1.7% vs centralized"
            />
            <MetricCard
              title="Privacy"
              value="100%"
              subtitle="Data stays local"
              icon={Shield}
            />
          </div>
        </section>

        {/* Model Performance Comparison */}
        <section className="mb-8">
          <h2 className="text-sm font-medium text-[#71717a] uppercase tracking-wide mb-4">
            Model Performance
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ModelComparisonChart />
            <KFoldValidationChart />
          </div>
        </section>

        {/* Confusion Matrices */}
        <section className="mb-8">
          <h2 className="text-sm font-medium text-[#71717a] uppercase tracking-wide mb-4">
            Prediction Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ConfusionMatrix
              title="Centralized Model"
              description="Traditional single-server training"
              matrix={{
                trueNeg: 821,
                falsePos: 242,
                falseNeg: 117,
                truePos: 257,
              }}
              colorScheme="blue"
            />
            <ConfusionMatrix
              title="Federated Model"
              description="Privacy-preserving distributed training"
              matrix={{
                trueNeg: 840,
                falsePos: 223,
                falseNeg: 125,
                truePos: 249,
              }}
              colorScheme="orange"
            />
            <Card>
              <CardHeader>
                <CardTitle>Results Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#71717a] mb-1">Key Findings</p>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></span>
                        <span>Federated learning achieves comparable accuracy while preserving data privacy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></span>
                        <span>Higher precision in federated approach reduces false churn predictions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                        <span>Centralized model shows slightly better recall for catching churners</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data & Features */}
        <section className="mb-8">
          <h2 className="text-sm font-medium text-[#71717a] uppercase tracking-wide mb-4">
            Data Analysis
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ChurnDistributionChart />
            <FeatureImportanceChart />
            <ClientDistributionChart />
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-8">
          <h2 className="text-sm font-medium text-[#71717a] uppercase tracking-wide mb-4">
            System Architecture
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ArchitectureDiagram />
            <Card>
              <CardHeader>
                <CardTitle>Methodology</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-[#171717] mb-1">Data Preprocessing</h4>
                    <p className="text-[#71717a]">
                      Binary encoding for categorical features, one-hot encoding for multi-class attributes, 
                      and median imputation for missing values in TotalCharges.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#171717] mb-1">Model Configuration</h4>
                    <p className="text-[#71717a]">
                      XGBoost classifier with 500 estimators, max depth of 8, learning rate 0.03, 
                      and class weight balancing to handle imbalanced churn distribution.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#171717] mb-1">Federated Approach</h4>
                    <p className="text-[#71717a]">
                      Data split across 3 clients equally. Each client trains locally, 
                      then model weights are aggregated using FedAvg algorithm without sharing raw data.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#171717] mb-1">Validation</h4>
                    <p className="text-[#71717a]">
                      5-fold cross-validation performed on both centralized and federated setups 
                      to ensure robust performance estimation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#e4e4e7] pt-6 mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-[#71717a]">
            <div>
              <p className="font-medium text-[#171717]">Research Team</p>
              <p>Navaneethakannan K, Nandhagopal B</p>
            </div>
            <div className="text-right">
              <p>Dataset: Telco Customer Churn (7,043 records)</p>
              <p>Model: XGBoost with Federated Averaging</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
