import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Customer Churn Prediction - Federated Learning",
  description: "Privacy-Preserving Customer Churn Prediction using Federated Learning on Distributed Data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#fafafa]">
      <body>{children}</body>
    </html>
  );
}
