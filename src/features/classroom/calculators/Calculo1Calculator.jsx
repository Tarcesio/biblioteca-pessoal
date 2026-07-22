import { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { create, all } from 'mathjs';

// Imports obrigatórios de renderização de estilos matemáticos
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

// Inicializa o motor matemático computacional de forma segura
const math = create(all);

export default function Calculo1Calculator() {
  const [expression, setExpression] = useState('2x^3 - 4x^2 + 5x');
  const [pointX, setPointX] = useState('2');
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const loadingMessages = [
    "Inicializando parser algébrico...",
    "Construindo árvore de sintaxe abstrata (AST)...",
    "Mapeando operadores e nós de potência...",
    "Aplicando regras de diferença analítica...",
    "Computando limites e simplificando algebricamente..."
  ];

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!expression.trim()) return;
    setError(null);
    setResult(null);
    setLoading(true);
    setLoadingStep(0);
  };

  // 1º: Função de processamento analítico envolvida em useCallback para estabilizar a referência
  const processMathematics = useCallback(() => {
    try {
      const node = math.parse(expression);
      const simplified = math.simplify(node);
      
      const derivedNode = math.derivative(node, 'x');
      const simplifiedDerivative = math.simplify(derivedNode);

      const compiledExpr = node.compile();
      const compiledDeriv = simplifiedDerivative.compile();
      
      const xVal = parseFloat(pointX) || 0;
      const scope = { x: xVal };
      
      const fxNumerical = compiledExpr.evaluate(scope);
      const fprimeNumerical = compiledDeriv.evaluate(scope);

      const steps = [];
      steps.push({
        desc: "Expressão Original Simplificada pelo motor algébrico:",
        latex: simplified.toTex()
      });

      steps.push({
        desc: "Aplicando as regras analíticas da derivada termo a termo:",
        latex: `\\frac{d}{dx}\\left[${simplified.toTex()}\\right] = ${derivedNode.toTex()}`
      });

      steps.push({
        desc: "Função Derivada Final f'(x) após simplificação algébrica completa:",
        latex: `f'(x) = ${simplifiedDerivative.toTex()}`
      });

      steps.push({
        desc: `Aplicação analítica do limite fundamental da derivada no ponto dado:`,
        latex: `\\lim_{h \\to 0} \\frac{f(${xVal} + h) - f(${xVal})}{h} = f'(${xVal})`
      });

      steps.push({
        desc: `Computação final substituindo os valores na escala real de Engenharia:`,
        latex: `f(${xVal}) = ${fxNumerical.toFixed(2)} \\quad \\text{e} \\quad f'(${xVal}) = ${fprimeNumerical.toFixed(2)}`
      });

      setResult({
        fxVal: fxNumerical.toFixed(2),
        fprimeVal: fprimeNumerical.toFixed(2),
        steps: steps
      });
      setLoading(false);
    } catch {
      setError("Erro de Sintaxe: Verifique os operadores matemáticos inseridos (use *, ^, +, -).");
      setLoading(false);
    }
  }, [expression, pointX]);

  // 2º: useEffect consumindo a dependência estável sem gerar loops de render
  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => {
          if (prev < loadingMessages.length - 1) return prev + 1;
          clearInterval(interval);
          processMathematics();
          return 0;
        });
      }, 400);
    }
    return () => clearInterval(interval);
  }, [loading, processMathematics, loadingMessages.length]);

  return (
    <Card className="border-zinc-800 bg-zinc-900/50 max-w-2xl mx-auto">
      <CardHeader className="flex flex-col items-start! gap-1! mb-4">
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Módulo Computacional</span>
        <CardTitle className="text-xl! text-zinc-100">Calculadora Diferencial Analítica</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Painel de Inputs do Usuário */}
        <div className="space-y-4 bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/40">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-zinc-400">Insira a Função f(x)</label>
            <input 
              type="text" 
              value={expression} 
              onChange={(e) => setExpression(e.target.value)}
              placeholder="Ex: 2x^2 + 3x - 5"
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 rounded-lg h-10 px-3 text-zinc-100 font-mono text-sm outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-zinc-400">Ponto de Avaliação (x₀)</label>
            <input 
              type="number" 
              value={pointX} 
              onChange={(e) => setPointX(e.target.value)}
              className="w-24 bg-zinc-900 border border-zinc-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 rounded-lg h-10 px-3 text-zinc-100 font-mono text-sm outline-none transition-all"
            />
          </div>

          <Button onClick={handleCalculate} className="w-full h-10 text-xs font-bold uppercase tracking-wider mt-2">
            Processar Expressão
          </Button>
        </div>

        {/* TELA DE LOADING SIMULADO DA ÁRVORE (AST) */}
        {loading && (
          <div className="bg-zinc-950/80 border border-zinc-800 p-6 rounded-xl flex flex-col items-center justify-center space-y-4 shadow-inner">
            <div className="w-8 h-8 border-2 border-emerald-500/20 border-t-emerald-400 rounded-full animate-spin" />
            <div className="text-center space-y-1">
              <p className="text-zinc-200 font-mono text-xs tracking-wide animate-pulse">
                {loadingMessages[loadingStep]}
              </p>
              <p className="text-[10px] text-zinc-600 font-mono">
                Mapeando nós matemáticos...
              </p>
            </div>
          </div>
        )}

        {/* ALERTA DE ERRO ALGEBRICO */}
        {error && (
          <div className="bg-red-500/5 border border-red-500/20 p-3 rounded-xl text-red-400 text-xs font-mono">
            {error}
          </div>
        )}

        {/* RESULTADOS EM BLOCOS LATEX PASSO A PASSO */}
        {result && !loading && (
          <div className="space-y-4 animate-fadeIn">
            <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-3 rounded-xl border border-zinc-800/80 text-center">
              <div className="border-r border-zinc-900">
                <span className="block text-[10px] text-zinc-500 font-bold uppercase">Altura f(x₀)</span>
                <span className="text-lg font-mono font-bold text-zinc-200">{result.fxVal}</span>
              </div>
              <div className="">
                <span className="block text-[10px] text-zinc-500 font-bold uppercase">Inclinação f'(x₀)</span>
                <span className="text-lg font-mono font-bold text-emerald-400">{result.fprimeVal}</span>
              </div>
            </div>

            <div className="bg-zinc-950/40 rounded-xl border border-zinc-800/40 p-4 space-y-4">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block border-b border-zinc-900 pb-1.5">
                Memória de Cálculo Analítica
              </span>
              
              <div className="space-y-4 text-xs">
                {result.steps.map((step, idx) => (
                  <div key={idx} className="space-y-1.5 border-b border-zinc-900/50 pb-3 last:border-0 last:pb-0">
                    <p className="text-zinc-400 font-medium">{step.desc}</p>
                    <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-900 overflow-x-auto text-zinc-200">
                      {step.latex && <BlockMath math={step.latex} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
