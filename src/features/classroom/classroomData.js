export const CLASSROOM_DATA = {
    matematica: {
      subject: "Matemática Básica",
      cards: [
        {
          id: "mb1",
          title: "Intuição de Funções: O que é f(x)?",
          content: ["A notação f(x) (lê-se 'f de x') estabelece que a variável dependente 'y' é rigidamente determinada por uma variável independente 'x'. Matematicamente: y = f(x).", "O gráfico da função nada mais é do que o mapeamento no plano cartesiano de todos os pares ordenados (x, y), onde a altura 'y' depende diretamente do avanço horizontal 'x'."]
        },
        {
          id: "mb2",
          title: "Domínio, Contradomínio e Imagem",
          content: [
            "• Domínio (D): Conjunto de todos os valores de 'x' permitidos (onde a função existe).",
            "• Contradomínio (CD): O universo onde as respostas podem cair.",
            "• Imagem (Im): Os valores de 'y' que realmente são atingidos.",
            "Exemplo: Em f(x) = √x, o Domínio é restrito a x ≥ 0 no conjunto dos reais, pois não existe raiz quadrada de número negativo neste campo."
          ]
        },
        {
          id: "mb3",
          title: "Produtos Notáveis e Fatoração Algebrica",
          content: [
            "Estruturas fundamentais para simplificar equações antes de aplicar o cálculo:",
            "1. Diferença de Quadrados: a² - b² = (a - b)(a + b)",
            "2. Quadrado da Soma: (a + b)² = a² + 2ab + b²",
            "3. Trinômio Quadrado Perfeito: x² + 6x + 9 = (x + 3)²"
          ]
        }
      ]
    },
  
    calculo1: {
      subject: "Cálculo I (Diferencial)",
      cards: [
        {
          id: "c1_1",
          title: "1. Limites e a Ideia de Aproximação",
          content: ["O limite estuda o comportamento de f(x) quando 'x' chega infinitamente perto de um ponto 'c', sem necessariamente tocá-lo. Escreve-se lim(x→c) f(x) = L.", "É a ferramenta matemática criada para resolver indeterminações do tipo 0/0, abrindo as portas para a definição geométrica da derivada."]
        },
        {
          id: "c1_2",
          title: "2. Definição Geométrica de Derivada",
          content: ["A derivada f'(x) represents a taxa de variação instantânea de uma função. Geometricamente, enquanto a reta secante cruza dois pontos de uma curva, o limite faz esses pontos colidirem, transformando-a na inclinação exata da Reta Tangente em um único ponto específico. É o 'velocímetro' da curva."]
        },
        {
          id: "c1_3",
          title: "3. Tabela de Derivadas Fundamentais (Regra do Tombo)",
          content: [
            "Pratique os padrões analíticos de derivação direta:",
            "• Função Constante: f(x) = 10  =>  f'(x) = 0 (Constantes não variam)",
            "• Função Linear: f(x) = x  =>  f'(x) = 1",
            "• Regra da Potência (Tombo): f(x) = xⁿ  =>  f'(x) = n · xⁿ⁻¹",
            "• Exemplo prático: f(x) = 2x²  =>  f'(x) = 2 · (2x¹) = 4x"
          ]
        }
      ],
      chart: {
        title: "Análise Geométrica da Tangente",
        description: "Mova o slider abaixo para observar visualmente como a reta verde (tangente) altera seu coeficiente angular (inclinação) em tempo real dependendo da curvatura da parábola f(x)."
      }
    },
  
    calculo2: {
      subject: "Cálculo II (Integral)",
      cards: [
        {
          id: "c2_1",
          title: "1. A Antiderivada e as Primitivas",
          content: ["A integração é a operação inversa da diferenciação. Encontrar a integral de f(x) significa descobrir qual função original F(x) foi derivada para gerar f(x). Por isso, F(x) é chamada de Primitiva.", "Exemplo: Se a derivada de x³ é 3x², então a primitiva (integral) de 3x² dx é x³ + C (onde C é a constante de integração)."]
        },
        {
          id: "c2_2",
          title: "2. Anatomy da Cobrinha: O Significado de ∫ f(x) dx",
          content: ["O símbolo '∫' é um 'S' estilizado que significa SOMA (Soma de Riemann). O termo 'f(x)' é a altura de um retângulo infinitesimal e 'dx' (diferencial de x) é a sua largura infinitamente fina.", "Multiplicar f(x) por dx resulta na área de um único retângulo. A cobrinha soma todos esses retângulos para cobrir a área total sob a curva."]
        },
        {
          id: "c2_3",
          title: "3. Teorema Fundamental do Cálculo (Limites de Integração)",
          content: ["Para calcular a área exata sob uma curva f(x) delimitada entre um intervalo fechado [a, b], avaliamos a sua primitiva F(x) nas duas extremidades: ∫(a até b) f(x) dx = F(b) - F(a). Subtrai-se o resultado do limite superior pelo limite inferior."]
        }
      ],
      chart: {
        title: "Visualização Geométrica da Integral",
        description: "Ajuste os limites 'a' (inferior) e 'b' (superior) para ver a área sendo pintada no gráfico. O display calcula a soma dos retângulos (Soma de Riemann) atualizando o valor da integral em tempo real."
      }
    },
  
    fisica: {
      subject: "Física (Ondulatória)",
      cards: [
        {
          id: "f_ond1",
          title: "Anatomia Espacial de uma Onda",
          content: [
            "Uma onda transversal desloca o meio perpendicularmente à direção da propagação. Seus componentes geométricos são:",
            "• Crista: O ponto de deslocamento máximo positivo (topo).",
            "• Vale: O ponto de deslocamento máximo negativo (fundo).",
            "• Amplitude (A): A distância da linha central de repouso até a crista.",
            "• Comprimento de Onda (λ): A distância linear entre duas cristas consecutivas."
          ]
        },
        {
          id: "f_ond2",
          title: "A Equação Fundamental do Movimento Periódico",
          content: [
            "A velocidade de propagação de uma perturbação obedece à equação estável: v = λ · f.",
            "• Velocidade (v): Dada em m/s, determinada exclusivamente pelas propriedades mecânicas do meio.",
            "• Frequência (f): Dada em Hertz (Hz), mede o número de oscilações completas por segundo. Depende estritamente da fonte emissora."
          ]
        }
      ],
      chart: {
        title: "Modelagem da Onda Transversal",
        description: "Altere a frequência (ciclos por segundo) e a amplitude (energia da perturbação) para analisar o impacto direto no comprimento de onda λ espacial."
      }
    }
  };
  