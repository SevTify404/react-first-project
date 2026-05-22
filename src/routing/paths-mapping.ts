// vous definisssez juste une fois les  sous-routes
const ADMIN_SUB_ROUTES = {
  DASHBOARD: 'dashboard',
  PRODUCTS: 'produits',
  ORDERS: 'commandes',
  CUSTOMERS: 'clients',
  LOGS: 'logs',
  SETTINGS: 'settings',
} as const;


export const PATHS_MAPPING = {
  HOME: '/',
  ADMIN: '/admin',
  ...ADMIN_SUB_ROUTES
} as const; //ca va generer automatiquement  l'objet global des chemins

export const FULL_ADMIN_ROUTES_MAPPING = Object.fromEntries(
  Object.entries(ADMIN_SUB_ROUTES).map(([key, val]) => [key, `${PATHS_MAPPING.ADMIN}/${val}`])
) as { readonly [K in keyof typeof ADMIN_SUB_ROUTES]: `/admin/${typeof ADMIN_SUB_ROUTES[K]}` };
