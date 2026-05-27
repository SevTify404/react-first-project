import {
  type LoginData,
  type LoginResponseData,
  type MeResponse,
  type RefreshTokenResponseData,
} from "@/types/schemas/authSchemas";
import { api } from "./api.service";

const AUTH_PATH_MAPPING = {
  LOGIN: "/auth/login",
  REFRESH: "/auth/refresh",
  ME: "/auth/me",
};

export async function login({
  username,
  password,
  expiresInMins,
}: LoginData): Promise<LoginResponseData> {
  const { data } = await api.post(AUTH_PATH_MAPPING.LOGIN, {
    username,
    password,
    expiresInMins,
  });
  console.log("login response:", data);
  return data;
}

export async function sendRefreshToken({
  refreshToken,
}: {
  refreshToken: string;
}): Promise<RefreshTokenResponseData> {
  const { data } = await api.post(AUTH_PATH_MAPPING.REFRESH, { refreshToken });
  return data;
}

export async function getMe(token?: string): Promise<MeResponse> {
  // Si on passe un token manuellement, on l'utilise
  // sinon l'intercepteur s'en chargera via les cookies
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

  const { data } = await api.get<MeResponse>(AUTH_PATH_MAPPING.ME, config);
  return data;
}
