{/* Outros imports */}
import './index.css'
import { Routes, Route } from 'react-router-dom'

{/* Componentes */}
import Header from './components/Header'
import Main from './components/Main'

{/* Páginas */}
import TodoListPage from './pages/todo-list/TodoListPage'
import InteractiveColors from './pages/interactiveColors/interactiveColors'
import TaskPage from './pages/todo-list/pages/TaskPage' 
import Links from './pages/Links'
import About from './pages/Sobre'

{/* Página de 404 */}
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
        <Route path="/links" element={<Links />} />
        <Route path="/about" element={<About />} />


        // Rota de fallback para páginas não encontradas (404) [SEMPRE POR ULTIMA]
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}
