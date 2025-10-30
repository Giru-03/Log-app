import { Mail, Phone, Edit3 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function AccountView() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-2xl mx-auto mt-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-linear-to-br from-blue-500 to-indigo-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold">
                {user.firstName[0]}{user.lastName[0]}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user.firstName} {user.lastName}</h2>
                <p className="text-gray-600">Account Overview</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/account/edit')}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              <Edit3 className="h-4 w-4" />
              <span>Edit</span>
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <Mail className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-lg text-gray-900">{user.email}</p>
              </div>
            </div>

            {user.phone && (
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Phone className="h-6 w-6 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-lg text-gray-900">{user.phone}</p>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Member since {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}