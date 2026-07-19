import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddClick = () => {
    if (title.trim() === "" || description.trim() === "") {
      return alert("Por favor, preencha todos os campos");
    }
    onAddTaskSubmit(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="space-y-4 p-6 bg-zinc-900 border border-zinc-800 rounded-xl shadow flex flex-col w-full">
      <Input
        placeholder="Título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <Button onClick={handleAddClick}>
        Adicionar
      </Button>
    </div>
  );
}

export default AddTask;
