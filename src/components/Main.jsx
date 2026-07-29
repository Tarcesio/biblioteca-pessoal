import { Routes, Route } from 'react-router-dom';

// Páginas Originais do Main
import Home from '@/pages/Home';
import LinksPage from '@/pages/LinksPage';
import AboutPage from '@/pages/AboutPage';

// Páginas Migradas do App (Garantindo o container mestre e espaçamento fluido)
import TodoListPage from '@/pages/TodoListPage';
import TaskPage from '@/pages/TaskPage';
import InteractiveColorsPage from '@/pages/InteractiveColorsPage';
import PromptCreatorPage from '@/pages/PromptCreatorPage';
import FoxPage from '@/pages/FoxPage';
import { ClassroomPage } from '@/pages/ClassroomPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Nova Rota da Infraestrutura de Controle Semântica
import FormTestPage from '@/pages/FormTestPage'

export default function Main() {
  return (
    // Tag semântica exclusiva com espaçamento interno Mobile-First fluido (p-4 que expande para sm:p-8)
    <main className="flex-1 p-4 sm:p-8 bg-zinc-950 text-zinc-100 min-h-[calc(100vh-5rem)] flex flex-col framework-base w-full">
      <Routes>
        {/* Rota Raiz (Painel Inicial ou Bio) */}
        <Route path="/" element={<Home />} />
        
        {/* Páginas Institucionais e Links */}
        <Route path="/links" element={<LinksPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Ecossistema de Projetos Isolados e Funcionalidades */}
        <Route path="/prompt-creator" element={<PromptCreatorPage />} />
        <Route path="/todo-list" element={<TodoListPage />} />
        <Route path="/todo-list/task" element={<TaskPage />} />
        <Route path="/interactive-colors" element={<InteractiveColorsPage />} />
        <Route path="/fox-quiz" element={<FoxPage />} />
        <Route path="/classroom" element={<ClassroomPage />} />

        {/* Sandbox de Validação dos Novos Componentes de Controle */}
        <Route path="/teste-controles" element={<FormTestPage />} />
        
        {/* Rota de Fallback Segura (404) dentro do escopo do Layout Principal */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}
