import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {LogOut} from "lucide-react";
import {useNavigate} from "react-router";
import {PATHS_MAPPING} from "@/routing/paths-mapping.ts";
import toast from "react-hot-toast";
import {HugeiconsIcon} from "@hugeicons/react";
import {CheckmarkCircle02Icon} from "@hugeicons/core-free-icons";
import {useAuthStore} from "@/stores/authStore.ts";

/**
 * Composant de dialogue d'alerte pour la déconnexion de l'utilisateur.
 * Affiche une confirmation avant de procéder à la déconnexion.
 * @param buttonFullWidth - Si true, le bouton de déclenchement prendra toute la largeur disponible.
 * @returns Un composant React pour le dialogue d'alerte de déconnexion.
 * @note Utilise le store d'authentification pour gérer la déconnexion et rediriger l'utilisateur vers la page d'accueil après la déconnexion.
 * @note Affiche un toast de confirmation après une déconnexion réussie.
 */
function DisconnectAlertDialog({buttonFullWidth}: Readonly<{ buttonFullWidth?: boolean }>) {
    const {clearAuth} = useAuthStore();
    const navigate = useNavigate();

    const handleDisconnet = () => {
        clearAuth();
        navigate(PATHS_MAPPING.HOME);
        toast('Déconnexion réussie', {
            duration: 1500,
            position: 'top-right',
            icon: <HugeiconsIcon icon={CheckmarkCircle02Icon}/>,
        });
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive" className={`${buttonFullWidth ? "w-full" : ""}`}>
                    <LogOut/>
                    Se Déconnecter
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogMedia
                        className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                        <LogOut/>
                    </AlertDialogMedia>
                    <AlertDialogTitle>Se déconnecter ?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Êtes-vous sûr de vouloir vous déconnecter ?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel variant="outline">Annuler</AlertDialogCancel>
                    <AlertDialogAction variant="destructive" onClick={handleDisconnet}>
                        Se déconnecter
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DisconnectAlertDialog;