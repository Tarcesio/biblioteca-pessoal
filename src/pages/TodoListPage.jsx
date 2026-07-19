import { TodoContainer } from "@/features/todo-list/components/TodoContainer";

export default function TodoListPage() {
  return (
    <main className="flex-1 p-4 sm:p-8 max-w-4xl w-full mx-auto">
      <TodoContainer />
    </main>
  );
}