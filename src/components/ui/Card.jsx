// 📦 CONTÊINER BASE (Substitui a div externa genérica)
// Mantém apenas a casca visual do seu tema: fundo escuro, borda cinza e a faixa verde lateral.
export function Card({ children, className = '' }) {
  return (
    <div className={`group relative w-full bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8 rounded-2xl text-left shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500/30 overflow-hidden ${className}`}>
      {/* Elemento estético identitário do seu sistema */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500 rounded-l-2xl" />
      {children}
    </div>
  );
}

// 🏷️ TOPO DO CARD (Substitui os alinhamentos manuais de ícone + título)
export function CardHeader({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      {children}
    </div>
  );
}

// 🔤 TÍTULO DO CARD (Padroniza a fonte e a cor de destaque text-zinc-100)
export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-xl sm:text-2xl font-bold text-zinc-100 ${className}`}>
      {children}
    </h3>
  );
}

// 📝 CORPO DE CONTEÚDO (Gerencia o espaçamento interno dos blocos de resumo)
export function CardContent({ children, className = '' }) {
  return (
    <div className={`space-y-3 text-zinc-300 text-sm sm:text-base ${className}`}>
      {children}
    </div>
  );
}

// 🧬 LINHA DE INFORMAÇÃO (Substitui os blocos flex repetitivos)
// Possui a propriedade 'hasDivider' caso você queira aquela linha sutil dividindo tópicos.
export function CardRow({ children, className = '', hasDivider = false }) {
  return (
    <div className={`flex items-start gap-3 ${hasDivider ? 'border-t border-zinc-800/50 pt-3' : ''} ${className}`}>
      {children}
    </div>
  );
}
