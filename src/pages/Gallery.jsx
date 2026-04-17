import React from 'react'
import { useTheme } from '../context/ThemeContext'

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

const Gallery = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-cream'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="section-title text-center">گالری</h1>
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-72 cursor-pointer"
            >
              <img
                src={img}
                alt={`نمونه ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = galleryImages[0]
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
