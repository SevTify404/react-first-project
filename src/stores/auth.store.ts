import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  removeCookie,
  setCookie,
} from "@/lib/cookie";
import type {
  LoginResponseData,
  MeResponse,
} from "@/types/schemas/authSchemas";
import { create } from "zustand";
import { persist } from "zustand/middleware";



interface AuthStore {
  user: MeResponse | null;
  isAuthenticated: boolean;

  setAuth: (data: LoginResponseData) => void;
  clearAuth: () => void;
  setMe: (user: MeResponse) => void;
}



export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setAuth: (data) => {
        // On stocke uniquement les tokens, pas encore le user
        setCookie(ACCESS_TOKEN, data.accessToken, { expires: 1, secure: true, sameSite: 'Strict' });
        setCookie(REFRESH_TOKEN, data.refreshToken, { expires: 7, secure: true, sameSite: 'Strict' });
        set({ isAuthenticated: true });
      },

      // Appelé après le fetch /auth/me
      setMe: (user) => set({ user }),

      clearAuth: () => {
        removeCookie(ACCESS_TOKEN);
        removeCookie(REFRESH_TOKEN);
        set({ user: null, isAuthenticated: false });
      },
    }),
    { name: 'auth' }
  )
);