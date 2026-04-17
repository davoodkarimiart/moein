import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

const defaultEmployees = [
  { id: 1, name: 'احمد علی', email: 'ahmad@moein.com', phone: '09120000001', role: 'employee' },
  { id: 2, name: 'فاطمه رحیمی', email: 'fateme@moein.com', phone: '09120000002', role: 'employee' }
]

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [employees, setEmployees] = useState(defaultEmployees)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('user-moein')
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch (e) {
        console.error('Error parsing stored user:', e)
      }
    }
    setIsLoading(false)
  }, [])

  const login = (email, password) => {
    if (email === 'admin@moein.com' && password === '123456') {
      const adminUser = {
        id: 0,
        name: 'ادمین',
        email: 'admin@moein.com',
        role: 'admin'
      }
      setUser(adminUser)
      localStorage.setItem('user-moein', JSON.stringify(adminUser))
      return { success: true, role: 'admin' }
    }

    const employee = employees.find(emp => emp.email === email && password === '123456')
    if (employee) {
      setUser(employee)
      localStorage.setItem('user-moein', JSON.stringify(employee))
      return { success: true, role: 'employee' }
    }

    return { success: false, message: 'ایمیل یا رمز عبور نادرست است' }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user-moein')
  }

  const addEmployee = (name, email, phone) => {
    const newEmployee = {
      id: Math.max(...employees.map(e => e.id), 0) + 1,
      name,
      email,
      phone,
      role: 'employee'
    }
    setEmployees([...employees, newEmployee])
    return newEmployee
  }

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id))
  }

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoading,
      login,
      logout,
      employees,
      addEmployee,
      deleteEmployee
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth باید درون AuthProvider استفاده شود')
  }
  return context
}
