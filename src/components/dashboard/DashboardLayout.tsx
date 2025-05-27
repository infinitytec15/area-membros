"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Wallet,
  Users,
  Settings,
  Menu,
  LogOut,
  User,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  {
    title: "Painel",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Produtos",
    href: "/dashboard/products",
    icon: <Package className="h-5 w-5" />,
  },
  {
    title: "Vendas",
    href: "/dashboard/sales",
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    title: "Financeiro",
    href: "/dashboard/finance",
    icon: <Wallet className="h-5 w-5" />,
  },
  {
    title: "Afiliados",
    href: "/dashboard/affiliates",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Configurações",
    href: "/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
  },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    if (!pathname) return [];

    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbs = segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        href,
      };
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex flex-col w-64 bg-white border-r border-gray-200 transition-all duration-300",
          isSidebarOpen ? "md:w-64" : "md:w-20",
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link href="/dashboard" className="flex items-center">
            <div className="w-8 h-8 rounded-md bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            {isSidebarOpen && (
              <span className="ml-2 text-lg font-semibold">Kiwify</span>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden md:flex"
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isSidebarOpen ? "rotate-0" : "rotate-180",
              )}
            />
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-emerald-50 text-emerald-600"
                      : "text-gray-700 hover:bg-gray-100",
                  )}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {isSidebarOpen && <span className="ml-3">{item.title}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=producer" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            {isSidebarOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium">João Produtor</p>
                <p className="text-xs text-gray-500">joao@exemplo.com</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden absolute top-3 left-3 z-10"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex items-center h-16 px-4 border-b border-gray-200">
            <Link href="/dashboard" className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <span className="ml-2 text-lg font-semibold">Kiwify</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-emerald-50 text-emerald-600"
                        : "text-gray-700 hover:bg-gray-100",
                    )}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="ml-3">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=producer" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium">João Produtor</p>
                <p className="text-xs text-gray-500">joao@exemplo.com</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            {/* Breadcrumbs */}
            <nav className="flex">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    Dashboard
                  </Link>
                </li>
                {breadcrumbs.slice(1).map((breadcrumb, index) => (
                  <React.Fragment key={breadcrumb.href}>
                    <li className="text-gray-400">/</li>
                    <li>
                      <Link
                        href={breadcrumb.href}
                        className={cn(
                          "text-sm font-medium",
                          index === breadcrumbs.length - 2
                            ? "text-gray-700"
                            : "text-emerald-600 hover:text-emerald-700",
                        )}
                      >
                        {breadcrumb.title}
                      </Link>
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </nav>
          </div>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=producer" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline text-sm font-medium">
                  João Produtor
                </span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Minha Conta</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
