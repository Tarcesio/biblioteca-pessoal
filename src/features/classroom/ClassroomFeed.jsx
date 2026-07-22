import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CLASSROOM_DATA } from './classroomData';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

// Importação dos Widgets de Laboratórios Visuais
import Calculo1Widget from './widgets/Calculo1Widget';
import Calculo2Widget from './widgets/Calculo2Widget';
import FisicaWidget from './widgets/FisicaWidget';

// Importação das Calculadoras Analíticas Isoladas
import Calculo1Calculator from './calculators/Calculo1Calculator';
import Calculo2Calculator from './calculators/Calculo2Calculator';

const widgetRegistry = {
  calculo1: Calculo1Widget,
  calculo2: Calculo2Widget,
  fisica: FisicaWidget,
};

const calculatorRegistry = {
  calculo1: Calculo1Calculator,
  calculo2: Calculo2Calculator,
};

export default function ClassroomFeed({ onBack }) {
  const [searchParams] = useSearchParams();
  const subjectQuery = searchParams.get('q');

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
  const ActiveCalculator = calculatorRegistry[subjectQuery];
  const hasCalculator = !!ActiveCalculator;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 px-2 sm:px-0">
      
      {/* 👑 CABEÇALHO RESTRUTURADO PARA MOBILE-FIRST */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-800/50 pb-4 w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-100 uppercase tracking-wide wrap-break-word max-w-full text-center sm:text-left">
          {currentSubject.subject}
        </h1>
        
        {/* Painel de Navegação - Vira coluna cheia no mobile e linha no desktop */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0 select-none">
          
          {/* 🎛️ ALTERNADOR DE ABAS TEXTUAIS COM LARGURA CORRIGIDA */}
          {hasCalculator && (
            <div className="flex items-center justify-center gap-4 bg-zinc-950/60 border border-zinc-800/60 h-10 sm:h-9 w-full sm:w-auto px-4 rounded-xl text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveTab('notes')}
                className={`transition-all duration-200 outline-none cursor-pointer whitespace-nowrap ${
                  activeTab === 'notes'
                    ? 'font-bold text-emerald-400 drop-shadow-[0_0_4px_rgba(16,185,129,0.3)]'
                    : 'font-normal text-zinc-500 hover:text-zinc-400'
                }`}
              >
                Notas de Aula
              </button>
              
              <div className="w-px h-3 bg-zinc-800 shrink-0" />
              
              <button
                type="button"
                onClick={() => setActiveTab('calc')}
                className={`transition-all duration-200 outline-none cursor-pointer whitespace-nowrap ${
                  activeTab === 'calc'
                    ? 'font-bold text-emerald-400 drop-shadow-[0_0_4px_rgba(16,185,129,0.3)]'
                    : 'font-normal text-zinc-500 hover:text-zinc-400'
                }`}
              >
                Calculadora
              </button>
            </div>
          )}

          {/* Botão Voltar ocupando área cheia no celular para facilitar o clique */}
          <Button onClick={onBack} className="text-xs h-10 sm:h-8 px-4 w-full sm:w-auto shrink-0">
            Voltar
          </Button>
        </div>
      </div>

      {/* ÁREA DE PROJEÇÃO DE CONTEÚDO */}
      {hasCalculator && activeTab === 'calc' ? (
        <div className="w-full animate-fadeIn">
          <ActiveCalculator />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start animate-fadeIn">
          
          {/* Coluna da Esquerda (Teoria) */}
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

          {/* Coluna da Direita (Widgets) */}
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
