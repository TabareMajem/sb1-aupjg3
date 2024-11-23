import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../lib/db/types';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginAsKid: (accessCode: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
  role: 'teacher' | 'parent';
};

// Mock users for testing
const MOCK_USERS = {
  'teacher@example.com': {
    _id: 'teacher-1',
    name: 'John Teacher',
    email: 'teacher@example.com',
    role: 'teacher' as const,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=teacher',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  'parent@example.com': {
    _id: 'parent-1',
    name: 'Jane Parent',
    email: 'parent@example.com',
    role: 'parent' as const,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=parent',
    createdAt: new Date(),
    updatedAt: new Date()
  }
};

// Mock access codes for testing
const MOCK_ACCESS_CODES = {
  '123456': {
    _id: 'kid-1',
    name: 'Sarah',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    parentId: 'parent-1',
    role: 'student' as const,
    createdAt: new Date(),
    updatedAt: new Date()
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('mockUser');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('mockUser');
        setUser(null);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login for testing
    const mockUser = MOCK_USERS[email as keyof typeof MOCK_USERS];
    if (!mockUser) {
      throw new Error('Invalid credentials');
    }

    // In a real app, you would validate the password here
    if (password !== 'password') {
      throw new Error('Invalid credentials');
    }

    localStorage.setItem('authToken', 'mock-token');
    localStorage.setItem('mockUser', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const loginAsKid = async (accessCode: string) => {
    const kidData = MOCK_ACCESS_CODES[accessCode as keyof typeof MOCK_ACCESS_CODES];
    
    if (!kidData) {
      throw new Error('Invalid access code');
    }

    localStorage.setItem('authToken', 'mock-kid-token');
    localStorage.setItem('mockUser', JSON.stringify(kidData));
    setUser(kidData);
  };

  const register = async (userData: RegisterData) => {
    // Mock registration for testing
    const mockUser = {
      _id: 'user-' + Math.random().toString(36).substr(2, 9),
      name: userData.name,
      email: userData.email,
      role: userData.role,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.name}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    localStorage.setItem('authToken', 'mock-token');
    localStorage.setItem('mockUser', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('mockUser');
    localStorage.removeItem('demoMode');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      loginAsKid, 
      register, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}