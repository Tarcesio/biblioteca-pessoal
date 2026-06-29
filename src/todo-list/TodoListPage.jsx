import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import Title from "./components/Title"
import { useState, useEffect } from "react"

export default function TodoListPage(){

  /**
   * State é o estado do componente, ou seja, as informações que ele guarda e pode alterar.
   * Props são as propriedades do componente, ou seja, as informações que ele recebe de outros componentes e não pode alterar.
   */

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // Toda vez que 'tasks' mudar, ele salva no localStorage
  



  /**
   * Funcao que altera o state de tasks, ou seja, altera as informações que o componente guarda. Podemos apenas alterar em App.jsx pois é onde o state de tasks está definido, e passar as informações para os outros componentes através de props. Assim, os outros componentes podem apenas ler as informações, mas não podem alterá-las.
   */

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    })
    setTasks(newTasks);
  };

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  };

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: Math.random(),
      title,
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask]);
  }

  return(
    <div className="projects-menu w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">

        <Title>Gerenciador de Tarefas</Title>

        <AddTask 
          onAddTaskSubmit={onAddTaskSubmit}
        />

        <Tasks 
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          onDeleteTaskClick={onDeleteTaskClick} 
        />
      </div>
   </div>
  )
}
