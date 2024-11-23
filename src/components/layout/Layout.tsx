import React from 'react';
import { Link, useLocation, Navigate, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Map, 
  LayoutDashboard, 
  Users, 
  Sparkles,
  Brain,
  BookOpen,
  PenTool,
  BarChart2,
  Settings,
  X,
  Menu
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const { user } = useAuth();

  // Redirect based on user role
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const getNavItems = () => {
    if (user?.role === 'student') {
      return [
        { path: '/app/student-dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/app/journal', icon: PenTool, label: 'Journal' },
        { path: '/app/manga-stories', icon: BookOpen, label: 'My Manga Stories' },
        { path: '/app/ai-companions', icon: Brain, label: 'AI Companions' },
        { path: '/app/ar-activities', icon: Sparkles, label: 'AR Activities' },
        { path: '/app/quiz', icon: Brain, label: 'Quiz' }
      ];
    }
    
    if (user?.role === 'teacher') {
      return [
        { path: '/app/teacher-dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/app/teacher-dashboard?tab=students', icon: Users, label: 'Students' },
        { path: '/app/teacher-dashboard?tab=activities', icon: BookOpen, label: 'Activities' },
        { path: '/app/teacher-dashboard?tab=analytics', icon: BarChart2, label: 'Analytics' },
        { path: '/app/teacher-dashboard?tab=settings', icon: Settings, label: 'Settings' }
      ];
    }
    
    if (user?.role === 'parent') {
      return [
        { path: '/app/parent-dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/app/parent-dashboard?tab=progress', icon: BarChart2, label: 'Progress' },
        { path: '/app/parent-dashboard?tab=activities', icon: Sparkles, label: 'Activities' }
      ];
    }

    return [];
  };

  const navItems = getNavItems();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg md:hidden"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-600" />
        ) : (
          <Menu className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`fixed inset-y-0 left-0 transform ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 w-64 bg-white border-r border-gray-200 
        transition-transform duration-200 ease-in-out z-40`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-purple-600">MangaChat</h1>
          <p className="text-sm text-gray-600">Welcome, {user?.name}</p>
        </div>

        <div className="px-4">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg 
                mb-2 transition-colors ${
                  location.pathname === path.split('?')[0]
                    ? 'bg-purple-50 text-purple-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
              {location.pathname === path.split('?')[0] && (
                <motion.div
                  layoutId="active-pill"
                  className="ml-auto w-2 h-2 rounded-full bg-purple-600"
                />
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="md:pl-64">
        <main className="min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}