import {useAuthStore} from "@/stores/authStore"

import {useQuery} from '@tanstack/react-query';
import {meQueryOptions} from "@/configs/react-query/querysOptions.ts";

export function useUserAccount() {
    const {isAuthenticated} = useAuthStore();

    const query = useQuery({
        ...meQueryOptions,
        enabled: isAuthenticated, // Ne déclenche la requête que si on est connecté
    });

    return {
        user: query.data,
        isLoading: query.isLoading,
        isAuthenticated: isAuthenticated && !!query.data,
        isFetching: query.isFetching, // Utile si on veux montrer un spinner discret lors du background refresh
        error: query.error,
    };
}