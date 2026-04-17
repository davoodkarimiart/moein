import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { isDarkMode } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-cream'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className={`text-4xl font-bold mb-8 text-center ${isDarkMode ? 'text-cream' : 'text-dark'}`}>
          تماس با <span className="text-gold">ما</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>اطلاعات تماس</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-gold" size={24} />
                <div>
                  <p className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>تلفن</p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>۰۹۱۲-۸۹۰۱۲۳۴</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-gold" size={24} />
                <div>
                  <p className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>ایمیل</p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>info@moein.ir</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-gold mt-1" size={24} />
                <div>
                  <p className={`font-semibold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>آدرس</p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>تهران، خیابان آزادی، پلاک ۱۲۳</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>فرم تماس</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="نام خود"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-cream' : 'bg-white border-gray-300 text-dark'}`}
              />
              <input
                type="email"
                name="email"
                placeholder="ایمیل"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-cream' : 'bg-white border-gray-300 text-dark'}`}
              />
              <input
                type="tel"
                name="phone"
                placeholder="تلفن"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-cream' : 'bg-white border-gray-300 text-dark'}`}
              />
              <textarea
                name="message"
                placeholder="پیام"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className={`w-full px-4 py-2 rounded border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-cream' : 'bg-white border-gray-300 text-dark'}`}
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gold text-dark rounded font-semibold hover:bg-yellow-600 transition"
              >
                {submitted ? 'ارسال شد ✓' : 'ارسال'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
