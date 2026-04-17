import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { LogOut, Users, Image, Settings } from 'lucide-react'
import Header from '../components/layout/Header'
import Button from '../components/common/Button'

const AdminDashboard = () => {
  const navigate = useNavigate()
  const { logout, employees, addEmployee, deleteEmployee } = useAuth()
  const { isDarkMode } = useTheme()
  const [activeTab, setActiveTab] = useState('overview')
  const [newEmp, setNewEmp] = useState({ name: '', email: '', phone: '' })

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleAddEmployee = (e) => {
    e.preventDefault()
    if (newEmp.name && newEmp.email && newEmp.phone) {
      addEmployee(newEmp.name, newEmp.email, newEmp.phone)
      setNewEmp({ name: '', email: '', phone: '' })
    }
  }

  return (
    <div>
      <Header />
      <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>داشبورد ادمین</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              <LogOut size={20} />
              خروج
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b-2 border-gold/20">
            {[
              { id: 'overview', label: 'پیشخوان', icon: Settings },
              { id: 'employees', label: 'کارمندان', icon: Users },
              { id: 'gallery', label: 'گالری', icon: Image },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'text-gold border-b-2 border-gold'
                    : isDarkMode ? 'text-gray-300 hover:text-cream' : 'text-gray-600 hover:text-dark'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'کل کارمندان', value: employees.length, color: 'bg-blue-500' },
                { title: 'کل گالری', value: 8, color: 'bg-green-500' },
                { title: 'رضایت مشتری', value: '۹۸%', color: 'bg-gold' }
              ].map((stat, i) => (
                <div key={i} className={`rounded-lg p-6 text-white ${stat.color}`}>
                  <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                  <p className="text-4xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Employees Tab */}
          {activeTab === 'employees' && (
            <div>
              <form onSubmit={handleAddEmployee} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg p-6 mb-8`}>
                <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>افزودن کارمند</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="نام"
                    value={newEmp.name}
                    onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
                    className={`px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-gold ${isDarkMode ? 'bg-slate-700 border-slate-600 text-cream' : 'border-gray-200'}`}
                  />
                  <input
                    type="email"
                    placeholder="ایمیل"
                    value={newEmp.email}
                    onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })}
                    className={`px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-gold ${isDarkMode ? 'bg-slate-700 border-slate-600 text-cream' : 'border-gray-200'}`}
                  />
                  <input
                    type="tel"
                    placeholder="شماره تماس"
                    value={newEmp.phone}
                    onChange={(e) => setNewEmp({ ...newEmp, phone: e.target.value })}
                    className={`px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-gold ${isDarkMode ? 'bg-slate-700 border-slate-600 text-cream' : 'border-gray-200'}`}
                  />
                </div>
                <Button variant="gold" type="submit" className="mt-4">
                  افزودن کارمند
                </Button>
              </form>

              <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg overflow-hidden`}>
                <table className="w-full">
                  <thead className={`${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                    <tr>
                      <th className={`px-4 py-3 text-right font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>نام</th>
                      <th className={`px-4 py-3 text-right font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>ایمیل</th>
                      <th className={`px-4 py-3 text-right font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>شماره تماس</th>
                      <th className={`px-4 py-3 text-right font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((emp) => (
                      <tr key={emp.id} className={`border-t ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                        <td className={`px-4 py-3 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>{emp.name}</td>
                        <td className={`px-4 py-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{emp.email}</td>
                        <td className={`px-4 py-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{emp.phone}</td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => deleteEmployee(emp.id)}
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition-colors text-sm"
                          >
                            حذف
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg p-6`}>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>مدیریت گالری</h2>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>قابلیت آپلود و مدیریت عکس‌ها در حال توسعه است.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
