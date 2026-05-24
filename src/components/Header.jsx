import { useState } from 'react'
import Navigator from "./Navigator"
import Window from "./Window" // Importe o componente da janela
import PromptCreator from "./PromptCreator" // Importe o form
import { Router, Routes, Route } from 'react-router-dom' // Importação para rotas, caso queira expandir futuramente

export default function Header() {
    const [isPromptOpen, setIsPromptOpen] = useState(false)

    const menuData = [
        { id: 1, name: 'HOME', subs: [
            { label: 'Submenu 1', action: () => alert('Submenu 1') },
            { label: 'Submenu 2', action: () => alert('Submenu 2') },
            { label: 'Submenu 3', action: () => alert('Submenu 3') }
        ] }, 
        { id: 2, name: 'PROJETOS', subs: [
            // AQUI: A action agora muda o estado local do Header
            { label: 'Prompt Creator', action: () => setIsPromptOpen(true) },
            { label: 'Submenu 5', action: () => alert('Submenu 5') },
            { label: 'Submenu 6', action: () => alert('Submenu 6') }
        ] },
        { id: 3, name: 'SOBRE', subs: [
            { label: 'Submenu 7', action: () => alert('Submenu 7') },
            { label: 'Submenu 8', action: () => alert('Submenu 8') },
            { label: 'Submenu 9', action: () => alert('Submenu 9') }
        ] }
    ]    

    return (
        <>
            <header className="flex items-center justify-between w-full h-20 bg-zinc-900 text-white px-8 border-b border-zinc-800 relative z-40">
                <h1 className="text-2xl font-bold tracking-tight">Biblioteca</h1>
                <Navigator menuData={menuData} />
            </header>

            {/* A Janela renderiza "fora" do header visualmente devido ao absolute/fixed */}
            {isPromptOpen && (
                <Window title="Prompt Creator" onClose={() => setIsPromptOpen(false)}>
                    <PromptCreator />
                </Window>
            )}
        </>
    )
}
