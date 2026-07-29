// Componentes Globais de Layout
import Header from '@/components/Header';
import Main from '@/components/Main';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col framework-base">
      {/* O Header fica fixo aqui. Ele gerencia o menu global de projetos */}
      <Header />
      
      {/* 
        Injetor único da tag <main> e do sistema de roteamento unificado.
        Qualquer caminho digitado será capturado e processado internamente pelo Main.
      */}
      <Main />
    </div>
  );
}
