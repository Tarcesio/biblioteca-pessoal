import { Routes, Route } from 'react-router-dom';

// Componentes Globais de Layout
import Header from '@/components/Header';
import Main from '@/components/Main';

// Páginas (Portas de entrada limpas)
import TodoListPage from '@/pages/TodoListPage';
import TaskPage from '@/pages/TaskPage';
import InteractiveColorsPage from '@/pages/InteractiveColorsPage';
import LinksPage from '@/pages/LinksPage';
import AboutPage from '@/pages/AboutPage';
import PromptCreatorPage from '@/pages/PromptCreatorPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col framework-base">
      {/* O Header fica fixo aqui. Ele gerencia o menu global de projetos */}
      <Header />
      
      {/* Sistema de Roteamento Dinâmico */}
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/prompt-creator" element={<PromptCreatorPage />} />
        <Route path="/todo-list" element={<TodoListPage />} />
        <Route path="/todo-list/task" element={<TaskPage />} />
        <Route path="/interactive-colors" element={<InteractiveColorsPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Rota de fallback para páginas não encontradas (404) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
