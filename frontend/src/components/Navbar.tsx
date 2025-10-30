import { LogOut, Settings } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onLogout: () => void;
}

export default function Navbar({ onLogout }: NavbarProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <Link to="/account" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg">
                <img src="./favicon.svg" alt="" width='50px'  />
              </div>
              
            </Link>

            <div className="hidden md:flex space-x-1">
              <Link
                to="/account"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isActive('/account')
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Profile
              </Link>
              <Link
                to="/account/edit"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isActive('/account/edit')
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Settings className="h-4 w-4 inline mr-1" />
                Edit
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:block text-sm font-medium text-gray-700">
              Hi, {user.firstName}
            </span>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
            >
              <LogOut className="h-4 w-4" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}