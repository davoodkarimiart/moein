import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import Button from '../components/common/Button'

const Contact = () => {
  const { isDarkMode } = useTheme()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('پیام شما ثبت شد. به زودی با شما تماس می‌گیریم.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-cream'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="section-title text-center">تماس با ما</h1>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>نام</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gold ${isDarkMode ? 'bg-slate-800 border-slate-700 text-cream' : 'bg-white border-gray-200'}`}
                required
              />
            </div>
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>ایمیل</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gold ${isDarkMode ? 'bg-slate-800 border-slate-700 text-cream' : 'bg-white border-gray-200'}`}
                required
              />
            </div>
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>شماره تماس</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gold ${isDarkMode ? 'bg-slate-800 border-slate-700 text-cream' : 'bg-white border-gray-200'}`}
              />
            </div>
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>پیام</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gold ${isDarkMode ? 'bg-slate-800 border-slate-700 text-cream' : 'bg-white border-gray-200'}`}
                required
              ></textarea>
            </div>
            <Button variant="gold" size="lg" className="w-full">
              ارسال پیام
            </Button>
          </form>

          <div>
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>اطلاعات تماس</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-gold font-bold mb-2">شماره تماس</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>۰۹۱۲-۸۹۰۱۲۳۴</p>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>۰۲۱-۱۲۳۴۵۶۷۸</p>
              </div>
              <div>
                <h3 className="text-gold font-bold mb-2">ایمیل</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>info@moein.ir</p>
              </div>
              <div>
                <h3 className="text-gold font-bold mb-2">آدرس</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>تهران، خیابان آزادی، پلاک ۱۲۳</p>
              </div>
              <div>
                <h3 className="text-gold font-bold mb-2">ساعات کاری</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>شنبه تا چهارشنبه: ۹ صبح تا ۶ شام</p>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>جمعه: بسته</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
