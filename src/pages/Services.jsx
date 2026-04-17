import React from 'react'
import { useTheme } from '../context/ThemeContext'
import Card from '../components/common/Card'

const Services = () => {
  const { isDarkMode } = useTheme()

  const services = [
    { title: 'عکاسی عروسی', price: '۲۰ میلیون', desc: 'پوشش کامل مراسم عروسی شامل عکاسی آتلیه، مراسم و جشن' },
    { title: 'عکاسی پرتره', price: '۲ میلیون', desc: 'عکاسی فردی و خانوادگی با کیفیت فنی بالا' },
    { title: 'عکاسی رویداد', price: 'قابل توافق', desc: 'پوشش رویدادها، کنفرانس‌ها و مراسم تجاری' },
    { title: 'عکاسی محصول', price: '۵ میلیون', desc: 'عکاسی تجاری برای کسب‌وکارها و فروشگاه‌های آنلاین' }
  ]

  return (
    <div className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-cream'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="section-title text-center">خدمات ما</h1>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {services.map((service, i) => (
            <Card key={i} className="p-6">
              <h2 className="text-2xl font-bold text-gold mb-2">{service.title}</h2>
              <p className="text-xl text-dark dark:text-cream font-semibold mb-2">{service.price}</p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{service.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
