import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { LogOut } from 'lucide-react'
import Header from '../components/layout/Header'
import Button from '../components/common/Button'

const EmployeeDashboard = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const { isDarkMode } = useTheme()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div>
      <Header />
      <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>داشبورد کارمند</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              <LogOut size={20} />
              خروج
            </button>
          </div>

          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-lg p-12 text-center`}>
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>خوش آمدید، {user?.name}</h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>شما به‌عنوان یک کارمند عکاس در اتلیه معین فعالیت می‌کنید.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                <h3 className="text-gold font-bold text-xl mb-2">پروژه‌های انجام شده</h3>
                <p className={`text-3xl font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>۲۴</p>
              </div>
              <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                <h3 className="text-gold font-bold text-xl mb-2">رضایت مشتری</h3>
                <p className={`text-3xl font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>۹۸%</p>
              </div>
              <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                <h3 className="text-gold font-bold text-xl mb-2">رتبه</h3>
                <p className={`text-3xl font-bold text-gold`}>⭐⭐⭐⭐⭐</p>
              </div>
            </div>

            <Button variant="gold" size="lg" className="mt-8">
              مشاهده پروژه‌ها
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
