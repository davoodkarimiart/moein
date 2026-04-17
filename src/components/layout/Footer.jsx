import React from 'react'
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark dark:bg-slate-950 text-cream mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">اتلیه معین</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              ما متخصص در عکاسی حرفه‌ای برای مراسم‌های خاص، پوتریه و فتوگرافی تجاری هستیم. با تجربه بیش از ۱۵ سال در این حوزه.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gold mb-4">تماس با ما</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 hover:text-gold transition-colors cursor-pointer">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span>۰۹۱۲-۸۹۰۱۲۳۴</span>
              </div>
              <div className="flex items-center gap-3 hover:text-gold transition-colors cursor-pointer">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span>info@moein.ir</span>
              </div>
              <div className="flex items-start gap-3 hover:text-gold transition-colors cursor-pointer">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>تهران، خیابان آزادی، پلاک ۱۲۳</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gold mb-4">شبکه‌های اجتماعی</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-gold/10 hover:bg-gold text-gold hover:text-dark rounded-lg transition-all duration-300"
                aria-label="اینستاگرام"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gold/10 hover:bg-gold text-gold hover:text-dark rounded-lg transition-all duration-300"
                aria-label="فیس‌بوک"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/30 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} اتلیه معین - تمام حقوق محفوظ است
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
