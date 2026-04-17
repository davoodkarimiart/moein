import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Services() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-cream'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>
          خدمات <span className="text-gold">اتلیه معین</span>
        </h1>
        <div className="space-y-6">
          {[
            { title: 'عکاسی عروسی', desc: 'عکاسی حرفه‌ای از مراسم عروسی با حداکثر کیفیت' },
            { title: 'عکاسی پوتریه', desc: 'عکاسی پرتره شخصی و تجاری' },
            { title: 'عکاسی رویداد', desc: 'پوشش کامل رویدادها و مراسم' },
            { title: 'عکاسی محصول', desc: 'فتوگرافی تجاری برای کسب‌و‌کارها' }
          ].map((service, i) => (
            <div key={i} className={`p-6 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>{service.title}</h2>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
