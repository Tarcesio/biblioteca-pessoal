import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    // Rota atualizada para o novo padrão semântico definido em App.jsx
    navigate(`/todo-list/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-zinc-900 border border-zinc-800 rounded-xl shadow w-full">
      {tasks.length === 0 && (
        <li className="text-center text-sm text-zinc-500 py-2">
          Nenhuma tarefa cadastrada.
        </li>
      )}
      
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2 w-full">
          {/* Botão de Conclusão de Tarefa */}
          <button
            onClick={() => onTaskClick(task.id)}
            className={`text-left w-full text-zinc-100 p-2.5 rounded-md text-sm font-medium transition-colors bg-zinc-800 hover:bg-zinc-700/80 cursor-pointer ${
              task.isCompleted && "line-through text-zinc-500 bg-zinc-800/40"
            }`}
          >
            {task.title}
          </button>

          {/* Botão de Detalhes - Usa classes extras para customizar largura em linha */}
          <Button
            onClick={() => onSeeDetailsClick(task)}
            className="!w-auto p-2.5 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-zinc-300"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </Button>

          {/* Botão de Deletar - Variante destrutiva sutil em linha */}
          <Button
            onClick={() => onDeleteTaskClick(task.id)}
            className="!w-auto p-2.5 bg-zinc-800 border-zinc-700 hover:border-red-900 hover:bg-red-950/30 hover:text-red-400 text-zinc-400"
          >
            <Trash2Icon className="w-4 h-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
