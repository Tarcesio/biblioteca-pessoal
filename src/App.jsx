import './index.css'
import Header from './components/Header'
import Main from './components/Main'
import TodoListPage from './pages/todo-list/TodoListPage'
import InteractiveColors from './pages/interactiveColors/interactiveColors'
// 1. Importe a página de detalhes com o caminho correto da árvore:
import TaskPage from './pages/todo-list/pages/TaskPage' 
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo-list" element={<TodoListPage />} />
        <Route path="/tasksDescription" element={<TaskPage />} />
        <Route path="/interactive-colors" element={<InteractiveColors />} />


        // Rota de fallback para páginas não encontradas (404) [SEMPRE POR ULTIMA]
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}
