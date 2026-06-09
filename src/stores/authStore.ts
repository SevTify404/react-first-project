import {
  removeCookie,
  setCookie,
} from "@/lib/cookie";
import type {
  LoginResponseData,
} from "@/types/schemas/authSchemas";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "@/constants/apiConstants.ts";



interface AuthStore {
  isAuthenticated: boolean;
  setAuth: (data: LoginResponseData) => void;
  clearAuth: () => void;
}



export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,

      setAuth: (data) => {
        // On stocke uniquement les tokens, pas encore le user
        setCookie(ACCESS_TOKEN, data.accessToken, { expires: 1, secure: true, sameSite: 'Strict' });
        setCookie(REFRESH_TOKEN, data.refreshToken, { expires: 7, secure: true, sameSite: 'Strict' });
        set({ isAuthenticated: true });
      },

      clearAuth: () => {
        removeCookie(ACCESS_TOKEN);
        removeCookie(REFRESH_TOKEN);
        set({isAuthenticated: false });
      },
    }),
    { name: 'auth' }
  )
);