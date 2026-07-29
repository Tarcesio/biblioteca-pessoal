import { Play, Pause, RefreshCw, Layers } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

/**
 * 🧧 Bloco focado na Simulação e Exposição do Vanilla JS (Vibe Verdinha Unificada)
 */
export function VanillaSandboxCard({ cenario, isSimulando, onToggle, efeitoFlash, onDisparar }) {
  return (
    <Card className={`bg-zinc-950/40! transition-all duration-150 ${efeitoFlash ? 'opacity-0! bg-white!' : ''}`}>
      <CardHeader className="justify-between mb-6!">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-3.5 h-3.5 text-zinc-400" />
          <CardTitle className="text-sm sm:text-base font-semibold! text-zinc-300!">{cenario.vanilla.titulo}</CardTitle>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-95 ${
            isSimulando 
              ? 'bg-emerald-600/10! text-emerald-400! border border-emerald-500/20 hover:bg-emerald-500/20' 
              : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
          }`}
        >
          {isSimulando ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span>{isSimulando ? 'Ver Código' : 'Play'}</span>
        </button>
      </CardHeader>

      <CardContent className="min-h-62.5 flex flex-col justify-between space-y-0!">
        {isSimulando ? (
          <div className="flex-1 flex flex-col items-center justify-center py-2 space-y-4">
            <div className="w-full max-w-xs bg-zinc-950 border border-zinc-800/80 rounded-xl p-4 space-y-3 shadow-inner">
              <span className="text-[9px] font-bold text-rose-400 uppercase tracking-wider block">Elemento Escopo DOM Real</span>
              <div className="bg-zinc-900 p-2.5 rounded border border-zinc-800 text-xs font-mono text-zinc-300">
                output.innerText = "60Hz"
              </div>
              <button
                type="button"
                onClick={onDisparar}
                className="w-full min-h-10 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg text-xs font-bold border border-zinc-700 active:scale-95 transition-transform"
              >
                Disparar Evento Nativo
              </button>
            </div>
            <p className="text-[11px] text-zinc-500 max-w-60 text-center leading-normal">
              Simula a piscada destrutiva de tela causada pelo Full Page Reload.
            </p>
          </div>
        ) : (
          <div className="space-y-3 flex-1 flex flex-col justify-between">
            <p className="text-xs text-zinc-400 leading-relaxed">{cenario.vanilla.descricao}</p>
            <pre className="p-3 bg-zinc-950 rounded-xl text-[11px] font-mono text-zinc-300 overflow-x-auto border border-zinc-900 leading-relaxed whitespace-pre-wrap flex-1 mt-2">
              {cenario.vanilla.codigoSnippet}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/**
 * 🧬 Bloco focado na Simulação e Exposição do React DOM (Vibe Verdinha Unificada)
 */
export function ReactSandboxCard({ cenario, isSimulando, onToggle, efeitoPulso, onDisparar }) {
  return (
    <Card className="bg-zinc-950/40!">
      <CardHeader className="justify-between mb-6!">
        <div className="flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-zinc-400" />
          <CardTitle className="text-sm sm:text-base font-semibold! text-zinc-300!">{cenario.react.titulo}</CardTitle>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-95 ${
            isSimulando 
              ? 'bg-emerald-600/10! text-emerald-400! border border-emerald-500/20 hover:bg-emerald-500/20' 
              : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
          }`}
        >
          {isSimulando ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span>{isSimulando ? 'Ver Código' : 'Play'}</span>
        </button>
      </CardHeader>

      <CardContent className="min-h-62.5 flex flex-col justify-between space-y-0!">
        {isSimulando ? (
          <div className="flex-1 flex flex-col items-center justify-center py-2 space-y-4">
            <div className="w-full max-w-xs bg-zinc-950 border border-zinc-800/80 rounded-xl p-4 space-y-3 shadow-inner">
              <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider block">Árvore Virtual DOM</span>
              <div className={`bg-zinc-900 p-2.5 rounded border border-zinc-800 text-xs font-mono transition-all duration-300 ${
                efeitoPulso ? 'border-emerald-500/80! ring-2! ring-emerald-500/20! text-emerald-400!' : 'text-zinc-300'
              }`}>
                {"<span>{frequencia}Hz</span>"}
              </div>
              <button
                type="button"
                onClick={onDisparar}
                className="w-full min-h-10 bg-emerald-600 text-zinc-950 rounded-lg text-xs font-bold hover:bg-emerald-500! active:scale-95 transition-transform"
              >
                Atualizar Estado (State)
              </button>
            </div>
            <p className="text-[11px] text-zinc-500 max-w-60 text-center leading-normal">
              Veja o Virtual DOM alterando apenas o elemento reativo na reconciliação.
            </p>
          </div>
        ) : (
          <div className="space-y-3 flex-1 flex flex-col justify-between">
            <p className="text-xs text-zinc-400 leading-relaxed">{cenario.react.descricao}</p>
            <pre className="p-3 bg-zinc-950 rounded-xl text-[11px] font-mono text-zinc-300 overflow-x-auto border border-zinc-900 leading-relaxed whitespace-pre-wrap flex-1 mt-2">
              {cenario.react.codigoSnippet}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
