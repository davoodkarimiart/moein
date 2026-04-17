import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';


export default function EmployeeDashboard() {
  const { user, logout } = useAuth();
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

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
            داشبورد کارمند
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
        <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg p-6`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-cream' : 'text-dark'}`}>
            خوش آمدید، {user?.name}
          </h2>
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
            شما به‌عنوان کارمند وارد شده‌اید.
          </p>
        </div>
      </div>
    </div>
  );
}
