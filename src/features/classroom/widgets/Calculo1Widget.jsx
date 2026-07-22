import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function Calculo1Widget({ chartData }) {
  // Estado centralizado em 200 (meio do SVG de largura 400)
  const [pointX, setPointX] = useState(200);

  // --- MATEMÁTICA DA DERIVADA (CALIBRAÇÃO VISUAL) ---
  // f(x) = 50 + ((x - 200) / 12)^2
  // f'(x) = 2 * (x - 200) / 144  => Inclinação da reta tangente
  const scaleX = (pointX - 200) / 12;
  const ptY = 50 + Math.pow(scaleX, 2);
  const slope = (2 * (pointX - 200)) / 144;

  // Gera a curva da parábola de forma suave
  let curvePoints = [];
  for (let x = 80; x <= 325; x += 5) {
    const y = 50 + Math.pow((x - 200) / 12, 2);
    curvePoints.push(`${x},${y}`);
  }

  // Define a extensão da linha da reta para os lados (comprimento visual da reta)
  const deltaX = 50;
  const x1 = pointX - deltaX;
  const y1 = ptY - (slope * deltaX);
  const x2 = pointX + deltaX;
  const y2 = ptY + (slope * deltaX);

  return (
    <Card className="border-emerald-500/10 bg-zinc-900/90">
      <CardHeader className="flex-col items-start! gap-0.5! mb-4">
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
          Laboratório Visual
        </span>
        <CardTitle className="text-xl! text-zinc-100!">
          {chartData?.title || 'Derivadas'}
        </CardTitle>
        <p className="text-zinc-400 text-[11px] leading-snug mt-1">
          {chartData?.description || 'Mova o slider abaixo para observar a variação da reta tangente (derivada) ao longo da curva.'}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4!">
        {/* Painel do Gráfico Vetorial */}
        <div className="relative bg-zinc-950 p-3 rounded-xl border border-zinc-800/60 overflow-hidden shadow-inner">
          <svg viewBox="0 0 400 200" className="w-full h-auto fill-none">
            
            {/* Grid Cartesiano de Fundo (Linhas Guia) */}
            <g className="stroke-zinc-900/60 stroke-1 stroke-dashed">
              <line x1="200" y1="0" x2="200" y2="200" />
              <line x1="0" y1="100" x2="400" y2="100" />
              <line x1="0" y1="50" x2="400" y2="50" />
              <line x1="0" y1="150" x2="400" y2="150" />
            </g>

            {/* Curva Principal da Função */}
            <path 
              d={`M ${curvePoints.join(' L ')}`} 
              className="stroke-zinc-700 stroke-2" 
            />
            
            {/* Linhas de Projeção Pontilhadas do Ponto Atual */}
            <g className="stroke-zinc-800 stroke-1 stroke-dasharray-[2,2]">
              <line x1={pointX} y1={ptY} x2={pointX} y2="200" />
              <line x1={pointX} y1={ptY} x2="0" y2={ptY} />
            </g>

            {/* Reta Tangente Dinâmica (Derivada) */}
            <line 
              x1={x1} y1={y1} 
              x2={x2} y2={y2} 
              className="stroke-emerald-400 stroke-[2.5] drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]" 
            />
            
            {/* Ponto de Tangência */}
            <circle 
              cx={pointX} 
              cy={ptY} 
              r="4.5" 
              className="fill-zinc-950 stroke-emerald-400 stroke-2" 
            />
          </svg>
        </div>

        {/* Módulo de Controle */}
        <div className="space-y-3 bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/40 text-xs">
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-zinc-400">
              <span className="font-medium text-zinc-300">Posição de Análise ($x$)</span>
              <span className="text-emerald-400 font-mono bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                {((pointX - 200) / 12).toFixed(1)}
              </span>
            </div>
            <input 
              type="range" 
              min="100" 
              max="300" 
              value={pointX} 
              onChange={(e) => setPointX(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg cursor-pointer transition-all hover:bg-zinc-700"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
