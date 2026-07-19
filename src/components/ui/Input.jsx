export default function Input({ variant = "default", className = "", ...props }) {
    // Estilo base adaptável para toque no mobile (altura e espaçamento ótimos)
    const baseStyles = "w-full px-4 py-2.5 text-sm rounded-md border transition-colors outline-none focus:ring-2";
  
    const variants = {
      default: "bg-zinc-800/50 border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-zinc-500 focus:ring-zinc-500/20",
      study: "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400/20"
    };
  
    return (
      <input 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
  