import { User, Cpu, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-full py-12 px-6 text-center animate-in fade-in duration-700">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        📚 Biblioteca Virtual
      </h1>
      <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed mb-10">
        Bem-vindo ao ponto de partida do sistema. Use o menu no topo para navegar.
      </p>

      <div className="group relative w-full max-w-xl bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl text-left shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500/30">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500 rounded-l-2xl"></div>

        <div className="flex items-center gap-3 mb-6">
          <User className="text-emerald-500" size={28} />
          <h2 className="text-2xl font-bold text-zinc-100">Sobre mim</h2>
        </div>

        <div className="space-y-4 text-zinc-300">
          <div className="flex items-start gap-3">
            <span className="font-bold text-emerald-400 min-w-20">Nome:</span>
            <span className="text-zinc-100">タル (Taru)</span>
          </div>
          <div className="flex items-start gap-3 border-t border-zinc-800/50 pt-3">
            <Cpu className="text-zinc-500" size={20} />
            <p><strong className="text-zinc-100">Área:</strong> Engenharia de Computação</p>
          </div>
          <div className="flex items-start gap-3 border-t border-zinc-800/50 pt-3">
            <Globe className="text-zinc-500" size={20} />
            <p><strong className="text-zinc-100">Interesses:</strong> Programação e Web Design</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <img src="/src/assets/signature-image.png" alt="assinatura-imagem" className='w-150' />
      </div>

      <blockquote className="mt-12 px-8 py-4 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl italic">
        “Transformando ideias em código, um projeto de cada vez.”
      </blockquote>
    </div>
  );
}
