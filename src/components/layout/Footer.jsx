import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark dark:bg-gray-900 text-cream border-t border-gold border-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">اتلیه معین</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              استودیوی عکاسی حرفه‌ای با تجربه بیش از ۱۵ سال در زمینه عکاسی عروسی، پرتره و رویدادها.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">خدمات</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-gold cursor-pointer transition">عکاسی عروسی</li>
              <li className="hover:text-gold cursor-pointer transition">عکاسی پرتره</li>
              <li className="hover:text-gold cursor-pointer transition">عکاسی رویداد</li>
              <li className="hover:text-gold cursor-pointer transition">عکاسی تجاری</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">تماس</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span>info@moein.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-gold flex-shrink-0" />
                <span>تهران، خیابان فردوسی</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">شبکه‌های اجتماعی</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gold/20 hover:bg-gold hover:text-dark rounded-full flex items-center justify-center transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/20 hover:bg-gold hover:text-dark rounded-full flex items-center justify-center transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/20 hover:bg-gold hover:text-dark rounded-full flex items-center justify-center transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold border-opacity-20 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; ۱۴۰۵ اتلیه معین. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
