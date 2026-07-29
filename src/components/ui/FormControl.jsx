

/**
 * 📦 CONTÊINER MESTRE (Substitui o <form> genérico)
 * Envelopa o ciclo de vida de submissão nativo com espaçamento fluido.
 */
export function Form({ children, onSubmit, className = '' }) {
  return (
    <form 
      onSubmit={onSubmit} 
      className={`w-full flex flex-col gap-5 ${className}`}
    >
      {children}
    </form>
  );
}

/**
 * 🛡️ AGRUPADOR ATÔMICO (Substitui o <fieldset> nativo)
 * Possui congelamento em bloco via propriedade 'disabled' sem quebrar o layout.
 */
export function FormFieldSet({ children, className = '', disabled = false }) {
  return (
    <fieldset 
      disabled={disabled}
      className={`border border-zinc-800 bg-zinc-900/10 p-5 rounded-2xl space-y-4 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none ${className}`}
    >
      {children}
    </fieldset>
  );
}

/**
 * 🏷️ LEGENDA DE BORDA (Substitui o <legend> nativo)
 * Encaixa perfeitamente na linha do fieldset trazendo a identidade esmeralda.
 */
export function FormLegend({ children, className = '' }) {
  return (
    <legend className={`text-xs font-bold tracking-widest text-emerald-400 uppercase px-2.5 bg-zinc-950 rounded border border-zinc-800/40 ${className}`}>
      {children}
    </legend>
  );
}

/**
 * 🗚 CONTÊINER DE CAMPO (Substitui a div flex de label + input)
 * Padroniza o empilhamento vertical e o distanciamento dos controles.
 */
export function FormField({ children, className = '' }) {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {children}
    </div>
  );
}

/**
 * 📛 RÓTULO DO CAMPO (Substitui o <label> nativo)
 * Garante contraste e tipografia Mobile-First legível.
 */
export function FormLabel({ children, htmlFor, className = '' }) {
  return (
    <label 
      htmlFor={htmlFor} 
      className={`text-xs font-semibold text-zinc-400 select-none ${className}`}
    >
      {children}
    </label>
  );
}

/**
 * 🧬 LINHA DE CONTROLES (Substitui agrupamentos manuais de botões)
 * Alinha e expande botões de ação na base do formulário de forma responsiva.
 */
export function FormActions({ children, className = '' }) {
  return (
    <div className={`flex flex-col sm:flex-row items-center gap-3 w-full pt-2 ${className}`}>
      {children}
    </div>
  );
}
