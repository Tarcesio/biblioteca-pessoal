import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigator({ menuData }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);

  const toggleSubmenu = (id) => {
    setActiveMenuId(activeMenuId === id ? null : id);
  };

  const handleSubAction = (action) => {
    action();
    setIsMobileMenuOpen(false); // Fecha o menu completo no mobile após uma ação
    setActiveMenuId(null);
  };

  return (
    <>
      {/* Botão Hambúrguer - Visível apenas no Mobile */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none cursor-pointer"
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Container de Navegação Principal */}
      <nav className={`
        fixed md:relative top-20 md:top-0 left-0 w-full md:w-auto h-[calc(100vh-5rem)] md:h-auto
        bg-zinc-900 md:bg-transparent border-b md:border-none border-zinc-800 p-6 md:p-0
        flex flex-col md:flex-row gap-2 md:gap-4 transition-all duration-300 z-40
        ${isMobileMenuOpen 
          ? "opacity-100 visible translate-y-0" 
          : "opacity-0 invisible -translate-y-2 md:opacity-100 md:visible md:translate-y-0"}
      `}>
        {menuData.map((item) => {
          const isOpen = activeMenuId === item.id;

          return (
            <div key={item.id} className="relative w-full md:w-auto">
              {/* Botão de Categoria */}
              <button 
                onClick={() => toggleSubmenu(item.id)}
                className={`w-full md:w-auto px-4 py-3 md:py-2 font-bold cursor-pointer transition-colors flex items-center justify-between md:justify-start gap-1 rounded-lg md:rounded-none bg-zinc-800/40 md:bg-transparent ${
                  isOpen ? "text-zinc-100 md:text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <span>{item.name}</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`} 
                />
              </button>

              {/* Submenu Adaptável: Sanfona no Mobile / Flutuante no Desktop */}
              <div className={`
                md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:mt-2
                flex flex-col bg-zinc-800/60 md:bg-zinc-800 border-l-2 md:border border-zinc-700 md:rounded md:shadow-xl 
                z-50 min-w-full md:min-w-40 overflow-hidden transition-all duration-200 ease-out mt-1
                ${isOpen 
                  ? "max-h-60 md:max-h-none opacity-100 visible translate-y-0" 
                  : "max-h-0 md:max-h-none opacity-0 md:invisible invisible pointer-events-none md:pointer-events-auto md:-translate-y-4"}
              `}>
                {item.subs.map((sub, index) => (
                  <button 
                    key={index}
                    onClick={() => handleSubAction(sub.action)}
                    className="px-6 md:px-4 py-3 text-left hover:bg-zinc-700/80 md:hover:bg-zinc-700 text-sm text-zinc-300 hover:text-zinc-100 cursor-pointer whitespace-nowrap transition-colors"
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </>
  );
}
