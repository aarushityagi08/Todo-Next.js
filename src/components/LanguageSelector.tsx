

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

const LanguageSelector = () => {
  const router = useRouter();
  const [lang, setLang] = useState(Cookies.get("NEXT_LOCALE") || "en");

  const changeLanguage = (value: string) => {
    Cookies.set("NEXT_LOCALE", value);
    setLang(value);
    router.refresh();
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="relative inline-block w-52">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={lang}
          className="w-full appearance-none px-4 py-2 pr-10 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option className="text-gray-700 bg-white hover:bg-gray-100" value="en">
                English
          </option>
          <option className="text-gray-700 bg-white hover:bg-gray-100" value="hi">
             Hindi
          </option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;

