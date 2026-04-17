import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
  const { user, employees, addEmployee, deleteEmployee, logout } = useAuth();
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      addEmployee({
        ...formData,
        role: 'employee',
        joinDate: new Date().toLocaleDateString('fa-IR')
      });
      setFormData({ name: '', email: '', password: '' });
      setShowAddEmployee(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-cream'}`}>
      {/* Header */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-200'} p-4`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>
            داشبورد ادمین
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            <LogOut size={20} />
            خروج
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {[
            { id: 'overview', label: 'خانه' },
            { id: 'employees', label: 'مدیریت کارمندان' },
            { id: 'gallery', label: 'مدیریت گالری' },
            { id: 'settings', label: 'تنظیمات' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded transition ${
                activeTab === tab.id
                  ? `bg-gold text-dark font-semibold`
                  : `${isDarkMode ? 'bg-slate-800 text-cream hover:bg-slate-700' : 'bg-gray-100 text-dark hover:bg-gray-200'}`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg p-6`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>
              خوش آمدید، {user?.name}
            </h2>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              شما به‌عنوان مدیر سیستم وارد شده‌اید.
            </p>
          </div>
        )}

        {/* Employees Tab */}
        {activeTab === 'employees' && (
          <div>
            <button
              onClick={() => setShowAddEmployee(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gold text-dark rounded font-semibold hover:bg-yellow-600 transition mb-6"
            >
              <Plus size={20} />
              افزودن کارمند جدید
            </button>

            {/* Add Employee Modal */}
            {showAddEmployee && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg p-6 max-w-md w-full`}>
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>
                    افزودن کارمند جدید
                  </h3>
                  <form onSubmit={handleAddEmployee} className="space-y-4">
                    <input
                      type="text"
                      placeholder="نام"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full px-4 py-2 rounded border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-cream' : 'bg-white border-gray-300'}`}
                      required
                    />
                    <input
                      type="email"
                      placeholder="ایمیل"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full px-4 py-2 rounded border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-cream' : 'bg-white border-gray-300'}`}
                      required
                    />
                    <input
                      type="password"
                      placeholder="رمز عبور"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className={`w-full px-4 py-2 rounded border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-cream' : 'bg-white border-gray-300'}`}
                      required
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 px-4 py-2 bg-gold text-dark rounded font-semibold hover:bg-yellow-600"
                      >
                        افزودن
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowAddEmployee(false)}
                        className={`flex-1 px-4 py-2 rounded font-semibold ${isDarkMode ? 'bg-slate-700 text-cream hover:bg-slate-600' : 'bg-gray-200 text-dark hover:bg-gray-300'}`}
                      >
                        انصراف
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Employees List */}
            <div className="grid gap-4">
              {employees.map(emp => (
                <div key={emp.id} className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg p-4 flex justify-between items-center`}>
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-cream' : 'text-dark'}`}>{emp.name}</h4>
                    <p className={isDarkMode ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>{emp.email}</p>
                  </div>
                  <button
                    onClick={() => deleteEmployee(emp.id)}
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg p-6`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>
              مدیریت گالری
            </h2>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              بخش آپلود عکس به زودی فعال می‌شود
            </p>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg p-6`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>
              تنظیمات
            </h2>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              تنظیمات سایت به زودی فعال می‌شود
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
