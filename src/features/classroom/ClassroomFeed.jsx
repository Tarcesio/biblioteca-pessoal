import { useSearchParams } from 'react-router-dom';
import { CLASSROOM_DATA } from './classroomData';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

// Importação dinâmica a partir da pasta centralizada de widgets
import Calculo1Widget from './widgets/Calculo1Widget';
import Calculo2Widget from './widgets/Calculo2Widget';
import FisicaWidget from './widgets/FisicaWidget';

const widgetRegistry = {
  calculo1: Calculo1Widget,
  calculo2: Calculo2Widget,
  fisica: FisicaWidget,
};

export default function ClassroomFeed({ onBack }) {
  const [searchParams] = useSearchParams();
  const subjectQuery = searchParams.get('q');

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

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Cabeçalho da Matéria - Otimizado para Mobile-First */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-800/50 pb-4 w-full">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-100 uppercase tracking-wide break-words max-w-full">
    {currentSubject.subject}
  </h1>
  <Button onClick={onBack} className="text-xs h-8 px-4 w-full sm:w-auto shrink-0">
    Voltar
  </Button>
</div>


      {/* Grid Dinâmico */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* COLUNA DA ESQUERDA (Tópicos de Matéria Reais) */}
        <div className="md:col-span-2 space-y-6">
          {currentSubject.cards.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* COLUNA DA DIREITA (Injeção dos Widgets de Laboratório de Engenharia) */}
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
    </div>
  );
}
