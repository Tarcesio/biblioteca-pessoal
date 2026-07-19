export default function LinksPage() {
  const socialLinks = [
    { name: "GitHub", url: "#", color: "hover:bg-zinc-800 hover:border-zinc-700" },
    { name: "LinkedIn", url: "#", color: "hover:bg-blue-950/40 hover:border-blue-900/50 text-blue-400" },
    { name: "Instagram", url: "#", color: "hover:bg-pink-950/40 hover:border-pink-900/50 text-pink-400" },
    { name: "WhatsApp", url: "#", color: "hover:bg-green-950/40 hover:border-green-900/50 text-green-400" },
  ];

  return (
    // Altura calculada dinamicamente descontando os 80px (h-20) do seu Header global
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] p-6 framework-base w-full max-w-sm mx-auto">
      
      {/* Avatar circular estilizado com borda brilhante */}
      <div className="w-24 h-24 bg-zinc-900 rounded-full mb-4 border-2 border-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-950/20">
        <span className="text-3xl font-bold text-emerald-500 tracking-tight">T</span>
      </div>
      
      <h2 className="text-xl font-bold mb-8 text-zinc-100 tracking-tight">@seu_usuario</h2>

      {/* Container fluido de links com comportamento Mobile-First */}
      <div className="flex flex-col gap-4 w-full">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl transition-all duration-300 ease-out ${link.color} active:scale-[0.98] hover:translate-x-1.5`}
          >
            <span className="flex items-center gap-3 font-medium transition-colors">
              {link.name}
            </span>
          </a>
        ))}
      </div>

    </main>
  );
}
