import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, UserPlus, FileText, DollarSign } from "lucide-react";

type ActivityType = "venda" | "inscricao" | "produto" | "pagamento";

interface Activity {
  id: string;
  type: ActivityType;
  description: string;
  user: string;
  timestamp: string;
  amount?: string;
}

interface RecentActivitiesProps {
  activities?: Activity[];
}

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case "venda":
      return <ShoppingCart className="h-4 w-4 text-green-500" />;
    case "inscricao":
      return <UserPlus className="h-4 w-4 text-blue-500" />;
    case "produto":
      return <FileText className="h-4 w-4 text-orange-500" />;
    case "pagamento":
      return <DollarSign className="h-4 w-4 text-purple-500" />;
    default:
      return <FileText className="h-4 w-4 text-gray-500" />;
  }
};

const getActivityBadge = (type: ActivityType) => {
  switch (type) {
    case "venda":
      return (
        <Badge
          variant="outline"
          className="bg-green-50 text-green-700 border-green-200"
        >
          Venda
        </Badge>
      );
    case "inscricao":
      return (
        <Badge
          variant="outline"
          className="bg-blue-50 text-blue-700 border-blue-200"
        >
          Inscrição
        </Badge>
      );
    case "produto":
      return (
        <Badge
          variant="outline"
          className="bg-orange-50 text-orange-700 border-orange-200"
        >
          Produto
        </Badge>
      );
    case "pagamento":
      return (
        <Badge
          variant="outline"
          className="bg-purple-50 text-purple-700 border-purple-200"
        >
          Pagamento
        </Badge>
      );
    default:
      return <Badge variant="outline">Atividade</Badge>;
  }
};

const defaultActivities: Activity[] = [
  {
    id: "1",
    type: "venda",
    description: "Curso de Marketing Digital vendido",
    user: "maria.silva@email.com",
    timestamp: "Hoje, 14:32",
    amount: "R$ 297,00",
  },
  {
    id: "2",
    type: "inscricao",
    description: "Novo aluno inscrito",
    user: "joao.santos@email.com",
    timestamp: "Hoje, 11:15",
  },
  {
    id: "3",
    type: "produto",
    description: 'Ebook "Finanças Pessoais" atualizado',
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
  {
    id: "6",
    type: "inscricao",
    description: "Novo aluno inscrito",
    user: "pedro.costa@email.com",
    timestamp: "21/05/2023",
  },
];

const RecentActivities: React.FC<RecentActivitiesProps> = ({
  activities = defaultActivities,
}) => {
  return (
    <Card className="w-full h-full bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">
          Atividades Recentes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-0"
              >
                <div className="p-2 rounded-full bg-gray-50">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">
                      {activity.description}
                    </p>
                    {getActivityBadge(activity.type)}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.user}`}
                        />
                        <AvatarFallback>
                          {activity.user.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-gray-500">
                        {activity.user}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {activity.amount && (
                        <span className="text-xs font-medium text-green-600">
                          {activity.amount}
                        </span>
                      )}
                      <span className="text-xs text-gray-400">
                        {activity.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
