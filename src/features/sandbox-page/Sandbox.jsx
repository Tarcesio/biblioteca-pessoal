import { useState } from 'react';
import { Cpu, Beaker } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { SANDBOX_SCENARIOS } from './constants';
import { VanillaSandboxCard, ReactSandboxCard } from './SandboxCards';

export default function Sandbox() {
  // Controle de abas de simulação por cenário
  const [simulandoVanilla, setSimulandoVanilla] = useState(null);
  const [simulandoReact, setSimulandoReact] = useState(null);

  // Gatilhos de animação comportamental das simulações
  const [efeitoFlashVanilla, setEfeitoFlashVanilla] = useState(false);
  const [efeitoPulsoReact, setEfeitoPulsoReact] = useState(false);

  // Efeito visual do reload brutal do Vanilla JS
  const executarFlashVanilla = () => {
    if (efeitoFlashVanilla) return;
    setEfeitoFlashVanilla(true);
    setTimeout(() => setEfeitoFlashVanilla(false), 80);
  };

  // Efeito visual da reconciliação atômica do React
  const executarPulsoReact = () => {
    setEfeitoPulsoReact(true);
    setTimeout(() => setEfeitoPulsoReact(false), 600);
  };

  return (
    <div className="w-full space-y-6">
      
      {/* 📦 CARD DE CABEÇALHO GLOBAL DA TELA */}
      <Card className="hover:scale-100! bg-linear-to-br! from-zinc-900/30! to-zinc-950/20! border-zinc-800/40!">
        <CardHeader>
          <Beaker className="w-6 h-6 text-emerald-400" />
          <CardTitle className="text-xl sm:text-2xl!">Lab de Engenharia de Software v1.3.0</CardTitle>
        </CardHeader>
        <CardContent className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
          Compare visualmente o custo de renderização de duas arquiteturas distintas. Use os botões de 
          controle independentes de cada bloco para alternar entre a leitura do código cru e a simulação visual gráfica.
        </CardContent>
      </Card>

      {/* RENDERIZAÇÃO DOS MÓDULOS ATRAVÉS DE CARDS ANINHADOS */}
      {SANDBOX_SCENARIOS.map((cenario) => (
        <Card key={cenario.id} className="hover:scale-100!">
          
          {/* 🏷️ TOPO DO CARD MESTRE: Título do módulo acoplado ao ecossistema do design */}
          <CardHeader className="justify-between items-start sm:items-center flex-col sm:flex-row gap-2 border-b border-zinc-800/60 pb-4 mb-5!">
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-0.5">
                  {cenario.categoria}
                </span>
                <CardTitle className="text-base sm:text-lg">{cenario.tituloGeral}</CardTitle>
              </div>
            </div>
          </CardHeader>

          {/* 📝 CONTEÚDO DO CARD MESTRE: Injeta a grade limpa com os sub-cards acoplados */}
          <CardContent className="space-y-0!">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              
              {/* SUB-CARD A: VANILLA JS */}
              <VanillaSandboxCard 
                cenario={cenario}
                isSimulando={simulandoVanilla === cenario.id}
                onToggle={() => setSimulandoVanilla(simulandoVanilla === cenario.id ? null : cenario.id)}
                efeitoFlash={efeitoFlashVanilla}
                onDisparar={executarFlashVanilla}
              />

              {/* SUB-CARD B: REACT DOM */}
              <ReactSandboxCard 
                cenario={cenario}
                isSimulando={simulandoReact === cenario.id}
                onToggle={() => setSimulandoReact(simulandoReact === cenario.id ? null : cenario.id)}
                efeitoPulso={efeitoPulsoReact}
                onDisparar={executarPulsoReact}
              />

            </div>
          </CardContent>

        </Card>
      ))}
    </div>
  );
}
