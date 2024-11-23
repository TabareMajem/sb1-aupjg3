import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import KidsLogin from './pages/KidsLogin';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import ParentDashboard from './pages/ParentDashboard';
import JournalPage from './pages/JournalPage';
import MangaStoriesPage from './pages/MangaStoriesPage';
import AICompanions from './pages/AICompanions';
import ARContainer from './components/ar/ARContainer';
import QuizScreen from './components/quiz/QuizScreen';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import SciencePage from './pages/SciencePage';
import UseCasesPage from './pages/UseCasesPage';
import DemoPage from './pages/DemoPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/kids-login" element={<KidsLogin />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/science" element={<SciencePage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/demo" element={<DemoPage />} />

          {/* Protected routes */}
          <Route path="/app" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            {/* Student routes */}
            <Route path="student-dashboard" element={<StudentDashboard />} />
            <Route path="journal" element={<JournalPage />} />
            <Route path="manga-stories" element={<MangaStoriesPage />} />
            <Route path="ai-companions" element={<AICompanions />} />
            <Route path="ar-activities" element={<ARContainer />} />
            <Route path="quiz" element={
              <QuizScreen 
                onBack={() => window.history.back()} 
                onComplete={(score) => console.log('Quiz completed with score:', score)} 
              />
            } />

            {/* Teacher routes */}
            <Route path="teacher-dashboard" element={<TeacherDashboard />} />
            
            {/* Parent routes */}
            <Route path="parent-dashboard" element={<ParentDashboard />} />

            {/* Default redirect based on role */}
            <Route index element={<Navigate to="/app/student-dashboard" replace />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;