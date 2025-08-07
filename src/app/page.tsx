
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-200 to-pink-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4 text-purple-700">Welcome to Todo App</h1>
        <p className="text-gray-700 text-lg mb-6">
          Organize your day with our todo list manager.
        </p>
        <Link href="/todo" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition">
          Go to Todo List
        </Link>
      </div>
    </main>
  );
}
