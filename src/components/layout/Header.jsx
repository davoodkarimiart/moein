import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut, Sun, Moon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <span className="text-2xl">📸</span>
            </div>
            <span className="text-xl font-bold text-gold hidden sm:inline">اتلیه معین</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="text-dark dark:text-cream hover:text-gold dark:hover:text-gold transition-colors font-medium">خانه</Link>
            <Link to="/services" className="text-dark dark:text-cream hover:text-gold dark:hover:text-gold transition-colors font-medium">خدمات</Link>
            <Link to="/gallery" className="text-dark dark:text-cream hover:text-gold dark:hover:text-gold transition-colors font-medium">گالری</Link>
            <Link to="/about" className="text-dark dark:text-cream hover:text-gold dark:hover:text-gold transition-colors font-medium">درباره</Link>
            <Link to="/contact" className="text-dark dark:text-cream hover:text-gold dark:hover:text-gold transition-colors font-medium">تماس</Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="تغییر حالت شب/روز"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-gold" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>

            {/* Auth Section */}
            <div className="hidden md:flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <span className="text-sm text-dark dark:text-cream font-medium">{user?.name}</span>
                  {user?.role === 'admin' && (
                    <Link to="/admin/dashboard" className="btn-gold text-sm py-2 px-3">
                      داشبورد
                    </Link>
                  )}
                  {user?.role === 'employee' && (
                    <Link to="/employee/dashboard" className="btn-gold text-sm py-2 px-3">
                      داشبورد
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 text-dark dark:text-cream hover:text-gold transition-colors"
                  >
                    <LogOut size={20} />
                    خروج
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn-gold text-sm py-2 px-4">
                  ورود
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
            <Link to="/" className="block py-2 px-4 text-dark dark:text-cream hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition">خانه</Link>
            <Link to="/services" className="block py-2 px-4 text-dark dark:text-cream hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition">خدمات</Link>
            <Link to="/gallery" className="block py-2 px-4 text-dark dark:text-cream hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition">گالری</Link>
            <Link to="/about" className="block py-2 px-4 text-dark dark:text-cream hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition">درباره</Link>
            <Link to="/contact" className="block py-2 px-4 text-dark dark:text-cream hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition">تماس</Link>
            {!isAuthenticated && (
              <Link to="/login" className="block py-2 px-4 bg-gold text-dark rounded font-semibold hover:bg-yellow-600 transition">
                ورود
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
