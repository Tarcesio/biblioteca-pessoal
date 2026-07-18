import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-500 flex flex-col items-center justify-center text-slate-100 p-6">
      <h1 className="text-6xl font-extrabold mb-2">404</h1>
      <h2 className="text-2xl font-bold mb-6">Página não encontrada</h2>
      <p className="text-slate-300 mb-8 max-w-md text-center">
        O caminho que você tentou acessar não existe ou foi movido para outro endereço.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-6 rounded-md transition"
      >
        Voltar para o Início
      </button>
    </div>
  );
}
