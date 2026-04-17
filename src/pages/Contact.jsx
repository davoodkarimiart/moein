import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-dark to-gray-900 text-cream py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">تماس با <span className="text-gold">ما</span></h1>
            <p className="text-lg text-gray-300">ما برای پاسخ به سوالات و رزرو شما آماده‌ایم</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Contact Info */}
              <div>
                <h2 className="section-title mb-8">اطلاعات تماس</h2>
                
                <div className="space-y-6">
                  <Card>
                    <div className="flex items-start gap-4">
                      <Phone className="text-gold flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold text-dark mb-2">تلفن</h3>
                        <p className="text-gray-600">۰۲۱-۱۲۳۴۵۶۷۸</p>
                        <p className="text-gray-600">۰۹۱۲-۳۴۵۶۷۸۹</p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="flex items-start gap-4">
                      <Mail className="text-gold flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold text-dark mb-2">ایمیل</h3>
                        <p className="text-gray-600">info@moein.com</p>
                        <p className="text-gray-600">booking@moein.com</p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="flex items-start gap-4">
                      <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold text-dark mb-2">آدرس</h3>
                        <p className="text-gray-600">تهران، خیابان فردوسی</p>
                        <p className="text-gray-600">پلاک ۱۲۳، واحد ۵</p>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="flex items-start gap-4">
                      <Clock className="text-gold flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold text-dark mb-2">ساعات کاری</h3>
                        <p className="text-gray-600">شنبه تا پنجشنبه: ۱۰ صبح تا ۸ شب</p>
                        <p className="text-gray-600">جمعه: تعطیل</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="section-title mb-8">ارسال پیام</h2>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 font-semibold">✓ پیام شما با موفقیت ارسال شد!</p>
                  </div>
                )}

                <Card>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">نام</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">ایمیل</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">تلفن</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">پیام</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                        required
                      />
                    </div>

                    <Button type="submit" variant="gold" className="w-full">
                      ارسال پیام
                    </Button>
                  </form>
                </Card>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.7596635689916!2d51.41921872346897!3d35.76869272343969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ2JzA3LjMiTiA1McKB0LDCsDAyJzEwLjEiRQ!5e0!3m2!1sfa!2sir!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
