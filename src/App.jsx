import './index.css'
import Header from './components/Header'
import Main from './components/Main'
import TodoListPage from './todo-list/TodoListPage'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo-list" element={<TodoListPage />} />
      </Routes>
    </>
  )
}