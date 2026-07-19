import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "@/features/todo-list/components/Title";

export default function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Captura os parâmetros passados de forma nativa pela URL
  const title = searchParams.get("title") || "Tarefa sem título";
  const description = searchParams.get("description") || "Nenhuma descrição fornecida.";

  return (
    <main className="flex-1 p-4 sm:p-8 max-w-md w-full mx-auto flex flex-col framework-base">
      
      {/* Cabeçalho da Página com o Botão de Voltar */}
      <div className="flex items-center justify-center relative w-full mb-6">
        <button
          type="button"
          onClick={() => navigate(-1)} // Retorna de forma segura para a página anterior no histórico
          className="absolute left-0 p-2 text-zinc-400 hover:text-zinc-100 transition-colors rounded-lg bg-zinc-900 border border-zinc-800 cursor-pointer flex items-center justify-center"
          aria-label="Voltar para a lista"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        {/* Componente reutilizável extraído do domínio do todo-list */}
        <Title>Detalhes da Tarefa</Title>
      </div>

      {/* Card de Informações da Tarefa - Estilização Alinhada com o Site */}
      <article className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-lg space-y-3 w-full">
        <h3 className="text-xl font-bold text-zinc-100 tracking-tight wrap-break-word">
          {title}
        </h3>
        
        {/* Divisor estético sutil */}
        <div className="h-px bg-zinc-800 w-full" />
        
        <p className="text-sm text-zinc-400 leading-relaxed whitespace-pre-wrap wrap-break-word">
          {description}
        </p>
      </article>

    </main>
  );
}
