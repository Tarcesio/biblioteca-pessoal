import { Card, CardHeader, CardTitle, CardContent, CardRow } from '@/components/ui/Card';
import { Cpu } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full max-w-3xl mx-auto py-4 sm:py-6 px-4 sm:px-0 animate-fadeIn space-y-6">
      
      {/* 🚀 Bloco Principal envelopado com a identidade do sistema */}
      <Card>
        <CardHeader>
          <Cpu className="text-emerald-400 shrink-0" size={24} />
          <CardTitle className="text-2xl! sm:text-3xl! uppercase tracking-wide">
            Sobre o Projeto Hub
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4! text-base sm:text-lg">
          <p className="leading-relaxed">
            Este Hub foi desenvolvido como uma solução centralizada para gerenciar ferramentas de produtividade, 
            estudos de Engenharia de Computação e projetos pessoais.
          </p>
          
          {/* Uso do CardRow com divisor sutil nativo */}
          <CardRow className="pt-3" hasDivider>
            <p className="text-zinc-300 text-sm sm:text-base">
              Tecnologias utilizadas: <strong className="text-zinc-100 font-semibold">React, Vite, Tailwind CSS, Lucide Icons, MathJS e KaTeX.</strong>
            </p>
          </CardRow>
        </CardContent>
      </Card>

      {/* 🟢 Bloco de Status do Sistema Corrigido para o Tema Esmeralda */}
      <Card className="p-4! bg-zinc-950/40">
        <div className="flex items-center justify-between font-mono text-xs sm:text-sm w-full">
          <span className="text-zinc-400 font-medium tracking-wide">Status do Sistema:</span>
          <span className="text-emerald-400 font-bold bg-emerald-500/5 px-3 py-1 rounded-xl border border-emerald-500/20 drop-shadow-[0_0_4px_rgba(16,185,129,0.2)]">
            v1.3.0-stable
          </span>
        </div>
      </Card>

    </div>
  );
}
