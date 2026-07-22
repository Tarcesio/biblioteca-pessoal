import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function Calculo2Widget({ chartData }) {
  // Dois estados independentes para controlar os limites da integral
  const [limitA, setLimitA] = useState(120);
  const [limitB, setLimitB] = useState(250);

  // --- MODELAGEM MATEMÁTICA ---
  const getCurveY = (x) => 140 - Math.sqrt(x - 50) * 5.5;

  let curvePoints = [];
  for (let x = 50; x <= 360; x += 5) {
    curvePoints.push(`${x},${getCurveY(x)}`);
  }
  
  let fillPoints = [`${limitA},150`];
  for (let x = limitA; x <= limitB; x += 2) {
    fillPoints.push(`${x},${getCurveY(x)}`);
  }
  fillPoints.push(`${limitB},150`);

  // --- CÁLCULO REATIVO DA ÁREA ---
  const valA = ((limitA - 50) / 10).toFixed(1);
  const valB = ((limitB - 50) / 10).toFixed(1);
  
  let areaSum = 0;
  const step = 0.5;
  for (let x = limitA; x < limitB; x += step) {
    const heightInSvg = 150 - getCurveY(x);
    areaSum += (heightInSvg / 10) * (step / 10);
  }

  // --- TRAVAS DE SEGURANÇA INTERATIVAS ---
  const handleLimitAChange = (val) => {
    setLimitA(val);
    if (val >= limitB) {
      setLimitB(val + 5); // Garante um espaçamento mínimo se empurrar o limite superior
    }
  };

  const handleLimitBChange = (val) => {
    if (val > limitA) {
      setLimitB(val);
    }
  };

  return (
    <Card className="border-emerald-500/10 bg-zinc-900/90">
      <CardHeader className="flex-col items-start! gap-0.5! mb-2">
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
          Laboratório Visual
        </span>
        <CardTitle className="text-xl! text-zinc-100!">
          {chartData?.title || 'Cálculo de Área'}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5!">
        
        {/* DISPLAY DA NOTAÇÃO MATEMÁTICA COBRINHA */}
        <div className="flex items-center justify-center gap-4 bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/40 font-mono text-sm sm:text-base select-none">
          <div className="flex items-center">
            <span className="text-3xl font-serif text-emerald-400 select-none">∫</span>
            <div className="flex flex-col justify-between h-9 text-[10px] font-sans font-bold text-emerald-400/90 -ml-0.5 pt-0.5 pb-1">
              <span className="leading-none tracking-tight">{valB}</span>
              <span className="leading-none tracking-tight">{valA}</span>
            </div>
          </div>
          
          <div className="text-zinc-300 flex items-center gap-2 font-medium pl-1">
            <span>f(x) dx =</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/5 px-2.5 py-1 rounded border border-emerald-500/10 font-mono tracking-wide shadow-sm">
              {areaSum.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Painel do Gráfico Vetorial */}
        <div className="relative bg-zinc-950 p-3 rounded-xl border border-zinc-800/60 overflow-hidden shadow-inner">
          <svg viewBox="0 0 400 200" className="w-full h-auto fill-none">
            <g className="stroke-zinc-900/50 stroke-1 stroke-dashed">
              <line x1="50" y1="0" x2="50" y2="200" />
              <line x1="0" y1="150" x2="400" y2="150" />
              <line x1="0" y1="90" x2="400" y2="90" />
              <line x1="200" y1="0" x2="200" y2="200" />
            </g>

            <polygon 
              points={fillPoints.join(' ')} 
              className="fill-emerald-500/15 stroke-none backdrop-blur-sm" 
            />

            <line x1="30" y1="150" x2="370" y2="150" className="stroke-zinc-800 stroke-[1.5]" />
            
            <path d={`M ${curvePoints.join(' L ')}`} className="stroke-zinc-600 stroke-2" />

            {/* Linha e rótulo dinâmicos para o limite inferior a */}
            <line 
              x1={limitA} y1="150" 
              x2={limitA} y2={getCurveY(limitA)} 
              className="stroke-emerald-500/40 stroke-[1.5] stroke-dashed" 
            />
            <text x={limitA - 4} y="165" className="fill-emerald-500/60 text-[10px] font-mono font-bold">a</text>

            <line 
              x1={limitB} y1="150" 
              x2={limitB} y2={getCurveY(limitB)} 
              className="stroke-emerald-400 stroke-[1.5] stroke-dashed drop-shadow-[0_0_3px_rgba(16,185,129,0.4)]" 
            />
            <text x={limitB - 3} y="165" className="fill-emerald-400 text-[10px] font-mono font-bold">b</text>

            <text x="310" y={getCurveY(330) - 10} className="fill-zinc-600 text-[10px] font-mono italic">f(x)</text>
          </svg>
        </div>

        {/* Painel de Controle Duplo */}
        <div className="space-y-4 bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/40 text-xs">
          {/* Slider Limite Inferior (a) */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-zinc-400">
              <span className="font-medium text-zinc-300">Limite Inferior ($a$)</span>
              <span className="text-emerald-500/70 font-mono">{valA}</span>
            </div>
            <input 
              type="range" min="60" max="340" value={limitA} 
              onChange={(e) => handleLimitAChange(Number(e.target.value))}
              className="w-full accent-emerald-600 h-1 bg-zinc-800 rounded-lg cursor-pointer transition-all"
            />
          </div>

          {/* Slider Limite Superior (b) */}
          <div className="space-y-1.5 border-t border-zinc-900 pt-3">
            <div className="flex justify-between items-center text-zinc-400">
              <span className="font-medium text-zinc-300">Limite Superior ($b$)</span>
              <span className="text-emerald-400 font-mono">{valB}</span>
            </div>
            <input 
              type="range" min="60" max="350" value={limitB} 
              onChange={(e) => handleLimitBChange(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg cursor-pointer transition-all"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
