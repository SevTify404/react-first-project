/**
 * Chemins des routes de l'application
 * Définitions centralisées des chemins pour éviter les strings hardcodées
 */

export const PATHS_MAPPING = {
  // Routes principales
  HOME: '/',

  // Routes d'administration
  ADMIN: '/admin',
  ADMIN_DASHBOARD: 'dashboard',
  ADMIN_PRODUCTS: 'produits',
  ADMIN_ORDERS: 'commandes',
  ADMIN_CUSTOMERS: 'clients',
  ADMIN_LOGS: 'logs',
  ADMIN_SETTINGS: 'settings',

  // Routes d'authentification
  LOGIN: '/auth/login',
  REGISTER: '/auth/register'
} as const;

/**
 * Fonction utilitaire pour générer les routes d'administration complètes
 * Utilisation : getAdminRoute(PATHS_MAPPING.ADMIN_DASHBOARD) => '/admin/dashboard'
 */
export const getAdminRoute = (path: string): string => {
  return `${PATHS_MAPPING.ADMIN}/${path}`;
};

/**
 * Routes complètes d'administration pour l'accès facile et la navigation
 */
export const FULL_ADMIN_ROUTES_MAPPING = {
  DASHBOARD: getAdminRoute(PATHS_MAPPING.ADMIN_DASHBOARD),
  PRODUCTS: getAdminRoute(PATHS_MAPPING.ADMIN_PRODUCTS),
  ORDERS: getAdminRoute(PATHS_MAPPING.ADMIN_ORDERS),
  CUSTOMERS: getAdminRoute(PATHS_MAPPING.ADMIN_CUSTOMERS),
  LOGS: getAdminRoute(PATHS_MAPPING.ADMIN_LOGS),
  SETTINGS: getAdminRoute(PATHS_MAPPING.ADMIN_SETTINGS),
} as const;

