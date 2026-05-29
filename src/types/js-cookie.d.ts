declare module 'js-cookie' {
  interface CookieAttributes {
    expires?: number | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
  }

  function get(name: string): string | undefined;
  function set(name: string, value: string, attributes?: CookieAttributes): string | undefined;
  function remove(name: string, attributes?: CookieAttributes): void;

  export { get, set, remove, CookieAttributes };
}