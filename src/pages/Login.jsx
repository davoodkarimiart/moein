import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { LogIn } from 'lucide-react'
import Button from '../components/common/Button'

const Login = () => {
  const [email, setEmail] = useState('admin@moein.com')
  const [password, setPassword] = useState('123456')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const { isDarkMode } = useTheme()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      const result = login(email, password)
      if (result.success) {
        navigate(result.role === 'admin' ? '/admin/dashboard' : '/employee/dashboard')
      } else {
        setError(result.message)
      }
      setLoading(false)
    }, 500)
  }

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 ${isDarkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-gold/5 to-cream'}`}>
      <div className="w-full max-w-md">
        <div className={`rounded-2xl shadow-2xl p-8 border border-gold/20 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn size={32} className="text-gold" />
            </div>
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>اتلیه معین</h1>
            <p className={isDarkMode ? 'text-gray-400 mt-2' : 'text-gray-500 mt-2'}>ورود به سیستم</p>
          </div>

          {error && (
            <div className={`mb-6 p-4 border rounded-lg text-sm ${isDarkMode ? 'bg-red-900/30 border-red-700 text-red-200' : 'bg-red-50 border-red-200 text-red-600'}`}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>ایمیل</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gold transition-colors ${isDarkMode ? 'bg-slate-700 border-slate-600 text-cream placeholder-gray-400' : 'bg-white border-gray-200 text-dark placeholder-gray-500'}`}
                placeholder="admin@moein.com"
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>رمز عبور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gold transition-colors ${isDarkMode ? 'bg-slate-700 border-slate-600 text-cream placeholder-gray-400' : 'bg-white border-gray-200 text-dark placeholder-gray-500'}`}
                placeholder="••••••••"
                required
              />
            </div>

            <Button
              variant="gold"
              type="submit"
              disabled={loading}
              className="w-full"
              size="md"
            >
              {loading ? 'درحال ورود...' : 'ورود'}
            </Button>
          </form>

          <div className={`mt-8 p-4 rounded-lg border ${isDarkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'}`}>
            <p className={`text-xs font-semibold mb-2 ${isDarkMode ? 'text-blue-200' : 'text-blue-900'}`}>💡 حساب نمایش:</p>
            <p className={`text-xs ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>ایمیل: admin@moein.com</p>
            <p className={`text-xs ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>رمز: 123456</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
