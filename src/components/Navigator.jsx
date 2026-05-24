import { useState } from 'react'

export default function Navigator({ menuData }) {
  const [activeMenuId, setActiveMenuId] = useState(null)

  return (
    <nav className="flex gap-4">
      {menuData.map((item) => {
        const isOpen = activeMenuId === item.id

        return (
          <div key={item.id} className="relative">
            <button 
              onClick={() => setActiveMenuId(isOpen ? null : item.id)}
              className={`px-4 py-2 font-bold cursor-pointer transition-colors ${isOpen ? "text-white" : "text-zinc-400"}`}
            >
              {item.name}
            </button>

            {/* Submenu com Animação */}
            <div className={`
              absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col bg-zinc-800 border border-zinc-700 rounded shadow-xl z-50 min-w-37.5 overflow-hidden transition-all duration-300 ease-out
              ${isOpen 
                ? "opacity-100 translate-y-0 visible" 
                : "opacity-0 -translate-y-4 invisible pointer-events-none"}
            `}>
              {item.subs.map((sub, index) => (
                <button 
                  key={index}
                  onClick={sub.action}
                  className="px-4 py-3 text-left hover:bg-zinc-700 text-sm text-zinc-300 cursor-pointer whitespace-nowrap"
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>
        )
      })}
    </nav>
  )
}
