"use client";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CoursePlayerLayout_IntraFy>{children}</CoursePlayerLayout_IntraFy>;
}
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Play,
  FileText,
  Download,
  User,
  LogOut,
  Award,
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface CoursePlayerLayoutProps {
  children: React.ReactNode;
}

// Mock data for demonstration
const mockCourse = {
  title: "Desenvolvimento Web Avançado com React e Next.js",
  progress: 65,
  modules: [
    {
      id: 1,
      title: "Introdução ao Curso",
      lessons: [
        { id: 101, title: "Boas-vindas", completed: true, isCurrent: false },
        {
          id: 102,
          title: "Estrutura do curso",
          completed: true,
          isCurrent: false,
        },
      ],
    },
    {
      id: 2,
      title: "Fundamentos do React",
      lessons: [
        {
          id: 201,
          title: "Componentes e Props",
          completed: true,
          isCurrent: false,
        },
        {
          id: 202,
          title: "Estado e Ciclo de Vida",
          completed: true,
          isCurrent: false,
        },
        { id: 203, title: "Hooks Básicos", completed: false, isCurrent: true },
        {
          id: 204,
          title: "Renderização Condicional",
          completed: false,
          isCurrent: false,
        },
      ],
    },
    {
      id: 3,
      title: "Next.js na Prática",
      lessons: [
        {
          id: 301,
          title: "Introdução ao Next.js",
          completed: false,
          isCurrent: false,
        },
        {
          id: 302,
          title: "Roteamento e Navegação",
          completed: false,
          isCurrent: false,
        },
        { id: 303, title: "API Routes", completed: false, isCurrent: false },
        {
          id: 304,
          title: "SSR vs SSG vs ISR",
          completed: false,
          isCurrent: false,
        },
      ],
    },
  ],
};

export function CoursePlayerLayout_IntraFy({
  children,
}: CoursePlayerLayoutProps) {
  const pathname = usePathname();
  const [expandedModules, setExpandedModules] = React.useState<number[]>([
    1, 2,
  ]);

  const toggleModule = (moduleId: number) => {
    setExpandedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId],
    );
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-gray-200 shadow-lg">
        <div className="p-4 border-b border-gray-200">
          <Link href="/dashboard" className="flex items-center">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 transform hover:scale-105 transition-all">
              IF
            </div>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              IntraFy
            </span>
          </Link>
        </div>

        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800">
              {mockCourse.title}
            </h2>
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Seu progresso</span>
                <span className="font-medium text-blue-600">
                  {mockCourse.progress}%
                </span>
              </div>
              <Progress
                value={mockCourse.progress}
                className="h-2 bg-gray-200"
                indicatorClassName="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md shadow-blue-500/20"
              />
              <p className="text-xs text-blue-600 mt-1 font-medium">
                Continue assim, IntraNauta! ✨
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Conteúdo do Curso
            </h3>
            <ul className="space-y-2">
              {mockCourse.modules.map((module) => (
                <li
                  key={module.id}
                  className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full flex items-center justify-between p-3 text-left font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 mr-3 shadow-sm">
                        {module.id}
                      </div>
                      <span>{module.title}</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-gray-400 transition-transform",
                        expandedModules.includes(module.id)
                          ? "transform rotate-180"
                          : "",
                      )}
                    />
                  </button>

                  {expandedModules.includes(module.id) && (
                    <ul className="bg-gray-50 py-2 px-4 space-y-1">
                      {module.lessons.map((lesson) => (
                        <li key={lesson.id}>
                          <Link
                            href={`/learn/${module.id}/lesson/${lesson.id}`}
                            className={cn(
                              "flex items-center py-2 px-3 rounded-md text-sm transition-all",
                              lesson.isCurrent
                                ? "bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-600 pl-2"
                                : "text-gray-700 hover:bg-gray-100",
                            )}
                          >
                            <div className="mr-3">
                              {lesson.completed ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : lesson.isCurrent ? (
                                <Play className="h-5 w-5 text-blue-600 fill-current" />
                              ) : (
                                <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                              )}
                            </div>
                            <span>{lesson.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
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
        <SheetContent side="left" className="w-72 p-0">
          <div className="p-4 border-b border-gray-200">
            <Link href="/dashboard" className="flex items-center">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">
                IF
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                IntraFy
              </span>
            </Link>
          </div>

          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">
                {mockCourse.title}
              </h2>
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Seu progresso</span>
                  <span className="font-medium text-blue-600">
                    {mockCourse.progress}%
                  </span>
                </div>
                <Progress
                  value={mockCourse.progress}
                  className="h-2 bg-gray-200"
                  indicatorClassName="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md shadow-blue-500/20"
                />
                <p className="text-xs text-blue-600 mt-1 font-medium">
                  Continue assim, IntraNauta! ✨
                </p>
              </div>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Conteúdo do Curso
              </h3>
              <ul className="space-y-2">
                {mockCourse.modules.map((module) => (
                  <li
                    key={module.id}
                    className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100"
                  >
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-full flex items-center justify-between p-3 text-left font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 mr-3 shadow-sm">
                          {module.id}
                        </div>
                        <span>{module.title}</span>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-gray-400 transition-transform",
                          expandedModules.includes(module.id)
                            ? "transform rotate-180"
                            : "",
                        )}
                      />
                    </button>

                    {expandedModules.includes(module.id) && (
                      <ul className="bg-gray-50 py-2 px-4 space-y-1">
                        {module.lessons.map((lesson) => (
                          <li key={lesson.id}>
                            <Link
                              href={`/learn/${module.id}/lesson/${lesson.id}`}
                              className={cn(
                                "flex items-center py-2 px-3 rounded-md text-sm transition-all",
                                lesson.isCurrent
                                  ? "bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-600 pl-2"
                                  : "text-gray-700 hover:bg-gray-100",
                              )}
                            >
                              <div className="mr-3">
                                {lesson.completed ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : lesson.isCurrent ? (
                                  <Play className="h-5 w-5 text-blue-600 fill-current" />
                                ) : (
                                  <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                                )}
                              </div>
                              <span>{lesson.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-6 shadow-sm">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold text-gray-800 hidden md:block">
              {mockCourse.modules
                .find((m) => m.lessons.some((l) => l.isCurrent))
                ?.lessons.find((l) => l.isCurrent)?.title || "Aula Atual"}
            </h1>
          </div>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <Avatar className="h-8 w-8 ring-2 ring-blue-500 ring-offset-2">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline text-sm font-medium">
                  Ana Lima
                </span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Meu Perfil IntraFy</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Award className="mr-2 h-4 w-4" />
                <span>Meus Certificados IntraFy</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
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
