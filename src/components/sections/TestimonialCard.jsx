import React from 'react';
import Card from '../common/Card';
import { Star } from 'lucide-react';

export default function TestimonialCard() {
  const testimonials = [
    {
      name: 'فاطمه محمدی',
      role: 'عروس سال ۱۴۰۴',
      text: 'تیم اتلیه معین خیلی حرفه‌ای و دوست‌داشتنی بود. عکس‌های عروسی ما بسیار زیبا شد.',
      rating: 5
    },
    {
      name: 'علی رضایی',
      role: 'مدیر شرکت تجاری',
      text: 'عکاسی تجاری شما برای پروژه‌های من بسیار مناسب و حرفه‌ای بود.',
      rating: 5
    },
    {
      name: 'مریم احمدی',
      role: 'عکس‌های خانوادگی',
      text: 'لحظات خاص خانوادگی ما را خیلی زیبا ثبت کردند. فوق‌العاده‌ای بود.',
      rating: 5
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">نظرات مشتریان</h2>
          <p className="section-subtitle">صدای راضی مشتریان ما</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-dark">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
