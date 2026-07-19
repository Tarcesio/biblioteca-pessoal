import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

export default function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    // Rota atualizada para o novo padrão semântico definido em App.jsx
    navigate(`/todo-list/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-3 p-4 sm:p-6 bg-zinc-900/60 border border-zinc-800 rounded-xl shadow-lg w-full">
      {tasks.length === 0 && (
        <li className="text-center text-xs sm:text-sm text-zinc-500 py-4 italic">
          Nenhuma tarefa cadastrada.
        </li>
      )}
      
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-2.5 w-full group">
          {/* Botão de Conclusão de Tarefa */}
          <button
            onClick={() => onTaskClick(task.id)}
            className={`text-left flex-1 text-zinc-100 p-2.5 rounded-md text-xs sm:text-sm font-medium transition-all bg-zinc-800 hover:bg-zinc-700/80 cursor-pointer min-h-10 truncate break-all ${
              task.isCompleted ? "line-through text-zinc-500 bg-zinc-800/30 border-transparent" : "border border-zinc-700/30"
            }`}
          >
            {task.title}
          </button>

          {/* Botão de Detalhes - Otimizado com dimensões quadradas firmes para toque */}
          <Button
            onClick={() => onSeeDetailsClick(task)}
            className="h-10 w-10 p-0! bg-zinc-800 border-zinc-700/60 hover:bg-zinc-700 text-zinc-300 shrink-0 rounded-md active:scale-95"
            aria-label="Ver detalhes da tarefa"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </Button>

          {/* Botão de Deletar - Alvos de toque seguros e isolamento contra clique acidental */}
          <Button
            onClick={() => onDeleteTaskClick(task.id)}
            className="h-10 w-10 p-0! bg-zinc-800 border-zinc-700/60 hover:border-red-950 hover:bg-red-950/20 hover:text-red-400 text-zinc-400 shrink-0 rounded-md active:scale-95"
            aria-label="Deletar tarefa"
          >
            <Trash2Icon className="w-4 h-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
}
