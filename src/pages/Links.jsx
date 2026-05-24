export default function Links() {
  const socialLinks = [
    { name: 'GitHub', url: '#', color: 'hover:bg-zinc-800' },
    { name: 'LinkedIn', url: '#', color: 'hover:bg-blue-900/30' },
    { name: 'Instagram', url: '#', color: 'hover:bg-pink-900/30' },
    { name: 'WhatsApp', url: '#', color: 'hover:bg-green-900/30' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-full py-10">
      <div className="w-24 h-24 bg-zinc-800 rounded-full mb-4 border-2 border-emerald-500 flex items-center justify-center">
        <span className="text-3xl font-bold text-emerald-500">T</span>
      </div>
      <h2 className="text-xl font-bold mb-8">@seu_usuario</h2>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={`flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl transition-all duration-300 ${link.color} hover:translate-x-2`}
          >
            <span className="flex items-center gap-3 font-medium">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
