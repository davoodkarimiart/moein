import React, { useContext } from 'react';
import { useTheme } from '../context/ThemeContext';

const galleryImages = [
  { id: 1, src: '/pic/102321.jpeg', alt: 'عروسی ۱' },
  { id: 2, src: '/pic/258-wedding+photographer+taking+pictures+of+bride+posing+on+ground+in+wedding+dress.jpg', alt: 'عروسی ۲' },
  { id: 3, src: '/pic/eryri-post-wedding-photos-nature-inspired-couples-session.jpg', alt: 'عروسی ۳' },
  { id: 4, src: '/pic/black-and-white-wedding-photography-alex-dimos-085.jpg', alt: 'عروسی ۴' },
  { id: 5, src: '/pic/elegant-wedding-couple_1157-18557.avif', alt: 'عروسی ۵' },
  { id: 6, src: '/pic/v2.jpg', alt: 'عروسی ۶' },
];

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`py-24 md:py-32 ${isDarkMode ? 'bg-gradient-to-b from-slate-900 to-slate-800' : 'bg-gradient-to-b from-cream to-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gold">اتلیه معین</span>
                <br />
                حرفه‌ای ترین استودیوی عکاسی
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 leading-relaxed`}>
                ما تخصص داریم در عکاسی حرفه‌ای برای مراسم‌های خاص، پوتریه و فتوگرافی تجاری.
              </p>
              <div className="flex gap-4">
                <a href="#gallery" className="px-8 py-3 bg-gold text-dark rounded-lg hover:bg-yellow-600 transition-all font-semibold">
                  نمونه کارها
                </a>
                <a href="/contact" className="px-8 py-3 border-2 border-gold text-gold rounded-lg hover:bg-gold hover:text-dark transition-all font-semibold">
                  تماس با ما
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                {galleryImages[0] && (
                  <img
                    src={galleryImages[0].src}
                    alt="استودیوی عکاسی"
                    className="w-full h-96 object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Services */}
        <section className={`py-20 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">خدمات ما</h2>
              <p className={`section-subtitle ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>انواع خدمات عکاسی حرفه‌ای</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'عکاسی عروسی', desc: 'عکاسی حرفه‌ای از مراسم عروسی' },
                { title: 'عکاسی پرتره', desc: 'پوتریه شخصی و تجاری' },
                { title: 'عکاسی رویداد', desc: 'پوشش رویدادها و مراسم' },
                { title: 'عکاسی محصول', desc: 'عکاسی تجاری و فتوگرافی محصول' }
              ].map((service, i) => (
                <div key={i} className={`p-6 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} hover:shadow-lg transition-shadow`}>
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>{service.title}</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Preview */}
        <section id="gallery" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
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
      </div>
    );
}
