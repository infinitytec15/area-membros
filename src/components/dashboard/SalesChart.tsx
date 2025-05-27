"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SalesChartProps {
  data?: {
    dates: string[];
    values: number[];
  };
  title?: string;
  period?: "7d" | "30d" | "90d" | "1y";
}

const SalesChart = ({
  data = {
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
    ],
    values: [
      120, 220, 180, 250, 210, 320, 290, 350, 280, 390, 410, 350, 380, 420,
    ],
  },
  title = "Desempenho de Vendas",
  period = "30d",
}: SalesChartProps) => {
  // Find max value for scaling
  const maxValue = Math.max(...data.values);

  return (
    <Card className="w-full bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <Tabs defaultValue={period} className="w-auto">
          <TabsList className="grid grid-cols-4 h-8">
            <TabsTrigger value="7d" className="text-xs">
              7D
            </TabsTrigger>
            <TabsTrigger value="30d" className="text-xs">
              30D
            </TabsTrigger>
            <TabsTrigger value="90d" className="text-xs">
              90D
            </TabsTrigger>
            <TabsTrigger value="1y" className="text-xs">
              1A
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          {/* Chart visualization */}
          <div className="relative h-full w-full">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
              <div>R$ {maxValue}</div>
              <div>R$ {Math.round(maxValue * 0.75)}</div>
              <div>R$ {Math.round(maxValue * 0.5)}</div>
              <div>R$ {Math.round(maxValue * 0.25)}</div>
              <div>R$ 0</div>
            </div>

            {/* Chart grid */}
            <div className="absolute left-12 right-0 top-0 bottom-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border-b border-gray-100 w-full h-0"
                ></div>
              ))}
            </div>

            {/* Chart bars */}
            <div className="absolute left-12 right-0 top-0 bottom-0 flex items-end">
              <div className="flex-1 flex items-end justify-around h-full pt-4 pb-6">
                {data.values.map((value, index) => {
                  const height = (value / maxValue) * 100;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center group"
                    >
                      <div
                        className="w-6 bg-emerald-500 rounded-t-sm hover:bg-emerald-600 transition-all cursor-pointer"
                        style={{ height: `${height}%` }}
                      >
                        {/* Tooltip */}
                        <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none">
                          R$ {value.toFixed(2)}
                          <br />
                          {data.dates[index]}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* X-axis labels */}
            <div className="absolute left-12 right-0 bottom-0 flex justify-around text-xs text-gray-500">
              {data.dates.map(
                (date, index) =>
                  index % 2 === 0 && (
                    <div key={index} className="text-center">
                      {date}
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
