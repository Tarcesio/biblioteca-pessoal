// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigator from "@/components/Navigator";

export default function Header() {
    const navigate = useNavigate();

    const menuData = [
        {
            id: 1,
            name: "HOME",
            subs: [
                { 
                    label: "Home Page",
                    action: () => navigate("/") 
                },
                { 
                    label: "Submenu 2", 
                    action: () => alert("Submenu 2") 
                },
                {   
                    label: "Submenu 3", 
                    action: () => alert("Submenu 3") 
                },
            ],
        },
        {
            id: 2,
            name: "PROJETOS",
            subs: [
                { 
                    label: "Prompt Creator", 
                    action: () => navigate("/prompt-creator") 
                },
                {
                    label: "To-Do List",
                    action: () => navigate("/todo-list"),
                },
                { 
                    label: "Interador de Cores", 
                    action: () => navigate("/interactive-colors") 
                },
                { 
                    label: "Quiz Raposas", 
                    action: () => navigate("/fox-quiz") 
                },
                { 
                    label: "Classroom", 
                    action: () => navigate("/classroom") 
                },
                {
                    label: "Sandbox",
                    action: () => navigate("/sandbox")
                }
            ],
        },
        {
            id: 3,
            name: "SOBRE",
            subs: [
                { 
                    label: "Submenu 7", 
                    action: () => alert("Submenu 7") 
                },
                { 
                    label: "Links", 
                    action: () => navigate("/links") 
                },
                { 
                    label: "About", 
                    action: () => navigate("/about") 
                },
            ],
        },
    ];

    return (
        <>
            <header className="flex items-center justify-between w-full h-20 bg-zinc-900 text-zinc-100 px-4 sm:px-8 border-b border-zinc-800 relative z-50">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Biblioteca</h1>
                <Navigator menuData={menuData} />
            </header>
        </>
    );
}
