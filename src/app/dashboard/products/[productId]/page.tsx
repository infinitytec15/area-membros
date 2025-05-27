"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  Check,
  ChevronDown,
  CreditCard,
  Gift,
  Image,
  Info,
  Link,
  Lightbulb,
  Package,
  Rocket,
  Settings,
  Upload,
  Users,
  Zap,
} from "lucide-react";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const [activeTab, setActiveTab] = useState("essential");
  const [paymentType, setPaymentType] = useState("single");
  const [productFormat, setProductFormat] = useState("course");
  const [enableMemberArea, setEnableMemberArea] = useState(true);
  const [enableAffiliates, setEnableAffiliates] = useState(false);
  const [installmentsEnabled, setInstallmentsEnabled] = useState(false);

  const isNewProduct = params.productId === "new";
  const pageTitle = isNewProduct ? "Criar Novo Produto" : "Editar Produto";

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            {pageTitle}
          </h1>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_2px_14px_-3px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-gray-200 transition-all duration-200"
            >
              Visualizar
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-[0_4px_14px_-3px_rgba(0,119,255,0.5)] hover:shadow-[0_6px_16px_-3px_rgba(0,119,255,0.7)] transition-all duration-200">
              Salvar Produto
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          <Tabs
            defaultValue="essential"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="border-b border-gray-100">
              <TabsList className="h-auto p-0 bg-transparent w-full flex overflow-x-auto hide-scrollbar">
                <TabsTrigger
                  value="essential"
                  className={cn(
                    "flex items-center gap-2 py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-blue-500 rounded-none transition-all",
                    "data-[state=active]:text-blue-600 data-[state=active]:font-medium",
                  )}
                >
                  <span className="text-blue-500 bg-blue-50 p-1.5 rounded-lg shadow-sm">
                    <Lightbulb size={18} className="text-blue-600" />
                  </span>
                  <span>✨ Informações Essenciais</span>
                </TabsTrigger>
                <TabsTrigger
                  value="pricing"
                  className={cn(
                    "flex items-center gap-2 py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-blue-500 rounded-none transition-all",
                    "data-[state=active]:text-blue-600 data-[state=active]:font-medium",
                  )}
                >
                  <span className="text-orange-500 bg-orange-50 p-1.5 rounded-lg shadow-sm">
                    <CreditCard size={18} className="text-orange-600" />
                  </span>
                  <span>💰 Preços e Pacotes</span>
                </TabsTrigger>
                <TabsTrigger
                  value="content"
                  className={cn(
                    "flex items-center gap-2 py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-blue-500 rounded-none transition-all",
                    "data-[state=active]:text-blue-600 data-[state=active]:font-medium",
                  )}
                >
                  <span className="text-purple-500 bg-purple-50 p-1.5 rounded-lg shadow-sm">
                    <Gift size={18} className="text-purple-600" />
                  </span>
                  <span>🎁 Conteúdo Exclusivo</span>
                </TabsTrigger>
                <TabsTrigger
                  value="checkout"
                  className={cn(
                    "flex items-center gap-2 py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-blue-500 rounded-none transition-all",
                    "data-[state=active]:text-blue-600 data-[state=active]:font-medium",
                  )}
                >
                  <span className="text-green-500 bg-green-50 p-1.5 rounded-lg shadow-sm">
                    <Rocket size={18} className="text-green-600" />
                  </span>
                  <span>🛒 Página de Vendas & Checkout</span>
                </TabsTrigger>
                <TabsTrigger
                  value="affiliates"
                  className={cn(
                    "flex items-center gap-2 py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-blue-500 rounded-none transition-all",
                    "data-[state=active]:text-blue-600 data-[state=active]:font-medium",
                  )}
                >
                  <span className="text-yellow-500 bg-yellow-50 p-1.5 rounded-lg shadow-sm">
                    <Users size={18} className="text-yellow-600" />
                  </span>
                  <span>🤝 Afiliados Parceiros</span>
                </TabsTrigger>
                <TabsTrigger
                  value="integrations"
                  className={cn(
                    "flex items-center gap-2 py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-blue-500 rounded-none transition-all",
                    "data-[state=active]:text-blue-600 data-[state=active]:font-medium",
                  )}
                >
                  <span className="text-teal-500 bg-teal-50 p-1.5 rounded-lg shadow-sm">
                    <Settings size={18} className="text-teal-600" />
                  </span>
                  <span>🔌 Conexões Inteligentes</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6 md:p-8">
              {/* Essential Information Tab */}
              <TabsContent value="essential" className="mt-0 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-blue-50 rounded-lg shadow-sm">
                      <Lightbulb size={24} className="text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Informações Essenciais
                    </h2>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Nome do Produto
                      </label>
                      <div className="relative">
                        <Input
                          placeholder="Ex: Curso Transformador de Marketing Digital"
                          className="pl-10 h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                        />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <Package size={18} />
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Descrição Completa do Seu Produto Mágico
                      </label>
                      <div className="border border-gray-200 rounded-lg shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] overflow-hidden">
                        <div className="bg-gray-50 border-b border-gray-200 p-2 flex gap-2">
                          {["B", "I", "U", "A", "¶"].map((item, i) => (
                            <button
                              key={i}
                              className="w-8 h-8 flex items-center justify-center rounded hover:bg-white hover:shadow-sm transition-all"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                        <textarea
                          className="w-full p-4 min-h-[200px] focus:outline-none focus:ring-2 focus:ring-blue-100"
                          placeholder="Descreva seu produto de forma envolvente e detalhada..."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Imagem de Capa Deslumbrante
                      </label>
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-blue-400 transition-colors duration-200 cursor-pointer bg-gray-50 hover:bg-blue-50">
                        <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                          <Image size={32} className="text-blue-500" />
                        </div>
                        <p className="text-gray-600 mb-2">
                          Arraste sua imagem aqui ou clique para fazer upload
                        </p>
                        <p className="text-xs text-gray-400">
                          PNG, JPG ou GIF (max. 2MB)
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4 shadow-sm border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                        >
                          <Upload size={16} className="mr-2" />
                          Escolher Arquivo
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Categoria do Produto (Qual a Vibe?)
                      </label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between h-12 shadow-[0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                          >
                            <span className="text-gray-600">
                              Selecione uma categoria
                            </span>
                            <ChevronDown size={18} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-2 shadow-lg border border-gray-100">
                          {[
                            "Curso Online",
                            "E-book",
                            "Mentoria",
                            "Software",
                            "Assinatura",
                            "Evento",
                          ].map((category) => (
                            <DropdownMenuItem
                              key={category}
                              className="py-2.5 px-4 cursor-pointer hover:bg-blue-50 rounded-md transition-colors flex items-center gap-2"
                            >
                              <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                                <Check size={12} className="text-blue-600" />
                              </span>
                              {category}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Sua URL Personalizada (Link Mágico!)
                      </label>
                      <div className="flex">
                        <div className="bg-gray-100 border border-gray-200 border-r-0 rounded-l-md px-3 flex items-center text-gray-500 text-sm">
                          minhaloja.com/
                        </div>
                        <Input
                          placeholder="seu-produto-incrivel"
                          className="rounded-l-none h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        URL amigável, sem espaços ou caracteres especiais
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Pricing Tab */}
              <TabsContent value="pricing" className="mt-0 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-orange-50 rounded-lg shadow-sm">
                      <CreditCard size={24} className="text-orange-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Preços e Pacotes Irresistíveis
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Moeda Poderosa
                      </label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between h-12 shadow-[0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 hover:border-orange-400 hover:bg-orange-50 transition-all duration-200"
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shadow-sm text-orange-600 font-medium">
                                R$
                              </span>
                              <span className="text-gray-600">
                                Real Brasileiro (BRL)
                              </span>
                            </div>
                            <ChevronDown size={18} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-2 shadow-lg border border-gray-100">
                          {[
                            { symbol: "R$", name: "Real Brasileiro (BRL)" },
                            { symbol: "$", name: "Dólar Americano (USD)" },
                            { symbol: "€", name: "Euro (EUR)" },
                          ].map((currency) => (
                            <DropdownMenuItem
                              key={currency.name}
                              className="py-2.5 px-4 cursor-pointer hover:bg-orange-50 rounded-md transition-colors flex items-center gap-2"
                            >
                              <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shadow-sm text-orange-600 font-medium">
                                {currency.symbol}
                              </span>
                              {currency.name}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-700">
                        Como Seus Clientes Vão Pagar?
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                          className={cn(
                            "border rounded-xl p-5 cursor-pointer transition-all duration-200",
                            paymentType === "single"
                              ? "border-orange-400 bg-orange-50 shadow-[0_4px_12px_rgba(255,107,0,0.1)]"
                              : "border-gray-200 hover:border-orange-300 hover:bg-orange-50/50",
                          )}
                          onClick={() => setPaymentType("single")}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                                paymentType === "single"
                                  ? "border-orange-500"
                                  : "border-gray-300",
                              )}
                            >
                              {paymentType === "single" && (
                                <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                              )}
                            </div>
                            <span className="font-medium text-gray-800">
                              Pagamento Único
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-2 pl-8">
                            Seu cliente paga uma única vez e tem acesso
                            vitalício
                          </p>
                        </div>

                        <div
                          className={cn(
                            "border rounded-xl p-5 cursor-pointer transition-all duration-200",
                            paymentType === "subscription"
                              ? "border-orange-400 bg-orange-50 shadow-[0_4px_12px_rgba(255,107,0,0.1)]"
                              : "border-gray-200 hover:border-orange-300 hover:bg-orange-50/50",
                          )}
                          onClick={() => setPaymentType("subscription")}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                                paymentType === "subscription"
                                  ? "border-orange-500"
                                  : "border-gray-300",
                              )}
                            >
                              {paymentType === "subscription" && (
                                <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                              )}
                            </div>
                            <span className="font-medium text-gray-800">
                              Assinatura VIP
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-2 pl-8">
                            Seu cliente paga recorrentemente para manter o
                            acesso
                          </p>
                        </div>
                      </div>
                    </div>

                    {paymentType === "single" ? (
                      <div className="space-y-6 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              Preço Principal (Valor Real)
                            </label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                                R$
                              </span>
                              <Input
                                type="number"
                                placeholder="297,00"
                                className="pl-10 h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              Preço com Desconto Incrível! (Opcional)
                            </label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                                R$
                              </span>
                              <Input
                                type="number"
                                placeholder="197,00"
                                className="pl-10 h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="installments"
                              checked={installmentsEnabled}
                              onCheckedChange={(checked) =>
                                setInstallmentsEnabled(checked === true)
                              }
                              className="h-5 w-5 border-2 border-gray-300 rounded data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                            />
                            <label
                              htmlFor="installments"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Turbine com Parcelamento (Intrapay)
                            </label>
                          </div>

                          {installmentsEnabled && (
                            <div className="pl-7 pt-3">
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                  Número máximo de parcelas
                                </label>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className="w-full justify-between shadow-[0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 hover:border-orange-400 hover:bg-orange-50 transition-all duration-200"
                                    >
                                      <span className="text-gray-600">12x</span>
                                      <ChevronDown size={18} />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-2 shadow-lg border border-gray-100">
                                    {[
                                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                    ].map((num) => (
                                      <DropdownMenuItem
                                        key={num}
                                        className="py-2 px-4 cursor-pointer hover:bg-orange-50 rounded-md transition-colors"
                                      >
                                        {num}x
                                      </DropdownMenuItem>
                                    ))}
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              Preço da Assinatura
                            </label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                                R$
                              </span>
                              <Input
                                type="number"
                                placeholder="97,00"
                                className="pl-10 h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              Frequência de Cobrança
                            </label>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-full justify-between h-12 shadow-[0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 hover:border-orange-400 hover:bg-orange-50 transition-all duration-200"
                                >
                                  <span className="text-gray-600">Mensal</span>
                                  <ChevronDown size={18} />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-2 shadow-lg border border-gray-100">
                                {[
                                  "Semanal",
                                  "Mensal",
                                  "Trimestral",
                                  "Semestral",
                                  "Anual",
                                ].map((freq) => (
                                  <DropdownMenuItem
                                    key={freq}
                                    className="py-2 px-4 cursor-pointer hover:bg-orange-50 rounded-md transition-colors"
                                  >
                                    {freq}
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              Dias de Teste Grátis (Opcional)
                            </label>
                            <Input
                              type="number"
                              placeholder="7"
                              className="h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              Taxa de Adesão (Opcional)
                            </label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                                R$
                              </span>
                              <Input
                                type="number"
                                placeholder="0,00"
                                className="pl-10 h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="pt-4">
                      <Button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 shadow-[0_4px_14px_-3px_rgba(255,107,0,0.5)] hover:shadow-[0_6px_16px_-3px_rgba(255,107,0,0.7)] transition-all duration-200 flex items-center gap-2">
                        <Zap size={18} />
                        Adicionar Plano Alternativo
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Content Tab */}
              <TabsContent value="content" className="mt-0 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-purple-50 rounded-lg shadow-sm">
                      <Gift size={24} className="text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Conteúdo Exclusivo e Entrega UAU!
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Qual o Formato da Sua Joia Rara?
                      </label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between h-12 shadow-[0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200"
                          >
                            <span className="text-gray-600">
                              {productFormat === "course"
                                ? "Curso Online com Área de Membros"
                                : "Selecione o formato"}
                            </span>
                            <ChevronDown size={18} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-2 shadow-lg border border-gray-100">
                          {[
                            {
                              id: "course",
                              name: "Curso Online com Área de Membros",
                            },
                            { id: "ebook", name: "E-book Iluminado" },
                            { id: "mentoring", name: "Serviço/Mentoria VIP" },
                            { id: "software", name: "Software Inovador" },
                          ].map((format) => (
                            <DropdownMenuItem
                              key={format.id}
                              className="py-2.5 px-4 cursor-pointer hover:bg-purple-50 rounded-md transition-colors"
                              onClick={() => setProductFormat(format.id)}
                            >
                              {format.name}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {productFormat === "course" && (
                      <div className="space-y-6 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h3 className="font-medium text-gray-800">
                              Ativar Área de Membros Mágica
                            </h3>
                            <p className="text-sm text-gray-500">
                              Crie uma experiência imersiva para seus alunos
                            </p>
                          </div>
                          <Switch
                            checked={enableMemberArea}
                            onCheckedChange={setEnableMemberArea}
                            className="data-[state=checked]:bg-purple-500 h-6 w-11"
                          />
                        </div>

                        {enableMemberArea && (
                          <div className="space-y-5 pt-2">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-700">
                                Nome da Sua Área de Membros
                              </label>
                              <Input
                                placeholder="Academia de Marketing Digital"
                                className="h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200"
                              />
                            </div>

                            <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 shadow-[0_4px_14px_-3px_rgba(128,90,213,0.5)] hover:shadow-[0_6px_16px_-3px_rgba(128,90,213,0.7)] transition-all duration-200 w-full justify-center py-6">
                              <span className="flex items-center gap-2">
                                <Zap size={18} />
                                Criar Jornada do Aluno ✨
                              </span>
                            </Button>

                            <div className="space-y-3">
                              <h4 className="font-medium text-gray-800">
                                Comece a Mágica Aqui (Estrutura Inicial Rápida)
                              </h4>

                              <div className="space-y-3">
                                <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-md bg-purple-200 flex items-center justify-center shadow-sm">
                                      <span className="text-purple-700 font-medium">
                                        1
                                      </span>
                                    </div>
                                    <span className="font-medium text-gray-700">
                                      Módulo de Introdução
                                    </span>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-purple-600 hover:text-purple-700 hover:bg-purple-100"
                                  >
                                    + Adicionar Aula
                                  </Button>
                                </div>

                                <Button
                                  variant="outline"
                                  className="w-full border-dashed border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 py-5"
                                >
                                  <span className="flex items-center gap-2 text-purple-600">
                                    <Zap size={18} />
                                    Adicionar Novo Módulo
                                  </span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {productFormat === "ebook" && (
                      <div className="space-y-6 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-purple-400 transition-colors duration-200 cursor-pointer bg-gray-50 hover:bg-purple-50">
                          <div className="mx-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                            <Upload size={32} className="text-purple-500" />
                          </div>
                          <p className="text-gray-600 mb-2">
                            Arraste seu E-book aqui ou clique para fazer upload
                          </p>
                          <p className="text-xs text-gray-400">
                            PDF, EPUB ou MOBI (max. 50MB)
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4 shadow-sm border border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200"
                          >
                            <Upload size={16} className="mr-2" />
                            Escolher Arquivo
                          </Button>
                        </div>
                      </div>
                    )}

                    {(productFormat === "mentoring" ||
                      productFormat === "software") && (
                      <div className="space-y-6 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Instruções de Acesso
                          </label>
                          <textarea
                            className="w-full p-4 min-h-[150px] rounded-md shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200"
                            placeholder="Descreva como o cliente deve acessar ou utilizar seu serviço/software..."
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            URL de Acesso (Opcional)
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                              <Link size={18} />
                            </span>
                            <Input
                              placeholder="https://"
                              className="pl-10 h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Checkout Tab */}
              <TabsContent value="checkout" className="mt-0 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-green-50 rounded-lg shadow-sm">
                      <Rocket size={24} className="text-green-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Página de Vendas & Checkout Turbinado
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Sua Vitrine Própria (URL Externa)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <Link size={18} />
                        </span>
                        <Input
                          placeholder="https://"
                          className="pl-10 h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-200"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Deixe em branco para usar a página de vendas padrão
                      </p>
                    </div>

                    <div className="space-y-5 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                      <h3 className="font-medium text-gray-800">
                        Checkout que Converte (Intrapay)
                      </h3>

                      <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-700">
                          Quais Portas Mágicas de Pagamento Você Abre?
                        </label>
                        <div className="space-y-3">
                          {[
                            { id: "credit", label: "Cartão de Crédito" },
                            { id: "pix", label: "PIX Premiado" },
                            { id: "boleto", label: "Boleto Facilitado" },
                          ].map((method) => (
                            <div
                              key={method.id}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={method.id}
                                defaultChecked={method.id === "credit"}
                                className="h-5 w-5 border-2 border-gray-300 rounded data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                              />
                              <label
                                htmlFor={method.id}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {method.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Sua Marca no Checkout
                          </label>
                          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-green-400 transition-colors duration-200 cursor-pointer bg-gray-50 hover:bg-green-50">
                            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 shadow-md">
                              <Upload size={24} className="text-green-500" />
                            </div>
                            <p className="text-sm text-gray-600">
                              Arraste seu logo aqui
                            </p>
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-3 shadow-sm border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all duration-200"
                            >
                              Escolher Arquivo
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Cor de Impacto do Checkout
                          </label>
                          <div className="grid grid-cols-5 gap-2">
                            {[
                              "#0077FF",
                              "#FF6B00",
                              "#00B894",
                              "#9C27B0",
                              "#E91E63",
                              "#3498DB",
                              "#2ECC71",
                              "#F39C12",
                              "#8E44AD",
                              "#E74C3C",
                            ].map((color) => (
                              <div
                                key={color}
                                className="aspect-square rounded-md cursor-pointer shadow-sm hover:scale-110 transition-transform duration-200 border border-white"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <div className="flex mt-3">
                            <div
                              className="w-10 h-10 rounded-l-md border border-gray-200"
                              style={{ backgroundColor: "#0077FF" }}
                            />
                            <Input
                              defaultValue="#0077FF"
                              className="rounded-l-none h-10 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-200"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 shadow-[0_4px_14px_-3px_rgba(0,184,148,0.5)] hover:shadow-[0_6px_16px_-3px_rgba(0,184,148,0.7)] transition-all duration-200 w-full justify-center py-6 mb-3">
                        <span className="flex items-center gap-2">
                          <Zap size={18} />
                          Adicionar Magia Extra! (Order Bump)
                        </span>
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full justify-center py-6 border-2 border-dashed border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-200"
                      >
                        <span className="flex items-center gap-2 text-green-600">
                          <Zap size={18} />
                          Destravar Oferta Irresistível! (Upsell)
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Affiliates Tab */}
              <TabsContent value="affiliates" className="mt-0 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-yellow-50 rounded-lg shadow-sm">
                      <Users size={24} className="text-yellow-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Afiliados Parceiros de Sucesso
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                      <div className="space-y-1">
                        <h3 className="font-medium text-gray-800">
                          Juntos Somos Mais Fortes (Programa de Afiliados)
                        </h3>
                        <p className="text-sm text-gray-500">
                          Permita que afiliados promovam seu produto e ganhem
                          comissões
                        </p>
                      </div>
                      <Switch
                        checked={enableAffiliates}
                        onCheckedChange={setEnableAffiliates}
                        className="data-[state=checked]:bg-yellow-500 h-6 w-11"
                      />
                    </div>

                    {enableAffiliates && (
                      <div className="space-y-6 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              Comissão por Venda (%)
                            </label>
                            <div className="relative">
                              <Input
                                type="number"
                                defaultValue="30"
                                className="pr-8 h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-200"
                              />
                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                                %
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              Duração do Cookie (dias)
                            </label>
                            <Input
                              type="number"
                              defaultValue="30"
                              className="h-12 shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-200"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            Divulgue a Magia (Materiais para Afiliados)
                          </label>
                          <textarea
                            className="w-full p-4 min-h-[150px] rounded-md shadow-[inset_0_2px_5px_rgba(0,0,0,0.08)] border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-200"
                            placeholder="Compartilhe links, banners, textos prontos e dicas para seus afiliados usarem na divulgação..."
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Integrations Tab */}
              <TabsContent value="integrations" className="mt-0 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-teal-50 rounded-lg shadow-sm">
                      <Settings size={24} className="text-teal-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Conexões Inteligentes (Integrações)
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        name: "Email Marketing",
                        icon: <Info size={24} className="text-teal-600" />,
                        connected: false,
                      },
                      {
                        name: "Pixel de Rastreamento",
                        icon: <Info size={24} className="text-teal-600" />,
                        connected: false,
                      },
                      {
                        name: "Webhooks",
                        icon: <Info size={24} className="text-teal-600" />,
                        connected: false,
                      },
                      {
                        name: "API Personalizada",
                        icon: <Info size={24} className="text-teal-600" />,
                        connected: false,
                      },
                    ].map((integration, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:border-teal-300 hover:shadow-md transition-all duration-200 cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-teal-50 rounded-lg shadow-sm">
                            {integration.icon}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">
                              {integration.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {integration.connected
                                ? "Conectado"
                                : "Não conectado"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
