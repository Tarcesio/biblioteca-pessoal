import Button from '@/components/ui/Button';
import { useSearchParams } from 'react-router-dom';
import { CLASSROOM_DATA } from './classroomData'; // 🌟 Importando os dados reais aqui

export default function ClassroomMenu() {
    const [, setSearchParams] = useSearchParams();

    // 🔄 Transforma o objeto de dados dinamicamente em um array para os botões
    const subjects = Object.keys(CLASSROOM_DATA).map((key) => ({
        id: key,
        name: CLASSROOM_DATA[key].subject
    }));

    return (
        <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-zinc-100 uppercase tracking-wide">SALA DE AULA</h1>
            <h2 className="text-zinc-400 text-sm sm:text-base">Selecione a matéria desejada:</h2>
            
            <ul className="space-y-3 pt-2">
                {subjects.map(subject => (
                    <li key={subject.id}>
                        <Button 
                            className="w-full max-w-xs h-10" 
                            onClick={() => setSearchParams({ q: subject.id })}
                        >
                            {subject.name}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
