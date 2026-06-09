interface CookieOptions {
  expires?: number; // en jours
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
  path?: string;
}

function buildCookieString(name: string, value: string, options: CookieOptions = {}): string {
  let cookie = `${name}=${encodeURIComponent(value)}`;

  if (options.expires) {
    const date = new Date();
    date.setDate(date.getDate() + options.expires);
    cookie += `; expires=${date.toUTCString()}`;
  }

  cookie += `; path=${options.path ?? '/'}`;
  // On force 'Secure' uniquement si on est en HTTPS (et pas sur localhost en HTTP)
  const isHttps = typeof globalThis.window !== 'undefined' && globalThis.location.protocol === 'https:';
  if (options.secure && isHttps) {
    cookie += '; Secure';
  }

  // Si SameSite=Strict est demandé mais qu'on est en HTTP local, certains navigateurs boudent.
  // On peut laisser SameSite=Lax ou Strict en local tant que 'Secure' n'est pas forcé en HTTP.
  if (options.sameSite) {
    cookie += `; SameSite=${options.sameSite}`;
  }

  return cookie;
}

export function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  document.cookie = buildCookieString(name, value, options);
}

export function getCookie(name: string): string | undefined {
  const value = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${name}=`))
      ?.split('=')[1];

  return value ? decodeURIComponent(value) : undefined;
}

export function removeCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}