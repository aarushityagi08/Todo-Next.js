
"use client";

import React, { useEffect, useState } from "react";
import { translateTitle } from "@/utils/translate";
import { getTodos, addTodo, deleteTodo } from "@/api/todo";
import { Todo } from "@/types/todo";
import { useTranslations } from "next-intl";

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const t = useTranslations("app");
  const tErr = useTranslations("errors");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      const translatedTodos = data.slice(0, 5).map((todo: Todo) => ({
        ...todo,
        title: translateTitle(todo.title), // translation from todos key
      }));
      setTodos(translatedTodos);
    } catch (err) {
      console.error(tErr("loadTodos"), err);
    }
  };

  const handleAddTodo = async () => {
    if (!newTodo.trim()) return;
    try {
      const created = await addTodo({ title: newTodo });
      setTodos((prev) => [...prev, created]);
      setNewTodo("");
    } catch (err) {
      console.error(tErr("addTodo"), err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(tErr("deleteTodo"), err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-rose-100 shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">{t("todoList")}</h1>

      <div className="flex mb-4 gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder={t("addNewTask")}
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {t("add")}
        </button>
      </div>

      <ul className="space-y-2">
        {todos.length === 0 ? (
          <li className="text-center text-gray-600">{t("noTodos")}</li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-3 border rounded shadow-sm"
            >
              <span>{todo.title}</span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 hover:underline"
              >
                {t("delete")}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
