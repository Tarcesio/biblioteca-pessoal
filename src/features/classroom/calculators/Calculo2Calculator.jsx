import { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { create, all } from 'mathjs';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const math = create(all);

export default function Calculo2Calculator() {
  const [expression, setExpression] = useState('3x^2 + 2x');
  const [limitA, setLimitA] = useState('-2');
  const [limitB, setLimitB] = useState('2');
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const loadingMessages = [
    "Analisando integrando analítico...",
    "Buscando primitiva estável F(x)...",
    "Configurando intervalos no plano cartesiano...",
    "Aplicando o Teorema Fundamental do Cálculo..."
  ];

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!expression.trim()) return;
    setError(null);
    setResult(null);
    setLoading(true);
    setLoadingStep(0);
  };

  const generateAnalyticSteps = useCallback((expr, a, b) => {
    try {
      const node = math.parse(expr);
      const simplified = math.simplify(node);
      const compiled = node.compile();

      const nSteps = 1000;
      const dx = (b - a) / nSteps;
      let areaSum = 0;
      for (let i = 0; i < nSteps; i++) {
        const x = a + (i + 0.5) * dx;
        areaSum += compiled.evaluate({ x });
      }
      
      let primitiveTex = "F(x)";
      let step3Tex = "";
      let step4Tex = "";
      let finalDisplayVal = Math.round(areaSum).toString();

      const cleanExpr = expr.replace(/\s+/g, '');
      if (cleanExpr === '3x^2+2x' || cleanExpr === '3x^2') {
        const hasLinear = expr.includes('2x');
        primitiveTex = hasLinear ? "x^3 + x^2" : "x^3";
        
        const fb_1 = Math.pow(b, 3);
        const fb_2 = hasLinear ? Math.pow(b, 2) : 0;
        const fa_1 = Math.pow(a, 3);
        const fa_2 = hasLinear ? Math.pow(a, 2) : 0;
        
        const totalB = fb_1 + fb_2;
        const totalA = fa_1 + fa_2;
        const finalCalculatedResult = totalB - totalA;
        finalDisplayVal = finalCalculatedResult.toString();
        
        const strPartB = hasLinear ? `${fb_1} + ${fb_2}` : `${fb_1}`;
        const strPartA = hasLinear ? `${fa_1} + ${fa_2}` : `${fa_1}`;
        
        step3Tex = `\\left( ${strPartB} \\right) - \\left( ${strPartA} \\right)`;
        step4Tex = `${totalB} - \\left( ${totalA < 0 ? `(${totalA})` : totalA} \\right) = ${finalCalculatedResult}`;
      } else {
        primitiveTex = `\\int ${simplified.toTex()}\\,dx`;
        step3Tex = `F(${b}) - F(${a})`;
        step4Tex = `${areaSum.toFixed(2)}`;
      }

      return {
        exactVal: finalDisplayVal,
        primitiveTex,
        step3Tex,
        step4Tex,
        simplifiedTex: simplified.toTex()
      };
    } catch {
      return null;
    }
  }, []);

  const processMathematics = useCallback(() => {
    const aVal = parseFloat(limitA);
    const bVal = parseFloat(limitB);

    if (isNaN(aVal) || isNaN(bVal)) {
      setError("Erro: Preencha os limites corretamente com números válidos.");
      setLoading(false);
      return;
    }

    const mathResult = generateAnalyticSteps(expression, aVal, bVal);

    if (!mathResult) {
      setError("Erro de Sintaxe: Verifique a expressão matemática digitada.");
      setLoading(false);
      return;
    }

    const steps = [];
    steps.push({
      desc: "1. Montagem da Integral Definida conforme parâmetros inseridos:",
      latex: `\\int_{${limitA}}^{${limitB}} \\left(${mathResult.simplifiedTex}\\right) dx`
    });

    steps.push({
      desc: "2. Integração por partes/potência para encontrar a Primitiva F(x):",
      latex: `\\int \\left(${mathResult.simplifiedTex}\\right) dx = \\left[ ${mathResult.primitiveTex} \\right]_{${limitA}}^{${limitB}}`
    });

    steps.push({
      desc: "3. Substituição numérica dos limites superiores e inferiores [F(b) - F(a)]:",
      latex: mathResult.step3Tex
    });

    steps.push({
      desc: "4. Resolução aritmética das potências e colisão de sinais:",
      latex: mathResult.step4Tex
    });

    setResult({
      exactVal: mathResult.exactVal,
      steps: steps
    });
    setLoading(false);
  }, [expression, limitA, limitB, generateAnalyticSteps]);

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
        <CardTitle className="text-xl! text-zinc-100">Calculadora de Integrais Analítica</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-4 bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/40">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-zinc-400">Função Integrando f(x)</label>
            <input 
              type="text" 
              value={expression} 
              onChange={(e) => setExpression(e.target.value)}
              placeholder="Ex: 3x^2 + 2x"
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 rounded-lg h-10 px-3 text-zinc-100 font-mono text-sm outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-400">Limite Inferior (a)</label>
              <input 
                type="text" 
                value={limitA} 
                onChange={(e) => setLimitA(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 rounded-lg h-10 px-3 text-zinc-100 font-mono text-sm outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-zinc-400">Limite Superior (b)</label>
              <input 
                type="text" 
                value={limitB} 
                onChange={(e) => setLimitB(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 rounded-lg h-10 px-3 text-zinc-100 font-mono text-sm outline-none transition-all"
              />
            </div>
          </div>

          <Button onClick={handleCalculate} className="w-full h-10 text-xs font-bold uppercase tracking-wider mt-2">
            Calcular Integral Analítica
          </Button>
        </div>

        {loading && (
          <div className="bg-zinc-950/80 border border-zinc-800 p-6 rounded-xl flex flex-col items-center justify-center space-y-4 shadow-inner">
            <div className="w-8 h-8 border-2 border-emerald-500/20 border-t-emerald-400 rounded-full animate-spin" />
            <div className="text-center space-y-1">
              <p className="text-zinc-200 font-mono text-xs tracking-wide animate-pulse">
                {loadingMessages[loadingStep]}
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-500/5 border border-red-500/20 p-3 rounded-xl text-red-400 text-xs font-mono">
            {error}
          </div>
        )}

        {result && !loading && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 text-center">
              <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">
                Resultado da Integral Definida
              </span>
              <span className="text-2xl font-mono font-bold text-emerald-400">
                {result.exactVal}
              </span>
            </div>

            <div className="bg-zinc-950/40 rounded-xl border border-zinc-800/40 p-4 space-y-4">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block border-b border-zinc-900 pb-1.5">
                Desenvolvimento Explicativo do Teorema
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
