import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SummaryCards from "@/components/dashboard/SummaryCards";
import SalesChart from "@/components/dashboard/SalesChart";
import RecentActivities from "@/components/dashboard/RecentActivities";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6 bg-background">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Painel</h1>
          <p className="text-sm text-muted-foreground">
            Bem-vindo ao seu painel de controle
          </p>
        </div>

        <div className="mb-8">
          <SummaryCards />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border shadow p-6">
              <h2 className="text-lg font-semibold mb-4">
                Desempenho de Vendas
              </h2>
              <SalesChart />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border shadow p-6 h-full">
              <h2 className="text-lg font-semibold mb-4">
                Atividades Recentes
              </h2>
              <RecentActivities />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
