/**
 * 📦 COLEÇÃO DE CENÁRIOS DIDÁTICOS (FEATURE: SANDBOX-PAGE)
 * Estrutura em formato de array de objetos para permitir iteração dinâmica (.map).
 */
export const SANDBOX_SCENARIOS = [
  {
    id: "formulario-base",
    categoria: "Formulários e Eventos",
    tituloGeral: "Ciclo de Vida de Submissão de Dados",
    vanilla: {
      titulo: "Formulário Nativo (Vanilla JS)",
      descricao: "Abordagem imperativa. O desenvolvedor instrui o navegador passo a passo sobre como manipular os nós, lidando diretamente com eventos mutáveis do DOM.",
      botaoAcaoLabel: "Simular Ciclo de Vida",
      codigoSnippet: `// 📝 Escrita Imperativa Clássica
const form = document.querySelector('#meuForm');
const input = document.querySelector('#campoFrequencia');

form.addEventListener('submit', (event) => {
  // Sem isso, a página inteira recarrega (piscada branca)
  event.preventDefault(); 
  
  const valor = input.value;
  console.log('Dados enviados:', valor);
  
  // Atualização manual e imperativa do elemento no DOM
  document.querySelector('#output').innerText = \`\${valor}Hz\`;
});`
    },
    react: {
      titulo: "Formulário Declarativo (React DOM)",
      descricao: "Abordagem declarativa através do Virtual DOM. O desenvolvedor dita como a interface deve parecer com base no Estado atual, delegando a atualização cirúrgica ao motor de reconciliação.",
      botaoAcaoLabel: "Simular Reconciliação",
      codigoSnippet: `// 🧬 Escrita Declarativa Reativa
import React, { useState } from 'react';
import { Form, FormFieldSet } from '@/components/ui/FormControl';

export default function MeuComponente() {
  const [frequencia, setFrequencia] = useState(60);

  const handleSave = (e) => {
    e.preventDefault(); // Controlado de forma limpa na SPA
    console.log('Estado atual enviado:', frequencia);
  };

  return (
    <Form onSubmit={handleSave}>
      <FormFieldSet>
        {/* O estado reativo renderiza sem destruir o DOM */}
        <span className="text-emerald-400">{frequencia}Hz</span>
      </FormFieldSet>
    </Form>
  );
}`
    }
  }
];
