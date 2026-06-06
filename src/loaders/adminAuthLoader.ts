import { PATHS_MAPPING } from "@/routing/paths-mapping";
import type { MeResponse } from "@/types/schemas/authSchemas";
import { CircleXIcon } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { redirect } from "react-router";
import {queryClient} from "@/configs/react-query/configs.ts";
import {meQueryOptions} from "@/configs/react-query/querysOptions.ts";
import {useAuthStore} from "@/stores/authStore.ts";
import {sleep} from "@/lib/utils.ts";
/**
 * Loader de protection des routes admin, vérifie que l'utilisateur est connecté et a le role admin
 * @returns les infos du user connecté (me) pour éviter un nouvel appel api dans les composants enfants
 * @throws une redirection vers la home page si l'utilisateur n'est pas admin ou pas connecté
 * @note ce loader est utilisé dans les routes admin protégées (dashboard, users, products) et est appelé à chaque navigation vers ces routes
 * @note on utilise le store pour vérifier le role de l'utilisateur sans faire un nouvel appel api, le loader est rapide et efficace
 * @note en cas d'erreur (pas admin ou pas connecté), on affiche un toast d'erreur avant de rediriger
 */
export default async function adminAuthLoader(): Promise<MeResponse> {
  const isAuthenticated = useAuthStore.getState().isAuthenticated;

  if (!isAuthenticated) {
    triggerUnauthorizedToast()
    throw redirect(PATHS_MAPPING.HOME);
  }

  // Juste pour test un rendu
  await sleep(5);

  const user = await queryClient.ensureQueryData(meQueryOptions)

  if (user?.role !== "admin") {
    triggerUnauthorizedToast()
    throw redirect(PATHS_MAPPING.HOME);
  }

  // Pour l'instant on ne fait rien avec ce retour,
  //  mais bon on sait jamais
  return user;
}

function triggerUnauthorizedToast() {
  toast("Tu n'es pas autorisé petit", {
    duration: 5000,
    position: "top-right",
    icon: React.createElement(CircleXIcon)
  });
}
