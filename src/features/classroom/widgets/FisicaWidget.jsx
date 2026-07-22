import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function FisicaWidget({ chartData }) {
  const [amplitude, setAmplitude] = useState(40);
  const [frequencia, setFrequencia] = useState(2);

  const generateWavePath = () => {
    let points = [];
    for (let x = 0; x <= 400; x += 2) {
      const y = 100 + amplitude * Math.sin((frequencia * x * Math.PI) / 180);
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  return (
    <Card className="bg-zinc-900/80! border-emerald-500/20!">
      <CardHeader className="flex-col items-start! gap-1! mb-4">
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Laboratório Visual</span>
        <CardTitle className="text-xl! text-emerald-300!">{chartData?.title || 'Ondulatória'}</CardTitle>
        {chartData?.description && <p className="text-zinc-400 text-xs mt-1">{chartData.description}</p>}
      </CardHeader>

      <CardContent className="space-y-4!">
        <div className="relative bg-zinc-950/70 p-2 rounded-xl border border-zinc-800/80 overflow-hidden">
          <svg viewBox="0 0 400 200" className="w-full h-auto stroke-emerald-500 fill-none stroke-2">
            <line x1="0" y1="100" x2="400" y2="100" className="stroke-zinc-800 stroke-1 stroke-dashed" />
            <path d={generateWavePath()} className="stroke-emerald-400 drop-shadow-[0_0_4px_rgba(16,185,129,0.3)]" />
            <text x="70" y="45" className="fill-emerald-400 text-[10px] font-bold tracking-wider uppercase">Crista</text>
            <text x="210" y="165" className="fill-zinc-500 text-[10px] font-bold tracking-wider uppercase">Vale</text>
          </svg>
        </div>

        <div className="space-y-3 bg-zinc-950/40 p-3 rounded-xl border border-zinc-800/40 text-xs">
          <div className="space-y-1">
            <div className="flex justify-between text-zinc-400">
              <span>Amplitude (Altura)</span>
              <span className="text-emerald-400 font-mono">{amplitude}px</span>
            </div>
            <input 
              type="range" min="10" max="70" value={amplitude} 
              onChange={(e) => setAmplitude(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg cursor-pointer"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-zinc-400">
              <span>Frequência (Ciclos)</span>
              <span className="text-emerald-400 font-mono">{frequencia}Hz</span>
            </div>
            <input 
              type="range" min="1" max="5" value={frequencia} 
              onChange={(e) => setFrequencia(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
