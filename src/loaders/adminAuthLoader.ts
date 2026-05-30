import { PATHS_MAPPING } from "@/routing/paths-mapping";
import { useAuthStore } from "@/stores/authStore";
import type { MeResponse } from "@/types/schemas/authSchemas";
import { CircleXIcon } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { redirect } from "react-router";
/**
 * Loader de protection des routes admin, vérifie que l'utilisateur est connecté et a le role admin
 * @returns les infos du user connecté (me) pour éviter un nouvel appel api dans les composants enfants
 * @throws une redirection vers la home page si l'utilisateur n'est pas admin ou pas connecté
 * @note ce loader est utilisé dans les routes admin protégées (dashboard, users, products) et est appelé à chaque navigation vers ces routes
 * @note on utilise le store pour vérifier le role de l'utilisateur sans faire un nouvel appel api, le loader est rapide et efficace
 * @note en cas d'erreur (pas admin ou pas connecté), on affiche un toast d'erreur avant de rediriger
 */
export default async function adminAuthLoader(): Promise<MeResponse> {
  const user = useAuthStore.getState().user;
  console.log(user);

  if (!user || user.role !== "admin") {
    toast("Tu n'es pas autorisé petit", {
      duration: 5000,
      position: "top-right",
      icon: React.createElement(CircleXIcon)
    });
    throw redirect(PATHS_MAPPING.HOME);
  }

  return user;
}
