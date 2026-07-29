# 📚 HUB BIBLIOTECA PESSOAL - DOCUMENTAÇÃO ARQUITETURAL

## 1. Visão Geral do Sistema
Este ecossistema centraliza ferramentas de produtividade, laboratórios de engenharia de computação e utilitários pessoais. O projeto foi integralmente refatorado seguindo o paradigma **Mobile-First** e princípios de **Baixo Acoplamento e Alta Coesão (SRP)**.

---

## 2. Pilares Arquiteturais
*   **Path Aliases:** Mapeamento absoluto ativo via prefixo `@/` apontando para a pasta raiz `src/`. Caminhos relativos longos são proibidos.
*   **Feature-Based Architecture:** Módulos complexos e lógicas pesadas residem isolados dentro de suas respectivas pastas em `src/features/[nome-da-feature]/`.
*   **Rotas Passa-Prato:** As páginas localizadas em `src/pages/` atuam apenas como conectores enxutos de rotas, importando e renderizando os componentes inteligentes de domínio.
*   **Semântica HTML5 Estrita:** O contêiner mestre `src/components/Main.jsx` injeta a tag `<main>` global da aplicação. Nenhuma subpágina ou componente interno pode duplicar esta tag.
*   **Sintaxe de Sobrescrita de Especificidade (Tailwind CSS):** Fica estritamente determinado o uso do modificador de importância pós-fixado (`classe!`) para resoluções de conflitos de especificidade em folhas de estilo utilitárias. A aplicação de prefixação com ponto de exclamação (`!classe`) é considerada padrão depreciado e fica proibida no ecossistema, garantindo compatibilidade com o compilador moderno e previsibilidade na cascata do CSS.
    *   *Sintaxe Correta:* `text-2xl! sm:text-3xl! border-emerald-500!`
    *   *Sintaxe Incorreta:* `!text-2xl sm:!text-3xl !border-emerald-500`


---

## 3. Matriz de Componentes e Telas Refatoradas

### 🧱 Componentes Globais (`src/components/`)
*   `Header.jsx`: Controla o topo fixo do sistema e o dicionário de dados central de navegação (`menuData`).
*   `Navigator.jsx`: Menu responsivo dinâmico. Atua como barra horizontal estruturada em desktops (`md:`) e transforma-se automaticamente em **Menu Hambúrguer com Sanfona (Accordion)** em dispositivos móveis.
*   `ui/Card.jsx`: Subcomponentes atômicos nomeados (`CardHeader`, `CardTitle`, `CardContent`, `CardRow`) que ditam e blindam a identidade visual esmeralda/escuro do sistema através de estruturas de aninhamento flexíveis.
*   `ui/FormControl.jsx`: Nova infraestrutura declarativa e semântica purista para construção de painéis (`Form`, `FormFieldSet`, `FormLegend`, `FormField`, `FormLabel`, `FormActions`). Envelopa as diretrizes do ecossistema e herda o travamento de interações em lote via atributo nativo `disabled`.
*   `ui/ProfileCard.jsx`: Componente isolado extraído da página inicial para exibir dados de perfil de forma coesa.

### 🗂️ Módulos de Negócio (`src/features/`)
*   **Módulo Sandbox (Lab de Engenharia de Software):**
    *   `Sandbox.jsx`: Contêiner mestre de inteligência da funcionalidade. Orquestra a lógica de ciclos de timers, estados de alternância e efeitos colaterais visuais.
    *   `SandboxCards.jsx`: Subcomponentes focados (`VanillaSandboxCard` e `ReactSandboxCard`) que renderizam os painéis visuais de código e de simulação, acoplados 100% ao design system.
    *   `constants.js`: Banco de strings didático estruturado em formato de array de objetos para permitir iteração dinâmica (`.map`).
*   **Módulo Sala de Aula (Classroom):**
    *   `ClassroomMenu.jsx`: Menu dinâmico mobile-first que consome e converte a matriz de dados em seletores de disciplinas via query string.
    *   `ClassroomFeed.jsx`: Distribuidor centralizado que gerencia o chaveamento de layout adaptativo por abas textuais minimalistas (Notas vs Calculadora).
    *   `classroomData.js`: Banco de dados acadêmico estruturado em arrays para blindagem contra quebras de texto lineares.
    *   `widgets/`: Subdiretório que isola os laboratórios vetoriais gráficos e simulações matemáticas interativas (`Calculo1Widget`, `Calculo2Widget`, `FisicaWidget`).
    *   `calculators/`: Motores computacionais reativos de processamento algébrico e simbólico com renderização LaTeX de alta fidelidade visual (`Calculo1Calculator`, `Calculo2Calculator`).
*   **Módulo Todo-List:**
    *   `TodoContainer.jsx`: Inteligência de estado local, persistência automática de dados no `localStorage` e inicialização preguiçosa (*lazy initialization*).
    *   `AddTask.jsx`: Formulário semântico com captura de gatilho do teclado ("Enter" / "Ir") e validação visual de erro em substituição ao `alert()` nativo do navegador.
    *   `Tasks.jsx`: Renderizador fluido de listagem com alvos de toque expandidos (`h-10 w-10`) e blindagem de quebra de layout contra strings longas (`break-words`).
*   **Módulo Prompt Creator:**
    *   `PromptCreator.jsx`: Ferramenta estruturada isolada em página para engenharia de prompts. Substitui botões de rádio rígidos por *chips* de seleção rápida por toque e inputs com anéis de foco orgânicos.

