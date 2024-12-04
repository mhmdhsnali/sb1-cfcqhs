import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useStore } from './lib/store';
import { Menu, X } from 'lucide-react';
import Banner from './components/Banner';
import Packages from './components/Packages';
import Challenge from './components/Challenge';
import Auth from './components/Auth';
import CalorieCalculator from './components/CalorieCalculator';
import MealScheduler from './components/MealScheduler';

function App() {
  const { user, logout } = useStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center">
                  <span className="text-xl font-bold text-emerald-600">وجبات صحية</span>
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-8 space-x-reverse">
                <Link to="/" className="text-gray-700 hover:text-emerald-500">الرئيسية</Link>
                <Link to="/calculator" className="text-gray-700 hover:text-emerald-500">حاسبة السعرات</Link>
                <Link to="/schedule" className="text-gray-700 hover:text-emerald-500">جدولة الوجبات</Link>
                {user ? (
                  <>
                    <span className="text-gray-700">مرحباً {user.name}</span>
                    <button
                      onClick={logout}
                      className="text-gray-700 hover:text-emerald-500"
                    >
                      تسجيل خروج
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600"
                  >
                    تسجيل الدخول
                  </Link>
                )}
              </div>

              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:text-emerald-500"
                >
                  الرئيسية
                </Link>
                <Link
                  to="/calculator"
                  className="block px-3 py-2 text-gray-700 hover:text-emerald-500"
                >
                  حاسبة السعرات
                </Link>
                <Link
                  to="/schedule"
                  className="block px-3 py-2 text-gray-700 hover:text-emerald-500"
                >
                  جدولة الوجبات
                </Link>
                {user ? (
                  <>
                    <span className="block px-3 py-2 text-gray-700">
                      مرحباً {user.name}
                    </span>
                    <button
                      onClick={logout}
                      className="block px-3 py-2 text-gray-700 hover:text-emerald-500"
                    >
                      تسجيل خروج
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block px-3 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600"
                  >
                    تسجيل الدخول
                  </Link>
                )}
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Packages />
                <Challenge />
              </>
            }
          />
          <Route path="/login" element={<Auth />} />
          <Route path="/calculator" element={<CalorieCalculator />} />
          <Route path="/schedule" element={<MealScheduler />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;