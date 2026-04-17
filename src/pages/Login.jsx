import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { AlertCircle } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('admin@moein.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      const result = login(email, password);
      
      if (result.success) {
        if (result.role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/employee/dashboard');
        }
      } else {
        setError(result.message);
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 ${isDarkMode ? 'bg-slate-900' : 'bg-cream'}`}>
      <div className="w-full max-w-md">
        <div className={`rounded-2xl shadow-2xl p-8 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">📸</span>
            </div>
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>اتلیه معین</h1>
            <p className={isDarkMode ? 'text-gray-400 mt-2' : 'text-gray-500 mt-2'}>ورود به سیستم</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="text-red-600" size={20} />
                <span className="text-red-600 text-sm">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">ایمیل</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition"
                  placeholder="admin@moein.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">رمز عبور</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition"
                  placeholder="••••••••"
                  required
                />
              </div>

              <Button
                variant="gold"
                type="submit"
                disabled={loading}
                className="w-full"
              >
                {loading ? 'درحال ورود...' : 'ورود'}
              </Button>
            </form>

            {/* Demo Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs font-semibold text-blue-900 mb-2">💡 حساب نمایش:</p>
              <p className="text-xs text-blue-700">ایمیل: <code className="bg-white px-2 py-1 rounded">admin@moein.com</code></p>
              <p className="text-xs text-blue-700">رمز: <code className="bg-white px-2 py-1 rounded">123456</code></p>
            </div>
          </div>
        </div>
      </div>
    );
}
