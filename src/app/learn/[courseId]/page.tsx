"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Video,
} from "lucide-react";

export default function CourseLessonPage() {
  const params = useParams();
  const courseId = params.courseId;

  // Mock lesson data
  const lessonData = {
    title: "Estado e Ciclo de Vida",
    type: "video", // video, text, pdf
    videoUrl: "https://example.com/video.mp4",
    content: `
      <h2>Estado e Ciclo de Vida em React</h2>
      <p>Nesta aula, vamos explorar como o estado funciona em componentes React e entender o ciclo de vida dos componentes.</p>
      <h3>O que é Estado?</h3>
      <p>Estado é um objeto JavaScript que armazena dados que podem mudar ao longo do tempo e afetam o comportamento do componente.</p>
      <h3>Principais conceitos:</h3>
      <ul>
        <li>Estado é encapsulado e privado para o componente</li>
        <li>Mudanças no estado disparam re-renderizações</li>
        <li>Estado deve ser modificado usando a função setState</li>
      </ul>
    `,
    materials: [
      { name: "Slides da Aula", type: "pdf", size: "2.4 MB", url: "#" },
      { name: "Código de Exemplo", type: "zip", size: "1.1 MB", url: "#" },
      { name: "Exercícios Práticos", type: "pdf", size: "1.8 MB", url: "#" },
    ],
  };

  const [isCompleted, setIsCompleted] = React.useState(false);

  const handleMarkAsCompleted = () => {
    setIsCompleted(true);
    // Here you would also update this status in your backend
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6 overflow-hidden border-0 shadow-lg rounded-xl bg-white">
        <CardContent className="p-0">
          <Tabs defaultValue="content" className="w-full">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger
                  value="content"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Conteúdo
                </TabsTrigger>
                <TabsTrigger
                  value="materials"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Materiais
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="content" className="p-0 m-0">
              {lessonData.type === "video" && (
                <div className="aspect-video bg-gray-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Video className="h-16 w-16 mx-auto mb-4 opacity-60" />
                      <p className="text-lg font-medium">
                        Player de vídeo (placeholder)
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">
                  {lessonData.title}
                </h1>

                <div
                  className="prose prose-blue max-w-none"
                  dangerouslySetInnerHTML={{ __html: lessonData.content }}
                />
              </div>
            </TabsContent>

            <TabsContent value="materials" className="p-6 m-0">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Materiais para Download IntraFy
              </h2>

              <div className="space-y-3">
                {lessonData.materials.map((material, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 mr-4 shadow-sm group-hover:shadow-md group-hover:bg-blue-200 transition-all">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">
                        {material.name}
                      </h3>
                      <p className="text-sm text-gray-500">{material.size}</p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Baixar
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          className="flex items-center gap-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 shadow-sm"
        >
          <ChevronLeft className="h-4 w-4" />
          Aula Anterior
        </Button>

        <Button
          onClick={handleMarkAsCompleted}
          disabled={isCompleted}
          className={`px-6 py-2 ${
            isCompleted
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
          } 
            text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
        >
          {isCompleted ? "Aula Concluída ✓" : "Marcar como Concluída ✨"}
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 shadow-sm"
        >
          Próxima Aula
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
