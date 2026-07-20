import FoxQuiz from "@/features/fox-quiz/FoxQuiz";

export default function FoxPage() {
  return (
    <div className="w-full max-w-2xl mx-auto py-2 sm:py-4 font-sans text-zinc-200 framework-base">
      {/* Moldura estrutural que dá o padrão estético das ferramentas do Hub */}
      <div className="p-4 sm:p-6 bg-zinc-900 border border-zinc-800 shadow-2xl rounded-xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
          🦊 Qual raposa combina com você?
        </h1>
        <p className="text-zinc-400 mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
          O algoritmo importado do sistema clássico vai processar suas escolhas em tempo real para revelar o seu arquétipo de personalidade ideal.
        </p>
        
        {/* Linha divisória sutil da paleta zinc */}
        <div className="h-px bg-zinc-800 w-full my-6" />

        {/* Injeção direta da feature inteligente isolada */}
        <FoxQuiz />
      </div>
    </div>
  );
}
