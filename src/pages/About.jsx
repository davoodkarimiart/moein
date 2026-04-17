import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-cream'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>
          درباره <span className="text-gold">اتلیه معین</span>
        </h1>
        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          اتلیه معین یک استودیوی عکاسی حرفه‌ای است که با تجربه بیش از ۱۵ سال در این حوزه، به ثبت خاطرات گرانبهای شما می‌پردازد.
          ما متخصص در عکاسی عروسی، پوتریه و فتوگرافی تجاری هستیم.
        </p>
      </div>
    </div>
  );
}
