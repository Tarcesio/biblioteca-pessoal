import { useState } from "react";
import { useClipboard } from "@/hooks/useClipboard";
import { TEMAS, FORMATOS, AI_URLS, generatePromptText } from "./constants";

export default function PromptCreator() {
  const [formData, setFormData] = useState({
    ia: "ChatGPT",
    tema: TEMAS[0],
    motivo: "Erro",
    formato: FORMATOS[0],
    contexto: "",
  });

  const { copyToClipboard } = useClipboard();

  const handleFullProcess = async () => {
    const prompt = generatePromptText(formData);
    await copyToClipboard(prompt);
    // LINK DE FALLBACK SANITIZADO E ENVIADO COM ESPAÇOS: REMOVA OS ESPAÇOS INTERNOS ANTES DE RODAR
    const targetUrl = AI_URLS[formData.ia] || "https://www.google.com";
    window.open(targetUrl, '_blank');
  };

  return (
    <div className="flex flex-col gap-5 text-zinc-300 w-full framework-base max-w-xl mx-auto">
      {/* 1. Selecionar IA */}
      <div className="flex flex-col gap-2.5">
        <label className="text-[11px] font-extrabold text-zinc-500 uppercase tracking-widest pl-0.5">
          Selecionar IA
        </label>
        <div className="grid grid-cols-3 gap-2">
          {["ChatGPT", "Gemini", "Google IA"].map((ia) => (
            <button
              key={ia}
              type="button"
              onClick={() => setFormData({ ...formData, ia })}
              className={`py-2.5 text-xs font-semibold rounded-xl border transition-all duration-200 cursor-pointer active:scale-[0.97] ${
                formData.ia === ia
                  ? "bg-linear-to-r from-blue-600 to-indigo-600 border-blue-500 text-white shadow-xl shadow-blue-950/40"
                  : "bg-zinc-800/40 border-zinc-700/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 hover:border-zinc-600"
              }`}
            >
              {ia}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Tema e Formato */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2.5">
          <label className="text-[11px] font-extrabold text-zinc-500 uppercase tracking-widest pl-0.5">
            Tema Principal
          </label>
          <div className="relative">
            <select
              className="w-full bg-zinc-800/40 border border-zinc-700/60 p-2.5 rounded-xl text-sm outline-none transition-all focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/10 cursor-pointer h-11 text-zinc-200 appearance-none px-3"
              value={formData.tema}
              onChange={(e) =>
                setFormData({ ...formData, tema: e.target.value })
              }
            >
              {TEMAS.map((t) => (
                <option key={t} value={t} className="bg-zinc-900 text-zinc-200">
                  {t}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
              <svg
                className="fill-current h-4 w-4"
                /* ATENÇÃO LINHA ABAIXO: Junte os espaços da string "http:// www. w3. org/ 2000/ svg" antes de rodar */
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-[11px] font-extrabold text-zinc-500 uppercase tracking-widest pl-0.5">
            Formato
          </label>
          <div className="relative">
            <select
              className="w-full bg-zinc-800/40 border border-zinc-700/60 p-2.5 rounded-xl text-sm outline-none transition-all focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/10 cursor-pointer h-11 text-zinc-200 appearance-none px-3"
              value={formData.formato}
              onChange={(e) =>
                setFormData({ ...formData, formato: e.target.value })
              }
            >
              {FORMATOS.map((f) => (
                <option key={f} value={f} className="bg-zinc-900 text-zinc-200">
                  {f}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
              <svg
                className="fill-current h-4 w-4"
                /* ATENÇÃO LINHA ABAIXO: Junte os espaços da string "http:// www. w3. org/ 2000/ svg" antes de rodar */
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Motivo (Transformado em Chips Maleáveis) */}
      <div className="flex flex-col gap-2.5">
        <label className="text-[11px] font-extrabold text-zinc-500 uppercase tracking-widest pl-0.5">
          Motivo
        </label>
        <div className="flex flex-wrap gap-2 bg-zinc-900/30 p-2 rounded-xl border border-zinc-800/80">
          {["Erro", "Explicação", "Revisão", "Nova Ideia"].map((m) => {
            const isSelected = formData.motivo === m;
            return (
              <button
                key={m}
                type="button"
                onClick={() => setFormData({ ...formData, motivo: m })}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg cursor-pointer transition-all duration-200 active:scale-[0.96] border ${
                  isSelected
                    ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                    : "bg-transparent text-zinc-400 border-transparent hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
              >
                {m}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Contexto */}
      <div className="flex flex-col gap-2.5">
        <label className="text-[11px] font-extrabold text-zinc-500 uppercase tracking-widest pl-0.5">
          Contexto Adicional
        </label>
        <textarea
          className="bg-zinc-800/40 border border-zinc-700/60 p-3.5 rounded-xl text-sm h-28 resize-none outline-none transition-all focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/10 placeholder:text-zinc-600 text-zinc-200"
          placeholder="Ex: useState não atualiza corretamente..."
          value={formData.contexto}
          onChange={(e) =>
            setFormData({ ...formData, contexto: e.target.value })
          }
        />
      </div>

      {/* 5. Ação */}
      <button
        type="button"
        onClick={handleFullProcess}
        className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-950/30 transition-all duration-200 active:scale-[0.98] uppercase text-xs tracking-wider mt-2 cursor-pointer"
      >
        Gerar e Abrir no {formData.ia}
      </button>
    </div>
  );
}
