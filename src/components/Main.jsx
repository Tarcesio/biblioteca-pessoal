import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import LinksPage from '@/pages/LinksPage';
import AboutPage from '@/pages/AboutPage';

export default function Main() {
  return (
    // Tag semântica com espaçamento interno Mobile-First fluido (p-4 que expande para sm:p-8)
    <main className="flex-1 p-4 sm:p-8 bg-zinc-950 text-zinc-100 min-h-[calc(100vh-5rem)] flex flex-col framework-base w-full">
      <Routes>
        {/* Renderiza a sua BIO ou painel inicial na rota raiz */}
        <Route path="/" element={<Home />} />
        
        {/* Sub-rotas internas gerenciadas dentro do container de conteúdo */}
        <Route path="/links" element={<LinksPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Rota de fallback segura retornando para a Home caso digitem caminhos inválidos */}
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}
