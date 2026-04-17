import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="bg-dark text-cream sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <span className="text-dark font-bold text-lg">📸</span>
            </div>
            <span className="text-2xl font-bold text-gold hidden sm:inline">اتلیه معین</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="hover:text-gold transition-colors">خانه</Link>
            <Link to="/services" className="hover:text-gold transition-colors">خدمات</Link>
            <Link to="/gallery" className="hover:text-gold transition-colors">گالری</Link>
            <Link to="/about" className="hover:text-gold transition-colors">درباره</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">تماس</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm">{user?.name}</span>
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
                  className="flex items-center gap-2 hover:text-gold transition-colors"
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
            className="md:hidden p-2 hover:bg-accent rounded-lg transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-accent">
            <div className="py-2 space-y-2">
              <Link to="/" className="block py-2 px-4 hover:bg-accent rounded">خانه</Link>
              <Link to="/services" className="block py-2 px-4 hover:bg-accent rounded">خدمات</Link>
              <Link to="/gallery" className="block py-2 px-4 hover:bg-accent rounded">گالری</Link>
              <Link to="/about" className="block py-2 px-4 hover:bg-accent rounded">درباره</Link>
              <Link to="/contact" className="block py-2 px-4 hover:bg-accent rounded">تماس</Link>
              {!isAuthenticated && (
                <Link to="/login" className="block py-2 px-4 bg-gold text-dark rounded font-semibold">
                  ورود
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
