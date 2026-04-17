import React, { useContext } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ServiceCard from '../components/sections/ServiceCard';
import TestimonialCard from '../components/sections/TestimonialCard';
import { ThemeContext } from '../context/ThemeContext';

const galleryImages = [
  { id: 1, src: '/pic/102321.jpeg', alt: 'عروسی ۱' },
  { id: 2, src: '/pic/258-wedding+photographer+taking+pictures+of+bride+posing+on+ground+in+wedding+dress.jpg', alt: 'عروسی ۲' },
  { id: 3, src: '/pic/eryri-post-wedding-photos-nature-inspired-couples-session.jpg', alt: 'عروسی ۳' },
  { id: 4, src: '/pic/black-and-white-wedding-photography-alex-dimos-085.jpg', alt: 'عروسی ۴' },
  { id: 5, src: '/pic/elegant-wedding-couple_1157-18557.avif', alt: 'عروسی ۵' },
  { id: 6, src: '/pic/v2.jpg', alt: 'عروسی ۶' },
];

export default function Home() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServiceCard />
        
        {/* Gallery Preview */}
        <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">نمونه کارها</h2>
              <p className={`section-subtitle ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>برخی از بهترین پروژه‌های ما</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((item) => (
                <div key={item.id} className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-gold text-dark px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-90">
                      مشاهده
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialCard />

        {/* Quick Contact */}
        <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-dark'} ${isDarkMode ? 'text-cream' : 'text-cream'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              آماده برای عکاسی <span className="text-gold">حرفه‌ای</span>؟
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              امروز تماس بگیرید و رزرو خود را برای یک جلسه عکاسی فوق‌العاده انجام دهید.
            </p>
            <a href="tel:02112345678" className="btn-gold inline-block">
              ۰۲۱-۱۲۳۴۵۶۷۸
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
