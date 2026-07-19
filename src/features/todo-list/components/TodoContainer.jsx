import { useState, useEffect } from "react";
import Title from "./Title";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

export default function TodoContainer() {
  // Inicializa o estado com os dados do localStorage ou um array vazio
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch {
      return [];
    }
  });

  // Efeito colateral para persistência automática de dados
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4 py-2 sm:py-4">
      <Title>Gerenciador de Tarefas</Title>
      <AddTask onAddTaskSubmit={onAddTaskSubmit} />
      <Tasks 
        tasks={tasks} 
        onTaskClick={onTaskClick} 
        onDeleteTaskClick={onDeleteTaskClick} 
      />
    </div>
  );
}
