"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import SummaryCards from "@/components/dashboard/SummaryCards";
import SalesChart from "@/components/dashboard/SalesChart";
import RecentActivities from "@/components/dashboard/RecentActivities";
import { Button } from "@/components/ui/button";
import { PlusCircle, BarChart3, CreditCard, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Welcome Message */}
        <div className="mb-6 bg-white p-6 rounded-xl border border-blue-100 shadow-lg transform hover:scale-[1.01] transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Olá, João Produtor! 🚀
              </h1>
              <p className="text-lg text-gray-600 mt-1">
                Bem-vindo(a) de volta ao seu universo IntraFy! Vamos decolar
                hoje?
              </p>
            </div>
            <div className="hidden md:block h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg shadow-blue-200 flex items-center justify-center transform hover:rotate-12 transition-all">
              <span className="text-white text-2xl font-bold">JP</span>
            </div>
          </div>
        </div>

        {/* Summary Cards with 3D Effect */}
        <div className="mb-8">
          <SummaryCards
            cards={[
              {
                title: "Receita Total IntraFy 💰",
                value: "R$ 24.780,00",
                change: {
                  value: "12% este mês",
                  isPositive: true,
                },
                icon: "revenue",
              },
              {
                title: "Vendas Hoje 🔥",
                value: "8",
                change: {
                  value: "4% vs ontem",
                  isPositive: true,
                },
                icon: "sales",
              },
              {
                title: "Novos IntraNautas ✨",
                value: "24",
                change: {
                  value: "10% este mês",
                  isPositive: false,
                },
                icon: "students",
              },
              {
                title: "Saldo IntraPay 💸",
                value: "R$ 12.450,00",
                icon: "balance",
              },
            ]}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales Performance Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-blue-100 shadow-lg p-6 transform hover:shadow-xl transition-all">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Sua Decolagem de Vendas na IntraFy 🚀
                </span>
                <span className="ml-2 text-sm font-normal text-gray-500">
                  (Últimos 30 Dias)
                </span>
              </h2>
              <SalesChart
                title=""
                period="30d"
                data={{
                  dates: [
                    "01/05",
                    "02/05",
                    "03/05",
                    "04/05",
                    "05/05",
                    "06/05",
                    "07/05",
                    "08/05",
                    "09/05",
                    "10/05",
                    "11/05",
                    "12/05",
                    "13/05",
                    "14/05",
                    "15/05",
                    "16/05",
                    "17/05",
                    "18/05",
                    "19/05",
                    "20/05",
                    "21/05",
                    "22/05",
                    "23/05",
                    "24/05",
                    "25/05",
                    "26/05",
                    "27/05",
                    "28/05",
                    "29/05",
                    "30/05",
                  ],
                  values: [
                    120, 220, 180, 250, 210, 320, 290, 350, 280, 390, 410, 350,
                    380, 420, 390, 450, 420, 480, 460, 520, 490, 550, 530, 580,
                    560, 610, 590, 640, 620, 680,
                  ],
                }}
              />
            </div>
          </div>

          {/* Recent Activities */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-blue-100 shadow-lg p-6 h-full transform hover:shadow-xl transition-all">
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Giro de Novidades na Sua IntraLoja 回転寿司
              </h2>
              <RecentActivities
                activities={[
                  {
                    id: "1",
                    type: "venda",
                    description: "Curso 'Aventuras Cósmicas' vendido",
                    user: "maria.silva@email.com",
                    timestamp: "Hoje, 14:32",
                    amount: "R$ 297,00",
                  },
                  {
                    id: "2",
                    type: "inscricao",
                    description: "Novo afiliado IntraEstelar",
                    user: "pedro.costa@email.com",
                    timestamp: "Hoje, 11:15",
                  },
                  {
                    id: "3",
                    type: "produto",
                    description: 'Curso "Dominando Buracos Negros" atualizado',
                    user: "admin",
                    timestamp: "Ontem, 18:45",
                  },
                  {
                    id: "4",
                    type: "venda",
                    description: "Mentoria Premium vendida",
                    user: "carlos.ferreira@email.com",
                    timestamp: "Ontem, 15:22",
                    amount: "R$ 997,00",
                  },
                  {
                    id: "5",
                    type: "pagamento",
                    description: "Pagamento processado",
                    user: "ana.oliveira@email.com",
                    timestamp: "22/05/2023",
                    amount: "R$ 127,00",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Atalhos Mágicos IntraFy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              className="h-auto py-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transform hover:scale-[1.02] transition-all text-left flex items-center gap-4"
              size="lg"
            >
              <div className="p-3 rounded-full bg-blue-400/30">
                <PlusCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="block font-bold">
                  Criar Produto IntraFy Explosivo 💣
                </span>
                <span className="text-xs text-blue-100">
                  Adicione um novo produto à sua loja
                </span>
              </div>
            </Button>

            <Button
              className="h-auto py-6 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transform hover:scale-[1.02] transition-all text-left flex items-center gap-4"
              size="lg"
            >
              <div className="p-3 rounded-full bg-indigo-400/30">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="block font-bold">
                  Ver Minhas Vendas Detalhadas 📊
                </span>
                <span className="text-xs text-indigo-100">
                  Analise suas métricas de vendas
                </span>
              </div>
            </Button>

            <Button
              className="h-auto py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 transform hover:scale-[1.02] transition-all text-left flex items-center gap-4"
              size="lg"
            >
              <div className="p-3 rounded-full bg-emerald-400/30">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="block font-bold">
                  Configurar Meu Portal IntraPay 💳
                </span>
                <span className="text-xs text-emerald-100">
                  Gerencie seus métodos de pagamento
                </span>
              </div>
            </Button>

            <Button
              className="h-auto py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transform hover:scale-[1.02] transition-all text-left flex items-center gap-4"
              size="lg"
            >
              <div className="p-3 rounded-full bg-purple-400/30">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="block font-bold">
                  Gerenciar Meus Super Afiliados IntraFy 🦸
                </span>
                <span className="text-xs text-purple-100">
                  Veja o desempenho dos seus afiliados
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
