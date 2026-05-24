// src/components/Window.jsx
import { useRef } from 'react';
import Draggable from 'react-draggable';
import { X, Minus } from 'lucide-react';

export default function Window({ title, children, onClose }) {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".window-header">
      <div 
        ref={nodeRef} 
        // Alterado para fixed e definido top/left inicial para liberdade total
        className="fixed top-24 left-1/2 -translate-x-1/2 z-999 min-w-100 bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl overflow-hidden"
      >
        <div className="window-header flex items-center justify-between px-4 py-2 bg-zinc-800 cursor-move border-b border-zinc-700 select-none">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{title}</span>
          <button onClick={onClose} className="hover:bg-red-500/20 text-red-500 p-1 rounded"><X size={14} /></button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </Draggable>
  );
}
