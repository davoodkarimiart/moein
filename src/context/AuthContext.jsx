import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // بارگذاری اطلاعات از localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    const storedEmployees = localStorage.getItem('employees');
    const storedGallery = localStorage.getItem('gallery');
    const storedBookings = localStorage.getItem('bookings');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    } else {
      const defaultEmployees = [
        {
          id: 1,
          name: 'علی احمدی',
          email: 'ali@moein.com',
          password: '123456',
          role: 'employee',
          joinDate: '1402/09/15'
        }
      ];
      setEmployees(defaultEmployees);
      localStorage.setItem('employees', JSON.stringify(defaultEmployees));
    }

    if (storedGallery) {
      setGallery(JSON.parse(storedGallery));
    } else {
      const defaultGallery = [
        {
          id: 1,
          title: 'عکس عروسی 1',
          category: 'wedding',
          url: 'https://via.placeholder.com/400x300?text=Wedding+1',
          uploadedBy: 'admin',
          uploadDate: '1405/01/15'
        },
        {
          id: 2,
          title: 'عکس عروسی 2',
          category: 'wedding',
          url: 'https://via.placeholder.com/400x300?text=Wedding+2',
          uploadedBy: 'admin',
          uploadDate: '1405/01/15'
        },
        {
          id: 3,
          title: 'عکس پروفایل',
          category: 'portrait',
          url: 'https://via.placeholder.com/400x300?text=Portrait+1',
          uploadedBy: 'admin',
          uploadDate: '1405/01/15'
        }
      ];
      setGallery(defaultGallery);
      localStorage.setItem('gallery', JSON.stringify(defaultGallery));
    }

    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    }
    
    setIsLoading(false);
  }, []);

  const login = (email, password) => {
    if (email === 'admin@moein.com' && password === '123456') {
      const adminUser = {
        id: 0,
        name: 'مدیر اتلیه',
        email: 'admin@moein.com',
        role: 'admin'
      };
      setUser(adminUser);
      localStorage.setItem('currentUser', JSON.stringify(adminUser));
      return { success: true, role: 'admin' };
    }

    const employee = employees.find(emp => emp.email === email && emp.password === password);
    if (employee) {
      const employeeUser = {
        id: employee.id,
        name: employee.name,
        email: employee.email,
        role: 'employee'
      };
      setUser(employeeUser);
      localStorage.setItem('currentUser', JSON.stringify(employeeUser));
      return { success: true, role: 'employee' };
    }

    return { success: false, message: 'ایمیل یا رمز عبور اشتباه است' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const addEmployee = (newEmployee) => {
    const employee = {
      ...newEmployee,
      id: Math.max(...employees.map(e => e.id), 0) + 1
    };
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    return employee;
  };

  const updateEmployee = (id, updatedData) => {
    const updatedEmployees = employees.map(emp =>
      emp.id === id ? { ...emp, ...updatedData } : emp
    );
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const addGalleryImage = (image) => {
    const newImage = {
      ...image,
      id: Math.max(...gallery.map(g => g.id), 0) + 1,
      uploadDate: new Date().toLocaleDateString('fa-IR')
    };
    const updatedGallery = [...gallery, newImage];
    setGallery(updatedGallery);
    localStorage.setItem('gallery', JSON.stringify(updatedGallery));
    return newImage;
  };

  const deleteGalleryImage = (id) => {
    const updatedGallery = gallery.filter(img => img.id !== id);
    setGallery(updatedGallery);
    localStorage.setItem('gallery', JSON.stringify(updatedGallery));
  };

  const addBooking = (booking) => {
    const newBooking = {
      ...booking,
      id: Math.max(...bookings.map(b => b.id || 0), 0) + 1,
      bookingDate: new Date().toLocaleDateString('fa-IR'),
      status: 'pending'
    };
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    return newBooking;
  };

  const value = {
    user,
    employees,
    gallery,
    bookings,
    isLoading,
    login,
    logout,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    addGalleryImage,
    deleteGalleryImage,
    addBooking,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth باید درون AuthProvider استفاده شود');
  }
  return context;
};
