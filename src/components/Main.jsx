import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Links from '../pages/Links'
import Sobre from '../pages/Sobre'

export default function Main() {
    return (
        <main className="flex-1 p-8 bg-zinc-950 text-white min-h-[calc(100vh-80px)]">
            <Routes>
                {/* A sua BIO nova será renderizada aqui na rota inicial */}
                <Route path="/" element={<Home />} />
                
                {/* Outras rotas que você criar */}
                <Route path="/links" element={<Links />} />
                <Route path="/sobre" element={<Sobre />} />
                
                {/* Rota de fallback (404) caso digitem algo errado */}
                <Route path="*" element={<Home />} />
            </Routes>
        </main>
    )
}
