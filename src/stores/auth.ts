import { create } from "zustand";
import { authAPI, setAuthToken, clearAuthToken, type User } from "@/lib/api";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, fullName?: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const response = await authAPI.login({ email, password });
      setAuthToken(response.data.access_token);
      const userResponse = await authAPI.me();
      set({ user: userResponse.data, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (email: string, password: string, fullName?: string) => {
    set({ isLoading: true });
    try {
      await authAPI.register({ email, password, full_name: fullName });
      // 注册后自动登录
      await useAuthStore.getState().login(email, password);
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: () => {
    clearAuthToken();
    set({ user: null, isAuthenticated: false });
  },

  checkAuth: async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      set({ isAuthenticated: false, user: null });
      return;
    }
    try {
      const response = await authAPI.me();
      set({ user: response.data, isAuthenticated: true });
    } catch {
      clearAuthToken();
      set({ user: null, isAuthenticated: false });
    }
  },
}));