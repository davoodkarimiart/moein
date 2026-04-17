import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/common/Card';
import { Camera, Users, Heart, Clock, Palette, Zap } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-dark to-gray-900 text-cream py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">خدمات <span className="text-gold">ما</span></h1>
            <p className="text-lg text-gray-300">انواع خدمات عکاسی حرفه‌ای</p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: Camera,
                  title: 'عکاسی عروسی',
                  desc: 'عکاسی حرفه‌ای از تمام لحظات خاص روز عروسی شما با کیفیت بالا'
                },
                {
                  icon: Users,
                  title: 'عکاسی گروهی',
                  desc: 'عکاسی خانوادگی و گروهی برای خاطرات ماندگار'
                },
                {
                  icon: Heart,
                  title: 'عکاسی پرتره',
                  desc: 'عکاسی پرتره شخصی و تجاری با حداکثر کیفیت'
                },
                {
                  icon: Clock,
                  title: 'عکاسی رویداد',
                  desc: 'پوشش کامل رویدادها، کنفرانس‌ها و مراسم‌های شما'
                },
                {
                  icon: Palette,
                  title: 'ویرایش و طراحی',
                  desc: 'ویرایش حرفه‌ای و طراحی آلبوم عکس'
                },
                {
                  icon: Zap,
                  title: 'عکاسی تجاری',
                  desc: 'عکاسی محصول و عکاسی تجاری برای کسب‌وکارها'
                }
              ].map((service, idx) => (
                <Card key={idx}>
                  <service.icon className="w-12 h-12 text-gold mb-4" />
                  <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <button className="text-gold font-semibold hover:text-yellow-600 transition">
                    بیشتر بدانید →
                  </button>
                </Card>
              ))}
            </div>

            {/* Pricing */}
            <div className="mt-20">
              <h2 className="section-title text-center mb-12">بسته‌های قیمتی</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: 'بسته پایه', price: '۵۰۰۰۰۰', features: ['۲ ساعت عکاسی', '۵۰۰ عکس', 'ویرایش پایه‌ای'] },
                  { name: 'بسته استاندارد', price: '۱۰۰۰۰۰۰', features: ['۶ ساعت عکاسی', '۱۰۰۰ عکس', 'ویرایش حرفه‌ای', 'آلبوم'] },
                  { name: 'بسته ویژه', price: '۲۰۰۰۰۰۰', features: ['تمام روز', 'تمام عکس‌ها', 'ویدیو', 'آلبوم اختصاصی'] }
                ].map((pkg, idx) => (
                  <Card key={idx} className={`text-center ${idx === 1 ? 'border-2 border-gold' : ''}`}>
                    <h3 className="text-2xl font-bold text-dark mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-gold mb-6">{pkg.price}</div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="text-gray-600">✓ {feature}</li>
                      ))}
                    </ul>
                    <button className="btn-gold w-full">انتخاب</button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
