"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreditCard, Eye, EyeOff, Key, Shield, Upload } from "lucide-react";

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <DashboardLayout>
      <div className="container mx-auto py-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Configurações da Conta IntraFy
            </h1>
            <p className="text-gray-500 mt-2">
              Gerencie suas preferências e informações pessoais na plataforma
              IntraFy
            </p>
          </div>

          <div className="space-y-6">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid grid-cols-6 gap-4 bg-transparent">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white shadow-sm hover:bg-gray-100 data-[state=active]:shadow-md data-[state=active]:shadow-blue-500/30"
                >
                  Perfil
                </TabsTrigger>
                <TabsTrigger
                  value="company"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white shadow-sm hover:bg-gray-100 data-[state=active]:shadow-md data-[state=active]:shadow-blue-500/30"
                >
                  Empresa
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white shadow-sm hover:bg-gray-100 data-[state=active]:shadow-md data-[state=active]:shadow-blue-500/30"
                >
                  Notificações
                </TabsTrigger>
                <TabsTrigger
                  value="payment"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white shadow-sm hover:bg-gray-100 data-[state=active]:shadow-md data-[state=active]:shadow-blue-500/30"
                >
                  Pagamentos
                </TabsTrigger>
                <TabsTrigger
                  value="integrations"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white shadow-sm hover:bg-gray-100 data-[state=active]:shadow-md data-[state=active]:shadow-blue-500/30"
                >
                  Integrações
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white shadow-sm hover:bg-gray-100 data-[state=active]:shadow-md data-[state=active]:shadow-blue-500/30"
                >
                  Segurança
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Meu Perfil IntraEspacial
                    </CardTitle>
                    <CardDescription>
                      Atualize suas informações pessoais e como você aparece na
                      plataforma
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Profile Picture */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                      <div className="flex flex-col items-center gap-2">
                        <Avatar className="w-24 h-24 border-4 border-white shadow-xl">
                          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=producer" />
                          <AvatarFallback>JP</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Upload className="h-4 w-4" /> Alterar
                        </Button>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium">
                          Foto de Perfil IntraEspacial
                        </h3>
                        <p className="text-sm text-gray-500">
                          Esta foto será exibida em seu perfil e em suas páginas
                          de venda. Recomendamos uma imagem de pelo menos
                          300x300 pixels.
                        </p>
                      </div>
                    </div>

                    <Separator />

                    {/* Basic Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Informações Básicas
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Nome Completo</Label>
                          <Input
                            id="fullName"
                            defaultValue="João Produtor"
                            className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="displayName">Nome de Exibição</Label>
                          <Input
                            id="displayName"
                            defaultValue="João Produtor"
                            className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            defaultValue="joao@exemplo.com"
                            disabled
                            className="shadow-sm border-gray-300 bg-gray-50 text-gray-500"
                          />
                          <p className="text-xs text-gray-500">
                            Para alterar seu email, entre em contato com o
                            suporte.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            defaultValue="(11) 98765-4321"
                            className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Password Change */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Alterar Senha Secreta IntraFy
                      </h3>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Senha Atual</Label>
                          <div className="relative">
                            <Input
                              id="currentPassword"
                              type={showPassword ? "text" : "password"}
                              className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pr-10"
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">Nova Senha</Label>
                          <div className="relative">
                            <Input
                              id="newPassword"
                              type={showNewPassword ? "text" : "password"}
                              className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pr-10"
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                              onClick={() =>
                                setShowNewPassword(!showNewPassword)
                              }
                            >
                              {showNewPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">
                            Confirmar Nova Senha
                          </Label>
                          <div className="relative">
                            <Input
                              id="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pr-10"
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transition-all">
                        Salvar Alterações
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Company Tab */}
              <TabsContent value="company" className="space-y-6">
                <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Dados da Minha Base Estelar (Empresa)
                    </CardTitle>
                    <CardDescription>
                      Informações da sua empresa para emissão de notas fiscais e
                      recibos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Razão Social</Label>
                        <Input
                          id="companyName"
                          placeholder="Nome da Empresa Ltda"
                          className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tradeName">Nome Fantasia</Label>
                        <Input
                          id="tradeName"
                          placeholder="Nome Fantasia"
                          className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cnpj">CNPJ</Label>
                        <Input
                          id="cnpj"
                          placeholder="00.000.000/0000-00"
                          className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ie">Inscrição Estadual</Label>
                        <Input
                          id="ie"
                          placeholder="000.000.000.000"
                          className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Endereço</Label>
                        <Input
                          id="address"
                          placeholder="Rua, Número, Bairro"
                          className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade/UF</Label>
                        <Input
                          id="city"
                          placeholder="São Paulo/SP"
                          className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transition-all">
                        Salvar Dados da Empresa
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications" className="space-y-6">
                <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Alertas e Notificações IntraFy
                    </CardTitle>
                    <CardDescription>
                      Configure como e quando você quer ser notificado sobre
                      atividades importantes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">
                            Nova Venda Realizada 💰
                          </p>
                          <p className="text-xs text-gray-500">
                            Receba notificação sempre que uma venda for
                            concluída
                          </p>
                        </div>
                        <Toggle
                          defaultPressed
                          aria-label="Toggle new sale notifications"
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">
                            Novo Afiliado IntraEstelar 🌟
                          </p>
                          <p className="text-xs text-gray-500">
                            Seja notificado quando um novo afiliado se inscrever
                          </p>
                        </div>
                        <Toggle
                          defaultPressed
                          aria-label="Toggle new affiliate notifications"
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">
                            Saque IntraPay Processado 🚀
                          </p>
                          <p className="text-xs text-gray-500">
                            Receba confirmação quando seus saques forem
                            processados
                          </p>
                        </div>
                        <Toggle
                          defaultPressed
                          aria-label="Toggle withdrawal notifications"
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">
                            Relatórios Semanais 📊
                          </p>
                          <p className="text-xs text-gray-500">
                            Resumo semanal do desempenho das suas vendas
                          </p>
                        </div>
                        <Toggle aria-label="Toggle weekly reports" />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">
                            Atualizações do Sistema IntraFy 🔄
                          </p>
                          <p className="text-xs text-gray-500">
                            Novidades e atualizações da plataforma
                          </p>
                        </div>
                        <Toggle
                          defaultPressed
                          aria-label="Toggle system updates"
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">
                            Lembretes de Tarefas Pendentes ⏰
                          </p>
                          <p className="text-xs text-gray-500">
                            Lembrete de ações importantes que precisam ser
                            feitas
                          </p>
                        </div>
                        <Toggle aria-label="Toggle task reminders" />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transition-all">
                        Salvar Preferências de Notificação
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Payment Tab */}
              <TabsContent value="payment" className="space-y-6">
                <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Conexões de Saque IntraPay
                    </CardTitle>
                    <CardDescription>
                      Gerencie suas contas bancárias para recebimento via
                      IntraPay
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <CreditCard className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Acesso Rápido ao Financeiro
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Para gerenciar suas contas bancárias e configurar
                        saques, acesse a seção Financeiro.
                      </p>
                      <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transition-all">
                        Ir para Financeiro IntraPay
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Integrations Tab */}
              <TabsContent value="integrations" className="space-y-6">
                <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Integrações Intergalácticas IntraFy
                    </CardTitle>
                    <CardDescription>
                      Conecte a IntraFy com suas ferramentas favoritas do
                      universo digital
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="mailchimp">Mailchimp API Key</Label>
                        <Input
                          id="mailchimp"
                          placeholder="Cole sua chave API do Mailchimp aqui"
                          className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="zapier">Zapier Webhook URL</Label>
                        <Input
                          id="zapier"
                          placeholder="https://hooks.zapier.com/hooks/catch/..."
                          className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="discord">
                          Discord Webhook (Notificações)
                        </Label>
                        <Input
                          id="discord"
                          placeholder="https://discord.com/api/webhooks/..."
                          className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="slack">Slack Webhook URL</Label>
                        <Input
                          id="slack"
                          placeholder="https://hooks.slack.com/services/..."
                          className="shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Chave API IntraFy</h3>
                      <p className="text-sm text-gray-500">
                        Use esta chave para integrar a IntraFy com sistemas
                        externos
                      </p>
                      <div className="flex gap-2">
                        <Input
                          readOnly
                          value="intrafy_api_key_1234567890abcdef"
                          className="font-mono text-sm"
                        />
                        <Button variant="outline" className="gap-1">
                          <Key className="h-4 w-4" /> Copiar
                        </Button>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transition-all">
                        Gerar Nova Chave API IntraFy
                      </Button>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transition-all">
                        Salvar Integrações
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="space-y-6">
                <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Escudo de Segurança IntraFy
                    </CardTitle>
                    <CardDescription>
                      Proteja sua conta com camadas extras de segurança
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* 2FA Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                          <Shield className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">
                            Autenticação de Dois Fatores (2FA)
                          </h3>
                          <p className="text-sm text-gray-600">
                            Adicione uma camada extra de proteção à sua conta
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                          <div>
                            <p className="font-medium">Status do 2FA</p>
                            <p className="text-sm text-gray-500">
                              Atualmente desabilitado
                            </p>
                          </div>
                          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-md shadow-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/40 transition-all">
                            Ativar 2FA
                          </Button>
                        </div>

                        <div className="text-sm text-gray-600">
                          <p className="mb-2">
                            Com o 2FA ativado, você precisará:
                          </p>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Inserir sua senha normal</li>
                            <li>Confirmar com um código do seu celular</li>
                            <li>
                              Usar um app como Google Authenticator ou Authy
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Login History */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Histórico de Acessos Recentes
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">São Paulo, Brasil</p>
                            <p className="text-sm text-gray-500">
                              Hoje, 14:32 - Chrome no Windows
                            </p>
                          </div>
                          <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                            Atual
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">São Paulo, Brasil</p>
                            <p className="text-sm text-gray-500">
                              Ontem, 09:15 - Safari no iPhone
                            </p>
                          </div>
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                            Sucesso
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">
                              Rio de Janeiro, Brasil
                            </p>
                            <p className="text-sm text-gray-500">
                              28/05/2023, 16:45 - Chrome no Android
                            </p>
                          </div>
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                            Sucesso
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Security Settings */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Configurações de Segurança
                      </h3>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="space-y-0.5">
                            <p className="text-sm font-medium">
                              Logout Automático
                            </p>
                            <p className="text-xs text-gray-500">
                              Desconectar automaticamente após 30 minutos de
                              inatividade
                            </p>
                          </div>
                          <Toggle
                            defaultPressed
                            aria-label="Toggle auto logout"
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="space-y-0.5">
                            <p className="text-sm font-medium">
                              Notificações de Login
                            </p>
                            <p className="text-xs text-gray-500">
                              Receber email quando alguém acessar sua conta
                            </p>
                          </div>
                          <Toggle
                            defaultPressed
                            aria-label="Toggle login notifications"
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="space-y-0.5">
                            <p className="text-sm font-medium">
                              Bloqueio por Tentativas
                            </p>
                            <p className="text-xs text-gray-500">
                              Bloquear conta após 5 tentativas de login
                              incorretas
                            </p>
                          </div>
                          <Toggle
                            defaultPressed
                            aria-label="Toggle login attempt blocking"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
