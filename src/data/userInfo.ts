import type {InfoScope} from "@/types/userInfoTypes.ts";
import type {MeResponse} from "@/types/schemas/authSchemas.ts";
import {
    Briefcase,
    Building,
    Building2,
    CalendarDays,
    Coins,
    CreditCard,
    House,
    Info,
    Mail,
    MapPin,
    Phone,
    User,
    Wallet
} from "lucide-react";

export const displayedInfo: Record<string, InfoScope> = {
    PROFILE: {
        title: "Profile",
        items: [
            {
                title: "Informations Personnelles",
                items: [
                    {
                        title: "Nom Complet",
                        content: (userInfos: MeResponse) => userInfos ? `${userInfos.firstName} ${userInfos.lastName}` : "Non renseigné",
                        icon: User
                    },
                    {
                        title: "Nom d'utilisateur",
                        content: (userInfos: MeResponse) => userInfos?.username || "Non renseigné",
                        icon: Info
                    }
                ]
            },
            {
                title: "Contacts Détails",
                items: [
                    {
                        title: "Email",
                        content: (userInfos: MeResponse) => userInfos?.email || "Non renseigné",
                        icon: Mail
                    },
                    {
                        title: "Numéro de téléphone",
                        content: (userInfos: MeResponse) => userInfos?.phone || "Non renseigné",
                        icon: Phone
                    }
                ]
            }
        ]
    },
    WORK: {
        title: "Work",
        items: [
            {
                title: "Infos Travail",
                items: [
                    {
                        title: "Poste",
                        icon: Briefcase,
                        content: (userInfos: MeResponse) => userInfos?.company?.title || "Non renseigné"
                    },
                    {
                        title: "Département",
                        icon: Building,
                        content: (userInfos: MeResponse) => userInfos?.company?.department || "Non renseigné"
                    },
                    {
                        title: "Entreprise",
                        icon: Building2,
                        content: (userInfos: MeResponse) => userInfos?.company?.name || "Non renseigné"
                    },
                ]
            },
            {
                title: "Localisation",
                items: [
                    {
                        title: "Ville",
                        content: (userInfos: MeResponse) => userInfos?.address?.city || "Non renseigné",
                        icon: MapPin
                    },
                    {
                        title: "Adresse",
                        content: (userInfos: MeResponse) => userInfos?.address?.address || "Non renseigné",
                        icon: House
                    },
                    {
                        title: "État",
                        content: (userInfos: MeResponse) => userInfos?.address?.state || "Non renseigné",
                        icon: MapPin
                    }
                ]
            }
        ]
    },
    BILLING: {
        title: "Billing",
        items: [
            {
                title: "Carte & Paiement",
                items: [
                    {
                        title: "Numéro de carte",
                        content: (userInfos: MeResponse) => userInfos?.bank?.cardNumber || "Non renseigné",
                        icon: CreditCard
                    },
                    {
                        title: "Type de carte",
                        content: (userInfos: MeResponse) => userInfos?.bank?.cardType || "Non renseigné",
                        icon: Wallet
                    },
                    {
                        title: "Expiration",
                        content: (userInfos: MeResponse) => userInfos?.bank?.cardExpire || "Non renseigné",
                        icon: CalendarDays
                    }
                ]
            },
            {
                title: "Compte Bancaire",
                items: [
                    {
                        title: "IBAN",
                        content: (userInfos: MeResponse) => userInfos?.bank?.iban || "Non renseigné",
                        icon: Wallet
                    },
                    {
                        title: "Devise",
                        content: (userInfos: MeResponse) => userInfos?.bank?.currency || "Non renseigné",
                        icon: Coins
                    }
                ]
            }
        ]
    }
}