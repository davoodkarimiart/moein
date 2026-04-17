import React from 'react'
import { Camera, Zap, Users, Trophy } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import Button from '../components/common/Button'
import Card from '../components/common/Card'

const galleryImages = [
  '/pic/102321.jpeg',
  '/pic/258-wedding+photographer+taking+pictures+of+bride+posing+on+ground+in+wedding+dress.jpg',
  '/pic/eryri-post-wedding-photos-nature-inspired-couples-session.jpg',
  '/pic/black-and-white-wedding-photography-alex-dimos-085.jpg',
  '/pic/elegant-wedding-couple_1157-18557.avif',
  '/pic/v2.jpg',
  '/pic/613a5cd3a30aeb0018b4c693.webp',
  '/pic/images.jpg'
]

const Home = () => {
  const { isDarkMode } = useTheme()

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
              <div className="flex gap-4 flex-wrap">
                <Button variant="gold" size="lg">نمونه کارها</Button>
                <Button variant="outline" size="lg">تماس با ما</Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
              <img
                src={galleryImages[0]}
                alt="اتلیه معین"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`py-20 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">خدمات ما</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Users, title: 'عکاسی عروسی', desc: 'عکاسی حرفه‌ای از مراسم عروسی' },
              { icon: Camera, title: 'عکاسی پرتره', desc: 'پوتریه شخصی و تجاری' },
              { icon: Zap, title: 'عکاسی رویداد', desc: 'پوشش رویدادها و مراسم' },
              { icon: Trophy, title: 'عکاسی محصول', desc: 'عکاسی تجاری و فتوگرافی محصول' }
            ].map((service, i) => (
              <Card key={i} className="p-8 card-hover text-center">
                <service.icon size={48} className="text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">نمونه کارها</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-64 cursor-pointer"
              >
                <img
                  src={img}
                  alt={`نمونه کار ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = galleryImages[0]
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <Button variant="gold" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    مشاهده
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-dark'} text-cream`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            آماده برای عکاسی <span className="text-gold">حرفه‌ای</span>؟
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            امروز تماس بگیرید و رزرو خود را برای یک جلسه عکاسی فوق‌العاده انجام دهید.
          </p>
          <Button variant="gold" size="lg">
            ۰۹۱۲-۸۹۰۱۲۳۴
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
