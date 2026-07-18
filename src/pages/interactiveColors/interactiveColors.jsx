import { useState } from 'react';

export default function InteractiveColors() {
    
    const [rgb, setRgb] = useState({r: 128,g: 128,b: 128
    });
    const [hsl, setHsl] = useState({h: 0,s: 0,l: 50
    });

    function loadRGB(novoRgb) {
        setRgb(novoRgb);
    
        // Converte a cópia atualizada para HSL
        let r = novoRgb.r / 255, g = novoRgb.g / 255, b = novoRgb.b / 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
    
        if (max === min) { h = s = 0; } 
        else {
          let d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
          else if (max === g) h = (b - r) / d + 2;
          else if (max === b) h = (r - g) / d + 4;
          h /= 6;
        }
        setHsl({ h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) });
      }
    
      function loadHSL(novoHsl) {
        setHsl(novoHsl);
    
        // Converte a cópia atualizada para RGB
        let h = novoHsl.h / 360, s = novoHsl.s / 100, l = novoHsl.l / 100;
        let r, g, b;
    
        if (s === 0) { r = g = b = l; } 
        else {
          const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1; if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
          };
          let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          let p = 2 * l - q;
          r = hue2rgb(p, q, h + 1/3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h - 1/3);
        }
        setRgb({ r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) });
      }
    
      return (
        // 1. CONTAINER PRINCIPAL: Adaptado para o seu fundo escuro, usando gray-900 e bordas discretas
        <div className="max-w-3xl mx-auto my-8 p-6 bg-gray-900 shadow-2xl rounded-xl border border-gray-800 font-sans text-gray-200">
          
          <h1 className="text-3xl font-bold text-white mb-2">Laboratório Interativo de Cores Digital</h1>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            As telas de computador e o cérebro humano enxergam cores de formas completamente diferentes. 
            Mexa em qualquer controle abaixo e veja como um sistema traduz o outro instantaneamente!
          </p>
      
          {/* 2. O CANVA: Agora com uma borda cinza escura para dar destaque no fundo preto */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div 
              id="visualizador" 
              className="w-full h-32 rounded-xl shadow-inner border border-gray-700 transition-colors duration-100"
              style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
            ></div>
            {/* Caixa de código em modo escuro */}
            <p className="mt-3 text-lg font-mono font-bold bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 text-white">
              Código do Navegador: <span className="text-cyan-400">rgb({rgb.r}, {rgb.g}, {rgb.b})</span>
            </p>
          </div>
          
          <hr className="my-6 border-gray-800" />
      
          {/* 3. GRID LADO A LADO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* BLOCO RGB: Fundo levemente avermelhado escuro */}
            <div className="bg-red-950/20 p-4 rounded-xl border border-red-900/30 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-2">
                  🔌 Modelo RGB <span className="text-xs font-normal text-red-300 bg-red-900/50 px-2 py-0.5 rounded">(Hardware / Luz)</span>
                </h3>
                <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                  A tela combina a intensidade de 3 micro-lâmpadas (Vermelha, Verde e Azul) de 0 a 255 para criar os pixels.
                </p>
              </div>
              
              <div className="space-y-4">
                <label className="flex flex-col text-sm font-semibold text-gray-300">
                  <span className="flex justify-between">Red (Vermelho) <span className="font-mono text-red-400 font-bold">{rgb.r}</span></span>
                  <input type="range" min="0" max="255" value={rgb.r} onChange={(e) => loadRGB({ ...rgb, r: Number(e.target.value) })} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-500" />
                </label>
                <label className="flex flex-col text-sm font-semibold text-gray-300">
                  <span className="flex justify-between">Green (Verde) <span className="font-mono text-green-400 font-bold">{rgb.g}</span></span>
                  <input type="range" min="0" max="255" value={rgb.g} onChange={(e) => loadRGB({ ...rgb, g: Number(e.target.value) })} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500" />
                </label>
                <label className="flex flex-col text-sm font-semibold text-gray-300">
                  <span className="flex justify-between">Blue (Azul) <span className="font-mono text-blue-400 font-bold">{rgb.b}</span></span>
                  <input type="range" min="0" max="255" value={rgb.b} onChange={(e) => loadRGB({ ...rgb, b: Number(e.target.value) })} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                </label>
              </div>
      
              <p className="text-xs text-gray-400 mt-4 bg-gray-800/50 p-2 rounded border border-red-900/20 italic">
                💡 <strong>Luz Máxima:</strong> Tudo em 255 gera Branco. Tudo em 0 gera o Preto (ausência de luz).
              </p>
            </div>
      
            {/* BLOCO HSL: Fundo levemente azulado/indigo escuro */}
            <div className="bg-indigo-950/20 p-4 rounded-xl border border-indigo-900/30 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-indigo-400 flex items-center gap-2 mb-2">
                  🎨 Modelo HSL <span className="text-xs font-normal text-indigo-300 bg-indigo-900/50 px-2 py-0.5 rounded">(Percepção Humana)</span>
                </h3>
                <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                  Divide a cor em três conceitos que nossa mente entende de forma natural sem precisar somar luzes.
                </p>
              </div>
              
              <div className="space-y-4">
                <label className="flex flex-col text-sm font-semibold text-gray-300">
                  <span className="flex justify-between">H (Matiz / Cor) <span className="font-mono text-indigo-400 font-bold">{hsl.h}°</span></span>
                  <input type="range" min="0" max="360" value={hsl.h} onChange={(e) => loadHSL({ ...hsl, h: Number(e.target.value) })} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                </label>
                <label className="flex flex-col text-sm font-semibold text-gray-300">
                  <span className="flex justify-between">S (Saturação / Vivacidade) <span className="font-mono text-indigo-400 font-bold">{hsl.s}%</span></span>
                  <input type="range" min="0" max="100" value={hsl.s} onChange={(e) => loadHSL({ ...hsl, s: Number(e.target.value) })} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                </label>
                <label className="flex flex-col text-sm font-semibold text-gray-300">
                  <span className="flex justify-between">L (Luminosidade / Luz) <span className="font-mono text-indigo-400 font-bold">{hsl.l}%</span></span>
                  <input type="range" min="0" max="100" value={hsl.l} onChange={(e) => loadHSL({ ...hsl, l: Number(e.target.value) })} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                </label>
              </div>
      
              <div className="text-xs text-gray-400 mt-4 bg-gray-800/50 p-2 rounded border border-indigo-900/20 space-y-1">
                <p>• <strong>Matiz:</strong> Roda das cores (0° Vermelho, 120° Verde, 240° Azul).</p>
                <p>• <strong>Saturação:</strong> 0% é cinza fosco, 100% é cor viva.</p>
                <p>• <strong>Luminosidade:</strong> 0% é breu total, 100% é branco puro.</p>
              </div>
            </div>
      
          </div>
        </div>
      );
      
}