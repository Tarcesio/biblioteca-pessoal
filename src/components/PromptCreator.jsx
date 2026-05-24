import { useState } from 'react'
import * as Actions from '../functions/Actions'

export default function PromptCreator() {
  const [formData, setFormData] = useState({
    ia: 'ChatGPT',
    tema: Actions.TEMAS[0], // Pega o primeiro tema da sua lista no Actions
    motivo: 'Erro',
    formato: Actions.FORMATOS[0], // Pega o primeiro formato do Actions
    contexto: ''
  })

  const handleFullProcess = async () => {
    const prompt = Actions.generatePromptText(formData)
    await Actions.copyToClipboard(prompt)
    Actions.openAILink(formData.ia)
    // Removi o alert pra ficar mais fluido, mas pode manter se curtir
  }

  return (
    <div className="flex flex-col gap-4 text-zinc-300 w-112.5">
      
      {/* 1. Selecionar IA */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-zinc-500 uppercase tracking-tighter">Selecionar IA</label>
        <div className="grid grid-cols-3 gap-2">
          {['ChatGPT', 'Gemini', 'Google IA'].map((ia) => (
            <button
              key={ia}
              onClick={() => setFormData({...formData, ia})}
              className={`py-2 text-xs rounded border transition-all ${formData.ia === ia ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20' : 'bg-zinc-800 border-zinc-700 hover:bg-zinc-700'}`}
            >
              {ia}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Tema e Formato - PUXANDO DO ACTIONS.JS */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-zinc-500 uppercase tracking-tighter">Tema Principal</label>
          <select 
            className="bg-zinc-800 border border-zinc-700 p-2 rounded text-sm outline-none focus:border-blue-500 cursor-pointer h-10"
            value={formData.tema}
            onChange={(e) => setFormData({...formData, tema: e.target.value})}
          >
            {Actions.TEMAS.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-zinc-500 uppercase tracking-tighter">Formato</label>
          <select 
            className="bg-zinc-800 border border-zinc-700 p-2 rounded text-sm outline-none focus:border-blue-500 cursor-pointer h-10"
            value={formData.formato}
            onChange={(e) => setFormData({...formData, formato: e.target.value})}
          >
            {Actions.FORMATOS.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>

      {/* 3. Motivo */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-zinc-500 uppercase tracking-tighter">Motivo</label>
        <div className="flex flex-wrap gap-x-4 gap-y-2 bg-zinc-800/50 p-3 rounded border border-zinc-800">
          {['Erro', 'Explicação', 'Revisão', 'Nova Ideia'].map((m) => (
            <label key={m} className="flex items-center gap-2 cursor-pointer text-sm hover:text-white transition-colors">
              <input 
                type="radio" 
                name="motivo" 
                checked={formData.motivo === m}
                onChange={() => setFormData({...formData, motivo: m})}
                className="accent-blue-500 w-4 h-4"
              />
              {m}
            </label>
          ))}
        </div>
      </div>

      {/* 4. Contexto */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-zinc-500 uppercase tracking-tighter">Contexto Adicional</label>
        <textarea 
          className="bg-zinc-800 border border-zinc-700 p-3 rounded text-sm h-28 resize-none outline-none focus:border-blue-500 placeholder:text-zinc-600"
          placeholder="Ex: useState não atualiza corretamente..."
          value={formData.contexto}
          onChange={(e) => setFormData({...formData, contexto: e.target.value})}
        />
      </div>

      {/* 5. Ação */}
      <button 
        onClick={handleFullProcess}
        className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-md transition-all active:scale-[0.98] uppercase text-xs tracking-widest mt-2"
      >
        Gerar e Abrir no {formData.ia}
      </button>

    </div>
  )
}
