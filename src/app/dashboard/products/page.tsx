"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter, Plus, Search } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const [filter, setFilter] = useState("all");

  // Mock data for products
  const products = [
    {
      id: "1",
      name: "Curso Completo de Marketing Digital",
      type: "course",
      price: "R$ 297,00",
      sales: 42,
      status: "active",
    },
    {
      id: "2",
      name: "E-book: 7 Segredos do Copywriting",
      type: "ebook",
      price: "R$ 47,00",
      sales: 128,
      status: "active",
    },
    {
      id: "3",
      name: "Mentoria VIP de Lançamentos",
      type: "mentoring",
      price: "R$ 997,00",
      sales: 15,
      status: "active",
    },
    {
      id: "4",
      name: "Plugin de Otimização de Conversão",
      type: "software",
      price: "R$ 197,00",
      sales: 31,
      status: "draft",
    },
    {
      id: "5",
      name: "Clube de Assinatura Premium",
      type: "subscription",
      price: "R$ 97,00/mês",
      sales: 64,
      status: "active",
    },
  ];

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.status === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Seus Produtos Mágicos
          </h1>
          <Link href="/dashboard/products/new">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-[0_4px_14px_-3px_rgba(0,119,255,0.5)] hover:shadow-[0_6px_16px_-3px_rgba(0,119,255,0.7)] transition-all duration-200 flex items-center gap-2">
              <Plus size={18} />
              Criar Novo Produto
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                placeholder="Buscar produtos..."
                className="pl-10 h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
              />
            </div>
            <div className="flex gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 h-12 shadow-[0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                  >
                    <Filter size={18} />
                    <span>
                      {filter === "all"
                        ? "Todos os Status"
                        : filter === "active"
                          ? "Ativos"
                          : "Rascunhos"}
                    </span>
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-2 shadow-lg border border-gray-100">
                  <DropdownMenuItem
                    className="py-2.5 px-4 cursor-pointer hover:bg-blue-50 rounded-md transition-colors"
                    onClick={() => setFilter("all")}
                  >
                    Todos os Status
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="py-2.5 px-4 cursor-pointer hover:bg-blue-50 rounded-md transition-colors"
                    onClick={() => setFilter("active")}
                  >
                    Ativos
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="py-2.5 px-4 cursor-pointer hover:bg-blue-50 rounded-md transition-colors"
                    onClick={() => setFilter("draft")}
                  >
                    Rascunhos
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-medium text-gray-600">
                    Nome do Produto
                  </th>
                  <th className="text-left py-4 px-4 font-medium text-gray-600">
                    Tipo
                  </th>
                  <th className="text-left py-4 px-4 font-medium text-gray-600">
                    Preço
                  </th>
                  <th className="text-left py-4 px-4 font-medium text-gray-600">
                    Vendas
                  </th>
                  <th className="text-left py-4 px-4 font-medium text-gray-600">
                    Status
                  </th>
                  <th className="text-right py-4 px-4 font-medium text-gray-600">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <Link
                        href={`/dashboard/products/${product.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {product.name}
                      </Link>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {product.type === "course" && "Curso"}
                        {product.type === "ebook" && "E-book"}
                        {product.type === "mentoring" && "Mentoria"}
                        {product.type === "software" && "Software"}
                        {product.type === "subscription" && "Assinatura"}
                      </span>
                    </td>
                    <td className="py-4 px-4">{product.price}</td>
                    <td className="py-4 px-4">{product.sales}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${product.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                      >
                        {product.status === "active" ? "Ativo" : "Rascunho"}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link href={`/dashboard/products/${product.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="shadow-sm border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                        >
                          Editar
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
