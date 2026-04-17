import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-dark to-gray-900 text-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gold">اتلیه معین</span>
              <br />
              حرفه‌ای ترین استودیوی عکاسی
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
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
            <img
              src="https://via.placeholder.com/500x600?text=Photography+Studio"
              alt="استودیوی عکاسی"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
