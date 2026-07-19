import { useRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { X } from 'lucide-react';

export default function Window({ title, children, onClose }) {
  const nodeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768); // breakpoint md do Tailwind
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Estrutura interna reaproveitável do modal limpa de condicionais de tags
  const modalContent = (
    <div 
      ref={nodeRef} 
      className={`
        fixed z-999 bg-zinc-900 border border-zinc-700 rounded-xl md:rounded-lg shadow-2xl overflow-hidden flex flex-col
        ${isMobile 
          ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-h-[85vh]" 
          : "top-24 left-1/2 -translate-x-1/2 md:min-w-100 md:max-w-2xl"}
      `}
    >
      {/* Cabeçalho do Modal */}
      <div className={`
        window-header flex items-center justify-between px-4 py-3 md:py-2 bg-zinc-800 border-b border-zinc-700 select-none
        ${isMobile ? "cursor-default" : "cursor-move active:bg-zinc-700/40"}
      `}>
        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
          {title}
        </span>
        <button 
          onClick={onClose} 
          className="hover:bg-red-500/20 text-red-500 p-1.5 md:p-1 rounded transition-colors cursor-pointer"
          aria-label="Fechar Janela"
        >
          <X size={16} />
        </button>
      </div>

      {/* Conteúdo Interno com Rolagem Segura */}
      <div className="p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar text-zinc-100">
        {children}
      </div>
    </div>
  );

  // Se for mobile, remove o Draggable por completo da árvore evitando bugs de concorrência DOM da biblioteca
  if (isMobile) {
    return modalContent;
  }

  return (
    <Draggable nodeRef={nodeRef} handle=".window-header">
      {modalContent}
    </Draggable>
  );
}
