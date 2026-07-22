export const CLASSROOM_DATA = {
    matematica: {
      subject: "Matemática Básica",
      cards: [
        { id: "mb1", title: "Fatoração e Produtos Notáveis", content: "Estruturas algébricas para simplificação de equações. Padrões fundamentais incluem a diferença de quadrados [a² - b² = (a-b)(a+b)] e os trinômios quadrados perfeitos." },
        { id: "mb2", title: "Funções e Mapeamento", content: "Definição de domínio, contradomínio e conjunto imagem. Análise de comportamento de funções injetoras, sobrejetoras e a estruturação de funções compostas f(g(x))." },
        { id: "mb3", title: "Propriedades de Potenciação", content: "Operações com expoentes inteiros e fracionários. Multiplicação de bases iguais soma-se expoentes; divisão de bases iguais subtrai-se os expoentes." }
      ]
    },
    calculo1: {
      subject: "Cálculo I",
      cards: [
        { id: "c1_1", title: "Limites e Continuidade", content: "Estudo da aproximação do comportamento de uma função quando sua variável independente tende a um ponto específico. Define formalmente a continuidade de curvas." },
        { id: "c1_2", title: "Definição de Derivada", content: "Taxa de variação instantânea de uma função. Geometricamente representa a inclinação da reta tangente ao gráfico da função em um ponto fixado." },
        { id: "c1_3", title: "Teorema do Valor Médio", content: "Se uma função é contínua num intervalo fechado e diferenciável no aberto, existe um ponto onde a tangente é paralela à secante das extremidades." }
      ]
    },
    calculo2: {
      subject: "Cálculo II",
      cards: [
        { id: "c2_1", title: "Técnicas de Integração", content: "Métodos analíticos avançados para determinação de primitivas, destacando-se a Integração por Partes, substituições trigonométricas e decomposição em frações parciais." },
        { id: "c2_2", title: "Integrais Múltiplas", content: "Extensão do cálculo integral para funções de duas ou mais variáveis sobre regiões bidimensionais ou volumes tridimensionais, utilizando coordenadas polares ou cilíndricas." },
        { id: "c2_3", title: "Sequências e Séries", content: "Análise de convergência e divergência de somatórios infinitos de termos. Introdução às séries de potências e representações de funções via Séries de Taylor." }
      ]
    },
    fisica: {
      subject: "Física (Ondulatória)",
      cards: [
        { id: "f_ond1", title: "Equação Fundamental", content: "Relação matemática intrínseca de qualquer perturbação periódica: v = λ · f. A velocidade (v) depende do meio, o comprimento (λ) é a distância entre cristas e a frequência (f) é dada em Hz." },
        { id: "f_ond2", title: "Fenômenos Periódicos", content: "Comportamentos estruturais de frentes de onda: Reflexão (inversão de fase ou não), Refração (mudança de velocidade e meio), Difração (contorno de fendas) e Interferência." }
      ],
      chart: {
        title: "Modelagem da Onda Transversal",
        description: "Gráfico interativo gerado via equações de seno. Altere a frequência e amplitude para observar as modificações nas cristas, vales e no comprimento de onda (λ)."
      }
    }
};
