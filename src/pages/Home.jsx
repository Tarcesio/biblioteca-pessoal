import ProfileCard from '@/components/ui/ProfileCard';
import signatureImg from '@/assets/signature-image.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-full py-8 sm:py-12 px-4 sm:px-6 text-center animate-in fade-in duration-700">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent p-1">
        📚 Biblioteca Virtual
      </h1>
      
      <p className="text-zinc-400 max-w-2xl text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
        Bem-vindo ao ponto de partida do sistema. Use o menu no topo para navegar.
      </p>

      <ProfileCard />

      <div className="mt-8 w-full flex justify-center px-4">
        <img 
          src={signatureImg} 
          alt="Assinatura Taru" 
          className="w-full max-w-xs sm:max-w-md object-contain h-auto" 
        />
      </div>

      <blockquote className="mt-10 sm:mt-12 px-6 sm:px-8 py-4 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl italic text-sm sm:text-base max-w-md sm:max-w-xl">
        “Transformando ideias em código, um projeto de cada vez.”
      </blockquote>
    </div>
  );
}
