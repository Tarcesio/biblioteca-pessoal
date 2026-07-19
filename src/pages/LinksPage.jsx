import { ArrowUpRight } from "lucide-react";

export default function LinksPage() {
  const socialLinks = [
    { name: "GitHub", url: "#", color: "hover:bg-zinc-800 hover:border-zinc-700 text-zinc-100" },
    { name: "LinkedIn", url: "#", color: "hover:bg-blue-950/40 hover:border-blue-900/50 text-blue-400" },
    { name: "Instagram", url: "#", color: "hover:bg-pink-950/40 hover:border-pink-900/50 text-pink-400" },
    { name: "WhatsApp", url: "#", color: "hover:bg-green-950/40 hover:border-green-900/50 text-green-400" },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-6 px-4 framework-base w-full max-w-sm mx-auto">
      
      {/* Avatar circular estilizado com borda brilhante */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-zinc-900 rounded-full mb-3 sm:mb-4 border-2 border-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-950/20 shrink-0">
        <span className="text-2xl sm:text-3xl font-bold text-emerald-500 tracking-tight">T</span>
      </div>
      
      <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-zinc-100 tracking-tight">@seu_usuario</h2>

      {/* Container fluido de links com comportamento Mobile-First */}
      <div className="flex flex-col gap-3.5 w-full">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl transition-all duration-200 ease-out active:scale-[0.98] md:hover:translate-x-1.5 group cursor-pointer ${link.color}`}
          >
            <span className="font-medium transition-colors">
              {link.name}
            </span>
            <ArrowUpRight 
              size={16} 
              className="text-zinc-500 opacity-60 group-hover:opacity-100 group-hover:text-current transition-all shrink-0" 
            />
          </a>
        ))}
      </div>

    </div>
  );
}
