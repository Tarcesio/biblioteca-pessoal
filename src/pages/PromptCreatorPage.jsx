import PromptCreator from "@/features/prompt-creator/PromptCreator";

export default function PromptCreatorPage() {
  return (
    <div className="w-full max-w-2xl mx-auto py-2 sm:py-4 font-sans text-zinc-200 framework-base">
      <div className="p-4 sm:p-6 bg-zinc-900 border border-zinc-800 shadow-2xl rounded-xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
          Prompt Creator Engenharia
        </h1>
        <p className="text-zinc-400 mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
          Configure as especificações abaixo para estruturar uma instrução cirúrgica e abrir o resultado diretamente no ecossistema da inteligência artificial escolhida.
        </p>
        
        <div className="h-px bg-zinc-800 w-full my-6" />

        <PromptCreator />
      </div>
    </div>
  );
}
