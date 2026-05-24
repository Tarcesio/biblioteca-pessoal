// src/functions/menuActions.js

// src/functions/Actions.js

export const TEMAS = ['React', 'Node', 'Geral', 'Anime', 'Database', 'DevOps'];

export const FORMATOS = [
  'Relatório', 
  'Resumo', 
  'Código Comentado', 
  'Passo a Passo', 
  'Tabela Comparativa', 
  'ELI5'
];

/**
 * Gera o texto estruturado do prompt
 */
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
- Seja objetivo e técnico.
- Foque em soluções práticas.
`.trim();
};

/**
 * Abre a URL da IA selecionada
 */
export const openAILink = (iaName) => {
    const urls = {
        'ChatGPT': 'https://openai.com',
        'Gemini': 'https://google.com',
        'Claude': 'https://claude.ai'
    };
    window.open(urls[iaName] || 'https://google.com', '_blank');
};

/**
 * Copia o texto para o clipboard
 */
export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Erro ao copiar:', err);
        return false;
    }
};
