import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CLASSROOM_DATA } from './classroomData';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

// 🌟 Importação dos Laboratórios Visuais (Widgets)
import Calculo1Widget from './widgets/Calculo1Widget';
import Calculo2Widget from './widgets/Calculo2Widget';
import FisicaWidget from './widgets/FisicaWidget';

// 🧮 Importação do Módulo Computacional da Calculadora LaTeX
import Calculo1Calculator from './calculators/Calculo1Calculator';

const widgetRegistry = {
  calculo1: Calculo1Widget,
  calculo2: Calculo2Widget,
  fisica: FisicaWidget,
};

export default function ClassroomFeed({ onBack }) {
  const [searchParams] = useSearchParams();
  const subjectQuery = searchParams.get('q');

  // Estado controla a aba ativa: 'notes' (Notas de Aula) ou 'calc' (Calculadora)
  const [activeTab, setActiveTab] = useState('notes');

  const currentSubject = CLASSROOM_DATA[subjectQuery];

  if (!currentSubject) {
    return (
      <div className="text-center space-y-4">
        <p className="text-zinc-400">Matéria não encontrada.</p>
        <Button onClick={onBack} className="text-xs">Voltar ao Menu</Button>
      </div>
    );
  }

  const ActiveWidget = widgetRegistry[subjectQuery];
  const hasCalculator = subjectQuery === 'calculo1';

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Cabeçalho da Matéria - Otimizado para Mobile-First */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-800/50 pb-4 w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-100 uppercase tracking-wide wrap-break-word max-w-full">
          {currentSubject.subject}
        </h1>
        
        {/* Painel de Navegação Direita */}
        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto shrink-0 select-none">
          
          {/* 🎛️ CONTROLE DE ALTERNÂNCIA DE ABAS TEXTUAIS */}
          {hasCalculator && (
            <div className="flex items-center gap-4 bg-zinc-950/40 border border-zinc-800/60 h-8 px-3 rounded-lg text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveTab('notes')}
                className={`transition-all duration-200 outline-none cursor-pointer ${
                  activeTab === 'notes'
                    ? 'font-bold text-emerald-400 drop-shadow-[0_0_2px_rgba(16,185,129,0.2)]'
                    : 'font-normal text-zinc-500 hover:text-zinc-400'
                }`}
              >
                Notas de Aula
              </button>
              
              <div className="w-px h-3 bg-zinc-800" /> {/* Divisor sutil */}
              
              <button
                type="button"
                onClick={() => setActiveTab('calc')}
                className={`transition-all duration-200 outline-none cursor-pointer ${
                  activeTab === 'calc'
                    ? 'font-bold text-emerald-400 drop-shadow-[0_0_2px_rgba(16,185,129,0.2)]'
                    : 'font-normal text-zinc-500 hover:text-zinc-400'
                }`}
              >
                Calculadora
              </button>
            </div>
          )}

          <Button onClick={onBack} className="text-xs h-8 px-4 shrink-0">
            Voltar
          </Button>
        </div>
      </div>

      {/* SWITCH DE RENDERIZAÇÃO DE SEÇÕES BASEADO NA ABA ATIVA */}
      {hasCalculator && activeTab === 'calc' ? (
        /* SEÇÃO 1: Tela da Calculadora Isolada (Ocupa o espaço total do Feed) */
        <div className="w-full animate-fadeIn">
          <Calculo1Calculator />
        </div>
      ) : (
        /* SEÇÃO 2: Grade Padrão Curricular (Cards de Teoria + Widget de Laboratório) */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start animate-fadeIn">
          
          {/* COLUNA DA ESQUERDA (Teoria Pura) */}
          <div className="md:col-span-2 space-y-6">
            {currentSubject.cards.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {Array.isArray(item.content) ? (
                    item.content.map((paragraph, index) => (
                      <p key={index} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="leading-relaxed">{item.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* COLUNA DA DIREITA (Widgets Interativos) */}
          <div className="md:col-span-1 w-full">
            {ActiveWidget ? (
              <ActiveWidget chartData={currentSubject.chart} />
            ) : (
              <Card className="bg-zinc-950/20! border-dashed!">
                <CardHeader>
                  <CardTitle className="text-lg! text-zinc-400!">Notas de Estudo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-500 text-xs">Utilize o menu superior para navegar e revisar os tópicos de engenharia.</p>
                </CardContent>
              </Card>
            )}
          </div>

        </div>
      )}
    </div>
  );
}
