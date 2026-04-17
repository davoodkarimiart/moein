import React, { useContext } from 'react';
import Card from '../common/Card';
import { Camera, Users, Heart, Clock } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

export default function ServiceCard() {
  const { isDarkMode } = useContext(ThemeContext);

  const services = [
    {
      icon: Camera,
      title: 'عکاسی عروسی',
      description: 'عکاسی حرفه‌ای از مراسم عروسی با حداکثر کیفیت و ابتکار خلاق.'
    },
    {
      icon: Users,
      title: 'عکاسی گروهی',
      description: 'عکاسی خانوادگی و گروهی برای خاطرات ماندگار.'
    },
    {
      icon: Heart,
      title: 'عکاسی پرتره',
      description: 'عکاسی پرتره شخصی و تجاری با روح و طبیعت کمالات گرفته‌شده.'
    },
    {
      icon: Clock,
      title: 'عکاسی رویداد',
      description: 'پوشش کامل رویدادها، کنفرانس‌ها و مراسم های شما.'
    },
  ];

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">خدمات ما</h2>
          <p className={`section-subtitle ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>انواع خدمات عکاسی حرفه‌ای</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} hover>
              <service.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-cream' : 'text-dark'} mb-3`}>{service.title}</h3>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
