export default function Button({ children, variant = "default", className = "", ...props }) {
    // Estilo base focado em Mobile-First (ajustável por propriedade)
    const baseStyles = "w-full sm:w-auto px-4 py-2 rounded-md font-medium text-sm transition-all focus:outline-none focus:ring-2 active:scale-[0.98] cursor-pointer inline-flex items-center justify-center";
    
    // Mapeamento de variantes de design
    const variants = {
      default: "bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 focus:ring-zinc-500",
      study: "bg-slate-500 hover:bg-slate-600 text-white focus:ring-slate-400"
    };
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${className}`} 
        {...props}
      >
        {children}
      </button>
    );
  }
  