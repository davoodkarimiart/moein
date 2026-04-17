import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Sun, Moon, LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import Button from '../common/Button'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()
  const { isDarkMode, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsOpen(false)
  }

  const handleNavigate = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  const navItems = [
    { label: 'خانه', path: '/' },
    { label: 'درباره ما', path: '/about' },
    { label: 'خدمات', path: '/services' },
    { label: 'گالری', path: '/gallery' },
    { label: 'تماس', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-cream/95 dark:bg-slate-900/95 backdrop-blur-lg border-b-2 border-gold/20 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-dark dark:text-cream hover:text-gold dark:hover:text-gold transition-colors"
          >
            <span className="text-3xl">✨</span>
            <span>اتلیه معین</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-dark dark:text-cream hover:text-gold dark:hover:text-gold transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 hover:bg-gold/10 dark:hover:bg-slate-700 rounded-lg transition-colors"
              aria-label="تغییر تم"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-gold" />
              ) : (
                <Moon size={20} className="text-dark" />
              )}
            </button>

            {isAuthenticated ? (
              <div className="hidden md:flex items-center gap-3">
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {user?.name}
                </span>
                {user?.role === 'admin' && (
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => navigate('/admin/dashboard')}
                  >
                    داشبورد
                  </Button>
                )}
                {user?.role === 'employee' && (
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => navigate('/employee/dashboard')}
                  >
                    داشبورد
                  </Button>
                )}
                <button
                  onClick={handleLogout}
                  className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                  aria-label="خروج"
                >
                  <LogOut size={20} className="text-red-500" />
                </button>
              </div>
            ) : (
              <Button
                variant="gold"
                size="sm"
                onClick={() => navigate('/login')}
              >
                ورود
              </Button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              aria-label="منو"
            >
              {isOpen ? (
                <X size={24} className="text-dark dark:text-cream" />
              ) : (
                <Menu size={24} className="text-dark dark:text-cream" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-2 border-gold/20 pt-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className="block w-full text-right py-2 text-dark dark:text-cream hover:text-gold transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            {isAuthenticated && (
              <div className="mt-4 pt-4 border-t-2 border-gold/20 space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {user?.name}
                </p>
                {user?.role === 'admin' && (
                  <button
                    onClick={() => handleNavigate('/admin/dashboard')}
                    className="block w-full text-right py-2 text-gold font-semibold"
                  >
                    داشبورد ادمین
                  </button>
                )}
                {user?.role === 'employee' && (
                  <button
                    onClick={() => handleNavigate('/employee/dashboard')}
                    className="block w-full text-right py-2 text-gold font-semibold"
                  >
                    داشبورد کارمند
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  className="block w-full text-right py-2 text-red-500 hover:text-red-600 font-semibold"
                >
                  خروج
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
