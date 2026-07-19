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
  'Gemini': 'https://gemini.google.com/app?is_sa=1&is_sa=1&android-min-version=301356232&ios-min-version=322.0&campaign_id=bkws&utm_source=sem&utm_medium=paid-media&utm_campaign=bkws&pt=9008&mt=8&ct=p-growth-sem-bkws&gclsrc=aw.ds&gad_source=1&gad_campaignid=20437330524&gbraid=0AAAAApk5BhkcvyPu97HFovKQ1TlskUWWK&gclid=Cj0KCQjw6_HSBhCpARIsANvVltaq5HIke9TWzsV-b_uV6JFKYq-eOCK1Rsacg-fQsLNnuJIPj9-gBlgaAggBEALw_wcB',
  'Claude': 'https://claude.ai',
  'Google IA': 'https://www.google.com/search?udm=50&aep=11'
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
