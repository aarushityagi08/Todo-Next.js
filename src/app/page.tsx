
"use client";

import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('app');
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br ">
      <div className="bg-purple-300 shadow-lg rounded-2xl p-8 text-center max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4 text-purple-700">{t('welcome')}</h1>
        <p className="text-gray-700 text-lg mb-6">
          {t('description')}
        </p>
        <Link href="/todo" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition">
         {t('goToTodos')}
        </Link>
      </div>
    </main>
  );
}


