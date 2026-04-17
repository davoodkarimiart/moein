import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useAuth } from '../context/AuthContext';

export default function Gallery() {
  const { gallery } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-dark to-gray-900 text-cream py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">گالری <span className="text-gold">نمونه کارها</span></h1>
            <p className="text-lg text-gray-300">بهترین پروژه‌های ما</p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {gallery.map((img) => (
                <div key={img.id} className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex flex-col items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-cream font-bold text-center">{img.title}</h3>
                      <p className="text-gold text-sm text-center">{img.category}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Add more sample gallery items */}
              {[1, 2, 3, 4].map((idx) => (
                <div key={`extra-${idx}`} className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
                  <img
                    src={`https://via.placeholder.com/400x400?text=Gallery+${idx}`}
                    alt={`نمونه کار ${idx}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
