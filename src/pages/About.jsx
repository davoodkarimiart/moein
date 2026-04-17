import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/common/Card';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-dark to-gray-900 text-cream py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">درباره <span className="text-gold">اتلیه معین</span></h1>
            <p className="text-lg text-gray-300">تاریخچه و داستان ما</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="section-title mb-6">تاریخچه اتلیه معین</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  اتلیه معین در سال ۱۳۹۰ به‌عنوان یک استودیوی کوچک عکاسی تاسیس شد. مؤسس آن، آقای محمد معین، با شوق و علاقه به هنر عکاسی، این استودیو را ایجاد کردند.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  در طول سال‌ها، ما به‌طور مداوم خدمات خود را بهبود دادیم و تجهیزات حدیث به‌دست آوردیم تا بهترین کیفیت را به مشتریان ارائه دهیم.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  امروز، اتلیه معین یکی از معروف‌ترین و قابل‌اعتمادترین استودیوهای عکاسی در تهران است.
                </p>
              </div>
              <img
                src="https://via.placeholder.com/500x400?text=Our+Studio"
                alt="استودیوی ما"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="section-title text-center mb-12">ارزش‌های ما</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'کیفیت', desc: 'ما درتمام کارها از بهترین کیفیت استفاده می‌کنیم' },
                  { title: 'خلاقیت', desc: 'هر پروژه را با ایده‌های نو و خلاق انجام می‌دهیم' },
                  { title: 'رضایت مشتری', desc: 'رضایت شما بالاترین اولویت ما است' }
                ].map((value, idx) => (
                  <Card key={idx}>
                    <h3 className="text-2xl font-bold text-gold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Team */}
            <div>
              <h2 className="section-title text-center mb-12">تیم ما</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: 'محمد معین', role: 'بنیان‌گذار و عکاس ارشد' },
                  { name: 'فاطمه احمدی', role: 'عکاس ویژه' },
                  { name: 'علی رضایی', role: 'طراح و ویرایشگر' }
                ].map((member, idx) => (
                  <Card key={idx} className="text-center">
                    <div className="w-24 h-24 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                    <h3 className="font-bold text-dark text-lg">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.role}</p>
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
