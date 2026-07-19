export const TEMAS = ['React', 'Node', 'Geral', 'Anime', 'Database', 'DevOps'];

export const FORMATOS = [
  'Relatório', 
  'Resumo', 
  'Código Comentado', 
  'Passo a Passo', 
  'Tabela Comparativa', 
  'ELI5'
];

export const AI_URLS = {
  'ChatGPT': 'https://openai.com',
  'Gemini': 'https://google.com',
  'Claude': 'https://claude.ai',
  'Google IA': 'https://google.com'
};

export const generatePromptText = ({ ia, tema, motivo, contexto, formato }) => {
  return `
[CONTEXTO TÉCNICO]
Assunto: ${tema}
IA Alvo: ${ia}

[PROBLEMA/MOTIVO]
${motivo}: ${contexto}

[FORMATO DE RESPOSTA]
${formato}

[REGRAS]
- Seja objective e técnico.
- Foque em soluções práticas.
`.trim();
};
