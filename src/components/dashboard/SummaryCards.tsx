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
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {change && (
              <div className="flex items-center mt-1">
                {change.isPositive ? (
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span
                  className={`text-xs ${change.isPositive ? "text-green-500" : "text-red-500"}`}
                >
                  {change.value}
                </span>
              </div>
            )}
          </div>
          <div className="p-3 rounded-full bg-primary/10">{icon}</div>
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
        return <DollarSign className="h-5 w-5 text-primary" />;
      case "sales":
        return <ShoppingCart className="h-5 w-5 text-primary" />;
      case "balance":
        return <Wallet className="h-5 w-5 text-primary" />;
      case "students":
        return <Users className="h-5 w-5 text-primary" />;
      default:
        return <DollarSign className="h-5 w-5 text-primary" />;
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
