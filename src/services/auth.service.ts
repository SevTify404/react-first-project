import {
  type LoginData,
  type LoginResponseData,
  type RefreshTokenResponseData,
} from "@/types/schemas/authSchemas";
import { api } from "./api.service";

const AUTH_PATH_MAPPING = {
  LOGIN: "/auth/login",
  REFRESH: "/auth/refresh",
  ME: "/auth/me",
};

export async function login({ username, password, expiresInMins, }: LoginData): Promise<LoginResponseData> {
  const { data } = await api.post(AUTH_PATH_MAPPING.LOGIN, { username, password, expiresInMins, });
  return data;
}

export async function sendRefreshToken({ refreshToken, }: { refreshToken: string; }): Promise<RefreshTokenResponseData> {
  const { data } = await api.post(AUTH_PATH_MAPPING.REFRESH, { refreshToken });
  return data;
}
