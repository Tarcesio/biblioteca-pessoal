import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o recarregamento nativo da página
    
    if (!title.trim() || !description.trim()) {
      setHasError(true);
      return;
    }
    
    onAddTaskSubmit(title.trim(), description.trim());
    setTitle("");
    setDescription("");
    setHasError(false);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="space-y-4 p-5 sm:p-6 bg-zinc-900/60 border border-zinc-800 rounded-xl shadow-lg flex flex-col w-full"
    >
      <div className="space-y-1">
        <Input
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            if (hasError) setHasError(false);
          }}
          className={hasError && !title.trim() ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20" : ""}
        />
      </div>

      <div className="space-y-1">
        <Input
          type="text"
          placeholder="Descrição da tarefa"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
            if (hasError) setHasError(false);
          }}
          className={hasError && !description.trim() ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20" : ""}
        />
      </div>

      {hasError && (
        <span className="text-xs font-medium text-red-400 animate-in fade-in duration-200">
          ⚠️ Por favor, preencha todos os campos antes de enviar.
        </span>
      )}

      <Button type="submit">
        Adicionar
      </Button>
    </form>
  );
}
