import { create } from 'zustand';
import type { Profile } from '../types';

interface AuthState {
  user: Profile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: Partial<Profile>) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    // In a real app, this would make an API call
    const mockUser: Profile = {
      id: '1',
      name: 'John Doe',
      email,
      title: 'Software Developer',
      bio: 'Passionate about coding',
      expertise: [{ id: '1', name: 'JavaScript' }],
      isMentor: false,
    };
    
    set({ user: mockUser, isAuthenticated: true });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  register: async (userData) => {
    // In a real app, this would make an API call
    const mockUser: Profile = {
      id: '1',
      name: userData.name || '',
      email: userData.email || '',
      title: userData.title || '',
      bio: userData.bio || '',
      expertise: userData.expertise || [],
      isMentor: userData.isMentor || false,
    };
    
    set({ user: mockUser, isAuthenticated: true });
  },
}));