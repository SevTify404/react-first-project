import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '@/stores/auth.store';
import { PATHS_MAPPING } from '@/routing/paths-mapping';
import {  } from 'react-router';

interface Props {
  requiredRole?: 'admin' | 'user' | 'moderator';
}

export const ProtectedRoute: React.FC<Props> = ({ requiredRole }: Props) => {
  const { isAuthenticated, user } = useAuthStore();

  // Pas connecté → login
  if (!isAuthenticated) {
    return <Navigate to={PATHS_MAPPING.HOME} replace />;
  }

  // Connecté mais mauvais rôle → accès refusé
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to={PATHS_MAPPING.HOME} replace />;
  }
  {/**Ici on va ajouter un composant/page specifique pour les erreurs */}

  return <Outlet />;
}