import { useState } from 'react';
import {
  Form,
  FormFieldSet,
  FormLegend,
  FormField,
  FormLabel,
  FormActions
} from '@/components/ui/FormControl';

export default function FormTestPage() {
  // Estados para simular a reatividade do formulário
  const [bloquearPainel, setBloquearPainel] = useState(false);
  const [dadosForm, setDadosForm] = useState({
    nomeProjeto: 'Sandbox Atômico v1.3.0',
    coeficienteAtrito: 45,
    tipoSimulacao: 'gravidade'
  });

  // Manipulador legítimo de submissão do formulário HTML
  const salvarConfiguracoes = (e) => {
    e.preventDefault();
    alert(`🚀 Dados Enviados com Sucesso!\n\n${JSON.stringify(dadosForm, null, 2)}`);
  };

  // Manipulador legítimo de limpeza (Reset)
  const limparFormulario = () => {
    setDadosForm({
      nomeProjeto: '',
      coeficienteAtrito: 0,
      tipoSimulacao: 'colisao'
    });
  };

  return (
    <div className="flex flex-col gap-6 max-w-lg mx-auto w-full">
      
      {/* PAINEL DE CONTROLE DE INFRAESTRUTURA (Meta-Controle do Teste) */}
      <div className="border border-zinc-800/80 bg-zinc-900/30 p-4 rounded-xl backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold text-zinc-300">Auditoria Base do Form</h2>
            <p className="text-xs text-zinc-500">Injete o estado disabled para testar o congelamento atômico nativo do HTML.</p>
          </div>
          <button
            type="button"
            onClick={() => setBloquearPainel(!bloquearPainel)}
            className={`w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg border transition-all duration-200 ${
              bloquearPainel 
                ? 'bg-rose-500/10 text-rose-400 border-rose-500/30 hover:bg-rose-500/20' 
                : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
            }`}
          >
            {bloquearPainel ? '🔓 Ativar Formulário' : '🔒 Desativar FieldSet'}
          </button>
        </div>
      </div>

      {/* 🚀 FORMULÁRIO DECLARATIVO PURISTA (CONTRATO DE COMPONENTES ESTILO CARD.JSX) */}
      <Form onSubmit={salvarConfiguracoes}>
        
        {/* Bloco Semântico 1: Identificação */}
        <FormFieldSet disabled={bloquearPainel}>
          <FormLegend>Configurações Físicas Base</FormLegend>
          
          <FormField>
            <FormLabel htmlFor="nomeProjeto">Nome do Ambiente Sandbox</FormLabel>
            <input 
              id="nomeProjeto"
              type="text" 
              required
              placeholder="Ex: Simulação de Fluido"
              value={dadosForm.nomeProjeto}
              onChange={(e) => setDadosForm({ ...dadosForm, nomeProjeto: e.target.value })}
              className="w-full min-h-11 px-3 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors py-2.5"
            />
          </FormField>

          <FormField>
            <FormLabel htmlFor="tipoSimulacao">Algoritmo de Renderização</FormLabel>
            <select
              id="tipoSimulacao"
              value={dadosForm.tipoSimulacao}
              onChange={(e) => setDadosForm({ ...dadosForm, tipoSimulacao: e.target.value })}
              className="w-full min-h-11 px-3 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors py-2.5 appearance-none cursor-pointer"
            >
              <option value="gravidade">Gravidade Quântica (Loop)</option>
              <option value="colisao">Colisão de Partículas Rigorosa</option>
              <option value="fluido">Dinâmica de Fluidos (Voxel)</option>
            </select>
          </FormField>
        </FormFieldSet>

        {/* Bloco Semântico 2: Parâmetros Ajustáveis */}
        <FormFieldSet disabled={bloquearPainel}>
          <FormLegend>Variáveis de Massa e Escala</FormLegend>
          
          <FormField>
            <div className="flex justify-between items-center text-xs font-semibold text-zinc-400">
              <FormLabel htmlFor="coeficienteAtrito">Coeficiente de Atrito Estático</FormLabel>
              <span className="font-mono text-emerald-400 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800/60 text-[10px]">
                {dadosForm.coeficienteAtrito}%
              </span>
            </div>
            <input 
              id="coeficienteAtrito"
              type="range" 
              min="0"
              max="100"
              value={dadosForm.coeficienteAtrito}
              onChange={(e) => setDadosForm({ ...dadosForm, coeficienteAtrito: Number(e.target.value) })}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none py-3! my-1!"
            />
          </FormField>
        </FormFieldSet>

        {/* Ações do Formulário (Submissão e Limpeza Nativas) */}
        <FormActions>
          <button 
            type="submit"
            disabled={bloquearPainel}
            className="w-full sm:flex-1 min-h-11 px-6 bg-emerald-600 hover:bg-emerald-500! text-zinc-950 font-bold rounded-xl text-sm transition-all duration-200 active:scale-[0.98] disabled:opacity-40"
          >
            Aplicar Parâmetros
          </button>
          
          <button 
            type="reset"
            onClick={limparFormulario}
            disabled={bloquearPainel}
            className="w-full sm:w-auto min-h-11 px-5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold rounded-xl text-sm transition-all duration-200 active:scale-[0.98] disabled:opacity-40"
          >
            Limpar
          </button>
        </FormActions>

      </Form>
    </div>
  );
}
