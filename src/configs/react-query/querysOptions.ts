import {getMe} from "@/services/authService.ts";
import {QUERY_KEYS_MAPPING} from "@/constants/tanstackQueryKeys.ts";

export const meQueryOptions = {
    queryKey: QUERY_KEYS_MAPPING.ME_QUERY,
    queryFn: async () => {
        return await getMe();
    },
    staleTime: 1000 * 60 * 5,  // La donnée est considérée fraîche pendant 5 minutes
    refetchInterval: 1000 * 60 * 15, // Polling : Rafraîchit silencieusement le user toutes les 15 minutes
    refetchIntervalInBackground: false, // Ne pas refresh si l'utilisateur a changé d'onglet (économie CPU/Réseau)
};