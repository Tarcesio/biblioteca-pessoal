// Importações apontando para a pasta interna de ativos isolados da funcionalidade
import arcticImg from "@/features/fox-quiz/assets/arctic-fox.png";
import redImg from "@/features/fox-quiz/assets/red-fox.png";
import fennecImg from "@/features/fox-quiz/assets/fennec-fox.png";
import grayImg from "@/features/fox-quiz/assets/gray-fox.png";

export const FOX_DATA = {
  arctic: {
    name: 'Raposa do Ártico',
    image: arcticImg,
    description: 'Calma, paciente e resiliente. Você prefere pensar antes de agir e se adapta muito bem às mudanças.'
  }, 
  red: {
    name: 'Raposa Vermelha',
    image: redImg,
    description: 'Carismática, curiosa e aventureira. Você gosta de conhecer lugares e pessoas novas.'
  },
  fennec: {
    name: 'Feneco',
    image: fennecImg,
    description: 'Criativo, energético e otimista. Você tem um espírito jovem, adora se comunicar e se destaca em ambientes dinâmicos.'
  },
  gray: {
    name: 'Raposa Cinzenta',
    image: grayImg,
    description: 'Observador, inteligente e reservado. Você analisa tudo antes de tomar uma decisão.'
  }
};

export function calcularResultadoFox(answers) {
  const foxes = { arctic: 0, red: 0, fennec: 0, gray: 0 };

  if (answers.q1 === "cold") foxes.arctic += 2;
  if (answers.q1 === "hot") foxes.fennec += 2;

  if (answers.q2 === "social") foxes.red += 3;
  if (answers.q2 === "reserved") foxes.gray += 3;

  if (answers.q3 === "explore") { foxes.red += 2; foxes.fennec += 1; }
  if (answers.q3 === "home") { foxes.arctic += 1; foxes.gray += 2; }

  if (answers.q4 === "fast") { foxes.red += 2; foxes.fennec += 1; }
  if (answers.q4 === "careful") { foxes.gray += 2; foxes.arctic += 1; }

  if (answers.q5 === "white") foxes.arctic++;
  if (answers.q5 === "red") foxes.red++;
  if (answers.q5 === "beige") foxes.fennec++;
  if (answers.q5 === "gray") foxes.gray++;
  if (answers.q5 === "purple") { foxes.gray++; foxes.fennec++; }

  const resultKey = Object.keys(foxes).reduce((a, b) => foxes[a] > foxes[b] ? a : b);

  return FOX_DATA[resultKey];
}
