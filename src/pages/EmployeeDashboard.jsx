import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { useAuth } from '../context/AuthContext';
import { Plus, Calendar } from 'lucide-react';

export default function EmployeeDashboard() {
  const { gallery, addBooking, user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    clientName: '',
    clientEmail: '',
    serviceType: 'wedding',
    eventDate: '',
    notes: ''
  });

  const handleBooking = (e) => {
    e.preventDefault();
    if (bookingData.clientName && bookingData.eventDate) {
      addBooking({
        ...bookingData,
        employeeId: user.id,
        employeeName: user.name
      });
      setBookingData({
        clientName: '',
        clientEmail: '',
        serviceType: 'wedding',
        eventDate: '',
        notes: ''
      });
      setShowBookingModal(false);
      alert('رزرو با موفقیت ثبت شد!');
    }
  };

  const employeeGallery = gallery.filter(img => img.uploadedBy === 'employee' || img.uploadedBy === 'admin');

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
            onClick={() => setActiveTab('gallery')}
            className={`py-3 px-4 font-semibold border-b-2 transition ${
              activeTab === 'gallery'
                ? 'border-gold text-gold'
                : 'border-transparent text-gray-500 hover:text-dark'
            }`}
          >
            گالری شخصی
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`py-3 px-4 font-semibold border-b-2 transition ${
              activeTab === 'bookings'
                ? 'border-gold text-gold'
                : 'border-transparent text-gray-500 hover:text-dark'
            }`}
          >
            رزروها
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold text-dark mb-6">خوش آمدید {user?.name}!</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <div className="text-4xl font-bold text-gold mb-2">{employeeGallery.length}</div>
                <p className="text-gray-600">عکس‌های آپلود شده</p>
              </Card>
              <Card>
                <div className="text-4xl font-bold text-gold mb-2">۲۳</div>
                <p className="text-gray-600">کل رزروها</p>
              </Card>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div>
            <h2 className="text-2xl font-bold text-dark mb-6">گالری شخصی</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {employeeGallery.slice(0, 8).map((img) => (
                <Card key={img.id} className="p-0 overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <p className="font-semibold text-dark text-sm">{img.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-dark">ثبت رزرو جدید</h2>
              <Button
                variant="gold"
                onClick={() => setShowBookingModal(true)}
                className="flex items-center gap-2"
              >
                <Plus size={20} /> رزرو جدید
              </Button>
            </div>

            <Card>
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">هنوز رزروی ثبت نشده‌است</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <Modal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        title="ثبت رزرو جدید"
      >
        <form onSubmit={handleBooking} className="space-y-4">
          <input
            type="text"
            placeholder="نام مشتری"
            value={bookingData.clientName}
            onChange={(e) => setBookingData({ ...bookingData, clientName: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
            required
          />
          <input
            type="email"
            placeholder="ایمیل مشتری"
            value={bookingData.clientEmail}
            onChange={(e) => setBookingData({ ...bookingData, clientEmail: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          />
          <select
            value={bookingData.serviceType}
            onChange={(e) => setBookingData({ ...bookingData, serviceType: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          >
            <option value="wedding">عروسی</option>
            <option value="portrait">پرتره</option>
            <option value="event">رویداد</option>
            <option value="commercial">تجاری</option>
          </select>
          <input
            type="date"
            value={bookingData.eventDate}
            onChange={(e) => setBookingData({ ...bookingData, eventDate: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
            required
          />
          <textarea
            placeholder="یادداشت‌ها"
            value={bookingData.notes}
            onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          />
          <Button type="submit" variant="gold" className="w-full">
            ثبت رزرو
          </Button>
        </form>
      </Modal>
    </Sidebar>
  );
}
