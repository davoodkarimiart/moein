import React from 'react'
import { useTheme } from '../context/ThemeContext'
import Card from '../components/common/Card'

const About = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-cream'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="section-title text-center">درباره اتلیه معین</h1>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>داستان ما</h2>
            <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              اتلیه معین با بیش از ۱۵ سال تجربه در عکاسی حرفه‌ای، بهترین خدمات عکاسی را برای لحظات خاص شما فراهم می‌کند.
            </p>
            <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              ما به عکاسی برای مراسم‌های عروسی، پوتریه، رویدادها و فتوگرافی تجاری متخصص هستیم.
            </p>
          </div>
          <div>
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>ارزش‌های ما</h2>
            <div className="space-y-4">
              <Card className="p-4">
                <h3 className="text-gold font-bold mb-2">کیفیت</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>بهترین کیفیت در هر پروژه</p>
              </Card>
              <Card className="p-4">
                <h3 className="text-gold font-bold mb-2">اخلاق حرفه‌ای</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>رفتار حرفه‌ای با تمام مشتریان</p>
              </Card>
              <Card className="p-4">
                <h3 className="text-gold font-bold mb-2">ابتکار</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>ایده‌های خلاقانه و متفاوت</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
