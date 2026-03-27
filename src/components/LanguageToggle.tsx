'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const languages = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'zh-Hant', label: '繁體中文' },
  { code: 'fr', label: 'Français' },
];

export default function LanguageToggle({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLabel = languages.find(l => l.code === currentLang)?.label || 'Español';

  const switchLanguage = (code: string) => {
    setIsOpen(false);
    if (code === currentLang) return;
    
    const segments = pathname.split('/');
    segments[1] = code;
    router.push(segments.join('/') || '/');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
      >
        🌐 {currentLabel}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
                currentLang === lang.code ? 'font-bold text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
