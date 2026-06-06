import { CLIENT_ROUTES_MAPPING, FULL_ADMIN_ROUTES_MAPPING } from "@/routing/paths-mapping";
import { router } from "@/routing/router";
import { getMe, login } from "@/services/authService.ts";
import { useAuthStore } from "@/stores/authStore";
import { ConnectIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import {queryClient} from "@/configs/react-query/configs.ts";
import {QUERY_KEYS_MAPPING} from "@/constants/tanstackQueryKeys.ts";

export function useLogin() {
  const { setAuth } = useAuthStore();
  return useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      // on stocke les infos de base

      // on stock les infos du current user avec access au role
      const me = await getMe(data.accessToken);

      // On remplit manuellement le cache de React Query avec
      // les données fraîches du user connecté, pour éviter un nouvel appel api dans les
      // composants enfants qui utilisent le meQuery

      queryClient.setQueryData(QUERY_KEYS_MAPPING.ME_QUERY, me);

      setAuth(data);
      // rediraction en fonction du role
      if (me.role === "admin") {
        await router.navigate(FULL_ADMIN_ROUTES_MAPPING.DASHBOARD);
      } else {
        await router.navigate(CLIENT_ROUTES_MAPPING.HOME);
      }
      handleToast();
    },
  });
}

// fonction toast 
function handleToast() {
  toast(`Connexion réussie`, {
      duration: 4000,
      position: 'top-right',
      icon: React.createElement(
        HugeiconsIcon, 
        { 
          icon: ConnectIcon,
        }
      )
  });
}
