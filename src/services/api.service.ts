import { PATHS_MAPPING } from "@/routing/paths-mapping";
import axios, { isAxiosError } from "axios";
import { router } from "../routing/router";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants/api.constants";

export const API_BASE_URL = "https://dummyjson.com";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 60_000,
});

// configuration de quelques intercepteurs direct

//Meme si dummyjson utilise les cookies, on va configure l'ajout auto dans le Bearer //voir docs
// comme ça le cookies servira de default fallback
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Gestion global des erreurs
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Vérifie si l'erreur est un 401 et si on n'a pas déjà tenté un retry pour cette requête
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const currentRefreshToken = localStorage.getItem(REFRESH_TOKEN);

        const { data } = await axios.post<RefreshData>(`${API_BASE_URL}/auth/refresh`, {
          refreshToken: currentRefreshToken,
        });

        // On stocke les nouveaux jetons
        localStorage.setItem(ACCESS_TOKEN, data.accessToken);
        localStorage.setItem(REFRESH_TOKEN, data.refreshToken);

        originalRequest.headers.Authorization = `Bearer ${data.refreshToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        if (
          isAxiosError(refreshError) &&
          refreshError.response?.status !== 200
        ) {
          handleLogout();
          router.navigate(PATHS_MAPPING.LOGIN);
        }
        throw new Error("Erreur survenue");
      }
    }

    throw new Error("Une erreur est survenue, veuillez réessayer");
  },
);

function handleLogout() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
}

export interface RefreshData {
  accessToken: string,
  refreshToken: string
}
