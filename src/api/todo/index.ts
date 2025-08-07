
const BASE_URL = "https://jsonplaceholder.typicode.com/todos"; // or your own backend

export async function getTodos() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}

export async function addTodo(todo: { title: string }) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...todo, completed: false }),
  });
  if (!res.ok) throw new Error("Failed to add todo");
  return res.json();
}

export async function deleteTodo(id: number) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete todo");
  return res.json();
}
