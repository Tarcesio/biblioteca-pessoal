export default function AboutPage() {
  return (
    // <main> semântico com padding horizontal de segurança para dispositivos móveis
    <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8 sm:py-12 font-sans framework-base">
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-emerald-500 tracking-tight">
        Sobre o Projeto Hub
      </h1>
      
      <div className="space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed">
        <p>
          Este Hub foi desenvolvido como uma solução centralizada para gerenciar ferramentas de produtividade, 
          estudos de Engenharia de Computação e projetos pessoais.
        </p>
        
        <p className="text-zinc-300">
          Tecnologias utilizadas: <strong className="text-zinc-100 font-semibold">React, Vite, Tailwind CSS e Lucide Icons.</strong>
        </p>
        
        {/* Bloco de Status do Sistema Estilizado */}
        <div className="p-4 bg-zinc-900 border border-zinc-800 border-l-4 border-l-blue-500 rounded-xl shadow-md">
          <span className="text-zinc-300 text-sm sm:text-base">Status do Sistema:</span>{" "}
          <span className="text-blue-400 font-mono font-medium bg-blue-950/30 px-2 py-0.5 rounded border border-blue-900/20 text-xs sm:text-sm ml-1">
            v1.0.0-stable
          </span>
        </div>
      </div>

    </main>
  );
}
