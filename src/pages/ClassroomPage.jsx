import { useSearchParams } from 'react-router-dom';
import ClassroomMenu from '@/features/classroom/ClassroomMenu';
import ClassroomFeed from '@/features/classroom/ClassroomFeed';

export function ClassroomPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSubject = searchParams.get('q');

  const handleBack = () => setSearchParams({});

  return (
    <div className="w-full min-h-screen py-8 px-4 flex flex-col items-center justify-start">
      {currentSubject ? (
        <ClassroomFeed onBack={handleBack} />
      ) : (
        <ClassroomMenu />
      )}
    </div>
  );
}
