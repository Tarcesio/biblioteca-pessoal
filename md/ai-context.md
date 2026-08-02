# AI CONTEXT & MEMORY - HUB V1.3.0 (DEVELOPMENT & FORMS)

## 1. IDENTIDADE E DIRETRIZES DE ARQUITETURA
- DIRETÓRIO PAGES: O sufixo '=Passa-Prato/Rotas_Enxutas' é um PARADIGM DE DESIGN, não uma pasta física. Arquivos em 'src/pages/' devem conter apenas o invólucro mínimo da rota, importando o componente de inteligência direto de 'src/features/'.
- EXCLUSIVIDADE DE TAGS: A tag <main> pertence unicamente a 'src/components/Main.jsx'. Nenhuma página, subcomponente ou feature pode duplicá-la.

## 2. CONTRATO DE INTERFACE: COMPONENTES DE CARD ANINHADOS
- UNIFICAÇÃO VISUAL: Proibido o uso de <div> genéricas com estilização manual de borda (border-zinc-800) ou textos de cabeçalho (h1, h2, p, span) flutuando soltos na estrutura da tela.
- ANINHAMENTO PURISTA: Toda a interface da página (incluindo o cabeçalho global da tela) deve ser construída sob o ecossistema de Cards. Se um módulo contiver sub-blocos, utilize a composição de Card Mestre contendo sub-Cards em seu <CardContent>.
- DINAMISMO ATÔMICO: O componente <Card> recebe a propriedade 'className' dinamicamente. Modificadores de animação comportamental (como o flash do Vanilla ou o pulso do React) devem ser injetados diretamente na casca do Card, erradicando wrappers redundantes (div-soup).

## 3. IDENTIDADE CROMÁTICA DO SISTEMA (VIBE VERDINHA)
- SOBRIEDADE DE CORES: O ecossistema do Hub opera sob a paleta estrita Esmeralda e Zinco. 
- PROIBIÇÃO DE MATIZES EXTERNAS: Estados ativos de botões, contornos de foco ou toggles de alternância de abas não podem adotar cores como âmbar (bg-amber-600) ou azul, evitando estéticas alheias (estilo reprodutores de mídia/YouTube).
- PADRÃO ATIVO: Para estados acionados, utilize o padrão esmeralda fosco do Hub:
  `bg-emerald-600/10! text-emerald-400! border border-emerald-500/20 hover:bg-emerald-500/20`

## 4. SEMÂNTICA DE FORMULÁRIOS VS BOTOES DE CONTROLE INTERATIVO
- ESCOPO DO FORMULÁRIO: Um elemento <Form> e seus <FormFieldSet> legítimos tratam estritamente do ciclo de vida de captura, validação e envio de dados (eventos de 'submit' e 'reset' em inputs/ranges).
- CONTROLES DE SIMULAÇÃO: Botões de ação imperativa (Play/Pause) que alternam a visualização técnica (texto do código vs animação gráfica) devem operar fora do ciclo do formulário, alternando seus rótulos textuais de forma dinâmica ("Play" quando oculto, "Ver Código" quando ativo) para garantir feedback preciso de UX.

## 5. PROTOCOLO DE REQUISIÇÃO DE CÓDIGO
- ESCANEAMENTO OBRIGATÓRIO: Proibido gerar códigos ou refatorações baseadas em suposições sem a colagem prévia do arquivo real pelo usuário.
- DENSIDADE E GRANULARIDADE: Submeter estritamente UM ARQUIVO COMPLETO por turno para evitar truncamento de caracteres e estouros de contexto nas respostas.

## 6. HISTÓRICO DE SESSÃO E DECISÕES ARQUITETURAIS (ATUALIZADO)
- **Nome da Seção/Laboratório de Testes:** **Desenvolvimento** (diretório `src/development/` estruturado no ecossistema raiz).
- **Abordagem de Sandbox/Playground:** Centralizado e organizado para componentizar ideias isoladas, mantendo a branch `main` limpa e exibindo os testes de forma dinâmica para acompanhamento externo.
- **Padrões de Props e Componentes React revisados:** Uso de desestruturação, operador spread (`...propsNativas`), componentização limpa de SVGs com `currentColor` e extensão dinâmica de `className` para customizações via Tailwind.