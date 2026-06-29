import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigator from "./Navigator";
import Window from "./Window";
import PromptCreator from "./PromptCreator";

export default function Header() {
    const [isPromptOpen, setIsPromptOpen] = useState(false);
    const navigate = useNavigate();

    const menuData = [
        {
            id: 1,
            name: "HOME",
            subs: [
                { label: "Submenu 1", action: () => alert("Submenu 1") },
                { label: "Submenu 2", action: () => alert("Submenu 2") },
                { label: "Submenu 3", action: () => alert("Submenu 3") },
            ],
        },
        {
            id: 2,
            name: "PROJETOS",
            subs: [
                { label: "Prompt Creator", action: () => setIsPromptOpen(true) },
                {
                    label: "To-Do List",
                    action: () => navigate("/todo-list"),
                },
                { label: "Submenu 6", action: () => alert("Submenu 6") },
            ],
        },
        {
            id: 3,
            name: "SOBRE",
            subs: [
                { label: "Submenu 7", action: () => alert("Submenu 7") },
                { label: "Submenu 8", action: () => alert("Submenu 8") },
                { label: "Submenu 9", action: () => alert("Submenu 9") },
            ],
        },
    ];

    return (
        <>
            <header className="flex items-center justify-between w-full h-20 bg-zinc-900 text-white px-8 border-b border-zinc-800 relative z-40">
                <h1 className="text-2xl font-bold tracking-tight">Biblioteca</h1>
                <Navigator menuData={menuData} />
            </header>

            {isPromptOpen && (
                <Window title="Prompt Creator" onClose={() => setIsPromptOpen(false)}>
                    <PromptCreator />
                </Window>
            )}
        </>
    );
}
