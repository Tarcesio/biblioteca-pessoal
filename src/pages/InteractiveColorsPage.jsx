import { useState } from "react";
import { rgbToHsl, hslToRgb } from "@/utils/colorConverter";

export default function InteractiveColorsPage() {
  const [rgb, setRgb] = useState({ r: 128, g: 128, b: 128 });
  const [hsl, setHsl] = useState({ h: 0, s: 0, l: 50 });

  const handleRgbChange = (novoRgb) => {
    setRgb(novoRgb);
    const novoHsl = rgbToHsl(novoRgb);
    setHsl(novoHsl);
  };

  const handleHslChange = (novoHsl) => {
    setHsl(novoHsl);
    const novoRgb = hslToRgb(novoHsl);
    setRgb(novoRgb);
  };

  return (
    <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8 font-sans text-zinc-200 framework-base">
      <div className="p-6 bg-zinc-900 border border-zinc-800 shadow-2xl rounded-xl">
        
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          Laboratório Interativo de Cores Digital
        </h1>
        <p className="text-zinc-400 mb-6 text-sm sm:text-base leading-relaxed">
          As telas de computador e o cérebro humano enxergam cores de formas completamente diferentes. 
          Mexa em qualquer controle abaixo e veja como um system traduz o outro instantaneamente!
        </p>
    
        {/* Visualizador de Cor */}
        <div className="flex flex-col items-center justify-center mb-6 w-full">
          <div 
            id="visualizador" 
            className="w-full h-32 rounded-xl shadow-inner border border-zinc-700 transition-colors duration-100"
            style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
          />
          <p className="mt-3 text-sm sm:text-lg font-mono font-bold bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700 text-white text-center w-full sm:w-auto">
            Código do Navegador: <span className="text-cyan-400">rgb({rgb.r}, {rgb.g}, {rgb.b})</span>
          </p>
        </div>
        
        <div className="h-px bg-zinc-800 w-full my-6" />
    
        {/* Grid Responsivo para os Controles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* BLOCO RGB */}
          <div className="bg-red-950/10 p-4 rounded-xl border border-red-900/20 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-2">
                🔌 Modelo RGB <span className="text-xs font-normal text-red-300 bg-red-900/40 px-2 py-0.5 rounded">(Hardware / Luz)</span>
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                A tela combina a intensidade de 3 micro-lâmpadas (Vermelha, Verde e Azul) de 0 a 255 para criar os pixels.
              </p>
            </div>
            
            <div className="space-y-4">
              <label className="flex flex-col text-sm font-semibold text-zinc-300">
                <span className="flex justify-between mb-1">Red (Vermelho) <span className="font-mono text-red-400 font-bold">{rgb.r}</span></span>
                <input type="range" min="0" max="255" value={rgb.r} onChange={(e) => handleRgbChange({ ...rgb, r: Number(e.target.value) })} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-red-500" />
              </label>
              <label className="flex flex-col text-sm font-semibold text-zinc-300">
                <span className="flex justify-between mb-1">Green (Verde) <span className="font-mono text-green-400 font-bold">{rgb.g}</span></span>
                <input type="range" min="0" max="255" value={rgb.g} onChange={(e) => handleRgbChange({ ...rgb, g: Number(e.target.value) })} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-green-500" />
              </label>
              <label className="flex flex-col text-sm font-semibold text-zinc-300">
                <span className="flex justify-between mb-1">Blue (Azul) <span className="font-mono text-blue-400 font-bold">{rgb.b}</span></span>
                <input type="range" min="0" max="255" value={rgb.b} onChange={(e) => handleRgbChange({ ...rgb, b: Number(e.target.value) })} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-blue-500" />
              </label>
            </div>
    
            <p className="text-xs text-zinc-400 bg-zinc-800/50 p-2 rounded border border-red-900/10 italic">
              💡 <strong>Luz Máxima:</strong> Tudo em 255 gera Branco. Tudo em 0 gera o Preto (ausência de luz).
            </p>
          </div>
    
          {/* BLOCO HSL */}
          <div className="bg-indigo-950/10 p-4 rounded-xl border border-indigo-900/20 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-lg font-bold text-indigo-400 flex items-center gap-2 mb-2">
                🎨 Modelo HSL <span className="text-xs font-normal text-indigo-300 bg-indigo-900/40 px-2 py-0.5 rounded">(Percepção Humana)</span>
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Divide a cor em três conceitos que nossa mente entende de forma natural sem precisar somar luzes.
              </p>
            </div>
            
            <div className="space-y-4">
              <label className="flex flex-col text-sm font-semibold text-zinc-300">
                <span className="flex justify-between mb-1">H (Matiz / Cor) <span className="font-mono text-indigo-400 font-bold">{hsl.h}°</span></span>
                <input type="range" min="0" max="360" value={hsl.h} onChange={(e) => handleHslChange({ ...hsl, h: Number(e.target.value) })} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
              </label>
              <label className="flex flex-col text-sm font-semibold text-zinc-300">
                <span className="flex justify-between mb-1">S (Saturação / Vivacidade) <span className="font-mono text-indigo-400 font-bold">{hsl.s}%</span></span>
                <input type="range" min="0" max="100" value={hsl.s} onChange={(e) => handleHslChange({ ...hsl, s: Number(e.target.value) })} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
              </label>
              <label className="flex flex-col text-sm font-semibold text-zinc-300">
                <span className="flex justify-between mb-1">L (Luminosidade / Luz) <span className="font-mono text-indigo-400 font-bold">{hsl.l}%</span></span>
                <input type="range" min="0" max="100" value={hsl.l} onChange={(e) => handleHslChange({ ...hsl, l: Number(e.target.value) })} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
              </label>
            </div>
    
            <div className="text-xs text-zinc-400 bg-zinc-800/50 p-2 rounded border border-indigo-900/10 space-y-1">
              <p>• <strong>Matiz:</strong> Roda das cores (0° Vermelho, 120° Verde, 240° Azul).</p>
              <p>• <strong>Saturação:</strong> 0% é cinza fosco, 100% é cor viva.</p>
              <p>• <strong>Luminosidade:</strong> 0% é breu total, 100% é branco puro.</p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
