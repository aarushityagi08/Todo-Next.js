import { Todo } from "@/types/todo";

type Props = {
  todos: Todo[];
};

export default function TodoList({ todos }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <strong>{todo.title}</strong> - {todo.completed ? "✅" : "❌"}
        </li>
      ))}
    </ul>
  );
}
