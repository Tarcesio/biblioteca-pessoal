export default function Sobre() {
    return (
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6 text-emerald-500">Sobre o Projeto Hub</h1>
        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
          <p>
            Este Hub foi desenvolvido como uma solução centralizada para gerenciar ferramentas de produtividade, 
            estudos de Engenharia de Computação e projetos pessoais.
          </p>
          <p>
            Tecnologias utilizadas: <strong>React, Vite, Tailwind CSS e Lucide Icons.</strong>
          </p>
          <div className="p-4 bg-zinc-900 border-l-4 border-blue-500 rounded">
            Status do Sistema: <span className="text-blue-400 font-mono">v1.0.0-stable</span>
          </div>
        </div>
      </div>
    );
  }
  