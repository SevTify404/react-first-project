import type {Sidebaritem} from "@/types/sidebar.ts";
import {HugeiconsIcon} from "@hugeicons/react";
import {
    DashboardSquare03Icon,
    PackageIcon,
    ShoppingBag02Icon,
    TransactionHistoryIcon,
    UserGroup03Icon
} from "@hugeicons/core-free-icons";
import {FULL_ADMIN_ROUTES_MAPPING} from "@/routing/paths-mapping.ts";
import {Settings} from "lucide-react";

export const sidebarItems: Sidebaritem[] = [
    {
        title: "Dashboard",
        icon: <HugeiconsIcon icon={DashboardSquare03Icon} strokeWidth={2}/>,
        url: FULL_ADMIN_ROUTES_MAPPING.DASHBOARD
    },
    {
        title: "Produits",
        icon: <HugeiconsIcon icon={PackageIcon} strokeWidth={2}/>,
        url: FULL_ADMIN_ROUTES_MAPPING.PRODUCTS
    },
    {
        title: "Commandes",
        icon: <HugeiconsIcon icon={ShoppingBag02Icon} strokeWidth={2}/>,
        url: FULL_ADMIN_ROUTES_MAPPING.ORDERS
    },
    {
        title: "Clients",
        icon: <HugeiconsIcon icon={UserGroup03Icon} strokeWidth={2}/>,
        url: FULL_ADMIN_ROUTES_MAPPING.CUSTOMERS
    },
    {
        title: "Logs",
        icon: <HugeiconsIcon icon={TransactionHistoryIcon} strokeWidth={2}/>,
        url: FULL_ADMIN_ROUTES_MAPPING.LOGS
    },
]
export const parametreItem: Sidebaritem = {
    title: "Paramètres",
    icon: <Settings/>,
    url: FULL_ADMIN_ROUTES_MAPPING.SETTINGS
}