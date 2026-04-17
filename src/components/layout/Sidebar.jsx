import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Users, Image, BarChart3, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { logout, user } = useAuth();

  const menuItems = user?.role === 'admin' ? [
    { icon: BarChart3, label: 'داشبورد', path: '/admin/dashboard' },
    { icon: Users, label: 'مدیریت کارمندان', path: '/admin/dashboard#employees' },
    { icon: Image, label: 'مدیریت گالری', path: '/admin/dashboard#gallery' },
    { icon: Settings, label: 'تنظیمات', path: '/admin/dashboard#settings' },
  ] : [
    { icon: BarChart3, label: 'داشبورد', path: '/employee/dashboard' },
    { icon: Image, label: 'گالری شخصی', path: '/employee/dashboard#gallery' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${collapsed ? 'w-20' : 'w-64'} bg-dark text-cream transition-all duration-300 shadow-xl`}>
        <div className="p-6 border-b border-accent flex items-center justify-between">
          {!collapsed && <h2 className="text-xl font-bold text-gold">منو</h2>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 hover:bg-accent rounded transition"
          >
            {collapsed ? '→' : '←'}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-6 left-0 p-4 w-full">
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full p-3 bg-accent hover:bg-gold hover:text-dark rounded-lg transition-all"
          >
            <LogOut size={20} />
            {!collapsed && <span>خروج</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white shadow p-6">
          <h1 className="text-2xl font-bold text-dark">سلام {user?.name}</h1>
        </div>
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
