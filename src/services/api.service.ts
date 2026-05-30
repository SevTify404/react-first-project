import { CLIENT_ROUTES_MAPPING, PATHS_MAPPING } from "@/routing/paths-mapping";
import axios from "axios";
import { router } from "../routing/router";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants/api.constants";
import toast from "react-hot-toast";
import { SettingError03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
import { useAuthStore } from "@/stores/authStore";
import { getCookie, setCookie } from "@/lib/cookie";


export const API_BASE_URL = "https://dummyjson.com";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 60_000,
});


// configuration de quelques intercepteurs direct
api.interceptors.request.use((config) => {
  const token = getCookie(ACCESS_TOKEN);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});


// Gestion global des erreurs
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes('/auth/login')
    ) {
      originalRequest._retry = true; 

      try {
        const currentRefreshToken = getCookie(REFRESH_TOKEN);

        if (!currentRefreshToken) {
          handleLogout();
          router.navigate(CLIENT_ROUTES_MAPPING.HOME);
          return Promise.reject(new Error("Session expirée"));
        }

        const { data } = await axios.post<RefreshData>(`${API_BASE_URL}/auth/refresh`, {
          refreshToken: currentRefreshToken,
        });

        setCookie(ACCESS_TOKEN, data.accessToken, {
          expires: 1,
          secure: true,
          sameSite: "Strict"
        });

        setCookie(REFRESH_TOKEN, data.refreshToken, {
          expires: 2,
          secure: true,
          sameSite: "Strict"
        });

        // accessToken et non refreshToken
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);

      } catch {
        handleLogout();
        handleToast();
        router.navigate(PATHS_MAPPING.HOME);
        return Promise.reject(new Error("Session expirée, veuillez vous reconnecter"));
      }
    }

    // Toutes les autres erreurs
    const message =
      error.response?.data?.message ??
      error.message ??
      "Une erreur est survenue, veuillez réessayer";

    return Promise.reject(new Error(message));
  },
);


function handleLogout() {
 useAuthStore.getState().clearAuth();
}

export interface RefreshData {
  accessToken: string,
  refreshToken: string
}

function handleToast() {
  toast(`Votre requette n'a pas pu aboutir`, {
      duration: 3000,
      position: 'top-right',
      icon: React.createElement(
        HugeiconsIcon, 
        { 
          icon: SettingError03Icon, 
          primaryColor: "red", 
          secondaryColor: "red"
        }
      )
  });
}
