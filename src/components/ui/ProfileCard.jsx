import { User, Cpu, Globe } from 'lucide-react';

export default function ProfileCard() {
  return (
    <div className="group relative w-full max-w-xl bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8 rounded-2xl text-left shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500/30">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500 rounded-l-2xl" />

      <div className="flex items-center gap-3 mb-6">
        <User className="text-emerald-500" size={28} />
        <h2 className="text-2xl font-bold text-zinc-100">Sobre mim</h2>
      </div>

      <div className="space-y-4 text-zinc-300 text-sm sm:text-base">
        <div className="flex items-start gap-3">
          <span className="font-bold text-emerald-400 min-w-16 sm:min-w-20">Nome:</span>
          <span className="text-zinc-100">タル (Taru)</span>
        </div>
        
        <div className="flex items-start gap-3 border-t border-zinc-800/50 pt-3">
          <Cpu className="text-zinc-500 shrink-0" size={20} />
          <p><strong className="text-zinc-100">Área:</strong> Engenharia de Computação</p>
        </div>
        
        <div className="flex items-start gap-3 border-t border-zinc-800/50 pt-3">
          <Globe className="text-zinc-500 shrink-0" size={20} />
          <p><strong className="text-zinc-100">Interesses:</strong> Programação e Web Design</p>
        </div>
      </div>
    </div>
  );
}
