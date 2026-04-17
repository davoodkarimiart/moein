import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Gallery() {
  const { isDarkMode } = useTheme();

  const galleryImages = [
    { id: 1, src: '/pic/102321.jpeg', alt: 'عروسی ۱' },
    { id: 2, src: '/pic/258-wedding+photographer+taking+pictures+of+bride+posing+on+ground+in+wedding+dress.jpg', alt: 'عروسی ۲' },
    { id: 3, src: '/pic/eryri-post-wedding-photos-nature-inspired-couples-session.jpg', alt: 'عروسی ۳' },
    { id: 4, src: '/pic/black-and-white-wedding-photography-alex-dimos-085.jpg', alt: 'عروسی ۴' },
    { id: 5, src: '/pic/elegant-wedding-couple_1157-18557.avif', alt: 'عروسی ۵' },
    { id: 6, src: '/pic/v2.jpg', alt: 'عروسی ۶' },
    { id: 7, src: '/pic/images.jpg', alt: 'عروسی ۷' },
    { id: 8, src: '/pic/613a5cd3a30aeb0018b4c693.webp', alt: 'عروسی ۸' },
  ];

  return (
    <div className={`min-h-screen py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-cream'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className={`text-4xl font-bold mb-8 text-center ${isDarkMode ? 'text-cream' : 'text-dark'}`}>
          گالری <span className="text-gold">کارهای ما</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div key={img.id} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
