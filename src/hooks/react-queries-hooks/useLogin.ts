import { CLIENT_ROUTES_MAPPING, FULL_ADMIN_ROUTES_MAPPING } from "@/routing/paths-mapping";
import { router } from "@/routing/router";
import { getMe, login } from "@/services/auth.service";
import { useAuthStore } from "@/stores/authStore";
import { ConnectIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

export function useLogin() {
  const { setAuth, setMe } = useAuthStore();
  return useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      // on stocke les infos de base
      setAuth(data);

      // on stock les infos du current user avec access au role
      const me = await getMe(data.accessToken);
      setMe(me);

      // rediraction en fonction du role
      if (me.role === "admin") {
        router.navigate(FULL_ADMIN_ROUTES_MAPPING.DASHBOARD);
      } else {
        router.navigate(CLIENT_ROUTES_MAPPING.HOME);
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
