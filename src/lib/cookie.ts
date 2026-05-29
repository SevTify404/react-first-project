// Noms des cookies centralisés 
export const ACCESS_TOKEN  = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';

interface CookieOptions {
  expires?: number; // en jours
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
  path?: string;
}

function buildCookieString(name: string, value: string, options: CookieOptions = {}): string {
  let cookie = `${name}=${value}`;

  if (options.expires) {
    const date = new Date();
    date.setDate(date.getDate() + options.expires);
    cookie += `; expires=${date.toUTCString()}`;
  }

  cookie += `; path=${options.path ?? '/'}`;
  if (options.secure)                cookie += '; Secure';
  if (options.sameSite)              cookie += `; SameSite=${options.sameSite}`;

  return cookie;
}

export function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  document.cookie = buildCookieString(name, value, options);
}

export function getCookie(name: string): string | undefined {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`))
    ?.split('=')[1];
}

export function removeCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}