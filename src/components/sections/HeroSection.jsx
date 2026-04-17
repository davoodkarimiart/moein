import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { ThemeContext } from '../../context/ThemeContext';

export default function HeroSection() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={`${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-cream to-gray-100'} ${isDarkMode ? 'text-cream' : 'text-dark'} py-24 md:py-32`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gold">اتلیه معین</span>
              <br />
              حرفه‌ای ترین استودیوی عکاسی
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 leading-relaxed`}>
              ما باارتقاء هنر عکاسی، لحظات خاص زندگی شما را برای ابد محفوظ می‌کنیم. با تیمی متخصص و تجهیزات حدیث.
            </p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button variant="gold">رزرو کنید</Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline">گالری ما</Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/pic/eryri-post-wedding-photos-nature-inspired-couples-session.jpg"
                alt="استودیوی عکاسی"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
