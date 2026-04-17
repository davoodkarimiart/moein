import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { useAuth } from '../context/AuthContext';
import { Trash2, Edit, Plus, Upload } from 'lucide-react';

export default function AdminDashboard() {
  const { employees, addEmployee, deleteEmployee, gallery, addGalleryImage } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'employee' });
  const [galleryData, setGalleryData] = useState({ title: '', category: 'wedding' });

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      addEmployee(formData);
      setFormData({ name: '', email: '', password: '', role: 'employee' });
      setShowEmployeeModal(false);
    }
  };

  const handleAddGallery = (e) => {
    e.preventDefault();
    if (galleryData.title) {
      addGalleryImage({
        title: galleryData.title,
        category: galleryData.category,
        url: `https://via.placeholder.com/400x300?text=${galleryData.title}`,
        uploadedBy: 'admin'
      });
      setGalleryData({ title: '', category: 'wedding' });
      setShowGalleryModal(false);
    }
  };

  return (
    <Sidebar>
      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex gap-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 font-semibold border-b-2 transition ${
              activeTab === 'overview'
                ? 'border-gold text-gold'
                : 'border-transparent text-gray-500 hover:text-dark'
            }`}
          >
            نمای کلی
          </button>
          <button
            onClick={() => setActiveTab('employees')}
            className={`py-3 px-4 font-semibold border-b-2 transition ${
              activeTab === 'employees'
                ? 'border-gold text-gold'
                : 'border-transparent text-gray-500 hover:text-dark'
            }`}
          >
            کارمندان
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`py-3 px-4 font-semibold border-b-2 transition ${
              activeTab === 'gallery'
                ? 'border-gold text-gold'
                : 'border-transparent text-gray-500 hover:text-dark'
            }`}
          >
            گالری
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="text-4xl font-bold text-gold mb-2">{employees.length + 1}</div>
              <p className="text-gray-600">کل کارمندان</p>
            </Card>
            <Card>
              <div className="text-4xl font-bold text-gold mb-2">{gallery.length}</div>
              <p className="text-gray-600">عکس‌های گالری</p>
            </Card>
            <Card>
              <div className="text-4xl font-bold text-gold mb-2">۱۲۸</div>
              <p className="text-gray-600">کل رزروها</p>
            </Card>
          </div>
        )}

        {/* Employees Tab */}
        {activeTab === 'employees' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-dark">مدیریت کارمندان</h2>
              <Button
                variant="gold"
                onClick={() => setShowEmployeeModal(true)}
                className="flex items-center gap-2"
              >
                <Plus size={20} /> کارمند جدید
              </Button>
            </div>

            <div className="space-y-4">
              {employees.map((emp) => (
                <Card key={emp.id} className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-dark">{emp.name}</h3>
                    <p className="text-sm text-gray-500">{emp.email}</p>
                    <p className="text-xs text-gray-400 mt-1">تاریخ عضویت: {emp.joinDate}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-blue-100 rounded transition">
                      <Edit size={20} className="text-blue-600" />
                    </button>
                    <button
                      onClick={() => deleteEmployee(emp.id)}
                      className="p-2 hover:bg-red-100 rounded transition"
                    >
                      <Trash2 size={20} className="text-red-600" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-dark">مدیریت گالری</h2>
              <Button
                variant="gold"
                onClick={() => setShowGalleryModal(true)}
                className="flex items-center gap-2"
              >
                <Upload size={20} /> افزودن عکس
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {gallery.map((img) => (
                <Card key={img.id} className="p-0 overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <p className="font-semibold text-dark text-sm">{img.title}</p>
                    <p className="text-xs text-gray-500">{img.category}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <Modal
        isOpen={showEmployeeModal}
        onClose={() => setShowEmployeeModal(false)}
        title="افزودن کارمند جدید"
      >
        <form onSubmit={handleAddEmployee} className="space-y-4">
          <input
            type="text"
            placeholder="نام"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          />
          <input
            type="email"
            placeholder="ایمیل"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          />
          <input
            type="password"
            placeholder="رمز عبور"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          />
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          >
            <option value="employee">کارمند</option>
            <option value="admin">مدیر</option>
          </select>
          <Button type="submit" variant="gold" className="w-full">
            افزودن
          </Button>
        </form>
      </Modal>

      <Modal
        isOpen={showGalleryModal}
        onClose={() => setShowGalleryModal(false)}
        title="افزودن عکس"
      >
        <form onSubmit={handleAddGallery} className="space-y-4">
          <input
            type="text"
            placeholder="عنوان عکس"
            value={galleryData.title}
            onChange={(e) => setGalleryData({ ...galleryData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          />
          <select
            value={galleryData.category}
            onChange={(e) => setGalleryData({ ...galleryData, category: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          >
            <option value="wedding">عروسی</option>
            <option value="portrait">پرتره</option>
            <option value="event">رویداد</option>
            <option value="commercial">تجاری</option>
          </select>
          <Button type="submit" variant="gold" className="w-full">
            افزودن
          </Button>
        </form>
      </Modal>
    </Sidebar>
  );
}
