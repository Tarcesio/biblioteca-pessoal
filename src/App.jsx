import './index.css'
import Header from './components/Header'
import Main from './components/Main'
import TodoListPage from './pages/todo-list/TodoListPage'
import InteractiveColors from './pages/interactiveColors/interactiveColors'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo-list" element={<TodoListPage />} />
        <Route path="/interactive-colors" element={<InteractiveColors />} />
      </Routes>
    </>
  )
}