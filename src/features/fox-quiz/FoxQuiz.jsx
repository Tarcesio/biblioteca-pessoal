import { useState } from "react";
import { calcularResultadoFox } from "./foxConstants"; // Import corrigido aqui
import Button from "@/components/ui/Button";

export default function FoxQuiz() {
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "", q4: "", q5: "" });
  const [resultFox, setResultFox] = useState(null);
  const [hasError, setHasError] = useState(false);

  const handleSelectOption = (questionKey, value) => {
    setAnswers({ ...answers, [questionKey]: value });
    if (hasError) setHasError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAllAnswered = Object.values(answers).every(val => val !== "");
    
    if (!isAllAnswered) {
      setHasError(true);
      return;
    }

    const matchedFox = calcularResultadoFox(answers);
    setResultFox(matchedFox);
    setHasError(false);
  };

  const handleRestart = () => {
    setAnswers({ q1: "", q2: "", q3: "", q4: "", q5: "" });
    setResultFox(null);
  };

  if (resultFox) {
    return (
      <div id="result" className="space-y-6 text-center animate-in fade-in duration-300">
        <h2 className="text-lg font-bold text-zinc-400 uppercase tracking-widest">Resultado:</h2>
        <div id="res-div" className="space-y-4 max-w-sm mx-auto">
          <img 
            id="fox-img" 
            src={resultFox.image} 
            alt={resultFox.name} 
            className="w-full h-48 object-cover rounded-2xl border border-zinc-700 shadow-xl"
          />
          <h3 id="fox-name" className="text-2xl font-bold text-zinc-100">{resultFox.name}</h3>
          <p id="fox-description" className="text-zinc-400 text-sm leading-relaxed">
            {resultFox.description}
          </p>
          <Button id="restart" type="button" onClick={handleRestart} className="w-full mt-2">
            Reiniciar teste
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form id="quiz" onSubmit={handleSubmit} className="space-y-6 w-full text-left">
      <h2 id="question" className="text-sm font-bold text-zinc-500 uppercase tracking-widest pl-0.5">
        Escolha suas preferências:
      </h2>

      {/* Pergunta 1 */}
      <div className="space-y-2">
        <span className="text-sm font-semibold text-zinc-300">1. Escolha um clima</span>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "❄️ Frio", val: "cold" },
            { label: "☀️ Quente", val: "hot" }
          ].map(opt => (
            <button
              key={opt.val}
              type="button"
              onClick={() => handleSelectOption("q1", opt.val)}
              className={`py-2.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                answers.q1 === opt.val
                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-950/40"
                  : "bg-zinc-800/40 border-zinc-700/60 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pergunta 2 */}
      <div className="space-y-2">
        <span className="text-sm font-semibold text-zinc-300">2. Como você é?</span>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "🤝 Sociável", val: "social" },
            { label: "🦉 Reservado", val: "reserved" }
          ].map(opt => (
            <button
              key={opt.val}
              type="button"
              onClick={() => handleSelectOption("q2", opt.val)}
              className={`py-2.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                answers.q2 === opt.val
                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-950/40"
                  : "bg-zinc-800/40 border-zinc-700/60 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pergunta 3 */}
      <div className="space-y-2">
        <span className="text-sm font-semibold text-zinc-300">3. O que você prefere fazer?</span>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "🧭 Explorar", val: "explore" },
            { label: "🏠 Ficar em casa", val: "home" }
          ].map(opt => (
            <button
              key={opt.val}
              type="button"
              onClick={() => handleSelectOption("q3", opt.val)}
              className={`py-2.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                answers.q3 === opt.val
                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-950/40"
                  : "bg-zinc-800/40 border-zinc-700/60 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pergunta 4 */}
      <div className="space-y-2">
        <span className="text-sm font-semibold text-zinc-300">4. Como você toma as decisões?</span>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "⚡ Rapidamente", val: "fast" },
            { label: "🛡️ Tomando cuidado", val: "careful" }
          ].map(opt => (
            <button
              key={opt.val}
              type="button"
              onClick={() => handleSelectOption("q4", opt.val)}
              className={`py-2.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                answers.q4 === opt.val
                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-950/40"
                  : "bg-zinc-800/40 border-zinc-700/60 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pergunta 5 */}
      <div className="space-y-2">
        <span className="text-sm font-semibold text-zinc-300">5. Qual cor você prefere?</span>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Branca", val: "white" },
            { label: "Vermelha", val: "red" },
            { label: "Bege", val: "beige" },
            { label: "Cinza", val: "gray" },
            { label: "Roxa", val: "purple" }
          ].map(opt => (
            <button
              key={opt.val}
              type="button"
              onClick={() => handleSelectOption("q5", opt.val)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                answers.q5 === opt.val
                  ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                  : "bg-transparent text-zinc-400 border-transparent hover:text-zinc-200 hover:bg-zinc-800/50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {hasError && (
        <p className="text-xs font-medium text-red-400 animate-in fade-in duration-200">
          ⚠️ Por favor, preencha todas as perguntas do quiz antes de ver o resultado.
        </p>
      )}

      <Button type="submit" className="w-full mt-2">
        Ver resultado
      </Button>
    </form>
  );
}