### 📄 Páginas do Ecossistema (`src/pages/`)
*   `Home.jsx`: Ponto de entrada limpo exibindo o `ProfileCard` e a assinatura vetorial com dimensões responsivas.
*   `SandboxPage.jsx`: Rota enxuta de padrão "passa-prato" que mapeia a URL `/sandbox` e injeta diretamente o módulo de simulação desacoplado.
*   `ClassroomPage.jsx`: Rota enxuta que monitora os parâmetros dinâmicos de URL para alternância entre o painel de matérias e o feed acadêmico.
*   `PromptCreatorPage.jsx`: Página unificada que envelopa o criador de prompts, eliminando dependências de modais ou arquivos repetidos em components.
*   `InteractiveColorsPage.jsx`: Laboratório cromático para tradução instantânea matemática entre os modelos RGB e HSL.
*   `LinksPage.jsx`: Agregador fluido de conexões sociais com animações de deslocamento lateral calibradas exclusivamente para mouse (`md:hover`).
*   `TaskPage.jsx`: Página de detalhes de tarefas consumindo parâmetros nativos de URL via `useSearchParams`.

---

## 4. Scripts Utilitários de Desenvolvimento

No diretório raiz do projeto, você pode executar os seguintes comandos nativos para infraestrutura local:

### Ambiente de Desenvolvimento
```bash
npm run dev
```
Roda o servidor local do Vite.

### Exposição de Rede para Testes no Celular
```bash
npm run dev -- --host
```
Expõe o servidor na rede local Wi-Fi, permitindo auditar e depurar o comportamento Mobile-First diretamente na tela física de smartphones e tablets.

### Compilação de Produção
```bash
npm run build
```
Compila e otimiza o ecossistema gerando os assets estáticos indexados na pasta `dist/`.

---

## 5. Histórico de Versões e Registro de Releases

O projeto adota rigorosamente as diretivas do Versionamento Semântico (SemVer) através do fluxo de ramificação técnica do Gitflow:

*   **v1.4.1 (Versão Atual):**
    *   Correções de bugs e refatorações comportamentais sobre a base da v1.4.0.
    *   Unificação estrita da paleta cromática na identidade visual esmeralda/verde ("vibe verdinha") em todos os estados de toggles e botões ativos.
    *   Ajuste fino nos rótulos de controle dinâmicos dos subcomponentes de simulação para fornecer feedback preciso em tempo real.
*   **v1.4.0:**
    *   Injeção do motor de layout de formulários semânticos e puristas (`FormControl.jsx`), transpondo a arquitetura declarativa estilo `Card.jsx` para as tags `<Form>`, `<FormFieldSet>` e `<FormLegend>`.
    *   Implementação do componente estrutural e isolado `Sandbox.jsx` em `src/features/sandbox-page/`, utilizando a composição de cartões aninhados reutilizáveis para eliminar "div-soup".
    *   Criação do laboratório interativo (`SandboxPage.jsx`) com motores gráficos que simulam visualmente o custo de renderização (flash do DOM Real vs pulso cirúrgico de reconciliação do Virtual DOM).
    *   Higienização e auditoria do `PromptCreatorPage.jsx`, extinguindo o componente duplicado em `src/components/` para isolá-lo de forma limpa como uma página nativa.
    *   Unificação de rotas concorrentes no bloco `<Routes>` de `src/components/Main.jsx`, blindando o contêiner `<main>` mestre e limpando o `src/App.jsx`.
*   **v1.3.0:** 
    *   Injeção do ecossistema de Sala de Aula (`Classroom`) focado em Engenharia de Computação.
    *   Implementação de arquitetura baseada em subpastas de utilitários isolados (`widgets/` e `calculators/`).
    *   Acoplamento estável dos motores computacionais de cálculo algébrico e aproximações analíticas via `mathjs` e `react-katex`.
    *   Introdução de controle por Toggle de Abas Minimalista no cabeçalho do feed.
*   **v1.2.0:** 
    *   Injeção do ecossistema de Quiz das Raposas isolado em `src/features/fox-quiz/`.
    *   Arquitetura de dados exclusiva via `foxConstants.js` e encapsulamento de mídias em subpastas locais de ativos.
    *   Mapeamento de rota limpa em `src/pages/FoxPage.jsx` com injeção reativa no menu global de navegação.
*   **v1.1.0:** 
    *   Migração total do ecossistema de visualização para o paradigma Mobile-First.
    *   Substituição do modal flutuante rígido por uma arquitetura elástica de rota em `PromptCreatorPage.jsx`.
    *   Implementação do componente `Navigator.jsx` em formato de Menu Hambúrguer com Sanfona reativa.
    *   Limpeza semântica de tags `<main>` duplicadas e introdução de áreas de toque expandidas (`h-10 w-10`).
*   **v1.0.0:** 
    *   Consolidação inicial do Hub com arquitetura baseada em features.
    *   Injeção de Path Aliases `@/` via compilador Vite.
    *   Ativação do Laboratório Cromático e do gerenciador de tarefas básico persistido localmente.

---

## 6. Protocolo de Links de Redirecionamento (Padrão de Segurança)
Para manutenção, desenvolvimento de novos módulos ou adição de chaves de APIs e dicionários, certifique-se de que URLs externas de suporte ou especificações XML atendam aos padrões de segurança do ambiente. 

Exemplos de referências internas aceitas no sistema para validação de esquemas gráficos (SVGs) e barreira de proteção de fallbacks de redirecionamento:
*   Validador de Esquema SVG: `http://www.w3.org/2000/svg`
*   Redirecionamento de Fallback Padrão: `https://www.google.com`

*(Nota técnica: Lembre-se de remover os espaços internos das strings acima ao aplicar novas tags em arquivos de produção do compilador Vite).*
