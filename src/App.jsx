import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-cream dark:bg-slate-900">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-gold/30 border-t-gold"></div>
      <p className="text-dark dark:text-cream font-semibold">درحال بارگذاری...</p>
    </div>
  </div>
)

const ProtectedRoute = ({ element, requiredRole }) => {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />
  }

  return element
}

function AppContent() {
  const isDashboard = window.location.pathname.includes('dashboard') || window.location.pathname === '/login'

  return (
    <div className="flex flex-col min-h-screen bg-cream dark:bg-slate-900 transition-colors duration-300">
      {!isDashboard && <Header />}
      
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route
              path="/admin/dashboard"
              element={<ProtectedRoute element={<AdminDashboard />} requiredRole="admin" />}
            />
            <Route
              path="/employee/dashboard"
              element={<ProtectedRoute element={<EmployeeDashboard />} requiredRole="employee" />}
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {!isDashboard && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
