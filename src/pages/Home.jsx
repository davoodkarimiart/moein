import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ServiceCard from '../components/sections/ServiceCard';
import TestimonialCard from '../components/sections/TestimonialCard';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServiceCard />
        
        {/* Gallery Preview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">نمونه کارها</h2>
              <p className="section-subtitle">برخی از بهترین پروژه‌های ما</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                  <img
                    src={`https://via.placeholder.com/400x300?text=Gallery+${item}`}
                    alt={`نمونه کار ${item}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-gold text-dark px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        <section className="py-20 bg-dark text-cream">
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
