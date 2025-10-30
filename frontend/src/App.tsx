import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AccountView from './components/AccountView';
import AccountEdit from './components/AccountEdit';
import LoadingSpinner from './components/LoadingSpinner';
import { useEffect, useRef } from 'react';

function AppContent() {
  const { user, loading, login, register, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const hasRedirected = useRef(false); // Track if we already redirected

  // Only run once on mount
  useEffect(() => {
    if (!loading && !hasRedirected.current) {
      hasRedirected.current = true;

      if (user) {
        // If logged in → go to /account (unless already there)
        if (!location.pathname.startsWith('/account')) {
          navigate('/account', { replace: true });
        }
      } else {
        // If not logged in → go to /login (unless already there)
        if (location.pathname !== '/login' && location.pathname !== '/register') {
          navigate('/login', { replace: true });
        }
      }
    }
  }, [loading, user, navigate, location.pathname]);

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);
    navigate('/account', { replace: true });
  };

  const handleRegister = async (payload: any) => {
    await register(payload);
    navigate('/account', { replace: true });
  };

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      {user && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/account" replace /> : <LoginForm onLogin={handleLogin} />} />
        <Route path="/register" element={user ? <Navigate to="/account" replace /> : <RegisterForm onRegister={handleRegister} />} />
        <Route path="/account" element={user ? <AccountView /> : <Navigate to="/login" replace />} />
        <Route path="/account/edit" element={user ? <AccountEdit /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to={user ? '/account' : '/login'} replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <AppContent />
      </div>
    </BrowserRouter>
  );
}