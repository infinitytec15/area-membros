import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  DollarSign,
  ShoppingCart,
  Wallet,
} from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    isPositive: boolean;
  };
  icon: React.ReactNode;
}

const SummaryCard = ({ title, value, change, icon }: SummaryCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground font-medium">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {change && (
              <div className="flex items-center mt-1">
                {change.isPositive ? (
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span
                  className={`text-xs font-medium ${change.isPositive ? "text-green-500" : "text-red-500"}`}
                >
                  {change.value}
                </span>
              </div>
            )}
          </div>
          <div className="p-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-md shadow-blue-200 transform hover:rotate-12 transition-all">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface SummaryCardsProps {
  cards?: {
    title: string;
    value: string;
    change?: {
      value: string;
      isPositive: boolean;
    };
    icon: "revenue" | "sales" | "balance" | "students";
  }[];
}

const SummaryCards = ({ cards = defaultCards }: SummaryCardsProps) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "revenue":
        return <DollarSign className="h-6 w-6 text-white" />;
      case "sales":
        return <ShoppingCart className="h-6 w-6 text-white" />;
      case "balance":
        return <Wallet className="h-6 w-6 text-white" />;
      case "students":
        return <Users className="h-6 w-6 text-white" />;
      default:
        return <DollarSign className="h-6 w-6 text-white" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <SummaryCard
          key={index}
          title={card.title}
          value={card.value}
          change={card.change}
          icon={getIcon(card.icon)}
        />
      ))}
    </div>
  );
};

const defaultCards = [
  {
    title: "Receita Total",
    value: "R$ 24.780,00",
    change: {
      value: "12% este mês",
      isPositive: true,
    },
    icon: "revenue",
  },
  {
    title: "Vendas Hoje",
    value: "8",
    change: {
      value: "4% vs ontem",
      isPositive: true,
    },
    icon: "sales",
  },
  {
    title: "Saldo Disponível",
    value: "R$ 12.450,00",
    icon: "balance",
  },
  {
    title: "Novos Alunos",
    value: "24",
    change: {
      value: "10% este mês",
      isPositive: false,
    },
    icon: "students",
  },
];

export default SummaryCards;
